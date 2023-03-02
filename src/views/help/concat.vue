<template>
<div class="concat_page">
    <div class="concat_page_title">{{ usInfo.title }}</div>
    <div class="concat_page_content flex">
        <span class="title">联系我们</span>
        <span class="tips">如果您有任何问题疑问与建议，敬请联系</span>
    </div>
    <div class="concat_page_info flex">
        <span class="title">致电</span>
        <span class="label">{{ usInfo.info.label }}</span>
        <a class="tel" :href="'tel:'+usInfo.info.tel">{{ usInfo.info.tel }}</a>
    </div>
    <common-footer></common-footer>
</div>
</template>

<script>
import commonFooter from "@/components/common/footer.vue"
export default {
    components: {
        commonFooter,
    },
    data() {
        return {
            usInfo: {
                title: '联系客服',
                info: {
                    label: 'GODSFORGE顾客中心',
                    tel: '400-822-3212',
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.concat_page {
    min-height: calc(100vh - 130px);
    box-sizing: border-box;

    &_title {
        background-color: #fff;
        position: fixed;
        top: 80px;
        width: 100%;
        height: 50px;
        line-height: 50px;
        box-sizing: border-box;
        font-size: 16px;
        font-weight: 600;
        color: #25211E;
        text-align: center;
    }

    &_content {
        padding: 15px 0 15px;
        margin: 130px 30px 0;
        overflow: hidden;
        flex-direction: column;
        border-bottom: 1px solid #B6B5B5;

        .title {
            margin: 25px 0 15px;
            font-size: 16px;
            font-weight: 500;
            color: #1F1F1F;
        }

        .tips {
            font-size: 14px;
            font-weight: 400;
            color: #1F1F1F;
        }
    }

    &_info {
        flex-direction: column;
        padding: 18px 0 70px;

        .title {
            font-size: 14px;
            font-weight: 400;
            color: #1F1F1F;
        }
        .label {
            margin: 20px 0 16px;
            font-size: 14px;
            font-weight: normal;
            color: #1F1F1F;
        }
        .tel {
            font-size: 14px;
            font-weight: normal;
            color: #1F1F1F;
        }
    }
}
</style>