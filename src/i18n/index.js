import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const fetchLangData = async () => {
    const res = await fetch('http://localhost:4000/characters');
    const characters = await res.json();

    const data = {
        fa: {},
        en: {},
    };

    characters.forEach((character) => {
        const { id, fa, en } = character;
        data.fa[id] = {
            name: fa.name,
            description: fa.description,
        };
        data.en[id] = {
            name: en.name,
            description: en.description,
        };
    });

    return data;
};

const initI18n = async () => {
    const translations = await fetchLangData();

    const resources = {
        en: {
            translation: {
                ...translations.en,
                ui: {
                    button: 'see more',
                    shahname: 'Šāhnāmeh (The Book of Kings)',
                },
            },
        },
        fa: {
            translation: {
                ...translations.fa,
                ui: {
                    button: 'مشاهده بیشتر',
                    shahname: 'شاهنامه',
                },
            },
        },
    };

    await i18n.use(initReactI18next).init({
        resources,
        lng: 'fa',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });
};

initI18n();
export default i18n;
