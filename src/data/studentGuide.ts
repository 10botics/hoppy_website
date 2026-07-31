import {
  teacherGuideChapterMap,
  type GuideChapter,
  type GuideSection,
} from './teacherGuide';

export const studentGuideChapters: GuideChapter[] = [
  {
    number: 1,
    slug: 'chapter-1',
    title: 'Choose a Topic and Create a Practice Quiz with Explore',
    summary: 'Create personal practice by choosing a grade, subject, and learning units in Explore.',
    sections: [
      {
        number: '1.1',
        title: 'Choose the Grade Level',
        steps: [
          'Open Explore.',
          'Choose the grade level for the practice quiz.',
        ],
      },
      {
        number: '1.2',
        title: 'Choose the Subject and Learning Units',
        steps: [
          'Choose the subject.',
          'Choose up to five learning units you want to practise.',
          'Select Create Quiz.',
        ],
      },
      {
        number: '1.3',
        title: 'Generate a Practice Quiz',
        steps: [
          'Choose the expected duration and number of questions.',
          'Select Custom Made.',
          'Choose the explanation language.',
          'Select Confirm.',
        ],
        note: {
          title: 'Question Bank',
          text: 'Question Bank is another option for supported learning units. It uses suitable existing questions.',
        },
      },
      {
        number: '1.4',
        title: 'Review the Generated Quiz',
        steps: [
          'Check the quiz title, grade level, subject, number of questions, and duration.',
          'Check the description and learning units before starting.',
        ],
      },
    ],
    completion: 'You created a practice quiz from a curriculum topic.',
    next: 'chapter-2',
  },
  {
    number: 2,
    slug: 'chapter-2',
    title: 'Turn an Idea or Learning Material into a Practice Quiz',
    summary: 'Create personal practice from a description, suitable learning materials, or both.',
    sections: [
      {
        number: '2.1',
        title: 'Describe the Practice Quiz',
        steps: [
          'Open Create.',
          'Describe what you want to practise. You can include the subject, grade level, topic, or a specific difficulty.',
          'Select the arrow to continue.',
        ],
      },
      {
        number: '2.2',
        title: 'Add Learning Materials — Optional',
        steps: [
          'Select the plus button.',
          'Choose Add Images, Add Documents, or Take Photos.',
          'Add the learning materials you want Hoppy to use.',
          'Select the arrow to continue.',
        ],
        note: {
          title: 'Use suitable material',
          text: 'Do not upload personal information or material you are not permitted to use.',
        },
      },
      {
        number: '2.3',
        title: 'Confirm the Quiz Context',
        steps: [
          'Check the detected subject, grade level, and language.',
          'Correct any selection that does not match the practice you want.',
          'Select Confirm.',
        ],
      },
      {
        number: '2.4',
        title: 'Select the Learning Units',
        steps: [
          'Select at least one matching learning unit.',
          'Select Confirm.',
        ],
      },
      {
        number: '2.5',
        title: 'Choose the Quiz Settings',
        steps: [
          'Choose the expected duration and number of questions.',
          'Select Custom Made.',
          'Select Confirm.',
        ],
      },
      {
        number: '2.6',
        title: 'Review the Generated Quiz',
        steps: [
          'Check the quiz title, grade level, subject, number of questions, and duration.',
          'Check the description and learning units before starting.',
        ],
      },
    ],
    completion: 'You created personal practice from an idea or learning material.',
    previous: 'chapter-1',
    next: 'chapter-3',
  },
  {
    number: 3,
    slug: 'chapter-3',
    title: 'Take a Quiz and Review Your Results',
    summary: 'Complete a quiz, learn from its feedback, and review your attempt.',
    sections: [
      {
        number: '3.1',
        title: 'Open a Quiz',
        paragraphs: [
          'You can open a quiz you created, find one through Explore or search, or open a quiz shared by link or QR code.',
        ],
        steps: [
          'Open the quiz information page.',
          'Check the topic, number of questions, and expected duration.',
          'Select Start.',
        ],
      },
      {
        number: '3.2',
        title: 'Answer the Questions',
        steps: [
          'Choose an answer.',
          'Select Submit.',
          'Select Next when you are ready to continue.',
        ],
        note: {
          title: 'XP rewards',
          text: 'After you finish the quiz, you receive 1 XP for each correct answer.',
        },
      },
      {
        number: '3.3',
        title: 'Read the Feedback and Explanations',
        steps: [
          'Read the feedback after submitting an answer.',
          'Select Show explanation where it is available.',
          'Check why the answer is correct before continuing.',
        ],
      },
      {
        number: '3.4',
        title: 'Finish the Quiz and Review Your Attempt',
        steps: [
          'Select Finish Quiz after the last question.',
          'Review the result summary.',
          'Open your attempt to review the questions, your answers, and the explanations.',
          'You can return to the quiz later to open an earlier attempt.',
        ],
      },
      {
        number: '3.5',
        title: 'Report a Problem',
        steps: [
          'Open the question you want to report.',
          'Select Report.',
          'Choose the reason that best describes the problem and submit it.',
        ],
      },
    ],
    completion: 'You completed a quiz and reviewed what you learned from it.',
    previous: 'chapter-2',
    next: 'chapter-4',
  },
  {
    number: 4,
    slug: 'chapter-4',
    title: 'Join a Classroom and Find an Assignment',
    summary: 'Join your teacher’s classroom and open the work they assigned.',
    sections: [
      {
        number: '4.1',
        title: 'Join with a Classroom Code',
        steps: [
          'Open Classroom.',
          'Select Join Classroom.',
          'Enter the six-character code from your teacher.',
          'Select Join.',
        ],
      },
      {
        number: '4.2',
        title: 'Join with an Invitation Link or QR Code',
        steps: [
          'Open the classroom link from your teacher, or scan the classroom QR code.',
          'Open the classroom in Hoppy.',
          'Select Join.',
        ],
      },
      {
        number: '4.3',
        title: 'Open Classroom Assignments',
        steps: [
          'Select Classroom from the bottom navigation.',
          'Choose the classroom.',
          'Open the Assignments tab.',
        ],
      },
      {
        number: '4.4',
        title: 'Open an Assignment',
        steps: [
          'Find the assignment from your teacher.',
          'Select it to view its quiz, notes, publication time, and due time.',
        ],
      },
    ],
    completion: 'You joined a classroom and opened an assignment.',
    previous: 'chapter-3',
    next: 'chapter-5',
  },
  {
    number: 5,
    slug: 'chapter-5',
    title: 'Complete an Assignment and Review Your Result',
    summary: 'Finish classroom work, check its status, and review your own result.',
    sections: [
      {
        number: '5.1',
        title: 'Check the Publication and Due Times',
        bullets: [
          'The publication time tells you when the assignment becomes available.',
          'The due time tells you when the assignment should be completed.',
        ],
      },
      {
        number: '5.2',
        title: 'Start the Assignment',
        steps: [
          'Open the assignment after its publication time.',
          'Read the title and any notes from your teacher.',
          'Select Start.',
        ],
      },
      {
        number: '5.3',
        title: 'Complete and Submit the Assignment',
        steps: [
          'Answer each question and read the feedback.',
          'Select Finish Quiz after the last question.',
          'Follow the result screens to finish the attempt.',
        ],
      },
      {
        number: '5.4',
        title: 'Review Your Attempt and Learning-Unit Results',
        steps: [
          'Open the completed assignment.',
          'Review your score and completion information.',
          'Open View Attempt to review your answers.',
          'Check the learning-unit results when they are available.',
        ],
      },
      {
        number: '5.5',
        title: 'Check Your Assignment Status',
        bullets: [
          'Not Started means the assignment has not been completed.',
          'Completed On Time means it was completed by the due time.',
          'Completed Late means it was completed after the due time.',
          'Overdue means the due time has passed and it has not been completed.',
        ],
      },
    ],
    completion: 'You completed an assignment and reviewed your result.',
    previous: 'chapter-4',
    next: 'chapter-6',
  },
  {
    number: 6,
    slug: 'chapter-6',
    title: 'Create Follow-Up Practice',
    summary: 'Generate similar practice from your completed result and try it.',
    sections: [
      {
        number: '6.1',
        title: 'Generate a Similar Quiz from Your Result',
        steps: [
          'Open a completed assignment.',
          'Select Generate Similar Quiz.',
          'Choose the practice focus, difficulty, number of questions, and time limit.',
          'Select Confirm.',
        ],
        note: {
          title: 'Available after completion',
          text: 'Similar practice is available after your assignment attempt has been completed.',
        },
      },
      {
        number: '6.2',
        title: 'Complete the Similar Quiz',
        steps: [
          'Open the generated quiz.',
          'Complete the questions and read the explanations.',
          'Review the new result and compare what improved.',
        ],
      },
    ],
    completion: 'You completed follow-up practice based on your own result.',
    previous: 'chapter-5',
    next: 'chapter-7',
  },
  {
    number: 7,
    slug: 'chapter-7',
    title: 'Learn Safely and Responsibly with Hoppy',
    summary: 'Protect personal information and use generated learning content carefully.',
    sections: [
      {
        number: '7.1',
        title: 'Protect Personal Information',
        bullets: [
          'Do not enter private information about yourself or another person in a quiz description.',
          'Do not upload documents or photos containing personal information.',
          'Ask a teacher or trusted adult if you are unsure what is safe to share.',
        ],
      },
      {
        number: '7.2',
        title: 'Use Only Appropriate Learning Materials',
        bullets: [
          'Use notes and learning materials you are allowed to use.',
          'Do not upload another person’s work without permission.',
        ],
      },
      {
        number: '7.3',
        title: 'Check AI-Generated Answers and Explanations',
        paragraphs: [
          'Hoppy can generate questions and explanations with AI. AI-generated content can contain mistakes.',
        ],
        bullets: [
          'Check surprising answers against your notes or another reliable source.',
          'Ask a teacher when an answer or explanation does not seem right.',
          'Use Report to tell Hoppy about a problem with a question.',
        ],
      },
      {
        number: '7.4',
        title: 'Ask a Teacher or Adult When Unsure',
        paragraphs: [
          'Ask a teacher or trusted adult for help with unsafe material, confusing instructions, account access, or anything that makes you uncomfortable.',
        ],
      },
    ],
    completion: 'You know how to use Hoppy more safely and when to ask for help.',
    previous: 'chapter-6',
    next: 'chapter-8',
  },
  {
    number: 8,
    slug: 'chapter-8',
    title: 'Solve Common Problems and Get Help',
    summary: 'Check common quiz, classroom, and assignment problems before contacting support.',
    sections: [
      {
        number: '8.1',
        title: 'Cannot Find a Subject or Learning Unit',
        bullets: [
          'Check the selected grade level.',
          'Check the selected subject and browse its learning units.',
          'Ask your teacher which grade, subject, or learning unit to use.',
        ],
      },
      {
        number: '8.2',
        title: 'Cannot See an Assignment',
        bullets: [
          'Check that you joined the classroom from your teacher.',
          'Check whether the assignment publication time has arrived.',
          'Refresh the classroom assignments list.',
        ],
      },
      {
        number: '8.3',
        title: 'Cannot Open or Finish a Quiz',
        bullets: [
          'Check your internet connection and try again.',
          'Close and reopen the quiz.',
          'Ask your teacher whether the assignment is still available.',
        ],
      },
      {
        number: '8.4',
        title: 'Report a Problem with a Question',
        paragraphs: [
          'Open the question, select Report, choose the reason, and submit the report.',
        ],
      },
      {
        number: '8.5',
        title: 'Contact Hoppy Support',
        paragraphs: [
          'For more answers, open Hoppy FAQ. If an access or technical problem continues, email hi@hoppy.day.',
        ],
      },
    ],
    completion: 'You know where to begin when something does not work.',
    previous: 'chapter-7',
  },
];

function section(chapterNumber: number, sectionNumber: string): GuideSection {
  const chapter = studentGuideChapters.find((item) => item.number === chapterNumber);
  const result = chapter?.sections.find((item) => item.number === sectionNumber);
  if (!result) throw new Error(`Missing student guide section ${sectionNumber}`);
  return result;
}

function teacherSection(chapterNumber: number, sectionNumber: string): GuideSection {
  const chapter = teacherGuideChapterMap.get(`chapter-${chapterNumber}`);
  const result = chapter?.sections.find((item) => item.number === sectionNumber);
  if (!result) throw new Error(`Missing teacher guide section ${sectionNumber}`);
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
        caption: 'Select Start to begin the quiz.',
        highlights: undefined,
      }
    : quizStartScreenshot;
section(3, '3.2').screenshot = teacherQuizAttempt.additionalScreenshots?.[0];
section(3, '3.2').additionalScreenshots = [
  {
    src: '/images/student-guide/chapter-3/xp-award.png',
    alt: 'Hoppy quiz completion reward screen showing 7 XP earned.',
    caption: 'After the quiz is complete, Hoppy awards 1 XP for each correct answer.',
  },
];
section(3, '3.3').screenshot = teacherQuizAttempt.additionalScreenshots?.[1];
section(3, '3.4').screenshot = {
  src: '/images/student-guide/chapter-3/attempt-history.png',
  alt: 'Hoppy My Attempts page showing a completed quiz attempt, score, time, and completion date.',
  caption: 'Open View All Attempts to review your earlier scores and completion times.',
};

const teacherReport = teacherSection(3, '3.4');
section(3, '3.5').screenshot = teacherReport.screenshot;
section(3, '3.5').additionalScreenshots = teacherReport.additionalScreenshots?.map((screenshot) => ({
  ...screenshot,
  highlights: undefined,
}));

section(4, '4.1').screenshot = {
  src: '/images/student-guide/chapter-4/join-classroom.png',
  alt: 'Hoppy My Classrooms page with the Join Classroom code-entry sheet open.',
  caption: 'Enter the six-character classroom code, then select Join.',
};

section(4, '4.2').screenshot = {
  src: '/images/teacher-guide/chapter-4/invite-students-link.jpeg',
  alt: 'Hoppy classroom sharing sheet with the Link tab selected and options to share or copy the invitation link.',
  caption: 'Your teacher may send the classroom invitation as a link.',
};
section(4, '4.2').additionalScreenshots = [
  {
    src: '/images/teacher-guide/chapter-4/invite-students.png',
    alt: 'Hoppy classroom sharing sheet with the QR Code tab selected.',
    caption: 'Your teacher may also provide a classroom QR code for you to scan.',
  },
  {
    src: '/images/student-guide/chapter-4/join-from-link.jpeg',
    alt: 'Hoppy Classroom Info page opened from a classroom link, with the Join button available.',
    caption: 'When the classroom opens in Hoppy, select Join. The red outline marks the button.',
    highlights: [
      { label: 'Join', left: 51, top: 49, width: 42.7, height: 5.2 },
    ],
  },
];

section(4, '4.3').screenshot = {
  src: '/images/student-guide/chapter-4/open-classroom.png',
  alt: 'The current student account on the Hoppy My Classrooms page, with Classroom selected in the bottom navigation.',
  caption: 'Select Classroom from the bottom navigation. The red outline marks the tab.',
  highlights: [
    { label: 'Classroom', left: 59.8, top: 91.1, width: 13.8, height: 6.1 },
  ],
};
section(4, '4.3').additionalScreenshots = [
  {
    src: '/images/student-guide/chapter-4/classroom-info.png',
    alt: 'Hoppy Classroom Info showing the classroom details and a fully loaded leaderboard.',
    caption: 'Choose the classroom to open its information page.',
  },
  {
    src: '/images/student-guide/chapter-4/classroom-assignments.png',
    alt: 'A classroom Assignments tab showing an assignment with Not Started status.',
    caption: 'Open the Assignments tab, then select the assignment card. The red outlines mark both.',
    highlights: [
      { label: 'Assignments', left: 40.2, top: 11.8, width: 19.6, height: 5 },
      { label: 'Assignment', left: 3.8, top: 18.4, width: 92.4, height: 18 },
    ],
  },
];

section(4, '4.4').screenshot = {
  src: '/images/student-guide/chapter-4/assignment-info.png',
  alt: 'Hoppy Assignment Info showing the teacher, classroom, publication time, due time, progress, and Start button.',
  caption: 'The red outlines identify the publication time and due time.',
  highlights: [
    { label: 'Publication time', left: 3.7, top: 43.3, width: 41.9, height: 5.6 },
    { label: 'Due time', left: 49.2, top: 43.3, width: 41.3, height: 5.6 },
  ],
};

section(5, '5.1').screenshot = {
  src: '/images/student-guide/chapter-4/assignment-info.png',
  alt: 'Hoppy Assignment Info with the publication and due times outlined.',
  caption: 'Check when the assignment is published and when it is due. The red outlines mark both times.',
  highlights: [
    { label: 'Publication time', left: 3.7, top: 43.3, width: 41.9, height: 5.6 },
    { label: 'Due time', left: 49.2, top: 43.3, width: 41.3, height: 5.6 },
  ],
};

section(5, '5.2').screenshot = {
  src: '/images/student-guide/chapter-4/assignment-info.png',
  alt: 'Hoppy Assignment Info with the Start button below the assignment details.',
  caption: 'Read the teacher’s notes, then select Start. The red outlines mark both areas.',
  highlights: [
    { label: 'Notes', left: 4.8, top: 50.2, width: 82.1, height: 7.2 },
    { label: 'Start', left: 4.8, top: 71.1, width: 90, height: 4.8 },
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
  src: '/images/student-guide/chapter-5/assignment-progress.png',
  alt: 'Hoppy Assignment Info showing Completed On Time, best score, completion time, and learning-unit progress.',
  caption: 'The assignment page records the completion status, best score, completion time, and learning-unit results.',
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
const followUpSettingsScreenshot = section(6, '6.1').additionalScreenshots?.[0];
if (followUpSettingsScreenshot) {
  followUpSettingsScreenshot.highlights = [
    { label: 'Focus area', left: 6.2, top: 29.9, width: 87.6, height: 6.4 },
    { label: 'Difficulty', left: 6.2, top: 40, width: 87.6, height: 6.9 },
    { label: 'Time limit', left: 9.8, top: 52.2, width: 80.4, height: 6.4 },
    { label: 'Number of questions', left: 9.8, top: 62.9, width: 80.4, height: 6.4 },
    { label: 'Confirm', left: 2, top: 88.7, width: 96, height: 9.4 },
  ];
}

const followUpAttemptScreenshot = section(3, '3.2').screenshot;
const followUpResultScreenshot = section(3, '3.3').screenshot;
if (followUpAttemptScreenshot && typeof followUpAttemptScreenshot !== 'string') {
  section(6, '6.2').screenshot = {
    ...followUpAttemptScreenshot,
    caption: 'Complete the generated quiz in the same way as your other Hoppy quizzes.',
    highlights: undefined,
  };
}
if (followUpResultScreenshot && typeof followUpResultScreenshot !== 'string') {
  section(6, '6.2').additionalScreenshots = [
    {
      ...followUpResultScreenshot,
      caption: 'Review the result and explanations to see what improved.',
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

export const studentGuideChapterMap = new Map(
  studentGuideChapters.map((chapter) => [chapter.slug, chapter]),
);

export const publishedStudentGuideChapters = studentGuideChapters;

export const publishedStudentGuideSlugs = new Set(
  publishedStudentGuideChapters.map((chapter) => chapter.slug),
);
