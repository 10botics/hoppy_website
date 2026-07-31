import type { GuideChapter, GuideSection } from './teacherGuide';
import { teacherGuideChapterMapTc } from './teacherGuideTc';

export const studentGuideChaptersTc: GuideChapter[] = [
  {
    number: 1,
    slug: 'chapter-1',
    title: '在「探索」選擇主題並建立練習',
    summary: '在「探索」選擇年級、科目和學習單元，建立個人練習。',
    sections: [
      {
        number: '1.1',
        title: '選擇年級',
        steps: ['開啟「探索」。', '選擇年級。'],
      },
      {
        number: '1.2',
        title: '選擇科目和學習單元',
        paragraphs: ['Hoppy 將科目內的課程主題稱為「學習單元」。'],
        steps: ['選擇科目。', '選擇練習所需的學習單元。', '選擇「建立練習」。'],
        note: {
          title: '選擇上限',
          text: '每份練習最多可選擇五個學習單元。',
        },
      },
      {
        number: '1.3',
        title: '以「度身訂造」生成題目',
        steps: [
          '設定預計作答時間。',
          '選擇題目數量。',
          '選擇「度身訂造」。',
          '向下捲動並選擇解釋語言。',
          '選擇「確認」。',
        ],
        note: {
          title: '另一個選項',
          text: '「現有題庫」會為支援的學習單元選用合適的現有題目。',
        },
      },
      {
        number: '1.4',
        title: '檢查已生成的練習',
        steps: [
          '檢查練習標題、年級、科目、題目數量和時間。',
          '檢查練習說明和相關學習單元。',
        ],
      },
    ],
    completion: '你已按課程主題建立個人練習。',
    next: 'chapter-2',
  },
  {
    number: 2,
    slug: 'chapter-2',
    title: '使用「建立」將構思或材料變成練習',
    summary: '將構思或參考材料轉化為切合學習需要的個人練習。',
    sections: [
      {
        number: '2.1',
        title: '輸入練習說明',
        steps: [
          '開啟「建立」。',
          '輸入這次練習的說明。你可以包括科目、年級、學習單元或特定重點。',
          '選擇箭嘴繼續。',
        ],
      },
      {
        number: '2.2',
        title: '加入參考材料（可選）',
        steps: [
          '選擇加號（+）按鈕。',
          '選擇「添加圖片」、「添加文件」或「拍攝多張照片」。',
          '加入希望 Hoppy 使用的參考材料。',
          '選擇箭嘴繼續。',
        ],
        note: {
          title: '保障資料及使用權限',
          text: '請勿上載個人資料或你沒有權限使用的教材。',
        },
      },
      {
        number: '2.3',
        title: '確認練習資料',
        steps: [
          '檢查系統辨識的科目、年級和語言。',
          '更正任何不符合你需要的選項。',
          '選擇「確認」。',
        ],
      },
      {
        number: '2.4',
        title: '選擇學習單元',
        steps: ['選擇至少一個相關的學習單元。', '選擇「確認」。'],
      },
      {
        number: '2.5',
        title: '選擇練習設定',
        steps: ['設定預計作答時間。', '選擇題目數量。', '選擇「度身訂造」。', '選擇「確認」。'],
      },
      {
        number: '2.6',
        title: '檢查已生成的練習',
        steps: [
          '檢查練習標題、年級、科目、題目數量和時間。',
          '檢查練習說明和相關學習單元。',
        ],
      },
    ],
    completion: '你已按構思或參考材料建立個人練習。',
    previous: 'chapter-1',
    next: 'chapter-3',
  },
  {
    number: 3,
    slug: 'chapter-3',
    title: '完成練習並檢查結果',
    summary: '完成練習、閱讀即時回饋，並重溫你的作答。',
    sections: [
      {
        number: '3.1',
        title: '開啟練習',
        paragraphs: [
          '你可以開啟自己建立的練習、透過「探索」或搜尋尋找練習，亦可使用分享連結或二維碼開啟練習。',
        ],
        steps: ['開啟「練習資訊」頁面。', '檢查主題、題目數量和時間。', '選擇「開始」。'],
      },
      {
        number: '3.2',
        title: '回答題目',
        steps: ['選擇答案。', '選擇「提交」。', '準備好後選擇「下一題」。'],
        note: {
          title: 'XP 獎勵',
          text: '完成練習後，每答對一題可獲得 1 XP。',
        },
      },
      {
        number: '3.3',
        title: '閱讀回饋和解釋',
        steps: [
          '提交答案後閱讀回饋。',
          '如有提供，選擇「查看解釋」。',
          '繼續前先了解答案正確的原因。',
        ],
      },
      {
        number: '3.4',
        title: '完成練習並重溫作答',
        steps: [
          '回答最後一題後選擇「完成練習」。',
          '查看結果摘要。',
          '開啟作答記錄，重溫題目、你的答案和解釋。',
          '你亦可稍後返回練習，開啟較早的作答記錄。',
        ],
      },
      {
        number: '3.5',
        title: '舉報問題',
        steps: ['開啟要舉報的題目。', '選擇「舉報」。', '選擇最符合問題的原因並提交。'],
      },
    ],
    completion: '你已完成練習，並重溫從中學到的內容。',
    previous: 'chapter-2',
    next: 'chapter-4',
  },
  {
    number: 4,
    slug: 'chapter-4',
    title: '加入課室並尋找功課',
    summary: '加入教師的課室，並開啟教師指派的功課。',
    sections: [
      {
        number: '4.1',
        title: '使用課室代碼加入',
        steps: ['開啟「我的課室」。', '選擇「加入課室」。', '輸入教師提供的六位字元課室代碼。', '選擇「加入」。'],
      },
      {
        number: '4.2',
        title: '使用課室連結或二維碼加入',
        steps: [
          '開啟教師提供的課室連結，或掃描課室二維碼。',
          '在 Hoppy 開啟課室。',
          '選擇「加入」。',
        ],
      },
      {
        number: '4.3',
        title: '開啟課室功課',
        steps: ['從底部導覽列選擇「課室」。', '選擇課室。', '開啟「功課」分頁。'],
      },
      {
        number: '4.4',
        title: '開啟功課',
        steps: ['尋找教師指派的功課。', '選擇功課，查看練習、備註、發佈和截止時間。'],
      },
    ],
    completion: '你已加入課室並開啟功課。',
    previous: 'chapter-3',
    next: 'chapter-5',
  },
  {
    number: 5,
    slug: 'chapter-5',
    title: '完成功課並檢查結果',
    summary: '完成課室功課、檢查狀態，並重溫自己的結果。',
    sections: [
      {
        number: '5.1',
        title: '檢查發佈和截止時間',
        bullets: ['「發佈日期與時間」表示功課何時可供開啟。', '「截止日期與時間」表示應在何時之前完成功課。'],
      },
      {
        number: '5.2',
        title: '開始功課',
        steps: ['在發佈時間後開啟功課。', '閱讀功課名稱和教師的備註。', '選擇「開始」。'],
      },
      {
        number: '5.3',
        title: '完成並提交功課',
        steps: ['回答每一道題目並閱讀回饋。', '回答最後一題後選擇「完成練習」。', '依照結果畫面完結作答。'],
      },
      {
        number: '5.4',
        title: '重溫作答和學習單元結果',
        steps: [
          '開啟已完成的功課。',
          '查看分數和完成資料。',
          '開啟「查看作答」重溫答案。',
          '如有提供，查看學習單元結果。',
        ],
      },
      {
        number: '5.5',
        title: '檢查功課狀態',
        bullets: [
          '「未開始」表示功課尚未完成。',
          '「準時完成」表示已在截止時間前完成。',
          '「遲交」表示在截止時間後完成。',
          '「逾期」表示截止時間已過而功課仍未完成。',
        ],
      },
    ],
    completion: '你已完成功課並檢查結果。',
    previous: 'chapter-4',
    next: 'chapter-6',
  },
  {
    number: 6,
    slug: 'chapter-6',
    title: '建立跟進練習',
    summary: '根據已完成的結果生成跟進練習並完成練習。',
    sections: [
      {
        number: '6.1',
        title: '生成跟進練習',
        steps: [
          '開啟已完成的功課。',
          '在「功課資訊」底部選擇「生成相似練習」。',
          '選擇「強化弱項」或「所有範疇」。',
          '選擇「較簡單」、「相同」或「較困難」。',
          '設定題目數量和時間限制。',
          '選擇「確認」。',
          '等待生成完成；Hoppy 會自動開啟跟進練習。',
        ],
        note: {
          title: '選擇出題方向',
          text: '「強化弱項」會優先練習功課結果中較弱的學習單元；「所有範疇」會涵蓋功課內各學習單元。使用「較簡單」重建信心、「相同」鞏固學習，或「較困難」作延伸練習。',
        },
      },
      {
        number: '6.2',
        title: '完成跟進練習',
        steps: ['開啟已生成的練習。', '完成題目並閱讀解釋。', '查看新結果和自己有進步的地方。'],
      },
    ],
    completion: '你已根據自己的結果完成跟進練習。',
    previous: 'chapter-5',
    next: 'chapter-7',
  },
  {
    number: 7,
    slug: 'chapter-7',
    title: '安全及負責任地使用 Hoppy',
    summary: '保障個人資料，並小心使用由系統生成的學習內容。',
    sections: [
      {
        number: '7.1',
        title: '保障個人資料',
        bullets: [
          '請勿在練習說明輸入自己或他人的私人資料。',
          '請勿上載包含個人資料的文件或相片。',
          '不確定資料是否適合分享時，請詢問教師或可信任的成年人。',
        ],
      },
      {
        number: '7.2',
        title: '只使用合適的學習材料',
        bullets: ['只使用獲准使用的筆記和學習材料。', '未經允許，請勿上載他人的作品。'],
      },
      {
        number: '7.3',
        title: '檢查 AI 生成的答案和解釋',
        paragraphs: ['Hoppy 可以使用 AI 生成題目和解釋，但 AI 生成的內容可能有錯誤。'],
        bullets: [
          '如答案令人懷疑，請對照筆記或其他可靠資料。',
          '如答案或解釋看來不正確，請詢問教師。',
          '使用「舉報」通知 Hoppy 題目有問題。',
        ],
      },
      {
        number: '7.4',
        title: '不確定時詢問教師或成年人',
        paragraphs: ['遇到不合適的材料、不清楚的指示、帳戶存取問題或令你不安的情況時，請向教師或可信任的成年人求助。'],
      },
    ],
    completion: '你知道如何更安全地使用 Hoppy，以及何時應該求助。',
    previous: 'chapter-6',
    next: 'chapter-8',
  },
  {
    number: 8,
    slug: 'chapter-8',
    title: '解決常見問題並取得協助',
    summary: '聯絡支援前，先檢查常見的練習、課室和功課問題。',
    sections: [
      {
        number: '8.1',
        title: '尋找缺少的科目或學習單元',
        bullets: ['檢查所選年級。', '檢查所選科目並瀏覽其學習單元。', '詢問教師應使用哪個年級、科目或學習單元。'],
      },
      {
        number: '8.2',
        title: '看不到功課',
        bullets: ['檢查你是否已加入教師的課室。', '檢查功課是否已到發佈時間。', '重新整理課室功課清單。'],
      },
      {
        number: '8.3',
        title: '無法開啟或完成練習',
        bullets: ['檢查網絡連線後再試。', '關閉並重新開啟練習。', '詢問教師功課是否仍然可供完成。'],
      },
      {
        number: '8.4',
        title: '舉報題目問題',
        paragraphs: ['開啟題目，選擇「舉報」，選擇原因，然後提交舉報。'],
      },
      {
        number: '8.5',
        title: '聯絡 Hoppy 支援',
        paragraphs: ['如需更多答案，請開啟 Hoppy 常見問題。如存取或技術問題持續，請電郵至 hi@hoppy.day。'],
      },
    ],
    completion: '你知道遇到問題時應從哪裡開始。',
    previous: 'chapter-7',
  },
];

function section(chapterNumber: number, sectionNumber: string): GuideSection {
  const chapter = studentGuideChaptersTc.find((item) => item.number === chapterNumber);
  const result = chapter?.sections.find((item) => item.number === sectionNumber);
  if (!result) throw new Error(`Missing Traditional Chinese student guide section ${sectionNumber}`);
  return result;
}

function teacherSection(chapterNumber: number, sectionNumber: string): GuideSection {
  const chapter = teacherGuideChapterMapTc.get(`chapter-${chapterNumber}`);
  const result = chapter?.sections.find((item) => item.number === sectionNumber);
  if (!result) throw new Error(`Missing Traditional Chinese teacher guide section ${sectionNumber}`);
  return result;
}

for (const sectionNumber of ['1.1', '1.2', '1.3', '1.4']) {
  const source = teacherSection(1, sectionNumber);
  Object.assign(section(1, sectionNumber), {
    screenshot: source.screenshot,
    additionalScreenshots: source.additionalScreenshots,
  });
}

for (const sectionNumber of ['2.1', '2.2', '2.3', '2.4', '2.5', '2.6']) {
  const source = teacherSection(2, sectionNumber);
  Object.assign(section(2, sectionNumber), {
    screenshot: source.screenshot,
    additionalScreenshots: source.additionalScreenshots,
  });
}

const teacherQuizAttempt = teacherSection(3, '3.1');
const quizStartScreenshot = teacherQuizAttempt.screenshot;
section(3, '3.1').screenshot =
  quizStartScreenshot && typeof quizStartScreenshot !== 'string'
    ? {
        ...quizStartScreenshot,
        caption: '選擇「開始」進行練習。',
        highlights: undefined,
      }
    : quizStartScreenshot;
section(3, '3.2').screenshot = teacherQuizAttempt.additionalScreenshots?.[0];
section(3, '3.2').additionalScreenshots = [
  {
    src: '/images/student-guide-tc/chapter-3/xp-award.png',
    alt: 'Hoppy 練習完成獎勵畫面，顯示獲得 10 經驗值。',
    caption: '完成練習後，Hoppy 會按答對題目數量，每題給予 1 XP。',
  },
];
section(3, '3.3').screenshot = teacherQuizAttempt.additionalScreenshots?.[1];
section(3, '3.4').screenshot = {
  src: '/images/student-guide-tc/chapter-3/attempt-history.png',
  alt: 'Hoppy「我的嘗試」頁面，顯示已完成練習的分數、作答時間和完成日期。',
  caption: '選擇「查看所有嘗試」，重溫較早的分數和完成時間。',
};

const teacherReport = teacherSection(3, '3.4');
section(3, '3.5').screenshot = teacherReport.screenshot;
section(3, '3.5').additionalScreenshots = teacherReport.additionalScreenshots?.map((screenshot) => ({
  ...screenshot,
  highlights: undefined,
}));

section(4, '4.1').screenshot = {
  src: '/images/student-guide-tc/chapter-4/join-classroom.png',
  alt: 'Hoppy「我的課室」頁面，已開啟加入課室的代碼輸入視窗。',
  caption: '輸入六位字元課室代碼，然後選擇「加入」。',
};

section(4, '4.2').screenshot = {
  src: '/images/teacher-guide-tc/chapter-4/invite-students-link.jpeg',
  alt: 'Hoppy 課室分享視窗，已選擇「連結」分頁，並顯示分享或複製邀請連結的選項。',
  caption: '教師可以課室邀請連結的方式邀請你加入。',
};
section(4, '4.2').additionalScreenshots = [
  {
    src: '/images/teacher-guide-tc/chapter-4/invite-students.png',
    alt: 'Hoppy 課室分享視窗，已選擇「二維碼」分頁。',
    caption: '教師也可以提供課室二維碼，讓你掃描加入。',
  },
  {
    src: '/images/student-guide-tc/chapter-4/join-from-link.jpeg',
    alt: '透過課室連結開啟的 Hoppy「課室資訊」頁面，並顯示「加入」按鈕。',
    caption: '在 Hoppy 開啟課室後，選擇「加入」。紅框標示該按鈕。',
    highlights: [
      { label: '加入', left: 51, top: 49, width: 42.7, height: 5.2 },
    ],
  },
];

section(4, '4.3').screenshot = {
  src: '/images/student-guide-tc/chapter-4/open-classroom.png',
  alt: '目前學生帳戶的 Hoppy「我的課室」頁面，底部導覽列已選擇「課室」。',
  caption: '從底部導覽列選擇「課室」。紅框標示該分頁。',
  highlights: [
    { label: '課室', left: 59.8, top: 91.1, width: 13.8, height: 6.1 },
  ],
};
section(4, '4.3').additionalScreenshots = [
  {
    src: '/images/student-guide-tc/chapter-4/classroom-info.png',
    alt: 'Hoppy「課室資訊」頁面，顯示課室資料和已完整載入的排行榜。',
    caption: '選擇課室，開啟課室資訊頁面。',
  },
  {
    src: '/images/student-guide-tc/chapter-4/classroom-assignments.png',
    alt: '課室的「功課」分頁，顯示一份狀態為「未開始」的功課。',
    caption: '開啟「功課」分頁，然後選擇功課卡。紅框標示這兩個位置。',
    highlights: [
      { label: '功課', left: 46.3, top: 11.8, width: 12.7, height: 5 },
      { label: '功課卡', left: 3.8, top: 18.4, width: 92.4, height: 18 },
    ],
  },
];

section(4, '4.4').screenshot = {
  src: '/images/student-guide-tc/chapter-4/assignment-info.png',
  alt: 'Hoppy「功課資訊」頁面，顯示指派者、課室、發佈時間、截止時間、進度和「開始」按鈕。',
  caption: '紅框標示功課的發佈時間和截止時間。',
  highlights: [
    { label: '發佈時間', left: 3.7, top: 43.3, width: 47.9, height: 5.6 },
    { label: '截止時間', left: 3.7, top: 49.8, width: 47.9, height: 5.6 },
  ],
};

section(5, '5.1').screenshot = {
  src: '/images/student-guide-tc/chapter-4/assignment-info.png',
  alt: 'Hoppy「功課資訊」頁面，紅框標示發佈時間和截止時間。',
  caption: '檢查功課的發佈時間和截止時間。紅框標示這兩個位置。',
  highlights: [
    { label: '發佈時間', left: 3.7, top: 43.3, width: 47.9, height: 5.6 },
    { label: '截止時間', left: 3.7, top: 49.8, width: 47.9, height: 5.6 },
  ],
};

section(5, '5.2').screenshot = {
  src: '/images/student-guide-tc/chapter-4/assignment-info.png',
  alt: 'Hoppy「功課資訊」頁面，功課資料下方顯示「開始」按鈕。',
  caption: '閱讀教師的備註，然後選擇「開始」。紅框標示這兩個位置。',
  highlights: [
    { label: '備註', left: 4.8, top: 56.4, width: 82.1, height: 8.1 },
    { label: '開始', left: 3.8, top: 76.8, width: 92.4, height: 6.4 },
  ],
};

const studentAttemptReview = teacherSection(5, '5.4').additionalScreenshots?.[0];
if (studentAttemptReview) {
  section(5, '5.4').screenshot = {
    ...studentAttemptReview,
    highlights: undefined,
  };
}
section(5, '5.5').screenshot = {
  src: '/images/student-guide-tc/chapter-5/assignment-progress.png',
  alt: 'Hoppy「功課資訊」頁面，顯示準時完成、最佳分數、完成時間和學習單元結果。',
  caption: '功課頁面會記錄完成狀態、最佳分數、完成時間和學習單元結果。',
};

const teacherFollowUp = teacherSection(6, '6.1');
const followUpEntryScreenshot = teacherFollowUp.screenshot;
section(6, '6.1').screenshot =
  followUpEntryScreenshot && typeof followUpEntryScreenshot !== 'string'
    ? {
        ...followUpEntryScreenshot,
        highlights: undefined,
      }
    : followUpEntryScreenshot;
section(6, '6.1').additionalScreenshots = teacherFollowUp.additionalScreenshots;

const followUpAttemptScreenshot = section(3, '3.2').screenshot;
const followUpResultScreenshot = section(3, '3.3').screenshot;
if (followUpAttemptScreenshot && typeof followUpAttemptScreenshot !== 'string') {
  section(6, '6.2').screenshot = {
    ...followUpAttemptScreenshot,
    caption: '跟平日的 Hoppy 練習一樣，完成已生成的跟進練習。',
    highlights: undefined,
  };
}
if (followUpResultScreenshot && typeof followUpResultScreenshot !== 'string') {
  section(6, '6.2').additionalScreenshots = [
    {
      ...followUpResultScreenshot,
      caption: '查看結果和解釋，了解自己有進步的地方。',
      highlights: undefined,
    },
  ];
}

section(7, '7.3').screenshot = teacherQuizAttempt.additionalScreenshots?.[1];
section(7, '7.3').additionalScreenshots = [
  teacherReport.screenshot,
  ...(teacherReport.additionalScreenshots?.map((screenshot) => ({
    ...screenshot,
    highlights: undefined,
  })) ?? []),
].filter((image) => image !== undefined);

section(8, '8.1').screenshot = teacherSection(1, '1.2').screenshot;
section(8, '8.4').screenshot = teacherReport.screenshot;
section(8, '8.4').additionalScreenshots = teacherReport.additionalScreenshots?.map((screenshot) => ({
  ...screenshot,
  highlights: undefined,
}));

export const studentGuideChapterMapTc = new Map(
  studentGuideChaptersTc.map((chapter) => [chapter.slug, chapter]),
);

export const publishedStudentGuideChaptersTc = studentGuideChaptersTc;

export const publishedStudentGuideSlugsTc = new Set(
  publishedStudentGuideChaptersTc.map((chapter) => chapter.slug),
);
