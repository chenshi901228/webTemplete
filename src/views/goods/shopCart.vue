<template>
  <div class="shop_cart">
    <common-header></common-header>
    <div class="shop_cart_top">购物袋</div>
    <div class="shop_cart_content">
        <div class="item" v-for="(item, index) in list" :key="index">
            <van-checkbox v-model="item.isCheck" shape="square" checked-color="#ee0a24"><span class="item_title text-overflow">{{ item.title }}</span></van-checkbox>

            <div class="item_info flex">
                <div class="left flex">
                    <div class="pic">
                        <img :src="require('@/assets/imgs/cart.png')" alt="" />
                    </div>
                    <div class="btns">
                        <div class="join" @click="item.isLike = !item.isLike">
                            <van-icon :name="item.isLike ? 'like' : 'like-o'" :color="item.isLike ? '#ee0a24' : '#434343'" />
                            <span>加入心愿单</span>
                        </div>
                        <div class="delete">删除</div>
                    </div>
                </div>
                <div class="right flex">
                    <div>
                        <div class="info">货号：{{ item.code || '--' }}</div>
                        <div class="info flex">
                            <span>数量：</span>
                            <van-stepper v-model="item.count" min="1" />
                        </div>
                        <div class="price">￥{{ item.price || '--' }}</div>
                    </div>
                    <div class="stock">
                        <div class="is_stock">{{ item.isStock ? '有货' : '无货' }}</div>
                        <div class="is_stock" v-if="item.isStock">{{ item.arrival || '--' }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="shop_cart_bottom flex">
        <div class="bottom_left flex">
            <van-checkbox v-model="isCheckAll" @change="getTotalPrice" shape="square" checked-color="#ee0a24"><span class="checked_all">全选</span></van-checkbox>
            <span class="total_price">￥{{ totalPrice || '0' }}</span>
        </div>
        <div class="bottom_right">立即结算</div>
    </div>
  </div>
</template>

<script>
import commonHeader from "@/components/common/header.vue"

export default {
    components: {
        commonHeader,
    },

    data() {
        return {
            list: [
                { title: '高定系列热带雨林马鞍包', isCheck: false, isLike: false, count: 1, code: 'GF-DTMAB-SL', price: 3699, isStock: true, arrival: '预计发货后1-4个工作日送到' },
            ],
            isCheckAll: false,//全选
            totalPrice: 0, //总价
        }
    },

    methods: {
        getTotalPrice(checked) {//点击全选
            if(!checked) return this.totalPrice = 0
            let prices =   this.list.map(item => { return item.price })
            this.totalPrice = prices.reduce((prev, cur, index, arr) => {
                return prev + cur
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.shop_cart {

        &_top {
            text-align: center;
            font-size: 16px;
            font-weight: 400;
            height: 40px;
            line-height: 40px;
            color: #434343;
            position: fixed;
            top: 145px;
            width: 100%;
            z-index: 9;
            background: #fff;
        }

        &_content {
            margin: 185px 0 50px;
            padding: 12px;
            box-sizing: border-box;
            min-height: calc(100vh - 235px);

            .item {
                margin: 30px 0;
                width: 100%;
                height: 164px;

                /deep/.van-checkbox {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                /deep/.van-checkbox__label {
                    width: calc(100% - 158px);
                    text-align: left;
                    margin-left: 0;
                }

                &_title {
                    font-size: 15px;
                    color: #434343;
                }

                &_info {
                    padding: 0 6px;
                    height: calc(100% - 20px);

                    .left {
                        flex-direction: column;
                        height: 100%;

                        .pic {
                            width: 94px;
                            height: max-content;
                            max-height: 100%;

                            img {
                                max-width: 100%;
                                height: auto;
                            }
                        }

                        .btns {
                            .join {
                                width: 105px;
                                height: 20px;
                                line-height: 20px;
                                text-align: center;
                                font-size: 10px;
                                font-weight: 300;
                                color: #434343;
                                border: 1px solid #929292;
                                margin: 2px 0;
                            }
                            .delete {
                                width: 105px;
                                height: 20px;
                                line-height: 20px;
                                text-align: center;
                                font-size: 10px;
                                font-weight: 300;
                                color: #434343;
                                border: 1px solid #929292;
                            }
                        }
                    }

                    .right {
                        width: calc(100% - 153px);
                        height: 100%;
                        flex-direction: column;
                        align-items: flex-start;
                        padding-top: 18px;
                        box-sizing: border-box;

                        .info {
                            justify-content: flex-start;
                            font-size: 12px;
                            font-weight: 300;
                            color: #434343;
                            margin-bottom: 5px;

                            /deep/.van-stepper__minus--disabled, .van-stepper__plus--disabled,
                            /deep/.van-stepper__input,
                            /deep/.van-stepper__minus, /deep/.van-stepper__plus {
                                background: none;
                                border: 1px solid #929292;
                                font-size: 12px;
                                color: #434343;
                                font-weight: bold;
                            }

                            /deep/.van-stepper__input {
                                margin: 0;
                                border-left: none;
                                border-right: none;
                            }
                        }

                        .price {
                            font-size: 15px;
                            font-weight: bold;
                            color: #434343;
                        }
                    }

                    .stock {

                        .is_stock {
                            font-size: 12px;
                            font-weight: 300;
                            color: #434343;
                            margin: 2px 0;
                        }
                    }
                }
            }
        }

        &_bottom {
            width: 100%;
            position: fixed;
            bottom: 0;
            z-index: 9;
            height: 48px;
            .bottom_left {
                padding: 0 18px 0 30px;
                width: calc(100% - 145px);
                height: 48px;
                box-sizing: border-box;
                background: #fff;

                .checked_all {
                    color: #959595;
                    font-size: 16px;
                    margin-left: 14px;
                }

                .total_price {
                    font-size: 18px;
                    font-family: Futura Bk BT;
                    font-weight: normal;
                    color: #434343;
                }
            }
            
            .bottom_right {
                width: 145px;
                text-align: center;
                height: 48px;
                line-height: 48px;
                background: #1B1B1B;
                font-size: 16px;
                color: #FFFFFF;
            }
        }
}
</style>