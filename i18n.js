import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      // Add your English translations here
      welcome: 'Welcome',
      search: 'Search',
    },
  },
  ar: {
    translation: {
      // Add your Arabic translations here
      welcome: 'مرحبا',
      search: 'بحث',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    debug: __DEV__, // enable debug in development

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
