import {
  teacherGuideChapters,
  type GuideChapter,
  type GuideScreenshot,
  type GuideSection,
} from './teacherGuide';

interface ScreenshotTranslation {
  caption: string;
  labels?: string[];
  src?: string;
}

interface SectionTranslation {
  title: string;
  introduction?: string;
  steps?: string[];
  paragraphs?: string[];
  bullets?: string[];
  note?: { title: string; text: string };
  screenshot?: ScreenshotTranslation;
  additionalScreenshots?: ScreenshotTranslation[];
}

interface ChapterTranslation {
  title: string;
  summary: string;
  completion: string;
  sections: SectionTranslation[];
}

const translations: ChapterTranslation[] = [
  {
    title: '在「探索」選擇主題並建立練習',
    summary: '在「探索」選擇年級、科目和學習單元，建立配合課程的練習。',
    completion: '做得好！你已使用「探索」建立並檢查練習。',
    sections: [
      {
        title: '選擇年級',
        steps: ['開啟「探索」。', '選擇年級。'],
        screenshot: { caption: '從底部導覽列開啟「探索」。紅框標示要按的按鈕。', labels: ['探索'] },
        additionalScreenshots: [
          { caption: '選擇年級。本例以小學六年級為例。', labels: ['小學六年級'] },
        ],
      },
      {
        title: '選擇科目和學習單元',
        introduction: 'Hoppy 將科目內的課程主題稱為「學習單元」。',
        steps: ['選擇科目。', '選擇練習所需的學習單元。', '選擇「建立練習」。'],
        note: { title: '選擇上限', text: '每份練習最多可選擇五個學習單元。' },
        screenshot: {
          caption: '選擇科目，以剔號按鈕選取學習單元，然後按「建立練習」。紅框標示各項操作。',
          labels: ['中文', '學習單元剔號按鈕', '建立練習'],
        },
      },
      {
        title: '以「度身訂造」生成題目',
        steps: [
          '設定預計作答時間。',
          '選擇題目數量。',
          '選擇「度身訂造」。',
          '向下捲動並選擇解釋語言。',
          '選擇「確認」。',
        ],
        note: { title: '另一個選項', text: '「現有題庫」會為支援的學習單元選用合適的現有題目。' },
        screenshot: {
          caption: '設定練習時間和題目數量，然後選擇「度身訂造」。紅框標示三項設定。',
          labels: ['時間限制', '題目數量', '度身訂造'],
        },
        additionalScreenshots: [
          {
            caption: '選擇解釋語言，然後按「確認」。',
            labels: ['解釋語言是', '確認'],
            src: '/images/teacher-guide-tc/chapter-1/custom-made-language.jpeg',
          },
        ],
      },
      {
        title: '檢查已生成的練習',
        steps: [
          '檢查練習標題、年級、科目、題目數量和時間。',
          '檢查練習說明和相關學習單元。',
        ],
        screenshot: {
          caption: '生成完成後，Hoppy 會開啟「練習資訊」頁面。',
          src: '/images/teacher-guide-tc/chapter-1/generated-quiz-info.png',
        },
      },
    ],
  },
  {
    title: '使用「建立」將構思或材料變成練習',
    summary: '將課堂構思或參考材料轉化為切合教學內容的練習。',
    completion: '做得好！你已使用「建立」建立並檢查練習。',
    sections: [
      {
        title: '輸入練習說明',
        steps: [
          '開啟「建立」。',
          '輸入這次練習的說明。你可以包括科目、年級、學習單元或特定重點。',
          '選擇箭嘴繼續。',
        ],
        screenshot: { caption: '從底部導覽列開啟「建立」。紅框標示要按的按鈕。', labels: ['建立'] },
        additionalScreenshots: [
          { caption: '輸入練習說明，然後按紅框內的箭嘴。', labels: ['練習說明', '繼續'] },
        ],
      },
      {
        title: '加入參考材料（可選）',
        steps: [
          '選擇加號（+）按鈕。',
          '選擇「添加圖片」、「添加文件」或「拍攝多張照片」。',
          '加入希望 Hoppy 使用的參考材料。',
          '選擇箭嘴繼續。',
        ],
        paragraphs: ['你可以只使用練習說明、只使用參考材料，或同時使用兩者。'],
        note: {
          title: '保障資料及使用權限',
          text: '請勿上載個人資料或你沒有權限使用的教材。',
        },
        screenshot: { caption: '使用紅框內的選單加入參考材料。', labels: ['參考材料選項'] },
      },
      {
        title: '確認練習資料',
        steps: [
          '檢查系統辨識的科目、年級和語言。',
          '如有選項不符合所需練習，請加以更正。',
          '選擇「確認」。',
        ],
        screenshot: {
          caption: '檢查系統辨識的科目、年級和語言，然後按「確認」。',
          labels: ['科目、年級和語言', '確認'],
        },
      },
      {
        title: '選擇學習單元',
        steps: ['選擇至少一個學習單元。', '選擇「確認」。'],
        note: {
          title: '沒有合適的學習單元',
          text: '當說明或參考材料不符合特定學習單元時，Hoppy 可能會建議「其他」。你可以使用「其他」和「度身訂造」繼續。第 9 章會說明這項進階選項。',
        },
        screenshot: {
          caption: '選擇練習所需的學習單元，然後按「確認」。',
          labels: ['學習單元剔號按鈕', '確認'],
        },
      },
      {
        title: '選擇練習設定',
        steps: [
          '設定預計作答時間。',
          '選擇題目數量。',
          '選擇「度身訂造」。',
          '選擇「確認」。',
        ],
        note: { title: '另一個選項', text: '「現有題庫」會為支援的學習單元選用合適的現有題目。' },
        screenshot: {
          caption: '設定時間和題目數量，選擇「度身訂造」，然後按「確認」。',
          labels: ['時間限制', '題目數量', '度身訂造', '確認'],
        },
      },
      {
        title: '檢查已生成的練習',
        steps: [
          '檢查練習標題、年級、科目、題目數量和時間。',
          '檢查練習說明和相關學習單元。',
        ],
      },
    ],
  },
  {
    title: '指派練習前先作檢查',
    summary: '檢查練習內容、舉報問題，並選擇合適的分享或匯出方式，確保練習可以使用。',
    completion: '練習已完成檢查，可以使用。',
    sections: [
      {
        title: '預覽練習',
        steps: [
          '選擇「開始」。',
          '選擇答案並按「提交」。',
          '查看回饋；如有提供，選擇「查看解釋」。',
          '選擇「下一題」。',
          '在最後一題選擇「完成練習」。',
          '依照結果頁面選擇「完成」及「返回」。',
        ],
        note: {
          title: '試做記錄',
          text: '這會建立你的個人試做記錄，而不是課室功課。練習仍會保留在「我的練習/練習清單」。',
        },
        screenshot: { caption: '選擇「開始」試做練習。紅框位於按鈕外圍。', labels: ['開始'] },
        additionalScreenshots: [
          {
            caption: '提交答案後，查看回饋；需要時開啟解釋，再選擇「下一題」。',
            labels: ['查看解釋', '下一題'],
          },
          { caption: '選擇「查看解釋」後，Hoppy 會在回饋下方展開完整解釋。' },
        ],
      },
      {
        title: '查看題目、答案和解釋',
        steps: [
          '在練習頁面選擇「查看題目」。',
          '使用箭嘴或題號切換題目。',
          '檢查每道題目、答案選項、正確答案和解釋。',
          '選擇關閉（X）返回練習頁面。',
        ],
        screenshot: { caption: '選擇「查看題目」檢查練習。', labels: ['查看題目'] },
        additionalScreenshots: [
          {
            caption: '切換題目，檢查答案和解釋；如發現問題，可使用「舉報」。',
            labels: ['題目導覽', '解釋'],
          },
        ],
      },
      {
        title: '查看練習排行榜',
        paragraphs: ['選擇「查看排行榜」，查看已完成練習的用戶，並按分數和完成時間排列。'],
        screenshot: { caption: '練習排行榜會按分數及完成時間排列已完成練習的用戶。' },
      },
      {
        title: '舉報問題',
        paragraphs: ['查看題目時如發現問題，請選擇「舉報」並選取原因。'],
        screenshot: { caption: '選擇旗幟，舉報目前題目的問題。', labels: ['舉報'] },
        additionalScreenshots: [
          { caption: '選擇最能描述問題的原因。', labels: ['舉報原因'] },
        ],
      },
      {
        title: '分享練習',
        steps: [
          '選擇「分享練習」。',
          '如你是練習建立者，請選擇練習的可見性。',
          '選擇「分享連結」或「複製連結」，或顯示／分享 QR 碼。',
        ],
        bullets: [
          '「公開」讓練習可被搜尋和分享。',
          '「不公開」讓用戶透過連結開啟練習，但不會公開顯示。',
          '「私人」練習不可分享。',
        ],
        note: {
          title: '直接分享',
          text: '直接分享適合非正式練習，但不會建立課室完成記錄，練習建立者亦無法查看參加者的答案。如需監察學生進度，請使用功課。',
        },
        screenshot: {
          caption: '選擇可見性，然後分享或複製練習連結。',
          labels: ['可見性', '連結', '分享連結／複製連結'],
        },
        additionalScreenshots: [
          { caption: '開啟「QR 碼」，顯示或分享練習 QR 碼。', labels: ['QR 碼'] },
        ],
      },
      {
        title: '將練習匯出為 PDF',
        steps: ['在練習頁面選擇「匯出 PDF」。', '檢查 PDF 預覽。', '選擇「儲存 PDF」。'],
        paragraphs: ['PDF 包含題目，以及附有解釋的答案部分。當練習的可見性允許分享時，亦可能顯示分享連結或 QR 碼。'],
        screenshot: { caption: '檢查預覽，然後選擇「儲存 PDF」。', labels: ['儲存 PDF'] },
      },
    ],
  },
  {
    title: '將練習發佈為課室功課',
    summary: '將已檢查的練習設定為定時發佈的課室功課，讓學生在適當時間開啟。',
    completion: '課室功課已建立，將在設定的發佈時間開放。',
    sections: [
      {
        title: '選擇或建立課室',
        steps: ['開啟「我的課室」。', '選擇現有課室，或建立課室並設定容易辨認的名稱。'],
        note: { title: '重用課室', text: '日後的功課可以繼續使用同一個課室。' },
        screenshot: { caption: '開啟「我的課室」；如需新課室，請選擇「建立」。', labels: ['建立'] },
        additionalScreenshots: [
          {
            caption: '輸入清晰的課室名稱、選擇課室類型，然後按「建立」。',
            labels: ['課室名稱', '建立'],
          },
        ],
      },
      {
        title: '邀請學生',
        bullets: [
          '分享或複製課室連結。',
          '顯示或分享課室 QR 碼。',
          '將六位字元的課室代碼交給學生，讓他們透過「加入課室」輸入。',
        ],
        paragraphs: [
          '開啟「成員」查看已加入的學生。',
          '已連結的「學校」或「公開」課室亦可匯入 Google Classroom 名單。詳見第 8 章。',
        ],
        screenshot: { caption: '直接分享或複製課室連結。', labels: ['連結', '分享或複製'] },
        additionalScreenshots: [
          { caption: '開啟「QR 碼」，顯示或分享課室 QR 碼。', labels: ['QR 碼'] },
        ],
      },
      {
        title: '將練習加入功課',
        steps: [
          '開啟課室。',
          '選擇「新增功課」。',
          '選擇練習。',
          '選擇「繼續」。',
          '檢查功課標題，並按需要加入備註。',
        ],
        paragraphs: ['功課沒有獨立分享連結或 QR 碼。請在課室發佈功課，讓課室成員接收並完成。'],
        screenshot: { caption: '開啟「功課」，然後選擇「新增功課」。', labels: ['新增功課'] },
        additionalScreenshots: [
          { caption: '選擇練習，然後按「繼續」。', labels: ['已選練習', '繼續'] },
        ],
      },
      {
        title: '設定發佈和截止時間',
        steps: ['設定「發佈日期與時間」。', '設定較發佈時間為後的「截止日期與時間」。'],
        screenshot: {
          caption: '檢查標題和可選備註，然後設定發佈和截止時間。',
          labels: ['發佈日期與時間', '截止日期與時間'],
        },
      },
      {
        title: '建立功課',
        steps: ['檢查課室、練習、備註和日期。', '選擇「建立功課」。'],
        paragraphs: ['學生可在發佈時間後開啟功課。請等待至少一名學生完成功課，再繼續第 5 章。'],
        screenshot: { caption: '資料準備好後，選擇「建立功課」。', labels: ['建立功課'] },
        additionalScreenshots: [
          { caption: '功課現已顯示在課室內，並列出發佈和截止時間。', labels: ['已發佈功課'] },
        ],
      },
    ],
  },
  {
    title: '查看學生完成狀態和結果',
    summary: '利用完成狀態和表現數據了解學生進度，並決定需要跟進的範疇。',
    completion: '做得好！你已查看功課的學生完成狀態、個別作答和全班表現。',
    sections: [
      {
        title: '查看結果',
        steps: ['開啟課室。', '開啟「功課」。', '選擇功課。'],
        screenshot: {
          caption: '學生提交功課後，「功課資訊」會顯示完成狀態和學生表現。',
          labels: ['完成狀態'],
        },
      },
      {
        title: '查看學生完成狀態',
        introduction: '開啟「完成狀態」查看：',
        bullets: ['未完成', '已完成', '遲交', '逾期'],
        paragraphs: [
          '選擇狀態以查看該組學生，或選擇「查看詳情」查看所有學生。「未完成」可能仍在作答期限內；「逾期」表示已超過截止時間。',
        ],
        screenshot: { caption: '「所有學生」顯示每名學生的狀態；已完成項目亦會顯示分數、百分比、作答時間和完成時間。' },
      },
      {
        title: '檢視全班表現',
        bullets: [
          '「平均分數」包括準時完成的功課。',
          '「平均分數（包含遲交）」包括所有已完成功課。',
          '每個學習單元結果會顯示題目數量和全班平均百分比。',
        ],
        screenshot: { caption: '利用整體平均分數和學習單元百分比，找出強項及需要跟進練習的範疇。' },
      },
      {
        title: '查看學生作答',
        steps: [
          '開啟「查看詳情」。',
          '檢查每名學生的狀態、分數、作答時間和完成時間。',
          '選擇一名已完成功課的學生。',
          '使用題號查看學生的答案和解釋。',
          '關閉作答記錄，返回「所有學生」。',
        ],
        screenshot: { caption: '在「完成狀態」下選擇「查看詳情」。', labels: ['查看詳情'] },
        additionalScreenshots: [
          {
            caption: '綠色題號代表答對，紅色題號代表答錯。選擇題號以查看該題。',
            labels: ['題目導覽', '答案和解釋'],
          },
        ],
      },
    ],
  },
  {
    title: '建立跟進練習',
    summary: '根據功課結果，為學生需要更多練習的範疇建立並指派跟進練習。',
    completion: '跟進練習已準備好，可以指派。',
    sections: [
      {
        title: '生成跟進練習',
        steps: [
          '開啟已有學生提交記錄的功課。',
          '查看學習單元統計，找出學生需要更多練習的範疇。',
          '在「功課資訊」底部選擇「生成相似練習」。',
          '選擇「強化弱項」作針對練習，或「所有範疇」作均衡重溫。',
          '選擇「較簡單」、「相同」或「較困難」。',
          '設定題目數量和時間限制。',
          '選擇「確認」。',
          '等待生成完成；Hoppy 會自動開啟新練習。',
        ],
        note: {
          title: '選擇出題方向',
          text: '「強化弱項」會優先練習功課結果中較弱的學習單元；「所有範疇」會涵蓋功課內各學習單元。使用「較簡單」重建信心、「相同」鞏固學習，或「較困難」作延伸練習。',
        },
        screenshot: {
          caption: '先查看學習單元結果，然後選擇生成跟進練習的按鈕。',
          labels: ['生成相似練習'],
        },
        additionalScreenshots: [
          {
            caption: '選擇出題方向和難度，設定時間限制和題目數量，然後按「確認」。',
            labels: ['出題方向', '難度', '時間限制', '題目數量', '確認'],
          },
        ],
      },
      {
        title: '指派跟進練習',
        steps: [
          '檢查跟進練習，並作出所需修改。',
          '選擇「指派」。',
          '選擇相同課室。',
          '設定發佈和截止時間，然後建立功課。',
        ],
        paragraphs: ['如需重溫建立功課的步驟，請參閱第 4 章。'],
        note: {
          title: '比較跟進結果',
          text: '學生完成跟進功課後，將其學習單元結果與原有功課比較，查看表現是否改善。如需重溫查看完成狀態和結果的方法，請返回第 5 章。',
        },
        screenshot: { caption: '選擇「指派」，將跟進練習發佈為新的課室功課。', labels: ['指派'] },
      },
    ],
  },
  {
    title: '管理課室和功課',
    summary: '管理成員、功課、排行榜設定和重複排程，保持課室井然有序。',
    completion: '你現在可以管理課室、功課、成員和排行榜。',
    sections: [
      {
        title: '管理成員和角色',
        paragraphs: [
          '開啟「我的課室」、選擇課室，再開啟「成員」，查看學生、教師、各自角色，以及哪位教師建立了課室。',
          '如要移除成員，請選擇成員、選擇「移除成員」，然後確認。只有建立課室的教師可以移除其他教師。',
        ],
        screenshot: { caption: '開啟「成員」，查看建立課室的教師、其他教師、學生和移除控制。', labels: ['成員'] },
      },
      {
        title: '查看課室排行榜',
        paragraphs: [
          '開啟課室查看排行榜預覽，然後選擇「查看全部」。完整列表會顯示每名學生在已發佈功課中的總分，以及已完成功課數目。',
        ],
        screenshot: { caption: '在課室排行榜預覽中選擇「查看全部」。', labels: ['查看全部'] },
        additionalScreenshots: [
          { caption: '課室排行榜會按學生在各項功課所得的總分排列。' },
        ],
      },
      {
        title: '設定課室排行榜顯示',
        introduction: '開啟課室的「設定」，再選擇「排行榜顯示設定」。',
        bullets: [
          '「顯示全部」向學生顯示完整的課室和功課排行榜。',
          '「只顯示前 N 名」顯示指定的領先名次。可選擇 3、5、10 名，或輸入「自訂」數目。',
          '「隱藏全部」向學生隱藏課室和功課排行榜。',
          '「學校」課室的「跟隨學校預設」會採用學校的排行榜設定。',
        ],
        paragraphs: [
          '未能進入顯示名次的學生仍可看到自己的名次。這些選項只控制學生的查看權限；教師仍可查看完整排行榜。',
          '只有課室擁有者可以更改排行榜顯示設定。由學校控制時，設定無法更改。',
        ],
        screenshot: { caption: '開啟「課室設定」，然後選擇「排行榜顯示設定」。', labels: ['排行榜顯示設定'] },
        additionalScreenshots: [
          { caption: '在「學生可以看到」選擇顯示方式，然後按「儲存」。', labels: ['學生可以看到', '儲存'] },
        ],
      },
      {
        title: '管理現有功課',
        introduction: '功課可能顯示為：',
        bullets: ['未發佈', '已發佈', '全部完成', '已截止', '已截止（有欠交）'],
        paragraphs: [
          '開啟功課查看題目和答案。在允許的情況下，可以修改標題、備註或截止日期；發佈時間不可修改。',
          '刪除功課後無法復原。如課室已連結 Google Classroom，對應的 Google 課業亦會刪除。',
        ],
        screenshot: { caption: '開啟三點選單以編輯或刪除功課。', labels: ['編輯或刪除'] },
      },
      {
        title: '設定自動指派功課',
        introduction: '開啟課室的「設定」，再選擇「自動指派功課」以開啟「自動指派設定」。',
        steps: [
          '選擇「新增」，再開啟「新增設定」。',
          '選擇年級、科目和語言。',
          '在「每週日期」選擇自動指派功課的日子。',
          '設定「發佈時間」和「截止期限」。',
          '選擇「儲存」。新設定會顯示為「已啟用」。',
        ],
        paragraphs: [
          '使用開關將設定設為「已啟用」或「已停用」。開啟三點選單可「編輯」或「刪除」設定。',
          '在「編輯設定」中，年級和科目不能更改。',
        ],
        screenshot: { caption: '在「自動指派設定」選擇「新增」。', labels: ['新增'] },
        additionalScreenshots: [
          {
            caption: '完成「新增設定」，然後選擇「儲存」。',
            labels: ['年級、科目和語言', '每週日期、發佈時間和截止期限', '儲存'],
          },
        ],
      },
      {
        title: '查看功課排行榜',
        paragraphs: [
          '開啟功課並選擇「查看排行榜」。已完成的作答會先按分數、再按較早完成時間排列；每項記錄會顯示分數、作答時間、完成時間和逾期狀態。',
        ],
        screenshot: { caption: '在功課中選擇「查看排行榜」。', labels: ['查看排行榜'] },
        additionalScreenshots: [
          { caption: '功課排行榜會先按分數、再按完成時間排列已完成的作答。' },
        ],
      },
    ],
  },
  {
    title: '連結 Google Classroom',
    summary: '將現有 Google Classroom 課程連結至 Hoppy，匯入配對學生，並同步 Hoppy 功課和分數。',
    completion: 'Hoppy 課室已連結至 Google Classroom。',
    sections: [
      {
        title: '連結 Google Classroom',
        introduction: '本章適合使用 Google Classroom 的學校。開啟 Hoppy 課室，再開啟「設定」和「Google Classroom 連結」。',
        steps: [
          '選擇「連結到 Google Classroom」，並授權 Google 帳戶。',
          '選擇 Google Classroom 課程。',
          '如要匯入名單，請保留「匯入學生」選項。',
          '選擇「連結」。',
        ],
        paragraphs: [
          '系統會以學生的電郵地址配對名單。配對到的 Hoppy 帳戶會加入課室；未配對的學生會收到電郵邀請碼。',
          '只有建立課室的教師可以管理連結。「學校」和「公開」課室可使用 Google Classroom 連結功能。',
        ],
        screenshot: { caption: '開啟課室設定，然後選擇「Google Classroom 連結」。', labels: ['Google Classroom 連結'] },
        additionalScreenshots: [
          { caption: '選擇「連結到 Google Classroom」開始連結課程。', labels: ['連結到 Google Classroom'] },
          { caption: '連結後，確認狀態為「已連結」，並顯示正確的 Google Classroom 課程。', labels: ['已連結課程'] },
          { caption: '配對到的 Google Classroom 學生會加入「成員」。本例的 Test User 是匯入的學生。', labels: ['已匯入學生'] },
        ],
      },
      {
        title: '管理 Google Classroom 同步',
        introduction: '連結狀態會顯示為「未連結」、「已連結」或「已連結（需要處理）」。',
        bullets: [
          '發佈 Hoppy 功課時，系統會建立對應的 Google Classroom 課業。',
          '更改標題或截止日期時，Google 課業亦會更新。',
          '學生完成 Hoppy 功課後，百分比分數會以 100 分制傳送至 Google Classroom。',
          '刪除 Hoppy 功課時，對應的 Google 課業亦會刪除。',
          '「重新連結」會重新連結已失效的授權。',
          '「切換課程」會將日後活動連結至另一課程；現有課業不會移動。',
          '「取消連結」會中斷課程連結並停止日後同步。',
        ],
        note: {
          title: '單向限制',
          text: 'Google Classroom 功課不會匯入 Hoppy。在 Google Classroom 修改的成績亦不會傳回 Hoppy。',
        },
        screenshot: { caption: '在此檢查已連結課程。只有需要更改連結時，才使用「切換課程」或「取消連結」。', labels: ['連結狀態'] },
      },
    ],
  },
  {
    title: '進階練習選項和偏好設定',
    summary: '設定教學和練習偏好，並在內容不符合特定學習單元時使用「其他」。',
    completion: '你已準備好使用 Hoppy 的進階練習選項和偏好設定。',
    sections: [
      {
        title: '設定常用年級和偏好科目',
        introduction: '開啟「個人資料」、選擇設定齒輪，再開啟「用戶資料」。',
        steps: [
          '選擇你通常任教的年級。',
          '選擇偏好科目。',
          '等待變更自動儲存。',
          '開啟「探索」查看效果。',
        ],
        paragraphs: [
          '儲存後，「探索」會選取其中一個常用年級，並將偏好科目移到前方；可用科目列表不會改變。',
        ],
        screenshot: { caption: '開啟「個人資料」、選擇設定齒輪，再開啟「用戶資料」。', labels: ['用戶資料'] },
        additionalScreenshots: [
          { caption: '設定前：儲存常用年級，以及希望優先顯示的科目。', labels: ['已選年級', '已選科目'] },
          {
            caption: '設定後：「探索」會選取常用年級，並把偏好科目移到前方；其他科目仍然可用。',
            labels: ['已選常用年級', '偏好科目置前'],
          },
        ],
      },
      {
        title: '設定偏好的語言和練習語言',
        introduction: '在「設定」開啟「偏好設定」。',
        bullets: [
          '「偏好的語言」會更改 Hoppy 的選單、按鈕和指示語言。',
          '「偏好的練習語言」會設定新練習內容的起始語言。',
        ],
        note: { title: '現有練習', text: '更改這些偏好不會翻譯已存在的練習。' },
        screenshot: {
          caption: '選擇 Hoppy 介面語言，以及新練習的起始語言。',
          labels: ['偏好的語言', '偏好的練習語言'],
        },
        additionalScreenshots: [
          { caption: '效果：Hoppy 指示會使用「偏好的語言」，新練習則以「偏好的練習語言」開始。', labels: ['已套用偏好的練習語言'] },
        ],
      },
      {
        title: '儲存自訂題目提示',
        steps: [
          '在「偏好設定」頁面找出「自訂題目提示」。',
          '輸入希望重用的提示，例如使用公制單位或保持題目簡潔。',
          '等待提示自動儲存。',
          '建立練習時，如要使用已儲存的提示，請開啟「套用自訂題目提示」。',
        ],
        note: {
          title: '對題目生成的影響',
          text: '啟用後，Hoppy 會在生成題目時套用已儲存的提示；停用後，則不會套用。',
        },
        screenshot: { caption: '在「自訂題目提示」欄位儲存可重用的提示。', labels: ['自訂題目提示'] },
        additionalScreenshots: [
          { caption: '開啟「套用自訂題目提示」，把已儲存的提示套用於這份練習。', labels: ['套用自訂題目提示'] },
        ],
      },
      {
        title: '使用「其他」學習單元',
        introduction: '當內容不符合特定學習單元時，「其他」是「建立」內的後備選項。',
        bullets: [
          '當練習說明或參考材料不符合可用學習單元時，Hoppy 可能會建議或選取「其他」。',
          '只有在沒有特定學習單元能準確描述內容時，才使用「其他」。',
          '提供清晰的練習說明或合適的參考材料，讓 Hoppy 知道要生成甚麼題目。',
          '選擇「度身訂造」。「現有題庫」需要至少一個已有題目的特定學習單元。',
        ],
        note: {
          title: '不是課程主題',
          text: '「其他」不會新增具名稱的學習單元；它只會把不屬於現有學習單元列表的內容歸類。',
        },
        screenshot: { caption: '當所需內容不符合特定學習單元時，Hoppy 可自動選取「其他」。', labels: ['已選「其他」'] },
        additionalScreenshots: [
          {
            caption: '只選取「其他」時，請使用「度身訂造」；由於「其他」沒有現有題庫，「現有題庫」不可使用。',
            labels: ['出題方式', '需要「度身訂造」的原因'],
          },
        ],
      },
    ],
  },
  {
    title: '安全及負責任地使用 Hoppy 教學',
    summary: '檢查 AI 生成的內容、保障學生資料並選擇公平的課室設定，負責任地使用 Hoppy。',
    completion: '你已了解安全和負責任使用 Hoppy 的主要做法。',
    sections: [
      {
        title: '檢查 AI 生成的內容',
        bullets: [
          '在學生看到前，檢查每道生成的題目、答案和解釋。',
          '修改不清晰或不合適的題目，並舉報需要處理的內容。',
          '確認語言、閱讀程度和難度適合學生。',
        ],
      },
      {
        title: '保障學生資料',
        bullets: [
          '不要在練習提示、備註或上載檔案中加入不必要的個人或敏感學生資料。',
          '只向指定學生分享課室連結、代碼和 QR 碼。',
          '定期檢查課室成員，移除不再需要存取權限的人。',
        ],
      },
      {
        title: '使用合適的教學材料',
        bullets: [
          '只上載你有權使用的材料。',
          '上載檔案前移除機密資料。',
          '檢查生成的題目是否符合來源材料和學習目標。',
        ],
      },
      {
        title: '選擇公平的課室設定',
        bullets: [
          '根據學生年齡和需要選擇合適的排行榜顯示設定。',
          '為工作預留足夠時間，並考慮學生使用裝置或網絡的情況。',
          '配合教師講解、討論和其他學習活動使用 Hoppy。',
        ],
      },
    ],
  },
  {
    title: '解決常見問題並取得協助',
    summary: '解決常見設定和同步問題，讓教學可以繼續，並知道如何取得協助。',
    completion: '你現在知道需要協助時可以從哪裡開始。',
    sections: [
      {
        title: '尋找缺少的科目或學習單元',
        bullets: [
          '檢查所選年級；可用科目會因年級而異。',
          '檢查所選科目，並瀏覽當中的學習單元。',
          '偏好科目只會在「探索」中優先顯示；偏好設定不會新增科目。',
        ],
      },
      {
        title: '看不到功課',
        bullets: [
          '檢查學生是否已加入正確課室。',
          '檢查「發佈日期與時間」。未發佈的功課暫時不會顯示。',
          '檢查功課是否在指定課室建立。',
        ],
      },
      {
        title: '缺少結果或強化弱項',
        bullets: [
          '等待至少一名學生完成功課。',
          '檢查「完成狀態」，確認系統已記錄提交。',
          '提交完成後重新整理功課。',
        ],
      },
      {
        title: '檔案上載問題',
        bullets: [
          '檢查檔案類型是否受支援，以及檔案能否在裝置上正常開啟。',
          '嘗試使用較小的檔案，或把長文件分拆成較短的參考材料。',
          '上載前移除密碼保護。',
        ],
      },
      {
        title: 'Google Classroom 同步問題',
        bullets: [
          '開啟「Google Classroom 連結」，檢查狀態是「已連結」還是「已連結（需要處理）」。',
          '如授權已過期，請使用「重新連結」。',
          '確認已連結指定的 Google Classroom 課程。',
        ],
      },
      {
        title: '舉報問題並取得協助',
        paragraphs: [
          '查看練習題目時，可使用「舉報」提交該題目的意見。',
          '如需更多答案，請開啟 Hoppy 常見問題。如帳戶、存取或同步問題持續，請電郵至 hi@hoppy.day。',
        ],
      },
    ],
  },
];

const screenshotHighlightOverrides: Record<string, GuideScreenshot['highlights']> = {
  '/images/teacher-guide-tc/chapter-1/open-explore.png': [
    { label: '探索', left: 21.5, top: 90.8, width: 20, height: 6.3 },
  ],
  '/images/teacher-guide-tc/chapter-1/select-grade.jpeg': [
    { label: '小六', left: 77.8, top: 19.9, width: 15, height: 6.2 },
  ],
  '/images/teacher-guide-tc/chapter-1/select-learning-units.jpeg': [
    { label: '中文', left: 7.5, top: 21.3, width: 16.8, height: 5.8 },
    { label: '學習單元剔號按鈕', left: 80.7, top: 32.5, width: 7.3, height: 3.8 },
    { label: '建立練習', left: 3, top: 82.4, width: 94, height: 7 },
  ],
  '/images/teacher-guide-tc/chapter-1/custom-made-settings.jpeg': [
    { label: '時間限制', left: 7.5, top: 27.8, width: 85, height: 9.2 },
    { label: '題目數量', left: 7.5, top: 38.3, width: 85, height: 9.2 },
    { label: '度身訂造', left: 7.5, top: 52.3, width: 43.5, height: 7.5 },
  ],
  '/images/teacher-guide-tc/chapter-1/custom-made-language.jpeg': [
    { label: '解釋語言是', left: 7.5, top: 62.2, width: 85, height: 9.2 },
    { label: '確認', left: 3, top: 85.2, width: 94, height: 7 },
  ],
  '/images/teacher-guide-tc/chapter-2/confirm-context.png': [
    { label: '科目、年級和語言', left: 6.5, top: 27.2, width: 86.5, height: 24.2 },
    { label: '確認', left: 3.8, top: 86, width: 92.4, height: 6.5 },
  ],
  '/images/teacher-guide-tc/chapter-2/select-learning-units.png': [
    { label: '學習單元剔號按鈕', left: 81.5, top: 35.5, width: 7, height: 4 },
    { label: '確認', left: 3.8, top: 86, width: 92.4, height: 6.5 },
  ],
  '/images/teacher-guide-tc/chapter-2/quiz-settings.png': [
    { label: '時間限制', left: 7.2, top: 27.5, width: 85.6, height: 8.3 },
    { label: '題目數量', left: 7.2, top: 36.4, width: 85.6, height: 11 },
    { label: '度身訂造', left: 7.8, top: 49.3, width: 84.5, height: 10.7 },
    { label: '確認', left: 3.8, top: 85.2, width: 92.4, height: 7.5 },
  ],
  '/images/teacher-guide-tc/chapter-3/quiz-actions.png': [
    { label: '查看題目', left: 8.2, top: 58, width: 83.6, height: 6.2 },
  ],
  '/images/teacher-guide-tc/chapter-3/report-options.png': [
    { label: '舉報原因', left: 3, top: 51.5, width: 94, height: 37.5 },
  ],
};

const exactScreenshotHighlightOverrides: Record<string, GuideScreenshot['highlights']> = {
  '/images/teacher-guide-tc/chapter-2/open-create.png|43.1,91.1,13.8,6.1': [
    { label: '建立', left: 40.5, top: 90.8, width: 19, height: 6.3 },
  ],
  '/images/teacher-guide-tc/chapter-2/quiz-description.png|3.8,85.1,92.4,10.7;87.4,91.8,7.3,3.8': [
    { label: '練習說明', left: 3.8, top: 83.1, width: 92.4, height: 12.8 },
    { label: '繼續', left: 87.4, top: 90.8, width: 7.3, height: 4 },
  ],
  '/images/teacher-guide-tc/chapter-3/question-review.png|26.8,15.7,60.3,3.9;7.8,81.5,84.4,17.8': [
    { label: '題目導覽', left: 17.5, top: 15.7, width: 78.4, height: 4.2 },
    { label: '解釋', left: 3.8, top: 75.5, width: 92.4, height: 19.8 },
  ],
  '/images/teacher-guide-tc/chapter-3/question-review.png|85,9.9,11.3,5.2': [
    { label: '舉報', left: 85.7, top: 10.8, width: 9.8, height: 4.2 },
  ],
  '/images/teacher-guide-tc/chapter-3/share-quiz-link.jpeg|25.8,26.4,68.2,5.7;1,34.8,48,5.2;5.5,60.7,89,7.9': [
    { label: '可見性', left: 22.2, top: 26.4, width: 72, height: 5.7 },
    { label: '連結', left: 1, top: 34.7, width: 48, height: 5.3 },
    { label: '分享或複製', left: 5.5, top: 61.7, width: 89, height: 7.2 },
  ],
  '/images/teacher-guide-tc/chapter-4/invite-students-link.jpeg|1,27.7,48,6;5.5,58.7,89,7.2': [
    { label: '連結', left: 1, top: 28.8, width: 48, height: 5.3 },
    { label: '分享或複製', left: 5.5, top: 58.7, width: 89, height: 7.2 },
  ],
  '/images/teacher-guide-tc/chapter-4/my-classrooms.png|76.9,12.2,19.4,5.9': [
    { label: '建立', left: 80.4, top: 12.1, width: 16, height: 6.1 },
  ],
  '/images/teacher-guide-tc/chapter-4/add-assignment.png|56,89.9,40.2,5.9': [
    { label: '新增功課', left: 66.5, top: 90.1, width: 30, height: 6 },
  ],
  '/images/teacher-guide-tc/chapter-5/assignment-results-overview.png|3.8,54.8,92.4,30.2': [
    { label: '完成狀態', left: 3.8, top: 65.4, width: 92.4, height: 31 },
  ],
  '/images/teacher-guide-tc/chapter-5/assignment-results-overview.png|38,77.6,24,4.3': [
    { label: '查看詳情', left: 39, top: 88.4, width: 22, height: 5.2 },
  ],
  '/images/teacher-guide-tc/chapter-5/student-attempt-mixed.png|3.8,12.8,92.4,5;3.8,36.7,92.4,53.2': [
    { label: '題目導覽', left: 3.8, top: 10.6, width: 92.4, height: 5.5 },
    { label: '答案和解釋', left: 3.8, top: 28.4, width: 92.4, height: 58 },
  ],
  '/images/teacher-guide-tc/chapter-7/google-classroom-imported-member.png|3.8,63.2,92.4,7.6': [
    { label: '已匯入的學生', left: 7, top: 63.4, width: 86, height: 7.4 },
  ],
  '/images/teacher-guide-tc/chapter-7/members.png|75,11.2,22.5,5.1': [
    { label: '成員', left: 75.5, top: 11.3, width: 22, height: 5.1 },
  ],
  '/images/teacher-guide-tc/chapter-7/classroom-info.png|75.5,54.2,18,4.6': [
    { label: '查看全部', left: 75.5, top: 61.6, width: 18, height: 4.2 },
  ],
  '/images/teacher-guide-tc/chapter-8/grades-subjects.png|51.6,41.9,21.6,4.5;46.9,85.6,37.8,4.5': [
    { label: '小六', left: 76.8, top: 47.5, width: 13.2, height: 4.7 },
    { label: '體育', left: 59.1, top: 85.3, width: 12.9, height: 4.8 },
  ],
  '/images/teacher-guide-tc/chapter-8/explore-after-preferences.png|3.8,14.3,92.4,4.8;8.2,22,36,4.6': [
    { label: '小六', left: 3.8, top: 14.3, width: 92.4, height: 4.8 },
    { label: '體育排在最前', left: 8.2, top: 22, width: 15.2, height: 4.6 },
  ],
  '/images/teacher-guide-tc/chapter-1/custom-made-details.jpeg|8.6,69.1,82.5,7.1': [
    { label: '套用自訂題目提示', left: 7.5, top: 76.2, width: 85, height: 7.4 },
  ],
  '/images/teacher-guide-tc/chapter-5/assignment-info.png|3.8,68.3,92.4,6': [
    { label: '查看詳情', left: 7.5, top: 83.5, width: 85, height: 4.5 },
  ],
  '/images/teacher-guide-tc/chapter-7/google-classroom.png|3.8,33.2,92.4,6.1': [
    { label: '連結到 Google Classroom', left: 3.8, top: 31.2, width: 92.4, height: 5.5 },
  ],
  '/images/teacher-guide-tc/chapter-7/google-classroom-linked.png|3.8,18.5,92.4,13.4': [
    { label: '已連結的課程', left: 3.8, top: 16.8, width: 92.4, height: 13 },
  ],
  '/images/teacher-guide-tc/chapter-9/others-learning-unit.png|8.2,35.6,83.6,4.6': [
    { label: '只選擇「其他」', left: 8.2, top: 33.8, width: 83.6, height: 4.6 },
  ],
  '/images/teacher-guide-tc/chapter-9/others-quiz-mode.png|8.2,54.4,83.7,6.6;8.2,65.8,83.7,5.1': [
    { label: '出題方式', left: 8.2, top: 52.3, width: 83.7, height: 7.1 },
    { label: '為何必須使用度身訂造', left: 8.2, top: 60.1, width: 83.7, height: 6 },
  ],
};

function highlightSignature(highlights: GuideScreenshot['highlights']): string {
  return (
    highlights
      ?.map(({ left, top, width, height }) => `${left},${top},${width},${height}`)
      .join(';') ?? ''
  );
}

function translateScreenshot(
  source: string | GuideScreenshot | undefined,
  translation: ScreenshotTranslation | undefined,
): string | GuideScreenshot | undefined {
  if (!source) return source;

  if (typeof source === 'string') {
    return source.replace('/images/teacher-guide/', '/images/teacher-guide-tc/');
  }

  const translatedSrc =
    translation?.src ?? source.src.replace('/images/teacher-guide/', '/images/teacher-guide-tc/');
  const exactOverrideKey = `${translatedSrc}|${highlightSignature(source.highlights)}`;
  const highlights =
    exactScreenshotHighlightOverrides[exactOverrideKey] ??
    screenshotHighlightOverrides[translatedSrc] ??
    source.highlights;

  return {
    ...source,
    src: translatedSrc,
    alt: translation ? `Hoppy App 畫面：${translation.caption}` : source.alt,
    caption: translation?.caption ?? source.caption,
    highlights: highlights?.map((highlight, index) => ({
      ...highlight,
      label: translation?.labels?.[index] ?? highlight.label,
    })),
  };
}

function translateSection(source: GuideSection, translation: SectionTranslation): GuideSection {
  return {
    ...source,
    title: translation.title,
    introduction: translation.introduction,
    steps: translation.steps,
    paragraphs: translation.paragraphs,
    bullets: translation.bullets,
    note: translation.note,
    screenshot: translateScreenshot(source.screenshot, translation.screenshot),
    additionalScreenshots: source.additionalScreenshots?.map((screenshot, index) =>
      translateScreenshot(screenshot, translation.additionalScreenshots?.[index]) as GuideScreenshot,
    ),
  };
}

export const teacherGuideChaptersTc: GuideChapter[] = teacherGuideChapters.map((chapter, chapterIndex) => {
  const translation = translations[chapterIndex];

  if (!translation || translation.sections.length !== chapter.sections.length) {
    throw new Error(`Traditional Chinese teacher-guide translation is incomplete for ${chapter.slug}`);
  }

  return {
    ...chapter,
    title: translation.title,
    summary: translation.summary,
    completion: translation.completion,
    sections: chapter.sections.map((section, sectionIndex) =>
      translateSection(section, translation.sections[sectionIndex]),
    ),
  };
});

export const teacherGuideChapterMapTc = new Map(
  teacherGuideChaptersTc.map((chapter) => [chapter.slug, chapter]),
);

export const publishedTeacherGuideChaptersTc = teacherGuideChaptersTc.filter(
  (chapter) => chapter.number <= 11,
);

export const publishedTeacherGuideSlugsTc = new Set(
  publishedTeacherGuideChaptersTc.map((chapter) => chapter.slug),
);
