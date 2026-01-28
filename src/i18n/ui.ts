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
  
  // All screenshots are now available in both languages with -en and -zh suffixes
  // Simply append the appropriate language suffix to the filename
  return basePath.replace(/\.jpeg$/, `-${langSuffix}.jpeg`);
}


