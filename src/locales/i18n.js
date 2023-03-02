import Vue from "vue"
import VueI18n from "vue-i18n"
import {
    getLanguage
} from "@/utils/index"


Vue.use(VueI18n)

// 获取语言包
function loadLocaleMessages() {
    const locales = require.context('./lang', true, /[A-Za-z0-9-_,\s]+\.json$/i);
    const messages = {};
    locales.keys().forEach((key) => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i);
        if (matched && matched.length > 1) {
            const locale = matched[1];
            messages[locale] = locales(key);
        }
    });
    return messages;
}


export default new VueI18n({
    locale: getLanguage() || 'zh',
    fallbackLocale: 'zh', //没有英文的时候默认中文语言
    messages: loadLocaleMessages(), //语言包
});