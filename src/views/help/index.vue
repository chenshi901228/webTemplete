<template>
<div class="service_page">
    <div class="service_page_title">{{ serviceInfo.title }}</div>
    <div class="service_page_content">
        <div class="list" v-for="item in serviceInfo.list" :key="item.label">
            <p class="label">{{ item.label }}</p>
            <div class="intro" v-html="item.intro"></div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            serviceInfo: {
                title: '帮助中心',
                list: [
                    {label: '如何在线购物?', intro: '<p>登录GODSFORGE歌斐中国官网后选择您心仪的商品，然后添加进购物车进行购买。<p>'},
                    {label: '是否可以使用多种付款方式?', intro: '<p>目前单笔订单仅支持一种支付方式。</p>'},
                    {label: '我的付款是安全的吗?', intro: '<p>GODSFORGE歌斐中国官方旗舰店，为您的所有购买保证最大的安全性。我们采用最先进的加密服务(SSL)和保护链接。</p>'},
                    {label: '我的订单将于何时收费?', intro: '<p>订单自支付完成时，从您使用的信用卡或其他付款方式中扣款。</p>'},
                    {label: '是否可以修改或取消订单?', intro: '<p>如果您希望取消或者修改已支付订单，请尽快联系我们。除缺货、网络传输故障等特殊原因外部分的订单均会得到及时处理。对于未发货订单，我们可以帮助修改订单的收货人信息。取消订单。对于已发货订单，我们无法修改或取消。对于个性化定制商品订单，一旦成功提交便无法取消。</p>'},
                    {label: '如何查看订单信息?', intro: '<p>请在GODSFORGE歌斐中国官方旗舰店及GODSFORGE歌斐抖音品牌授权店登陆个人账号，在“我的订单”中查看订单信息。</p>'},
                    {label: '保养与维修', intro: '<p>关于商品维修<br/>根据消费者保护相关法律，歌要应采取必要的措施确保商品质量。客户有权免费通过维修、更换获得合格商品或退回商品(前提是客户有权在适用法律法规规定的期限内选择维修、更换或退回商品)。</p>'},
                    {label: '关于商品使用说明以及质保服务', intro: '<p>每一个歌要包包出售时都会随附保修卡。歌斐为其提供自购买日起开始生效的1个月质保服务。保修范围包括所有商品自身及零件故障，但并不包括人为造成的损坏。</p>'},
                    {label: '发票', intro: '<p>是否可以开税务发票?<br/>您可以在通过本网站提交订单时勾选发票需求，填写发票信息，发票根据您提交订单时提供的信息开具。<br/>已签收/未勾选发票需求的订单是否可以补开发票?您可在歌装本付商品后/在商品分批本付的情形下，则从最后一批商品的交付时间起算十四141日起日任何情况下不超过一11年内 通过在线客服联系歌要的客产服务部门。向歌斐申请已交付商品不包括任何退货)的相应电子税务发票。</p>'},
                    {label: '收货后为什么没有找到发票?', intro: '<p>我们会在顾客收到货品后的14天后根据客户留存的联系方式递送相关电子发票。</p>'},
                ],
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.service_page {

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
        margin-top: 130px;
        padding: 0 30px;
        overflow: hidden;

        .list {
            margin: 30px 0;

            .label {
                font-size: 14px;
                font-weight: 600;
                color: #434343;
            }
        }

        /deep/p {
            margin: 20px 0;
            font-size: 12px;
            font-weight: 400;
            line-height: 20px;
            color: #434343;
        }
    }
}
</style>