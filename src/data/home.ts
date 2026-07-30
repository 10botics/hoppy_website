import type { Lang } from '../i18n/ui';

export interface HomeAudience {
  id: 'parents' | 'students' | 'teachers';
  number: string;
  label: string;
  summary: string;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  screenshots: Array<{
    title: string;
    description: string;
  }>;
}

export interface HomeContent {
  conceptLabel: string;
  heroEyebrow: string;
  heroTitleStart: string;
  heroTitleAccent: string;
  heroTitleEnd: string;
  heroDescription: string;
  primaryAction: string;
  secondaryAction: string;
  proofPoints: string[];
  heroScreenshotTitle: string;
  heroScreenshotDescription: string;
  explanationLabel: string;
  audiences: HomeAudience[];
  teacherGuideAction: string;
  appSmall: string;
  appStore: string;
  playSmall: string;
  playStore: string;
  pricingTitle: string;
  pricingText: string;
  pricingButton: string;
  ctaTitle: string;
  ctaText: string;
}

export const homeContent: Record<Lang, HomeContent> = {
  en: {
    conceptLabel: 'One learning platform, three clear journeys',
    heroEyebrow: 'For students, parents and teachers',
    heroTitleStart: 'Learning that moves ',
    heroTitleAccent: 'everyone',
    heroTitleEnd: ' forward.',
    heroDescription: 'Practice, insight and classroom tools for students, parents and teachers.',
    primaryAction: 'Download Hoppy',
    secondaryAction: 'Explore by role',
    proofPoints: ['Visual quizzes', 'Instant explanations', 'Clear learning progress'],
    heroScreenshotTitle: 'Hero app screenshot',
    heroScreenshotDescription: 'Use one clean quiz screen with the answer and instant explanation visible.',
    explanationLabel: 'Instant explanation',
    audiences: [
      {
        id: 'parents',
        number: '01',
        label: 'Parents',
        summary: 'Review results · Personalised practice · Weekly reports',
        eyebrow: 'For parents',
        title: 'Know where your child needs help.',
        description: 'Turn quiz results into a useful next step instead of another score to remember.',
        points: [
          'Review quiz results and every wrong answer',
          'Create personalised practice for weaker topics',
          'Follow progress through a weekly learning report',
        ],
        screenshots: [
          {
            title: 'Weekly report',
            description: 'Weekly learning report showing overall progress and weaker learning units.',
          },
          {
            title: 'Review answers',
            description: 'Quiz results and wrong-answer review.',
          },
          {
            title: 'Create practice',
            description: 'Creating personalised follow-up practice.',
          },
        ],
      },
      {
        id: 'students',
        number: '02',
        label: 'Students',
        summary: 'Leaderboards by subject and grade · Instant explanations · XP & Gems',
        eyebrow: 'For students',
        title: 'Every quiz becomes progress.',
        description: 'Students can challenge themselves, understand mistakes immediately and stay motivated between quizzes.',
        points: [
          'Climb the leaderboard for your subject and grade',
          'Learn from wrong answers with instant explanations',
          'Earn XP from quizzes and Gems from missions',
        ],
        screenshots: [
          {
            title: 'Subject leaderboard',
            description: "Leaderboard for the student's subject and grade with their position visible.",
          },
          {
            title: 'Instant explanations',
            description: 'Wrong answer with the instant explanation expanded.',
          },
          {
            title: 'Quiz XP',
            description: 'Completed quiz showing the XP reward.',
          },
        ],
      },
      {
        id: 'teachers',
        number: '03',
        label: 'Teachers',
        summary: 'Quiz creation · Learning insights · Classroom sync',
        eyebrow: 'For teachers',
        title: 'Create, understand and manage.',
        description: 'Create quizzes for different subjects and levels, identify learning needs, and plan the next assignment—all in one place.',
        points: [
          'Generate quizzes from topics or teaching materials and export editable DOCX',
          'Use assignment results to identify learning needs',
          'Schedule quizzes and sync with Google Classroom',
        ],
        screenshots: [
          {
            title: 'Create personalised quizzes',
            description: 'Generate a quiz for any subject or level from topics or teaching materials.',
          },
          {
            title: 'See class performance',
            description: 'Assignment results showing class performance and learning needs.',
          },
          {
            title: 'Sync Google Classroom',
            description: 'Classroom management or Google Classroom linked status.',
          },
        ],
      },
    ],
    teacherGuideAction: 'Open Guide',
    appSmall: 'Download on the',
    appStore: 'App Store',
    playSmall: 'GET IT ON',
    playStore: 'Google Play',
    pricingTitle: 'Find the learning plan that fits',
    pricingText: 'From an easy start to more intensive daily practice, choose according to your needs.',
    pricingButton: 'View plans and pricing',
    ctaTitle: 'Ready to Start Hopping?',
    ctaText: 'Join thousands of kids already learning with Hoppy.',
  },
  tc: {
    conceptLabel: '同一個學習平台，三條清晰路徑',
    heroEyebrow: '為學生、家長和老師而設',
    heroTitleStart: '讓學習帶動',
    heroTitleAccent: '每個人',
    heroTitleEnd: '一起向前。',
    heroDescription: '為學生、家長和老師提供練習、學習洞察和課堂工具。',
    primaryAction: '下載 Hoppy',
    secondaryAction: '按身份了解',
    proofPoints: ['視覺化練習', '即時解釋', '清晰學習進度'],
    heroScreenshotTitle: '首頁應用程式截圖',
    heroScreenshotDescription: '使用一張清晰的練習畫面，同時顯示答案和即時解釋。',
    explanationLabel: '即時解釋',
    audiences: [
      {
        id: 'parents',
        number: '01',
        label: '家長',
        summary: '查看結果 · 個人化練習 · 每週報告',
        eyebrow: '家長功能',
        title: '清楚孩子需要加強的地方。',
        description: '把練習結果變成實際的下一步，而不只是一個需要記住的分數。',
        points: [
          '查看孩子的練習結果和每一道錯題',
          '為較弱的課題建立個人化練習',
          '透過每週學習報告掌握孩子的進度',
        ],
        screenshots: [
          {
            title: '每週報告',
            description: '每週學習報告，顯示整體進度和需要加強的學習單元。',
          },
          {
            title: '重溫答案',
            description: '練習結果和錯題重溫。',
          },
          {
            title: '建立練習',
            description: '建立個人化跟進練習。',
          },
        ],
      },
      {
        id: 'students',
        number: '02',
        label: '學生',
        summary: '按科目和年級劃分的排行榜 · 即時解釋 · XP 和寶石',
        eyebrow: '學生功能',
        title: '每次練習，都是進步。',
        description: '學生可以挑戰自己、即時理解錯誤，並在每次練習之間保持動力。',
        points: [
          '在同科同級排行榜上爭取更高名次',
          '透過即時解釋從錯題中學習',
          '從練習賺取 XP，從任務獲得寶石',
        ],
        screenshots: [
          {
            title: '科目排行榜',
            description: '顯示學生所屬科目、年級和排名位置的排行榜。',
          },
          {
            title: '即時解釋',
            description: '答錯題目後展開即時解釋。',
          },
          {
            title: '練習 XP',
            description: '完成練習後顯示獲得的 XP。',
          },
        ],
      },
      {
        id: 'teachers',
        number: '03',
        label: '老師',
        summary: '建立練習 · 學習需要 · 課室同步',
        eyebrow: '老師功能',
        title: '建立、了解、管理，一站完成。',
        description: '在同一個平台按不同科目和程度建立練習、了解學習需要，並安排下一份功課。',
        points: [
          '按課題或教材建立練習，並匯出可編輯 DOCX',
          '利用功課結果了解學習需要',
          '排程練習並與 Google Classroom 同步',
        ],
        screenshots: [
          {
            title: '建立個人化練習',
            description: '按科目、程度、課題或教材建立練習。',
          },
          {
            title: '查看全班表現',
            description: '顯示全班表現和學習需要的功課結果。',
          },
          {
            title: '連結 Google Classroom',
            description: '課室管理或 Google Classroom 已連結狀態。',
          },
        ],
      },
    ],
    teacherGuideAction: '開啟指南',
    appSmall: '下載於',
    appStore: 'App Store',
    playSmall: '立即下載',
    playStore: 'Google Play',
    pricingTitle: '尋找適合你的學習方案',
    pricingText: '由輕鬆開始到更密集的日常練習，按需要選擇方案。',
    pricingButton: '查看方案與收費',
    ctaTitle: '準備好開始跳躍了嗎？',
    ctaText: '加入數以千計正在與 Hoppy 一起學習的小朋友。',
  },
};
