import Cookies from 'js-cookie'
import store from '@/store'



/**
 * 获取语言
 * @returns language
 */
export function getLanguage() {
    let language = localStorage.getItem('languageSetting') || navigator.language || 'zh';
    language = language.replace(/_/, '-').toLowerCase();

    if (language === 'zh-cn' || language === 'zh') {
        language = 'zh';
    } else if (language === 'en' || language === 'en-us' || language === 'en-GB') {
        language = 'en';
    }
    return language;
}

/**
 * 数字千分号
 */
export function numFormat(num) {
    var res = num.toString().replace(/\d+/, function (n) { // 先提取整数部分
        return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
            return $1 + ",";
        });
    })
    return res;
}

/**
 * 清除登录信息
 */
export function clearLoginInfo() {
    Cookies.remove('access_token')
}