import i18next from "i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEnglish from "./Translation/English/translation.json"
import translationFrench from "./Translation/French/translation.json"

const resources = {
    us: {
        translation: translationEnglish,
    },
    fr: {
        translation: translationFrench,
    }
}

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng:"fr",
    });

export default i18n;