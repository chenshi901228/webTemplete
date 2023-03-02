// 设备判断
export default function remSize(noRest) {
    let winWidth;
    // 获取窗口宽度
    if (window.innerWidth) {
        winWidth = window.innerWidth;
    } else if ((document.body) && (document.body.clientWidth)) {
        winWidth = document.body.clientWidth;
    }
    // 通过深入Document内部对body进行检测，获取窗口大小
    if (
        document.documentElement &&
        document.documentElement.clientHeight &&
        document.documentElement.clientWidth
    ) {
        winWidth = document.documentElement.clientWidth;
    }
    // 修改font-size
    const fontSize = ((winWidth / 375) * 16).toFixed(4); // 🚨🚨🚨375设计稿宽度，16同css.loaderOptions.postcss.plugins中postcss-pxtorem插件的配置项rootValue值
    document.documentElement.style.fontSize = `${fontSize}px`;
    // console.log(fontSize, 'setResize');
    // 适配对font-size额外处理的手机
    const nowFontSize = parseFloat(getComputedStyle(document.documentElement, false)['font-size']).toFixed(4);
    if (noRest !== true && `${nowFontSize}` !== fontSize) {
        document.documentElement.style.fontSize = `${(fontSize * fontSize) / nowFontSize}px`;
    }
}