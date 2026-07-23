export interface GuideNote {
  title: string;
  text: string;
}

export interface GuideScreenshot {
  src: string;
  alt: string;
  caption: string;
  highlights?: Array<{
    label: string;
    left: number;
    top: number;
    width: number;
    height: number;
  }>;
}

export interface GuideSection {
  number: string;
  title: string;
  introduction?: string;
  steps?: string[];
  paragraphs?: string[];
  bullets?: string[];
  note?: GuideNote;
  screenshot?: string | GuideScreenshot;
  additionalScreenshots?: GuideScreenshot[];
}

export interface GuideChapter {
  number: number;
  slug: `chapter-${number}`;
  title: string;
  summary: string;
  sections: GuideSection[];
  chapterBullets?: string[];
  completion: string;
  previous?: `chapter-${number}`;
  next?: `chapter-${number}`;
}

export const teacherGuideChapters: GuideChapter[] = [
  {
    number: 1,
    slug: 'chapter-1',
    title: 'Choose a Topic and Create a Quiz with Explore',
    summary: 'Create a quiz by choosing a grade, subject, and curriculum topic in Explore.',
    sections: [
      {
        number: '1.1',
        title: 'Choose the Grade Level',
        steps: ['Open Explore.', 'Choose the grade level.'],
        screenshot: {
          src: '/images/teacher-guide/chapter-1/select-grade.jpeg',
          alt: 'Hoppy Explore screen with the grade selector expanded and Primary 6 selected.',
          caption: 'Open Explore, then select the grade level. The red outlines mark Explore and Primary 6 in this example.',
          highlights: [
            { label: 'Primary 6', left: 59, top: 27.4, width: 24.8, height: 5.5 },
            { label: 'Explore', left: 23.5, top: 87.2, width: 15.5, height: 6.4 },
          ],
        },
      },
      {
        number: '1.2',
        title: 'Choose the Subject and Learning Units',
        introduction: 'Hoppy calls the curriculum topics within a subject learning units.',
        steps: [
          'Choose the subject.',
          'Choose the learning units for the quiz.',
          'Select Create Quiz.',
        ],
        note: {
          title: 'Selection limit',
          text: 'You can select up to five learning units for each quiz.',
        },
        screenshot: {
          src: '/images/teacher-guide/chapter-1/select-learning-units.jpeg',
          alt: 'Hoppy Explore screen with Chinese selected, several learning units checked, and the Create Quiz button enabled.',
          caption: 'Choose a subject, use the tick buttons to select learning units, and then press Create Quiz. The red outlines mark each control.',
          highlights: [
            { label: 'Chinese', left: 9.2, top: 22.7, width: 22.3, height: 5.2 },
            { label: 'Learning unit tick button', left: 79.4, top: 35.3, width: 7.1, height: 4.1 },
            { label: 'Create Quiz', left: 4, top: 77.7, width: 92, height: 6.8 },
          ],
        },
      },
      {
        number: '1.3',
        title: 'Generate Questions with Custom Made',
        steps: [
          'Set the expected duration.',
          'Choose the number of questions.',
          'Select Custom Made.',
          'Scroll down and choose the explanation language.',
          'Select Confirm.',
        ],
        note: {
          title: 'Another option',
          text: 'Question Bank uses suitable existing questions for supported learning units.',
        },
        screenshot: {
          src: '/images/teacher-guide/chapter-1/custom-made-settings.jpeg',
          alt: 'Hoppy quiz setup screen showing a 10-minute duration, 10 questions, Custom Made selected, and Question Bank as the alternative.',
          caption: 'Set the quiz duration and number of questions, then select Custom Made. The red outlines mark all three controls.',
          highlights: [
            { label: 'Time limit', left: 8.5, top: 31.7, width: 80, height: 8.5 },
            { label: 'Number of questions', left: 8.5, top: 43.9, width: 80, height: 8.2 },
            { label: 'Custom Made', left: 8.8, top: 60.5, width: 41.8, height: 6.7 },
          ],
        },
        additionalScreenshots: [
          {
            src: '/images/teacher-guide/chapter-1/custom-made-details.jpeg',
            alt: 'Hoppy quiz setup screen showing the explanation-language selector and Confirm button.',
            caption: 'Choose the explanation language, then press Confirm. The red outlines mark both controls.',
            highlights: [
              { label: 'Explanation language', left: 9, top: 48.8, width: 82, height: 5.6 },
              { label: 'Confirm', left: 4, top: 80.7, width: 92, height: 7.2 },
            ],
          },
        ],
      },
      {
        number: '1.4',
        title: 'Review the Generated Quiz',
        steps: [
          'Review the quiz title, grade level, subject, question count, and duration.',
          'Review the description and related learning units.',
        ],
        screenshot: {
          src: '/images/teacher-guide/chapter-1/generated-quiz-info.jpeg',
          alt: 'Hoppy Quiz Info screen showing a generated Primary 6 Chinese quiz with 10 questions, a 10-minute duration, a description, and related learning units.',
          caption: 'When generation finishes, Hoppy opens the Quiz Info page.',
        },
      },
    ],
    completion: 'Great work! You created and reviewed a quiz with Explore.',
    next: 'chapter-2',
  },
  {
    number: 2,
    slug: 'chapter-2',
    title: 'Turn Your Idea or Material into a Quiz with Create',
    summary: 'Create a quiz from your own instructions, image, or document.',
    sections: [
      {
        number: '2.1',
        title: 'Describe the Quiz You Want',
        steps: ['Open Create.', 'Describe the quiz in plain language.'],
        screenshot: 'Create screen showing where to describe a quiz',
      },
      {
        number: '2.2',
        title: 'Take a Photo or Upload Teaching Material - Optional',
        paragraphs: [
          'Take a photo of printed material, or add a supported image or document, if it will help Hoppy create the quiz.',
        ],
        note: {
          title: 'Protect information and permissions',
          text: 'Do not upload personal information or material you are not permitted to use.',
        },
      },
      {
        number: '2.3',
        title: 'Confirm the Quiz Context',
        paragraphs: [
          'Check the detected grade level, subject, language, and learning units. Correct any selections that do not match your quiz.',
        ],
        screenshot: 'Create screen showing the detected quiz context',
      },
      {
        number: '2.4',
        title: 'Generate Questions with Custom Made',
        steps: [
          'Select Custom Made.',
          'Choose the number of questions.',
          'Set the expected duration.',
          'Check the language and learning units.',
          'Create the quiz.',
        ],
        note: {
          title: 'Another option',
          text: 'Question Bank uses suitable existing questions for supported learning units.',
        },
        screenshot: 'Quiz setup with Custom Made selected and Question Bank identified',
      },
    ],
    completion: 'You created a quiz with Create. When generation finishes, Hoppy opens the new quiz page.',
    previous: 'chapter-1',
    next: 'chapter-3',
  },
  {
    number: 3,
    slug: 'chapter-3',
    title: 'Check Your Quiz Before Assigning It',
    summary: 'Try the quiz and check its questions, answers, and explanations before assigning it.',
    sections: [
      {
        number: '3.1',
        title: 'Try Your Quiz',
        steps: [
          'Select Start.',
          'Choose an answer and select Submit.',
          'View the feedback and select Show explanation where available.',
          'Select Next.',
          'On the last question, select Finish Quiz.',
          'Follow the result screens to Finish and Back.',
        ],
        note: {
          title: 'Your practice attempt',
          text: 'This creates your personal attempt, not a classroom assignment. The quiz remains available under My Quizzes.',
        },
      },
      {
        number: '3.2',
        title: 'View the Questions, Answers, and Explanations',
        steps: [
          'Select View Questions on the quiz page.',
          'Use the arrows or numbered question markers to move through the quiz.',
          'Check each question, its answer choices, the correct answer, and the explanation.',
          'Select the close (X) control to return to the quiz page.',
        ],
        screenshot: 'Quiz page showing the View Questions control',
      },
      {
        number: '3.3',
        title: 'Report a Problem If Needed',
        paragraphs: ['If you find a problem while viewing a question, select Report and choose the reason.'],
      },
      {
        number: '3.4',
        title: 'Share Your Quiz',
        steps: [
          'Select Share Quiz.',
          'If you own the quiz, choose its visibility.',
          'Share or copy the quiz link, or show or share its QR code.',
        ],
        bullets: [
          'Public makes the quiz discoverable and shareable.',
          'Unlisted allows access through its link without making it publicly discoverable.',
          'Private cannot be shared.',
        ],
        note: {
          title: 'Direct sharing',
          text: 'Direct sharing is useful for informal practice, but it does not create classroom completion records or give the quiz owner access to participants’ answers. Use an assignment when you need to monitor student work.',
        },
      },
      {
        number: '3.5',
        title: 'Export Your Quiz to PDF',
        steps: ['Select Export to PDF on the quiz page.', 'Check the PDF preview.', 'Select Save PDF.'],
        paragraphs: [
          'The PDF contains the questions and an answers section with explanations. A share link or QR code may appear when the quiz visibility allows sharing.',
        ],
      },
    ],
    completion: 'Your quiz is checked and ready to use.',
    previous: 'chapter-2',
    next: 'chapter-4',
  },
  {
    number: 4,
    slug: 'chapter-4',
    title: 'Publish Your Quiz as a Classroom Assignment',
    summary: 'Choose or create a classroom, add students, and publish the quiz as an assignment.',
    sections: [
      {
        number: '4.1',
        title: 'Choose or Create a Classroom',
        steps: [
          'Open My Classrooms.',
          'Select an existing classroom, or create one and give it a recognizable name.',
        ],
        note: { title: 'Reuse your classroom', text: 'You can use the same classroom for future assignments.' },
      },
      {
        number: '4.2',
        title: 'Invite Students If Needed',
        introduction: 'If the intended students already appear under Members, continue to 4.3.',
        bullets: [
          'Share or copy the classroom link.',
          'Show or share the classroom QR code.',
          'Give students the six-character classroom code to enter through Join Classroom.',
        ],
        paragraphs: [
          'Open Members to see who has joined. Direct student email invitations are not available in the current mobile teacher workflow.',
          'Google Classroom roster import is another option for linked School and Public classrooms. See Chapter 10.',
        ],
        screenshot: 'Classroom invitation screen showing link, QR code, and classroom code',
      },
      {
        number: '4.3',
        title: 'Add the Quiz as an Assignment',
        steps: ['Open the classroom.', 'Select Add Assignment.', 'Choose the quiz.', 'Add instructions or notes.'],
      },
      {
        number: '4.4',
        title: 'Set the Publication and Due Times',
        steps: [
          'Choose when the assignment will be published.',
          'Choose a due date and time later than the publication time.',
        ],
      },
      {
        number: '4.5',
        title: 'Publish or Schedule the Assignment',
        steps: ['Check the classroom, quiz, instructions, and dates.', 'Publish or schedule the assignment.'],
        paragraphs: [
          'Students can open the assignment after its publication time. Wait until at least one student completes it before continuing to Chapter 5.',
        ],
      },
    ],
    completion: 'Your quiz is now published or scheduled as a classroom assignment.',
    previous: 'chapter-3',
    next: 'chapter-5',
  },
  {
    number: 5,
    slug: 'chapter-5',
    title: 'Check Student Completion and Results',
    summary: 'See who completed the assignment and understand how the class performed.',
    sections: [
      {
        number: '5.1',
        title: 'View Assignment Results',
        steps: ['Open the classroom.', 'Open Assignments.', 'Select the assignment.'],
      },
      {
        number: '5.2',
        title: 'See Who Has Completed the Assignment',
        introduction: 'Open Completion Status to see:',
        bullets: ['Not Finished', 'Completed', 'Completed Late', 'Overdue'],
        paragraphs: [
          'Select a status or View Detail to see the students in that group. Not Finished work may still be within the available time; Overdue work has passed its due time.',
        ],
        screenshot: 'Assignment Completion Status screen',
      },
      {
        number: '5.3',
        title: 'Understand How the Class Performed',
        bullets: [
          'Average Score uses on-time completions.',
          'Average Score (Including Late) also includes late completions.',
          'Learning-unit results show the average percentage and number of questions for each unit.',
        ],
      },
      {
        number: '5.4',
        title: 'Optional: Review Individual Student Attempts',
        steps: [
          'Open View Detail.',
          'Select a student who completed the assignment.',
          'Review the score, time spent, completion time, questions, and answers.',
          'Return to the list to review another student’s attempt.',
        ],
      },
    ],
    completion: 'You created a quiz, published it as an assignment, and reviewed its first results.',
    previous: 'chapter-4',
    next: 'chapter-6',
  },
  {
    number: 6,
    slug: 'chapter-6',
    title: 'Create Follow-Up Practice',
    summary: 'Create another quiz that responds to the class results or provides further practice.',
    sections: [
      {
        number: '6.1',
        title: 'Generate a Similar Quiz from Assignment Results',
        steps: [
          'Open an assignment with student submissions.',
          'Select Generate Similar Quiz.',
          'Choose the learning units.',
          'Choose All Topics or Growth Areas.',
          'Choose Easier, Same, or Harder.',
          'Set the number of questions and time limit.',
          'Generate and check the quiz.',
        ],
      },
      {
        number: '6.2',
        title: 'Create Follow-Up Practice in Explore',
        steps: [
          'Open Explore.',
          'Select the grade, subject, and learning units for further practice.',
          'Select Create Quiz.',
          'Choose Question Bank or Custom Made.',
          'Create and check the quiz.',
        ],
      },
      {
        number: '6.3',
        title: 'Assign the Follow-Up Quiz',
        paragraphs: ['Add the follow-up quiz to the classroom as a new assignment when it is ready.'],
      },
    ],
    completion: 'Your follow-up practice is ready to assign.',
    previous: 'chapter-5',
    next: 'chapter-7',
  },
  {
    number: 7,
    slug: 'chapter-7',
    title: 'Manage Assignments',
    summary: 'Understand assignment statuses and make permitted changes.',
    sections: [
      {
        number: '7.1',
        title: 'Understand Assignment Statuses',
        introduction: 'An assignment may appear as:',
        bullets: ['Unpublished', 'Published', 'All Completed', 'Closed', 'Closed (Missing Submissions)'],
      },
      {
        number: '7.2',
        title: 'Edit an Assignment',
        paragraphs: [
          'Open an assignment to view its questions and answers. Edit its title, notes, or due date when permitted.',
        ],
      },
      {
        number: '7.3',
        title: 'Delete an Assignment',
        paragraphs: [
          'Deleting an assignment cannot be undone. If the classroom is linked to Google Classroom, the corresponding Google coursework is also deleted.',
        ],
      },
    ],
    completion: 'You can now interpret, edit, and delete assignments when permitted.',
    previous: 'chapter-6',
    next: 'chapter-8',
  },
  {
    number: 8,
    slug: 'chapter-8',
    title: 'Manage Classroom Members',
    summary: 'View classroom roles and remove members when you have permission.',
    sections: [
      {
        number: '8.1',
        title: 'View Members and Their Roles',
        paragraphs: [
          'Open My Classrooms, select a classroom, and open Members to view students, instructors, their roles, and the classroom owner.',
        ],
      },
      {
        number: '8.2',
        title: 'Remove a Member When Permitted',
        paragraphs: [
          'Remove a student when you have permission. Only the classroom owner can remove an instructor.',
        ],
      },
    ],
    completion: 'You can now review and manage classroom membership.',
    previous: 'chapter-7',
    next: 'chapter-9',
  },
  {
    number: 9,
    slug: 'chapter-9',
    title: 'Personalize Hoppy',
    summary: 'Set your usual grades, subjects, languages, and reusable quiz instructions.',
    sections: [
      {
        number: '9.1',
        title: 'Choose Your Usual Grades and Subjects',
        introduction: 'Open Profile, select the settings gear, and open User Profile.',
        steps: [
          'Choose the grades you usually teach.',
          'Choose your preferred subjects.',
          'Wait for the changes to save automatically.',
        ],
        paragraphs: [
          'Explore selects your saved grades first and places your preferred subjects first. Other available subjects are not hidden.',
        ],
      },
      {
        number: '9.2',
        title: 'Choose the App and Quiz Languages',
        introduction: 'From Settings, open Preferences.',
        bullets: [
          'Preferred Language changes Hoppy’s menus, buttons, and instructions.',
          'Preferred Quiz Language provides the starting language for newly created quiz content.',
        ],
        note: {
          title: 'Existing quizzes',
          text: 'Changing these preferences does not translate quizzes that already exist.',
        },
      },
      {
        number: '9.3',
        title: 'Save Reusable Instructions with a Custom Quiz Prompt',
        steps: [
          'On the Preferences page, find Custom Quiz Prompt.',
          'Enter instructions you want to reuse, such as using metric units or keeping questions concise.',
          'Wait for the prompt to save automatically.',
          'Choose whether to apply it when the option appears during quiz creation.',
        ],
      },
    ],
    completion: 'Your usual teaching and quiz preferences are saved.',
    previous: 'chapter-8',
    next: 'chapter-10',
  },
  {
    number: 10,
    slug: 'chapter-10',
    title: 'Link Google Classroom',
    summary: 'Connect a Google Classroom course and understand what Hoppy synchronizes.',
    sections: [
      {
        number: '10.1',
        title: 'Connect a Course',
        introduction: 'Open the Hoppy classroom, then open Settings and Google Classroom Linking.',
        steps: [
          'Connect the authorized Google account.',
          'Select the Google Classroom course.',
          'Keep Import students selected if you want to import the roster.',
        ],
        paragraphs: [
          'Roster matching uses each student’s email address. Matching Hoppy accounts are added to the classroom. If a matching account is not found, the student can receive an email containing the classroom code.',
          'Only the classroom owner can manage the link. Google Classroom linking is available for School and Public classrooms.',
        ],
      },
      {
        number: '10.2',
        title: 'Understand Assignment and Score Synchronization',
        bullets: [
          'Publishing a Hoppy assignment creates corresponding Google Classroom coursework.',
          'Changing its title or deadline updates the Google coursework.',
          'Completing the Hoppy assignment sends the student’s percentage score as a grade out of 100.',
          'Deleting the Hoppy assignment deletes the corresponding Google coursework.',
          'Unlinking stops future assignment and score synchronization.',
        ],
        note: {
          title: 'One-way limitations',
          text: 'Google Classroom assignments do not import into Hoppy. Grades edited in Google Classroom do not return to Hoppy.',
        },
      },
      {
        number: '10.3',
        title: 'Switch, Relink, or Unlink a Course',
        bullets: [
          'Relink reconnects an inactive authorization.',
          'Switching courses connects future activity to a different course; existing coursework does not move.',
          'Unlink disconnects the course and stops future synchronization.',
        ],
      },
    ],
    completion: 'You understand how to connect and manage Google Classroom synchronization.',
    previous: 'chapter-9',
    next: 'chapter-11',
  },
  {
    number: 11,
    slug: 'chapter-11',
    title: 'View and Manage Leaderboards',
    summary: 'View quiz, classroom, and assignment leaderboards and control student visibility.',
    sections: [
      {
        number: '11.1',
        title: 'View a Quiz Leaderboard',
        paragraphs: [
          'Open a quiz and select View Leaderboard. It shows each participant’s best completed attempt and rank, but not their answers.',
        ],
      },
      {
        number: '11.2',
        title: 'View the Classroom Leaderboard',
        paragraphs: [
          'Open a classroom to see the leaderboard preview, then select See all. The full list shows each student’s total points across published assignments and completed assignments out of the total.',
        ],
      },
      {
        number: '11.3',
        title: 'View an Assignment Leaderboard',
        paragraphs: [
          'Open an assignment and select View Leaderboard. Completed attempts are ranked by score and then by earlier completion time. Each entry shows the score, time taken, completion time, and late status.',
        ],
      },
      {
        number: '11.4',
        title: 'Choose What Students Can See',
        introduction: 'Open the classroom, then open Settings and Leaderboard Visibility.',
        bullets: [
          'Show All shows the complete classroom and assignment leaderboards to students.',
          'Show Top N shows the selected leading positions. Choose 3, 5, 10, or enter a custom number. A student outside those positions can also see their own entry without a displayed rank.',
          'Hide All hides the classroom and assignment leaderboards from students.',
        ],
        paragraphs: [
          'These options control student access. Instructors can still view the full leaderboards. Select Save to apply the change.',
        ],
      },
      {
        number: '11.5',
        title: 'Follow the School Default',
        paragraphs: [
          'For a School classroom, Follow school default applies the school’s leaderboard setting and shows the setting currently in effect.',
          'Only the classroom owner can change the classroom option. If the school prevents classroom overrides, the setting is read-only.',
        ],
      },
    ],
    completion: 'You can now view leaderboards and choose suitable student visibility.',
    previous: 'chapter-10',
    next: 'chapter-12',
  },
  {
    number: 12,
    slug: 'chapter-12',
    title: 'Set Up Auto Assignment',
    summary: 'Create a recurring assignment schedule and manage it later.',
    sections: [
      {
        number: '12.1',
        title: 'Create and Enable a Schedule',
        introduction: 'Open the classroom, then open Settings and Auto Assignment.',
        steps: [
          'Choose the subject, grade level, and language.',
          'Choose the publication days and hour.',
          'Set the number of hours students have to complete each assignment.',
          'Save and enable the schedule.',
        ],
      },
      {
        number: '12.2',
        title: 'Edit, Disable, or Delete a Schedule',
        paragraphs: ['Open Auto Assignment, select the schedule, and edit, disable, or delete it.'],
      },
    ],
    completion: 'Your auto-assignment schedule is ready.',
    previous: 'chapter-11',
    next: 'chapter-13',
  },
  {
    number: 13,
    slug: 'chapter-13',
    title: 'Safe and Responsible Use',
    summary: 'Use Hoppy in ways that protect students and support sound teaching decisions.',
    sections: [],
    chapterBullets: [
      'Check generated questions, answers, and explanations before assigning a quiz.',
      'Protect student information.',
      'Upload only appropriate material that you are permitted to use.',
      'Choose leaderboard visibility suitable for the classroom.',
      'Consider reading level, device access, completion time, and learning needs.',
      'Use Hoppy alongside teacher explanation, discussion, and offline learning.',
    ],
    completion: 'You have reviewed the key practices for safe and responsible use.',
    previous: 'chapter-12',
    next: 'chapter-14',
  },
  {
    number: 14,
    slug: 'chapter-14',
    title: 'Quick Help',
    summary: 'Check the most common causes when something does not work as expected.',
    sections: [],
    chapterBullets: [
      'Check the selected grade level, subject, and learning units.',
      'Check whether the student joined the classroom.',
      'Check the assignment publication time.',
      'Check whether at least one student completed the assignment.',
      'Check whether the uploaded file is supported.',
      'Check the Google Classroom link and authorization status.',
      'Use Report for a problem with a quiz question.',
      'Contact Hoppy support if an account, access, or synchronization problem continues.',
    ],
    completion: 'You now know where to begin when you need help.',
    previous: 'chapter-13',
  },
];

export const teacherGuideChapterMap = new Map(
  teacherGuideChapters.map((chapter) => [chapter.slug, chapter]),
);

export const publishedTeacherGuideChapters = teacherGuideChapters.filter(
  (chapter) => chapter.number === 1,
);

export const publishedTeacherGuideSlugs = new Set(
  publishedTeacherGuideChapters.map((chapter) => chapter.slug),
);

export function sectionId(number: string): string {
  return number.replace('.', '-');
}
