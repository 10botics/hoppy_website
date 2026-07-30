// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://www.hoppy.day",
  i18n: {
    defaultLocale: "tc",
    locales: ["tc", "en"],
    routing: {
      // Routes are explicitly namespaced by src/pages/[lang].
      // Keep middleware from intercepting the legacy unprefixed redirect pages.
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false
    }
  }
});
