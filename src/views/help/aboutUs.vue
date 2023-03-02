<template>
<div class="about_page">
    <div class="about_page_title">{{ usInfo.title }}</div>
    <div class="about_page_content">
        <div class="list" v-for="item in usInfo.list" :key="item.label">
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
            usInfo: {
                title: '关于我们',
                list: [
                    {label: '公司简介', intro: '<p>GODSFORGE（歌斐）是源自俄罗斯的奢侈品品牌，经营产品包括珠宝，手提包，旅行用品，小型皮具，配饰，鞋履，成衣，腕表，高级珠宝及个性化订制服务等1872年，俄罗斯珠宝商Godsforge创立了同名珠宝品牌GODSFORGE（歌斐）。</p><p>1882年，歌斐位于斯韦特洛戈尔斯克的品牌门店正式开幕。<br/>1906年开始，GODSFORGE神话风格开始萌芽。进一步将珍稀彩色宝石的大胆配色引入了珠宝设计中。从俄罗斯建筑中汲取灵感，方牌形，圆尖形成为品牌的标志性元素，彰显宝石明亮艳丽的色彩搭配，同年，手工定制手提包系列诞生。<br/>1920年，在哈尔滨设立精品店。<br/>1947年，歌斐家族去往美国进一步拓展家族企业。<br/>1987年，劳伦.歌斐（Lauren Godsforge）接手家族生意，开始寻求与东方新的合作与联系。<br/>1992年，苏联解体以后，歌斐家族回到俄罗斯，成立公司GF。并在全球推出其首款定制腕表Gdoeds，标志着歌斐多元化经营策略的第一步。<br/>1996年7月，歌斐推出第一款神话系列箱包，命名为永远的缪斯女神。<br/>1997年，歌斐高奢服装定制系列面世。将珠宝的奢华及高贵融入系列服装设计中，服装风格尽显华美与独特。<br/>1999年，丘比特爱神系列，成为歌斐于1999年推出的第一款定制箱包。<br/>2002年6月，歌斐在罗马举办的国际性活动中推出Atiquer珠宝系列。<br/>2003年，通过推出小羊皮定制女鞋，歌斐进入了东欧定制鞋履的世界。<br/>2005年，歌斐继续开发配饰业务，在俄罗斯开设了东欧第一家专用于销售皮具、眼镜、香水、丝织品和银器的专卖店。<br/>2007年在意大利开设第一家专营配饰产品的精品店。<br/>2012年，推出140周年纪念款手提袋及永生珠宝系列。<br/>2014年—2017年间，歌斐一直寻求如何将设计理念与东方元素进行结合，大步展开进驻中国市场的步伐。<br/>2018年2月，第三任歌斐先生时隔70年再次来到中国，他极力看好中国奢侈品消费市场，带领核心设计团队和商务团队在广州，上海，成都考察市场近半年时间。藉此，终于再次拉开了歌斐与东方合作的新篇章。<br/>2021年9月9日，歌斐品牌设计及研发团队，用时一年的时间，终于推出了入驻中国以后的首款女包高定系列——花样年华，全球限量发售。在中国，品牌名正式更迭为歌斐.神造<br/>2022年，歌斐.神造正式入驻中国官方线上旗舰店。</p><p>每一只箱包，每一件珠宝，每一件高定服饰，每一件配饰都源自欧洲超现实主义浪漫色彩设计灵感。忠诚于手工艺传统，在美术的定义和作用下进行再次创作。将古希腊神话的美与神秘缝制进每一件艺术产品。以神的名义，为你量身打造</p>'},
                ],
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.about_page {

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