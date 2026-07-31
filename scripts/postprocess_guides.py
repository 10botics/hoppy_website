"""Add print navigation to the generated Hoppy guide PDFs."""

from __future__ import annotations

import argparse
import os
import re
from pathlib import Path

import fitz


GUIDE_NAMES = (
    "hoppy-student-guide-en.pdf",
    "hoppy-student-guide-tc.pdf",
    "hoppy-teacher-guide-en.pdf",
    "hoppy-teacher-guide-tc.pdf",
)

INK = (0.063, 0.157, 0.247)
MUTED = (0.333, 0.439, 0.514)


def contents_item_rect(contents_page: fitz.Page, chapter_number: int) -> fitz.Rect:
    number_hits = [
        rect
        for rect in contents_page.search_for(str(chapter_number))
        if rect.x0 < 100 and rect.y0 > 130
    ]
    if not number_hits:
        raise RuntimeError(f"Could not locate contents row for chapter {chapter_number}")

    number_rect = number_hits[0]
    row_height = 56.7
    y0 = ((number_rect.y0 + number_rect.y1) / 2) - (row_height / 2)
    return fitz.Rect(48.2, y0, 546.8, y0 + row_height)


def chapter_destinations(document: fitz.Document, traditional_chinese: bool) -> dict[int, int]:
    marker = re.compile(r"(?m)^第\s*(\d+)\s*章\s*$" if traditional_chinese else r"(?m)^CHAPTER\s+(\d+)\s*$")
    destinations: dict[int, int] = {}
    for page_index in range(2, document.page_count):
        match = marker.search(document[page_index].get_text("text"))
        if match:
            destinations[int(match.group(1))] = page_index
    return destinations


def contents_title(contents_page: fitz.Page, chapter_number: int) -> str:
    lines = [
        line.strip()
        for line in contents_page.get_textbox(
            contents_item_rect(contents_page, chapter_number)
        ).splitlines()
        if line.strip()
    ]
    if lines and lines[0] == str(chapter_number):
        lines.pop(0)
    if lines and ("topics" in lines[-1] or "主題" in lines[-1]):
        lines.pop()
    return " ".join(lines)


def add_contents_navigation(
    document: fitz.Document,
    destinations: dict[int, int],
) -> list[list[object]]:
    contents_page = document[1]
    outline: list[list[object]] = []

    for chapter_number, destination_index in sorted(destinations.items()):
        item_rect = contents_item_rect(contents_page, chapter_number)
        title = contents_title(contents_page, chapter_number)
        contents_page.insert_link(
            {
                "kind": fitz.LINK_GOTO,
                "from": item_rect,
                "page": destination_index,
                "to": fitz.Point(0, 0),
            }
        )
        outline.append([1, f"{chapter_number}. {title}", destination_index + 1])

    return outline


def add_contents_page_references(
    document: fitz.Document,
    destinations: dict[int, int],
) -> None:
    contents_page = document[1]
    for chapter_number, destination_index in sorted(destinations.items()):
        item_rect = contents_item_rect(contents_page, chapter_number)
        page_reference_rect = fitz.Rect(
            item_rect.x1 - 62,
            item_rect.y0 + 18,
            item_rect.x1 - 12,
            item_rect.y0 + 40,
        )
        result = contents_page.insert_textbox(
            page_reference_rect,
            f"p. {destination_index + 1}",
            fontname="helv",
            fontsize=8.5,
            color=INK,
            align=fitz.TEXT_ALIGN_RIGHT,
            overlay=True,
        )
        if result < 0:
            raise RuntimeError(f"Page reference for chapter {chapter_number} did not fit")


def add_printed_page_numbers(document: fitz.Document) -> None:
    for page_index in range(1, document.page_count):
        page = document[page_index]
        footer = fitz.Rect(0, page.rect.height - 27, page.rect.width, page.rect.height - 7)
        result = page.insert_textbox(
            footer,
            str(page_index + 1),
            fontname="helv",
            fontsize=8,
            color=MUTED,
            align=fitz.TEXT_ALIGN_CENTER,
            overlay=True,
        )
        if result < 0:
            raise RuntimeError(f"Printed page number {page_index + 1} did not fit")


def process_pdf(pdf_path: Path) -> None:
    traditional_chinese = pdf_path.stem.endswith("-tc")
    document = fitz.open(pdf_path)
    destinations = chapter_destinations(document, traditional_chinese)
    expected_chapters = 6 if "student" in pdf_path.name else 9
    if len(destinations) != expected_chapters:
        raise RuntimeError(
            f"{pdf_path.name}: found {len(destinations)} chapter starts; expected {expected_chapters}"
        )

    outline = add_contents_navigation(document, destinations)
    document.set_toc(outline)
    document.set_pagemode("UseOutlines")
    add_contents_page_references(document, destinations)
    add_printed_page_numbers(document)

    metadata = document.metadata
    metadata["subject"] = "Hoppy guide with linked contents and chapter bookmarks"
    document.set_metadata(metadata)

    temporary_path = pdf_path.with_suffix(".navigation.pdf")
    document.save(temporary_path, garbage=4, deflate=True)
    document.close()
    os.replace(temporary_path, pdf_path)

    print(
        f"{pdf_path.name}: {expected_chapters} bookmarks, "
        f"{expected_chapters} contents links, {fitz.open(pdf_path).page_count - 1} printed page numbers"
    )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--directory",
        type=Path,
        default=Path("public/downloads/guides"),
        help="Directory containing the four generated guide PDFs.",
    )
    args = parser.parse_args()

    for name in GUIDE_NAMES:
        process_pdf(args.directory / name)


if __name__ == "__main__":
    main()
