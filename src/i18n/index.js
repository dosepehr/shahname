import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            1: {
                name: "Esfandiyār",
                description:
                    "Esfandiyār or Espandiyār (Avestan: Spəntōδāta-; Middle Persian: Spandadāt; Persian: اسفندیار) is a legendary Iranian hero and one of the characters of Ferdowsi's Shahnameh. He was the son and the crown prince of the Kayanian King Goshtasp and Queen Katāyoun. He was the grandchild of Kay Lohrasp.",
            },
            2: {
                name: "2Esfandiyār",
                description:
                    "2Esfandiyār or Espandiyār (Avestan: Spəntōδāta-; Middle Persian: Spandadāt; Persian: اسفندیار) is a legendary Iranian hero and one of the characters of Ferdowsi's Shahnameh. He was the son and the crown prince of the Kayanian King Goshtasp and Queen Katāyoun. He was the grandchild of Kay Lohrasp.",
            },
        },
    },
    fa: {
        translation: {
            1: { name: "اسفندیار", description: "توضیحات فارسی اسفندیار" },
            2: {
                name: "2اسفندیار",
                description: "2توضیحات فارسی اسفندیار",
            },
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "fa",

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
