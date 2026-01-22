import en from './en.json';
import tc from './tc.json';

export const languages = {
  tc: '繁體中文',
  en: 'English',
};

export const defaultLang = 'tc';

export type Lang = keyof typeof languages;

const translations = { en, tc } as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const keys = key.split('.');
    let result: any = translations[lang];
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        // Fallback to default language
        result = translations[defaultLang];
        for (const fallbackKey of keys) {
          if (result && typeof result === 'object' && fallbackKey in result) {
            result = result[fallbackKey];
          } else {
            return key; // Return key if not found
          }
        }
        break;
      }
    }
    
    return typeof result === 'string' ? result : key;
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  // Remove any existing language prefix
  const cleanPath = path.replace(/^\/(tc|en)/, '') || '/';
  return `/${lang}${cleanPath === '/' ? '' : cleanPath}`;
}

export function getLocalizedScreenshot(basePath: string, lang: Lang): string {
  // Map language codes to screenshot suffixes
  // tc (Traditional Chinese) -> zh, en (English) -> en
  const langSuffix = lang === 'tc' ? 'zh' : 'en';
  
  // Define which screenshots are available in which languages
  // Using generic numeric names for better maintainability
  const screenshotLanguages: Record<string, 'en' | 'zh' | 'both'> = {
    'screenshot-analog-clock-1': 'zh',
    'screenshot-analog-clock-2': 'en',
    'screenshot-analog-clock-3': 'en',
    'screenshot-digital-clock-1': 'zh',
    'screenshot-bar-chart-1': 'en',
    'screenshot-bar-chart-2': 'en',
    'screenshot-stacked-bar-chart-1': 'zh',
    'screenshot-stacked-bar-chart-2': 'zh',
    'screenshot-stacked-bar-chart-3': 'en',
    'screenshot-stacked-bar-chart-4': 'en',
    'screenshot-broken-line-graph-1': 'zh',
    'screenshot-broken-line-graph-2': 'zh',
    'screenshot-broken-line-graph-3': 'en',
    'screenshot-broken-line-graph-4': 'en',
    'screenshot-box-whisker-1': 'en',
    'screenshot-box-whisker-2': 'zh',
    'screenshot-equation-graph-1': 'zh',
    'screenshot-equation-graph-2': 'en',
    'screenshot-equation-graph-3': 'en',
    'screenshot-equation-graph-4': 'zh',
    'screenshot-equation-graph-5': 'zh',
    'screenshot-equation-graph-6': 'en',
    'screenshot-shape3d-1': 'en',
    'screenshot-shape3d-2': 'zh',
    'screenshot-shape3d-3': 'en',
    'screenshot-shape3d-4': 'en',
    'screenshot-circuit-1': 'zh',
    'screenshot-chemical-equation-1': 'en',
    'screenshot-chemical-equation-2': 'zh',
  };
  
  // Extract the base filename without path and extension
  const filename = basePath.split('/').pop()?.replace(/\.jpeg$/, '') || '';
  
  // Check if this screenshot has language-specific availability
  const availability = screenshotLanguages[filename];
  
  // Determine which suffix to use based on availability
  let finalSuffix = langSuffix;
  if (availability && availability !== 'both') {
    // Screenshot only available in one language, use that one
    finalSuffix = availability;
  }
  
  // Replace .jpeg with -{finalSuffix}.jpeg before the extension
  return basePath.replace(/\.jpeg$/, `-${finalSuffix}.jpeg`);
}


