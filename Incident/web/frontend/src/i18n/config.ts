import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// メッセージファイルのimport
import translation_ja from "./ja.json";
import translation_en from "./en.json";
import { usei18nActions } from "./config.action";

// 上記で読み込んだメッセージファイルを選択可能にする。
const resources = {
    ja: {
        translation: translation_ja
    },
    en: {
        translation: translation_en
    }
};
/* ユーザ情報から、利用言語を取得する。 */
const i18nActions = usei18nActions();

// 初期化処理
i18next.use(initReactI18next).init({
    resources,
    lng: i18nActions.SearchUseLang().lang,
    interpolation: {
        escapeValue: false
    }
});

// 他のコンポーネントで利用するためのexport
export default i18next;