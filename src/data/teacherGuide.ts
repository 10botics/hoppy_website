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
    summary: 'Create a curriculum-aligned quiz quickly by choosing the grade, subject, and learning units in Explore.',
    sections: [
      {
        number: '1.1',
        title: 'Choose Grade Level',
        steps: ['Open Explore.', 'Choose the grade level.'],
        screenshot: {
          src: '/images/teacher-guide/chapter-1/open-explore.png',
          alt: 'Hoppy Home screen with Explore in the bottom navigation.',
          caption: 'Open Explore from the bottom navigation. The red outline marks the button.',
          highlights: [
            { label: 'Explore', left: 23.6, top: 91.1, width: 15.2, height: 6.1 },
          ],
        },
        additionalScreenshots: [
          {
          src: '/images/teacher-guide/chapter-1/select-grade.jpeg',
          alt: 'Hoppy Explore screen with the grade selector expanded and Primary 6 selected.',
          caption: 'Choose the grade level. Primary 6 is highlighted in this example.',
          highlights: [
            { label: 'Primary 6', left: 59, top: 27.4, width: 24.8, height: 5.5 },
          ],
          },
        ],
      },
      {
        number: '1.2',
        title: 'Choose Subject and Learning Units',
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
        title: 'Review Generated Quiz',
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
    summary: 'Turn a lesson idea or reference material into a quiz tailored to the content you want to teach.',
    sections: [
      {
        number: '2.1',
        title: 'Enter Quiz Description',
        steps: [
          'Open Create.',
          'Enter a one-time description of the quiz you want. You can include the subject, grade level, learning units, or a specific focus.',
          'Select the arrow to continue.',
        ],
        screenshot: {
          src: '/images/teacher-guide/chapter-2/open-create.png',
          alt: 'Hoppy Home screen with Create in the bottom navigation.',
          caption: 'Open Create from the bottom navigation. The red outline marks the button.',
          highlights: [
            { label: 'Create', left: 43.1, top: 91.1, width: 13.8, height: 6.1 },
          ],
        },
        additionalScreenshots: [
          {
            src: '/images/teacher-guide/chapter-2/quiz-description.png',
            alt: 'Hoppy Create screen with a Primary 3 mathematics fractions quiz description entered.',
            caption: 'Enter the quiz description, then press the highlighted arrow.',
            highlights: [
              { label: 'Quiz description', left: 3.8, top: 85.1, width: 92.4, height: 10.7 },
              { label: 'Continue', left: 87.4, top: 91.8, width: 7.3, height: 3.8 },
            ],
          },
        ],
      },
      {
        number: '2.2',
        title: 'Add Reference Materials — Optional',
        steps: [
          'Select the plus (+) button.',
          'Choose Add Images, Add Documents, or Take Photos.',
          'Add the reference materials you want Hoppy to use.',
          'Select the arrow to continue.',
        ],
        paragraphs: ['You can use a quiz description, reference materials, or both.'],
        note: {
          title: 'Protect information and permissions',
          text: 'Do not upload personal information or material you are not permitted to use.',
        },
        screenshot: {
          src: '/images/teacher-guide/chapter-2/reference-material-options.png',
          alt: 'Hoppy Create screen showing Add Images, Add Documents, and Take Photos attachment options.',
          caption: 'Use the highlighted menu to add reference materials.',
          highlights: [
            { label: 'Reference material options', left: 5, top: 78.1, width: 90, height: 17.6 },
          ],
        },
      },
      {
        number: '2.3',
        title: 'Confirm Quiz Context',
        steps: [
          'Check the detected subject, grade level, and language.',
          'Correct any selection that does not match the quiz you want.',
          'Select Confirm.',
        ],
        screenshot: {
          src: '/images/teacher-guide/chapter-2/confirm-context.png',
          alt: 'Hoppy Create screen showing detected Mathematics, Primary 3, and English context selections.',
          caption: 'Check the detected subject, grade level, and language, then press Confirm.',
          highlights: [
            { label: 'Subject, grade, and language', left: 37.5, top: 29.4, width: 54.5, height: 18.3 },
            { label: 'Confirm', left: 3.8, top: 84.8, width: 92.4, height: 7.7 },
          ],
        },
      },
      {
        number: '2.4',
        title: 'Select Learning Units',
        steps: ['Select at least one learning unit.', 'Select Confirm.'],
        note: {
          title: 'If no learning unit matches',
          text: 'Hoppy may suggest Others when your description or materials do not match a specific learning unit. You can continue with Others and Custom Made. Chapter 9 explains this advanced option.',
        },
        screenshot: {
          src: '/images/teacher-guide/chapter-2/select-learning-units.png',
          alt: 'Hoppy Create screen showing five selected fractions learning units and the Confirm button.',
          caption: 'Select the learning units for the quiz, then press Confirm.',
          highlights: [
            { label: 'Learning unit tick button', left: 80.5, top: 37.3, width: 7.4, height: 4 },
            { label: 'Confirm', left: 3.8, top: 86, width: 92.4, height: 7.4 },
          ],
        },
      },
      {
        number: '2.5',
        title: 'Choose Quiz Settings',
        steps: [
          'Set the expected duration.',
          'Choose the number of questions.',
          'Select Custom Made.',
          'Select Confirm.',
        ],
        note: {
          title: 'Another option',
          text: 'Question Bank uses suitable existing questions for supported learning units.',
        },
        screenshot: {
          src: '/images/teacher-guide/chapter-2/quiz-settings.png',
          alt: 'Hoppy Create quiz settings showing duration, question count, Custom Made, Question Bank, and Confirm.',
          caption: 'Set the duration and question count, select Custom Made, and then press Confirm.',
          highlights: [
            { label: 'Time limit', left: 7.2, top: 28.8, width: 85.6, height: 10.1 },
            { label: 'Number of questions', left: 7.2, top: 39.3, width: 85.6, height: 10.1 },
            { label: 'Custom Made', left: 8.2, top: 54.1, width: 42.1, height: 6.7 },
            { label: 'Confirm', left: 3.8, top: 85.7, width: 92.4, height: 6.2 },
          ],
        },
      },
      {
        number: '2.6',
        title: 'Review Generated Quiz',
        steps: [
          'Review the quiz title, grade level, subject, question count, and duration.',
          'Review the description and related learning units.',
        ],
      },
    ],
    completion: 'Great work! You created and reviewed a quiz with Create.',
    previous: 'chapter-1',
    next: 'chapter-3',
  },
  {
    number: 3,
    slug: 'chapter-3',
    title: 'Check Your Quiz Before Assigning It',
    summary: 'Prepare a reliable quiz by reviewing its content, reporting problems, and choosing how to share or export it.',
    sections: [
      {
        number: '3.1',
        title: 'Preview Quiz',
        steps: [
          'Select Start.',
          'Choose an answer and select Submit.',
          'View the feedback and select Show explanation where available.',
          'Select Next.',
          'On the last question, select Finish Quiz.',
          'Follow the result screens to Finish and Back.',
        ],
        note: {
          title: 'Practice attempt',
          text: 'This creates your personal attempt, not a classroom assignment. The quiz remains available under My Quizzes.',
        },
        screenshot: {
          src: '/images/teacher-guide/chapter-3/quiz-info-start.png',
          alt: 'Hoppy Quiz Info screen with the Start button at the bottom.',
          caption: 'Select Start to try the quiz. The red outline sits outside the button.',
          highlights: [
            { label: 'Start', left: 4.5, top: 82.8, width: 91, height: 6 },
          ],
        },
        additionalScreenshots: [
          {
            src: '/images/teacher-guide/chapter-3/answer-feedback.png',
            alt: 'Hoppy answer feedback showing a correct answer, Show explanation, and Next.',
            caption: 'After submitting an answer, review the feedback, open the explanation if needed, and select Next.',
            highlights: [
              { label: 'Show explanation', left: 3.8, top: 88.1, width: 45.2, height: 6.1 },
              { label: 'Next', left: 51, top: 88.1, width: 45.2, height: 6.1 },
            ],
          },
          {
            src: '/images/teacher-guide/chapter-3/explanation-open.png',
            alt: 'Hoppy answer feedback with the full explanation expanded below the correct answer.',
            caption: 'After selecting Show explanation, Hoppy expands the worked explanation below the feedback.',
          },
        ],
      },
      {
        number: '3.2',
        title: 'View Questions, Answers, and Explanations',
        steps: [
          'Select View Questions on the quiz page.',
          'Use the arrows or numbered question markers to move through the quiz.',
          'Check each question, its answer choices, the correct answer, and the explanation.',
          'Select the close (X) control to return to the quiz page.',
        ],
        screenshot: {
          src: '/images/teacher-guide/chapter-3/quiz-actions.png',
          alt: 'Hoppy Quiz Info screen showing View Questions, Export to PDF, and View Leaderboard.',
          caption: 'Select View Questions to inspect the quiz.',
          highlights: [
            { label: 'View Questions', left: 8.2, top: 56.4, width: 83.6, height: 6.1 },
          ],
        },
        additionalScreenshots: [
          {
            src: '/images/teacher-guide/chapter-3/question-review.png',
            alt: 'Hoppy question review showing question navigation, answer choices, an explanation, and Report.',
            caption: 'Move between questions, check the answer and explanation, and use Report if something is wrong.',
            highlights: [
              { label: 'Question navigation', left: 26.8, top: 15.7, width: 60.3, height: 3.9 },
              { label: 'Explanation', left: 7.8, top: 81.5, width: 84.4, height: 17.8 },
            ],
          },
        ],
      },
      {
        number: '3.3',
        title: 'View Quiz Leaderboard',
        paragraphs: [
          'Select View Leaderboard to see the users who completed the quiz, ranked by their score and completion time.',
        ],
        screenshot: {
          src: '/images/teacher-guide/chapter-7/assignment-leaderboard.png',
          alt: 'Hoppy quiz leaderboard showing four users ranked by score and completion time.',
          caption: 'The quiz leaderboard shows users who completed the quiz, ranked by score and then completion time.',
        },
      },
      {
        number: '3.4',
        title: 'Report a Problem',
        paragraphs: ['If you find a problem while viewing a question, select Report and choose the reason.'],
        screenshot: {
          src: '/images/teacher-guide/chapter-3/question-review.png',
          alt: 'Hoppy question review with the Report flag in the top-right corner.',
          caption: 'Select the flag to report a problem with the current question.',
          highlights: [
            { label: 'Report', left: 85, top: 9.9, width: 11.3, height: 5.2 },
          ],
        },
        additionalScreenshots: [
          {
          src: '/images/teacher-guide/chapter-3/report-options.png',
          alt: 'Hoppy report sheet listing reasons for reporting a quiz question.',
          caption: 'Choose the reason that best describes the problem.',
          highlights: [
            { label: 'Report reasons', left: 3, top: 51.9, width: 94, height: 36.7 },
          ],
          },
        ],
      },
      {
        number: '3.5',
        title: 'Share Quiz',
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
        screenshot: {
          src: '/images/teacher-guide/chapter-3/share-quiz-link.jpeg',
          alt: 'Hoppy Share Quiz sheet with the Link tab selected and Share Link and Copy Link buttons.',
          caption: 'Choose the visibility, then share the quiz link or copy it.',
          highlights: [
            { label: 'Visibility', left: 25.8, top: 26.4, width: 68.2, height: 5.7 },
            { label: 'Link', left: 1, top: 34.8, width: 48, height: 5.2 },
            { label: 'Share or copy', left: 5.5, top: 60.7, width: 89, height: 7.9 },
          ],
        },
        additionalScreenshots: [
          {
            src: '/images/teacher-guide/chapter-3/share-quiz.png',
            alt: 'Hoppy Share Quiz sheet with the QR Code tab selected.',
            caption: 'Open QR Code to show or share the quiz QR code.',
            highlights: [
              { label: 'QR Code', left: 49.7, top: 44.5, width: 47.4, height: 5.6 },
            ],
          },
        ],
      },
      {
        number: '3.6',
        title: 'Export Quiz to PDF',
        steps: ['Select Export to PDF on the quiz page.', 'Check the PDF preview.', 'Select Save PDF.'],
        paragraphs: [
          'The PDF contains the questions and an answers section with explanations. A share link or QR code may appear when the quiz visibility allows sharing.',
        ],
        screenshot: {
          src: '/images/teacher-guide/chapter-3/pdf-preview.png',
          alt: 'Hoppy PDF preview with the Save PDF button in the top-right corner.',
          caption: 'Check the preview, then select Save PDF.',
          highlights: [
            { label: 'Save PDF', left: 87.1, top: 5.7, width: 11.6, height: 5.3 },
          ],
        },
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
    summary: 'Turn a reviewed quiz into a scheduled classroom assignment that students can access at the right time.',
    sections: [
      {
        number: '4.1',
        title: 'Choose or Create a Classroom',
        steps: [
          'Open My Classrooms.',
          'Select an existing classroom, or create one and give it a recognizable name.',
        ],
        note: { title: 'Reuse Classroom', text: 'You can use the same classroom for future assignments.' },
        screenshot: {
          src: '/images/teacher-guide/chapter-4/my-classrooms.png',
          alt: 'My Classrooms screen with the Create button at the top.',
          caption: 'Open My Classrooms and select Create if you need a new classroom.',
          highlights: [
            { label: 'Create', left: 76.9, top: 12.2, width: 19.4, height: 5.9 },
          ],
        },
        additionalScreenshots: [
          {
            src: '/images/teacher-guide/chapter-4/create-classroom.png',
            alt: 'Create Classroom form with a classroom name and the Public classroom type selected.',
            caption: 'Give the classroom a clear name, choose its type, and select Create.',
            highlights: [
              { label: 'Classroom name', left: 5.6, top: 55.7, width: 88.8, height: 5 },
              { label: 'Create', left: 5.6, top: 89.1, width: 88.8, height: 5.9 },
            ],
          },
        ],
      },
      {
        number: '4.2',
        title: 'Invite Students',
        bullets: [
          'Share or copy the classroom link.',
          'Show or share the classroom QR code.',
          'Give students the six-character classroom code to enter through Join Classroom.',
        ],
        paragraphs: [
          'Open Members to see who has joined.',
          'Google Classroom roster import is another option for linked School and Public classrooms. See Chapter 8.',
        ],
        screenshot: {
          src: '/images/teacher-guide/chapter-4/invite-students-link.jpeg',
          alt: 'Classroom Share sheet with the Link tab selected and Share Link and Copy Link buttons.',
          caption: 'Share the classroom link directly or copy it.',
          highlights: [
            { label: 'Link', left: 1, top: 27.7, width: 48, height: 6 },
            { label: 'Share or copy', left: 5.5, top: 58.7, width: 89, height: 7.2 },
          ],
        },
        additionalScreenshots: [
          {
            src: '/images/teacher-guide/chapter-4/invite-students.png',
            alt: 'Classroom Share sheet with the QR Code tab selected.',
            caption: 'Open QR Code to show or share the classroom QR code.',
            highlights: [
              { label: 'QR Code', left: 50, top: 39.5, width: 47, height: 5.2 },
            ],
          },
        ],
      },
      {
        number: '4.3',
        title: 'Add Quiz as an Assignment',
        steps: [
          'Open the classroom.',
          'Select Add Assignment.',
          'Choose the quiz.',
          'Select Continue.',
          'Check the assignment title and add Notes if needed.',
        ],
        paragraphs: [
          'An assignment does not have a separate share link or QR code. Publish it in the classroom so classroom members can receive and complete it.',
        ],
        screenshot: {
          src: '/images/teacher-guide/chapter-4/add-assignment.png',
          alt: 'Classroom Assignments tab with the Add Assignment button.',
          caption: 'Open Assignments and select Add Assignment.',
          highlights: [
            { label: 'Add Assignment', left: 56, top: 89.9, width: 40.2, height: 5.9 },
          ],
        },
        additionalScreenshots: [
          {
            src: '/images/teacher-guide/chapter-4/select-quiz.png',
            alt: 'Quiz picker with a quiz selected and the Continue button enabled.',
            caption: 'Choose the quiz, then select Continue.',
            highlights: [
              { label: 'Selected quiz', left: 2.5, top: 37.8, width: 95, height: 13.8 },
              { label: 'Continue', left: 5.6, top: 89.1, width: 88.8, height: 5.9 },
            ],
          },
        ],
      },
      {
        number: '4.4',
        title: 'Set Publication and Due Times',
        steps: [
          'Set Published Date & Time.',
          'Set Due Date & Time later than the publication time.',
        ],
        screenshot: {
          src: '/images/teacher-guide/chapter-4/assignment-form.png',
          alt: 'Create Assignment form with title, notes, publication time, due time, and Create Assignment button.',
          caption: 'Check the title and optional notes, then set the publication and due times.',
          highlights: [
            { label: 'Published Date & Time', left: 5.3, top: 59.8, width: 89.4, height: 19 },
            { label: 'Due Date & Time', left: 5.3, top: 80, width: 89.4, height: 6.8 },
          ],
        },
      },
      {
        number: '4.5',
        title: 'Create Assignment',
        steps: ['Check the classroom, quiz, notes, and dates.', 'Select Create Assignment.'],
        paragraphs: [
          'Students can open the assignment after its publication time. Wait until at least one student completes it before continuing to Chapter 5.',
        ],
        screenshot: {
          src: '/images/teacher-guide/chapter-4/assignment-form.png',
          alt: 'Create Assignment form with the Create Assignment button at the bottom.',
          caption: 'Select Create Assignment when the details are ready.',
          highlights: [
            { label: 'Create Assignment', left: 5.6, top: 89.1, width: 88.8, height: 5.9 },
          ],
        },
        additionalScreenshots: [
          {
            src: '/images/teacher-guide/chapter-4/assignment-list.png',
            alt: 'Classroom Assignments tab showing the newly published assignment.',
            caption: 'The assignment now appears in the classroom with its publication and due times.',
            highlights: [
              { label: 'Published assignment', left: 3.8, top: 18.1, width: 92.4, height: 20.4 },
            ],
          },
        ],
      },
    ],
    completion: 'Your classroom assignment is created and ready for its publication time.',
    previous: 'chapter-3',
    next: 'chapter-5',
  },
  {
    number: 5,
    slug: 'chapter-5',
    title: 'Check Student Completion and Results',
    summary: 'Use completion and performance data to understand student progress and decide where follow-up is needed.',
    sections: [
      {
        number: '5.1',
        title: 'View Results',
        steps: ['Open the classroom.', 'Open Assignments.', 'Select the assignment.'],
        screenshot: {
          src: '/images/teacher-guide/chapter-5/assignment-results-overview.png',
          alt: 'Assignment Info showing four completed learners, one unfinished learner, and the beginning of Student Performance.',
          caption: 'After students submit the assignment, Completion Status and Student Performance appear on Assignment Info.',
          highlights: [
            { label: 'Completion Status', left: 3.8, top: 54.8, width: 92.4, height: 30.2 },
          ],
        },
      },
      {
        number: '5.2',
        title: 'Check Student Completion',
        introduction: 'Open Completion Status to see:',
        bullets: ['Not Finished', 'Completed', 'Completed Late', 'Overdue'],
        paragraphs: [
          'Select a status to see the students in that group, or select View Detail to see all students. Not Finished work may still be within the available time; Overdue work has passed its due time.',
        ],
        screenshot: {
          src: '/images/teacher-guide/chapter-5/completion-detail.png',
          alt: 'All Learners showing one student who has not started and four students who completed on time, with their scores and completion details.',
          caption: 'All Learners shows each student’s status. Completed entries also show the score, percentage, time spent, and completion time.',
        },
      },
      {
        number: '5.3',
        title: 'Review Class Performance',
        bullets: [
          'Average Score includes assignments completed on time.',
          'Average Score (Including Late) includes all completed assignments.',
          'Each learning-unit result shows the number of questions and the class average percentage.',
        ],
        screenshot: {
          src: '/images/teacher-guide/chapter-5/class-performance.png',
          alt: 'Student Performance showing average scores and class results for each learning unit.',
          caption: 'Use the overall averages and learning-unit percentages to identify strengths and areas for follow-up practice.',
        },
      },
      {
        number: '5.4',
        title: 'Review Student Attempts',
        steps: [
          'Open View Detail.',
          'Check each student’s status, score, time spent, and completion time.',
          'Select a student who completed the assignment.',
          'Use the numbered controls to review the student’s answers and explanations.',
          'Close the attempt to return to All Learners.',
        ],
        screenshot: {
          src: '/images/teacher-guide/chapter-5/assignment-results-overview.png',
          alt: 'Assignment Info showing Completion Status and the View Detail button.',
          caption: 'Select View Detail under Completion Status.',
          highlights: [
            { label: 'View Detail', left: 38, top: 77.6, width: 24, height: 4.3 },
          ],
        },
        additionalScreenshots: [
          {
          src: '/images/teacher-guide/chapter-5/student-attempt-mixed.png',
          alt: 'A completed student attempt showing correct questions in green, incorrect questions in red, the selected answer, and the explanation.',
          caption: 'Green numbers mark correct answers and red numbers mark incorrect answers. Select a number to review that question.',
          highlights: [
            { label: 'Question navigation', left: 3.8, top: 12.8, width: 92.4, height: 5 },
            { label: 'Answer and explanation', left: 3.8, top: 36.7, width: 92.4, height: 53.2 },
          ],
          },
        ],
      },
    ],
    completion: 'Great work! You reviewed student completion, individual attempts, and class performance for an assignment.',
    previous: 'chapter-4',
    next: 'chapter-6',
  },
  {
    number: 6,
    slug: 'chapter-6',
    title: 'Create Follow-Up Practice',
    summary: 'Use assignment results to create and assign a follow-up quiz for areas where students need more practice.',
    sections: [
      {
        number: '6.1',
        title: 'Generate Follow-Up Quiz',
        steps: [
          'Open an assignment with student submissions.',
          'Review the Learning Unit Statistics and identify where students need more practice.',
          'Select Generate Similar Quiz at the bottom of Assignment Info.',
          'Choose Growth Areas for targeted practice or All Topics for balanced review.',
          'Choose Easier, Same, or Harder.',
          'Set the number of questions and time limit.',
          'Select Confirm.',
          'Wait for generation to finish. Hoppy opens the new quiz automatically.',
        ],
        note: {
          title: 'Choose Follow-Up Focus',
          text: 'Growth Areas prioritizes weaker learning units identified from the assignment results. All Topics spreads practice across the assignment’s learning units. Use Easier to rebuild confidence, Same to reinforce learning, or Harder to provide extension.',
        },
        screenshot: {
          src: '/images/teacher-guide/chapter-6/follow-up-entry.png',
          alt: 'Assignment Info showing learning-unit results and the follow-up quiz button.',
          caption: 'Review the learning-unit results, then select the follow-up quiz button.',
          highlights: [
            { label: 'Generate Similar Quiz', left: 3.8, top: 89.9, width: 92.4, height: 6.1 },
          ],
        },
        additionalScreenshots: [
          {
          src: '/images/teacher-guide/chapter-6/similar-quiz.png',
          alt: 'Follow-up quiz setup with focus area, difficulty, time limit, number of questions, and Confirm.',
          caption: 'Choose the focus and difficulty, set the duration and question count, then select Confirm.',
          highlights: [
            { label: 'Focus area', left: 7.8, top: 30.7, width: 84.4, height: 4.8 },
            { label: 'Difficulty', left: 7.8, top: 40.9, width: 84.4, height: 5.1 },
            { label: 'Time limit', left: 7.8, top: 48.8, width: 84.4, height: 7.3 },
            { label: 'Number of questions', left: 7.8, top: 59.5, width: 84.4, height: 7.3 },
            { label: 'Confirm', left: 3.8, top: 90, width: 92.4, height: 6.8 },
          ],
          },
        ],
      },
      {
        number: '6.2',
        title: 'Assign Follow-Up Quiz',
        steps: [
          'Review the follow-up quiz and make any needed changes.',
          'Select Assign.',
          'Choose the same classroom.',
          'Set the publication and due times, then create the assignment.',
        ],
        paragraphs: ['For a refresher on creating assignments, see Chapter 4.'],
        note: {
          title: 'Compare Follow-Up Results',
          text: 'After students complete the follow-up assignment, compare its learning-unit results with the original assignment to see whether performance improved. If you need a reminder on how to review completion and results, go back to Chapter 5.',
        },
        screenshot: {
          src: '/images/teacher-guide/chapter-3/quiz-info-start.png',
          alt: 'Hoppy Quiz Info screen with the Assign button at the bottom.',
          caption: 'Select Assign to publish the follow-up quiz as a new classroom assignment.',
          highlights: [
            { label: 'Assign', left: 4.5, top: 89.7, width: 91, height: 5.7 },
          ],
        },
      },
    ],
    completion: 'Your follow-up practice is ready to assign.',
    previous: 'chapter-5',
    next: 'chapter-7',
  },
  {
    number: 7,
    slug: 'chapter-7',
    title: 'Manage Classrooms and Assignments',
    summary: 'Keep classrooms organized by managing members, assignments, leaderboard settings, and recurring schedules.',
    sections: [
      {
        number: '7.1',
        title: 'Manage Members and Roles',
        paragraphs: [
          'Open My Classrooms, select a classroom, and open Members to view students, instructors, their roles, and the classroom owner.',
          'To remove a member, select the member, choose Remove from Classroom, and confirm. Only the classroom owner can remove an instructor.',
        ],
        screenshot: {
          src: '/images/teacher-guide/chapter-7/members.png',
          alt: 'Hoppy classroom Members tab showing the owner, instructor role, and five learners.',
          caption: 'Open Members to review the classroom owner, instructors, learners, and available removal controls.',
          highlights: [
            { label: 'Members', left: 75, top: 11.2, width: 22.5, height: 5.1 },
          ],
        },
      },
      {
        number: '7.2',
        title: 'View Classroom Leaderboard',
        paragraphs: [
          'Open a classroom to see the leaderboard preview, then select See all. The full list shows each student’s total points across published assignments and completed assignments out of the total.',
        ],
        screenshot: {
          src: '/images/teacher-guide/chapter-7/classroom-info.png',
          alt: 'Hoppy classroom information showing the classroom leaderboard preview and See all.',
          caption: 'Select See all from the classroom leaderboard preview.',
          highlights: [
            { label: 'See all', left: 75.5, top: 54.2, width: 18, height: 4.6 },
          ],
        },
        additionalScreenshots: [
          {
            src: '/images/teacher-guide/chapter-7/classroom-leaderboard.png',
            alt: 'Full Hoppy classroom leaderboard showing five learners, points, and completed assignment counts.',
            caption: 'The classroom leaderboard ranks learners by their total points across assignments.',
          },
        ],
      },
      {
        number: '7.3',
        title: 'Control Classroom Leaderboard Visibility',
        introduction: 'Open the classroom, then open Settings and Leaderboard Visibility.',
        bullets: [
          'Show All shows the complete classroom and assignment leaderboards to students.',
          'Show Top N shows the selected leading positions. Choose 3, 5, 10, or enter a custom number.',
          'Hide All hides the classroom and assignment leaderboards from students.',
          'For a School classroom, Follow school default applies the school’s leaderboard setting.',
        ],
        paragraphs: [
          'Students outside the visible Top N can still see their own position. These options control student access; instructors can still view the full leaderboards.',
          'Only the classroom owner can change the option. A school-managed setting may be read-only.',
        ],
        screenshot: {
          src: '/images/teacher-guide/chapter-7/settings.png',
          alt: 'Hoppy Classroom Settings showing Auto Assign Assignment, Leaderboard Visibility, and Google Classroom Linking.',
          caption: 'Open Classroom Settings and select Leaderboard Visibility.',
          highlights: [
            { label: 'Leaderboard Visibility', left: 3.8, top: 19.1, width: 92.4, height: 6.1 },
          ],
        },
        additionalScreenshots: [
          {
            src: '/images/teacher-guide/chapter-7/leaderboard-visibility.png',
            alt: 'Leaderboard Visibility screen showing Follow school default, Show All, Show Top N, Hide All, and Save.',
            caption: 'Choose what students can see, then select Save.',
            highlights: [
              { label: 'Visibility options', left: 3.8, top: 15.8, width: 92.4, height: 20.3 },
              { label: 'Save', left: 3.8, top: 37.3, width: 92.4, height: 6.3 },
            ],
          },
        ],
      },
      {
        number: '7.4',
        title: 'Manage Existing Assignments',
        introduction: 'An assignment may appear as:',
        bullets: ['Unpublished', 'Published', 'All Completed', 'Closed', 'Closed (Missing Submissions)'],
        paragraphs: [
          'Open an assignment to view its questions and answers. Edit its title, notes, or due date when permitted. The publication time cannot be edited.',
          'Deleting an assignment cannot be undone. If the classroom is linked to Google Classroom, the corresponding Google coursework is also deleted.',
        ],
        screenshot: {
          src: '/images/teacher-guide/chapter-7/classroom-settings.png',
          alt: 'Assignment information screen with the Edit and Delete menu open.',
          caption: 'Open the three-dot menu to edit or delete an assignment.',
          highlights: [
            { label: 'Edit or Delete', left: 71.8, top: 4.5, width: 26.4, height: 13.8 },
          ],
        },
      },
      {
        number: '7.5',
        title: 'Set Up Auto Assignments',
        introduction: 'Open the classroom Settings, then select Auto Assign Assignment to open Auto Assignment Settings.',
        steps: [
          'Select New to open Add Configuration.',
          'Choose the grade level, subject, and language.',
          'Choose the Days of Week for automatic assignments.',
          'Set the Publish Hour and Due After period.',
          'Select Save. The new configuration appears as Enabled.',
        ],
        paragraphs: [
          'Use the switch to set a configuration to Enabled or Disabled. Open its three-dot menu to Edit or Delete it.',
          'The grade and subject cannot be changed in Edit Configuration.',
        ],
        screenshot: {
          src: '/images/teacher-guide/chapter-7/auto-assignment.png',
          alt: 'Auto Assignment Settings with no configurations and the New button.',
          caption: 'Select New in Auto Assignment Settings.',
          highlights: [
            { label: 'New', left: 76.5, top: 14.6, width: 16.8, height: 5.2 },
          ],
        },
        additionalScreenshots: [
          {
            src: '/images/teacher-guide/chapter-7/auto-assignment-form.png',
            alt: 'Auto Assignment configuration form for grade, subject, language, days, publication time, and due period.',
            caption: 'Complete Add Configuration, then select Save.',
            highlights: [
              { label: 'Grade, subject, and language', left: 8.2, top: 22.1, width: 83.6, height: 29.4 },
              { label: 'Schedule', left: 8.2, top: 52.5, width: 83.6, height: 28.4 },
              { label: 'Save', left: 50.5, top: 81.3, width: 37.5, height: 6.8 },
            ],
          },
        ],
      },
      {
        number: '7.6',
        title: 'View Assignment Leaderboard',
        paragraphs: [
          'Open an assignment and select View Leaderboard. Completed attempts are ranked by score and then by earlier completion time. Each entry shows the score, time taken, completion time, and late status.',
        ],
        screenshot: {
          src: '/images/teacher-guide/chapter-5/assignment-info.png',
          alt: 'Assignment information screen with the View Leaderboard button.',
          caption: 'Select View Leaderboard from the assignment.',
          highlights: [
            { label: 'View Leaderboard', left: 3.8, top: 68.3, width: 92.4, height: 6 },
          ],
        },
        additionalScreenshots: [
          {
            src: '/images/teacher-guide/chapter-7/assignment-leaderboard.png',
            alt: 'Full Hoppy assignment leaderboard showing four learners ranked by score and time.',
            caption: 'The assignment leaderboard ranks completed attempts by score and then completion time.',
          },
        ],
      },
    ],
    completion: 'You can now maintain your classroom, assignments, members, and leaderboards.',
    previous: 'chapter-6',
    next: 'chapter-8',
  },
  {
    number: 8,
    slug: 'chapter-8',
    title: 'Connect Google Classroom',
    summary: 'Connect an existing Google Classroom course to bring matching students into Hoppy and synchronize Hoppy assignments and scores.',
    sections: [
      {
        number: '8.1',
        title: 'Connect Google Classroom',
        introduction: 'This chapter is for schools using Google Classroom. Open the Hoppy classroom, then open Settings and Google Classroom Linking.',
        steps: [
          'Select Link to Google Classroom and authorize the Google account.',
          'Select the Google Classroom course.',
          'Keep Import students selected if you want to import the roster.',
          'Select Link.',
        ],
        paragraphs: [
          'Roster matching uses each student’s email address. Matching Hoppy accounts are added to the classroom; unmatched students receive an email invitation code.',
          'Only the classroom owner can manage the link. Google Classroom linking is available for School and Public classrooms.',
        ],
        screenshot: {
          src: '/images/teacher-guide/chapter-7/settings.png',
          alt: 'Hoppy Classroom Settings with Google Classroom Linking available.',
          caption: 'Open Classroom Settings and select Google Classroom Linking.',
          highlights: [
            { label: 'Google Classroom Linking', left: 3.8, top: 24.8, width: 92.4, height: 6.1 },
          ],
        },
        additionalScreenshots: [
          {
            src: '/images/teacher-guide/chapter-7/google-classroom.png',
            alt: 'Google Classroom Linking screen showing Not Linked and the Link to Google Classroom button.',
            caption: 'Select Link to Google Classroom to begin connecting a course.',
            highlights: [
              { label: 'Link to Google Classroom', left: 3.8, top: 33.2, width: 92.4, height: 6.1 },
            ],
          },
          {
            src: '/images/teacher-guide/chapter-7/google-classroom-linked.png',
            alt: 'Google Classroom Linking showing the Hoppy course with Linked status.',
            caption: 'After linking, check that the status is Linked and that the correct Google Classroom course is shown.',
            highlights: [
              { label: 'Linked course', left: 3.8, top: 18.5, width: 92.4, height: 13.4 },
            ],
          },
          {
            src: '/images/teacher-guide/chapter-7/google-classroom-imported-member.png',
            alt: 'Hoppy classroom Members tab showing Test User added as a sixth student after Google Classroom roster import.',
            caption: 'Matching Google Classroom students are added under Members. Test User is the imported student in this example.',
            highlights: [
              { label: 'Imported student', left: 3.8, top: 63.2, width: 92.4, height: 7.6 },
            ],
          },
        ],
      },
      {
        number: '8.2',
        title: 'Manage Google Classroom Synchronization',
        introduction: 'The connection status appears as Not Linked, Linked, or Linked (Action Required).',
        bullets: [
          'Publishing a Hoppy assignment creates corresponding Google Classroom coursework.',
          'Changing its title or deadline updates the Google coursework.',
          'Completing the Hoppy assignment sends the student’s percentage score as a grade out of 100.',
          'Deleting the Hoppy assignment deletes the corresponding Google coursework.',
          'Relink reconnects an inactive authorization.',
          'Switch Course connects future activity to a different course; existing coursework does not move.',
          'Unlink disconnects the course and stops future synchronization.',
        ],
        note: {
          title: 'One-way limitations',
          text: 'Google Classroom assignments do not import into Hoppy. Grades edited in Google Classroom do not return to Hoppy.',
        },
        screenshot: {
          src: '/images/teacher-guide/chapter-7/google-classroom-linked.png',
          alt: 'Google Classroom Linking showing Linked status, the Hoppy course, and Switch Course and Unlink controls.',
          caption: 'Check the linked course here. Use Switch Course or Unlink only when you need to change the connection.',
          highlights: [
            { label: 'Connection status', left: 3.8, top: 18.5, width: 92.4, height: 13.4 },
          ],
        },
      },
    ],
    completion: 'Your Hoppy classroom is connected to Google Classroom.',
    previous: 'chapter-7',
    next: 'chapter-9',
  },
  {
    number: 9,
    slug: 'chapter-9',
    title: 'Advanced Quiz Options and Preferences',
    summary: 'Set teaching and quiz preferences, and use Others when content does not match a specific learning unit.',
    sections: [
      {
        number: '9.1',
        title: 'Set Usual Grades and Preferred Subjects',
        introduction: 'Open Profile, select the settings gear, and open User Profile.',
        steps: [
          'Choose the grades you usually teach.',
          'Choose your preferred subjects.',
          'Wait for the changes to save automatically.',
          'Open Explore to see the result.',
        ],
        paragraphs: [
          'After saving, Explore selects one of your usual grades and moves your preferred subjects to the front. The available subject list does not change.',
        ],
        screenshot: {
          src: '/images/teacher-guide/chapter-8/settings.png',
          alt: 'Hoppy Settings page showing User Profile and Preferences.',
          caption: 'Open Profile, select the settings gear, then open User Profile.',
          highlights: [
            { label: 'User Profile', left: 4, top: 12.3, width: 92, height: 7.1 },
          ],
        },
        additionalScreenshots: [
          {
            src: '/images/teacher-guide/chapter-8/grades-subjects.png',
            alt: 'User Profile page showing selectable grades and preferred subjects.',
            caption: 'Before: save the grades you usually teach and the subjects you want shown first.',
            highlights: [
              { label: 'Selected grade', left: 51.6, top: 41.9, width: 21.6, height: 4.5 },
              { label: 'Selected subject', left: 46.9, top: 85.6, width: 37.8, height: 4.5 },
            ],
          },
          {
            src: '/images/teacher-guide/chapter-8/explore-after-preferences.png',
            alt: 'Explore showing Primary 6 selected and Physical Education placed first after teaching preferences are saved.',
            caption: 'After: Explore opens with a usual grade selected and a preferred subject moved to the front. Other subjects remain available.',
            highlights: [
              { label: 'Usual grade selected', left: 3.8, top: 14.3, width: 92.4, height: 4.8 },
              { label: 'Preferred subject first', left: 8.2, top: 22, width: 36, height: 4.6 },
            ],
          },
        ],
      },
      {
        number: '9.2',
        title: 'Set App and Quiz Languages',
        introduction: 'From Settings, open Preferences.',
        bullets: [
          'Preferred Language changes Hoppy’s menus, buttons, and instructions.',
          'Preferred Quiz Language provides the starting language for newly created quiz content.',
        ],
        note: {
          title: 'Existing quizzes',
          text: 'Changing these preferences does not translate quizzes that already exist.',
        },
        screenshot: {
          src: '/images/teacher-guide/chapter-8/preferences-languages-selected.png',
          alt: 'Preferences page with English selected for both Preferred Language and Preferred Quiz Language.',
          caption: 'Choose the language used by Hoppy’s interface and the starting language for newly created quizzes.',
          highlights: [
            { label: 'Preferred Language', left: 3.8, top: 15.1, width: 92.4, height: 4.7 },
            { label: 'Preferred Quiz Language', left: 3.8, top: 23.9, width: 92.4, height: 4.7 },
          ],
        },
        additionalScreenshots: [
          {
            src: '/images/teacher-guide/chapter-8/preferred-quiz-language-effect.png',
            alt: 'Create quiz confirmation screen showing the interface in English and English selected as the quiz language.',
            caption: 'Effect: Hoppy’s instructions appear in the preferred app language, while the language for a new quiz starts with the preferred quiz language.',
            highlights: [
              { label: 'Preferred quiz language applied', left: 38.6, top: 42.3, width: 53.2, height: 4.8 },
            ],
          },
        ],
      },
      {
        number: '9.3',
        title: 'Save Quiz Instructions',
        steps: [
          'On the Preferences page, find Custom Quiz Prompt.',
          'Enter instructions you want to reuse, such as using metric units or keeping questions concise.',
          'Wait for the prompt to save automatically.',
          'During quiz creation, turn on Apply custom quiz prompt when you want to use the saved instructions.',
        ],
        note: {
          title: 'Effect on quiz generation',
          text: 'When enabled, Hoppy applies the saved instructions while generating the quiz. When disabled, the saved prompt is not applied.',
        },
        screenshot: {
          src: '/images/teacher-guide/chapter-8/preferences.png',
          alt: 'Preferences page with the Custom Quiz Prompt field.',
          caption: 'Save reusable instructions in the Custom Quiz Prompt field.',
          highlights: [
            { label: 'Custom Quiz Prompt', left: 3.8, top: 53.1, width: 92.4, height: 14.1 },
          ],
        },
        additionalScreenshots: [
          {
            src: '/images/teacher-guide/chapter-1/custom-made-details.jpeg',
            alt: 'Quiz settings with the Apply custom quiz prompt switch turned off.',
            caption: 'Turn on Apply custom quiz prompt to use the saved instructions for this quiz.',
            highlights: [
              { label: 'Apply saved instructions', left: 8.6, top: 69.1, width: 82.5, height: 7.1 },
            ],
          },
        ],
      },
      {
        number: '9.4',
        title: 'Use the Others Learning Unit',
        introduction: 'Others is a fallback in Create for content that does not match a specific learning unit.',
        bullets: [
          'Hoppy may suggest or select Others when your quiz description or reference materials do not match the available learning units.',
          'Use Others only when no specific learning unit accurately describes the content.',
          'Provide a clear quiz description or suitable reference materials so Hoppy knows what questions to generate.',
          'Select Custom Made. Question Bank requires at least one specific learning unit with existing questions.',
        ],
        note: {
          title: 'Not a curriculum topic',
          text: 'Others does not add a new named learning unit. It groups content that falls outside the available learning-unit list.',
        },
        screenshot: {
          src: '/images/teacher-guide/chapter-9/others-learning-unit.png',
          alt: 'Hoppy Create showing Others automatically selected as the only learning unit for an unmatched quiz topic.',
          caption: 'When the requested content does not match a specific learning unit, Hoppy can select Others automatically.',
          highlights: [
            { label: 'Others selected', left: 8.2, top: 35.6, width: 83.6, height: 4.6 },
          ],
        },
        additionalScreenshots: [
          {
            src: '/images/teacher-guide/chapter-9/others-quiz-mode.png',
            alt: 'Quiz settings showing Custom Made selected and Question Bank unavailable because only the Others learning unit is selected.',
            caption: 'With only Others selected, use Custom Made. Question Bank is unavailable because Others has no existing question pool.',
            highlights: [
              { label: 'Available question mode', left: 8.2, top: 54.4, width: 83.7, height: 6.6 },
              { label: 'Why Custom Made is required', left: 8.2, top: 65.8, width: 83.7, height: 5.1 },
            ],
          },
        ],
      },
    ],
    completion: 'You are ready to use Hoppy’s advanced quiz options and preferences.',
    previous: 'chapter-8',
    next: 'chapter-10',
  },
  {
    number: 10,
    slug: 'chapter-10',
    title: 'Teach Safely and Responsibly with Hoppy',
    summary: 'Use Hoppy responsibly by checking AI-generated content, protecting student information, and choosing fair classroom settings.',
    sections: [
      {
        number: '10.1',
        title: 'Check AI-Generated Content',
        bullets: [
          'Review every generated question, answer, and explanation before students see it.',
          'Edit unclear or unsuitable questions and report content that needs attention.',
          'Confirm that the language, reading level, and difficulty fit your students.',
        ],
      },
      {
        number: '10.2',
        title: 'Protect Student Information',
        bullets: [
          'Do not place unnecessary personal or sensitive student information in quiz prompts, notes, or uploaded files.',
          'Share classroom links, codes, and QR codes only with the intended learners.',
          'Review classroom members and remove people who should no longer have access.',
        ],
      },
      {
        number: '10.3',
        title: 'Use Appropriate Teaching Materials',
        bullets: [
          'Upload only materials that you are allowed to use.',
          'Remove confidential information before uploading a file.',
          'Check that generated questions stay faithful to the source material and learning goal.',
        ],
      },
      {
        number: '10.4',
        title: 'Choose Fair Classroom Settings',
        bullets: [
          'Choose leaderboard visibility that suits the age and needs of the class.',
          'Allow enough time for the task and consider device or connectivity access.',
          'Use Hoppy alongside teacher explanation, discussion, and other learning activities.',
        ],
      },
    ],
    completion: 'You have reviewed the key practices for safe and responsible use.',
    previous: 'chapter-9',
    next: 'chapter-11',
  },
  {
    number: 11,
    slug: 'chapter-11',
    title: 'Solve Common Problems and Get Help',
    summary: 'Resolve common setup and synchronization problems so teaching can continue, and know where to get help.',
    sections: [
      {
        number: '11.1',
        title: 'Find a Missing Subject or Learning Unit',
        bullets: [
          'Check the selected grade level; available subjects depend on the grade.',
          'Check the selected subject and scroll through its learning units.',
          'Remember that preferred subjects only appear first in Explore; preferences do not add subjects.',
        ],
      },
      {
        number: '11.2',
        title: 'Assignment Not Visible',
        bullets: [
          'Check that the student has joined the correct classroom.',
          'Check the Published Date & Time. An unpublished assignment is not yet available.',
          'Check that the assignment was created in the intended classroom.',
        ],
      },
      {
        number: '11.3',
        title: 'Missing Results or Growth Areas',
        bullets: [
          'Wait until at least one student completes the assignment.',
          'Check Completion Status to confirm that a submission was recorded.',
          'Refresh the assignment after the submission is complete.',
        ],
      },
      {
        number: '11.4',
        title: 'File Upload Problems',
        bullets: [
          'Check that the file type is supported and that the file opens normally on your device.',
          'Try a smaller file or split a long document into shorter reference materials.',
          'Remove password protection before uploading.',
        ],
      },
      {
        number: '11.5',
        title: 'Google Classroom Sync Problems',
        bullets: [
          'Open Google Classroom Linking and check whether the status is Linked or Linked (Action Required).',
          'Use Relink if authorization has expired.',
          'Confirm that the intended Google Classroom course is connected.',
        ],
      },
      {
        number: '11.6',
        title: 'Report Questions and Get Help',
        paragraphs: [
          'Use Report while reviewing a quiz question to send feedback about that question.',
          'For more answers, open Hoppy FAQ. If an account, access, or synchronization problem continues, email hi@hoppy.day.',
        ],
      },
    ],
    completion: 'You now know where to begin when you need help.',
    previous: 'chapter-10',
  },
];

export const teacherGuideChapterMap = new Map(
  teacherGuideChapters.map((chapter) => [chapter.slug, chapter]),
);

export const publishedTeacherGuideChapters = teacherGuideChapters.filter(
  (chapter) => chapter.number <= 11,
);

export const publishedTeacherGuideSlugs = new Set(
  publishedTeacherGuideChapters.map((chapter) => chapter.slug),
);

export function sectionId(number: string): string {
  return number.replace('.', '-');
}
