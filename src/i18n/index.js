import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const initI18n = async () => {

    const resources = {
        en: {
            translation: {
                button: 'see more',
                shahname: 'Šāhnāmeh (The Book of Kings)',
            },
        },
        fa: {
            translation: {
                button: 'مشاهده بیشتر',
                shahname: 'شاهنامه',
            },
        },
    };

    await i18n.use(initReactI18next).init({
        resources,
        lng: 'en',
        fallbackLng: 'fa',
        interpolation: {
            escapeValue: false,
        },
    });
};

initI18n();
export default i18n;