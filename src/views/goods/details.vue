<template>
    <div class="goods-details">
        <common-header :showCat="false" :showNavBar="false"></common-header>
        <!-- 轮播图 -->
        <van-swipe @change="swiperChange">
            <van-swipe-item v-for="(item, index) in swiperImgList" :key="index">
                <div class="swiper-img">
                    <img :src="item" alt="">
                </div>
            </van-swipe-item>
            <template #indicator>
                <div class="custom-indicator">
                    <div :class="['dot', item == current + 1 ? 'actived' : '']" v-for="item in swiperImgList.length" :key="item"></div>
                </div>
            </template>
        </van-swipe>
        <!-- 商品购买 -->
        <div class="add-shopping-cart">
            <div class="pro-name">
                <p>{{ goodsInfo.prodName || "" }}</p>
                <img @click="addOrCancel" :src="require('@/assets/imgs/details_like.png')" alt="">
            </div>
            <p class="des">{{ goodsInfo.brief || "" }}</p>
            <p class="articleNo">货号：{{ goodsInfo.articleNo || "" }}</p>
            <div style="width: 100%; height: 1px; background: #F3F3F5; margin: 20px 0 16px;"></div>
            <p class="price">￥ {{ numFormat(goodsInfo.price || 0) }}</p>
            <div class="btn" @click="addShoppingCart">加入购物袋</div>
        </div>
        <!-- 商品详细信息 -->
        <div class="details-collapse">
            <van-collapse v-model="activeNames">
                <van-collapse-item name="1">
                    <template #title>
                        <div class="custom-collapse-title">说明</div>
                    </template>
                    <div class="details-html" v-html="goodsInfo.content || ''"></div>
                </van-collapse-item>
                <van-collapse-item name="2">
                    <template #title>
                        <div class="custom-collapse-title">尺码信息</div>
                    </template>
                    <div class="details-html" v-html="goodsInfo.sizeInfo || ''"></div>
                </van-collapse-item>
                <van-collapse-item name="3">
                    <template #title>
                        <div class="custom-collapse-title">免费送货及安心退换货</div>
                    </template>
                    <div class="details-html" v-html="goodsInfo.deliverGoods || ''"></div>
                </van-collapse-item>
            </van-collapse>
        </div>
        <!-- 常见问题解答 -->
        <div class="problem">
            <p class="title">常见问题解答：</p>
            <ul>
                <li v-for="item in problemList" :key="item.id">
                    <a href="javascript:;">{{ item.title }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { numFormat } from "@/utils/index"
import commonHeader from "@/components/common/header.vue"
export default {
    components: {
		commonHeader,
	},
    data() {
        return {
            prodId: null, //商品编号
            goodsInfo: {},
            isCollection: false, //当前用户是否收藏该商品
            current: 0, // 轮播图序号
            swiperImgList: [], //轮播图列表
            activeNames: ["1"], //展开
            problemList: [
                { id: 0, title: "订单多久可以发货？", url: "" },
                { id: 1, title: "我如何进行退货？", url: "" },
                { id: 2, title: "如何追踪物流信息？", url: "" },
                { id: 3, title: "是否有礼品包装？", url: "" },
            ]
        }
    },
    activated() {
        this.prodId = this.$route.query.prodId
        this.$nextTick(() => {
            this.getGoodsInfo()
            this.getIsCollection()
        })
    },
    methods: {
        // 数字千分符
		numFormat(num) {
			return numFormat(num)
		},
        // 获取商品详情
        getGoodsInfo() {
            if(!this.prodId) return
            let params = {
				prodId: this.prodId
			}
			this.$http.get("/prod/prodInfo", { params }).then(({ data: res }) => {
                if(res) {
                    this.goodsInfo = res

                    // 设置轮播数组
                    let list = this.goodsInfo.imgs.split(",")
                    this.swiperImgList = list
                }
			}).catch(err => {
				throw err
			})
        },
        // 商品是否在用户收藏夹
        getIsCollection() {
            let params = {
				prodId: this.prodId
			}
			this.$http.get("/p/user/collection/isCollection", { params }).then(({ data: res }) => {
                console.log(res)
			}).catch(err => {
				throw err
			})
        },
        // 轮播图改变
        swiperChange(index) {
            this.current = index
        },
        // 添加到购物袋
        addShoppingCart() {
            let params = {
                basketId: 0,
                prodId: this.prodId,
                skuId: this.goodsInfo.skuList[0].skuId,
                shopId: this.goodsInfo.shopId,
                count: 1,
            }
            this.$http.post("/p/shopCart/changeItem", params).then(({ data: res }) => {
                console.log(res)
            }).catch(err => {
                throw err
            })
        },
        // 收藏或取消收藏
        addOrCancel() {
            this.$http.post("/p/user/collection/addOrCancel", { prodId: this.prodId }).then(({ data: res }) => {
                console.log(res)
            }).catch(err => {
                throw err
            })
        }
    },
}
</script>
<style lang="scss" scoped>
.goods-details {
    width: 100%;
    min-height: 100vh;
    padding-top: 60px;
    background: #F6F6F6;
    .swiper-img {
        width: 100%;
        height: 300px;
        background: #F3F3F5;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            max-width: 100%;
            // max-height: 100%;
            height: auto;
        }
    }
    .custom-indicator {
        position: absolute;
        bottom: 10px;
        left: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        .dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            margin-right: 6px;
            background: #707072;
            &.actived {
                transform: scale(1.5);
                background: #010103;
            }
        }
    }
    .add-shopping-cart {
        width: 100%;
        background: #FFFFFF;
        padding: 36px 20px 20px;
        .pro-name {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            p {
                width: 80%;
                font-size: 20px;
                color: #1B1B1B;
                line-height: 27px;
            }
            img {
                width: 15px;
                height: 14px;
            }
        }
        .des {
            font-size: 14px;
            line-height: 26px;
            color: #7E7E7E;
            margin: 12px 0 14px;
        }
        .articleNo {
            font-size: 12px;
            color: #1B1B1B;
            font-weight: 500;
        }
        .price {
            font-size: 16px;
            color: #1B1B1B;
            font-weight: bold;
            text-align: center;
            margin-bottom: 16px;
        }
        .btn {
            width: 100%;
            border-radius: 50px;
            background: #010101;
            color: #FFFFFF;
            text-align: center;
            font-size: 16px;
            line-height: 50px;
            opacity: 1;
            user-select: none;
            &:active {
                opacity: 0.8;
            }
        }
    }
    /deep/.details-collapse {
        background: #F6F6F6;
        padding: 0 20px 20px;
        .details-html {
            img {
                max-width: 100%;
                height: auto;
            }
        }
        .custom-collapse-title {
            font-size: 16px;
            color: #1B1B1B;
        }
        .van-collapse::after {
            border: none;
        }
        .van-collapse-item {
            border-bottom: 1px solid #E2E2E2;
        }
        .van-cell::after {
            border: none;
        }
        .van-cell,.van-collapse-item__content {
            padding: 10px 0;
            background-color: transparent;
        }
        .van-cell__right-icon {
            color: #1B1B1B;
        }
    }
    .problem {
        padding: 0 20px 40px;
        .title {
            font-size: 16px;
            color: #1B1B1B;
            font-weight: bold;
            margin-bottom: 10px;
        }
        li {
            margin-top: 8px;
        }
        a {
            font-size: 16px;
            color: #121212;
            text-decoration: underline;
        }
    }
}
</style>