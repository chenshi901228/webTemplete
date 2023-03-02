<!-- 系列列表 -->
<template>
    <div class="main">
		<common-header></common-header>
        <div class="content">
            <p class="nav-title text-overflow">女 包  /  高定系列  /  热带雨林</p>
			<!-- 筛选条件 -->
			<div class="filter-nav">
				<div class="filter-nav-item borderRight haveStock">
					<van-checkbox v-model="haveStock" shape="square" 
						icon-size="14px"
						@change="haveStockChange" checked-color="#ee0a24">官网有货</van-checkbox>
				</div>
				<div class="filter-nav-item borderRight">
					<!-- 筛选 -->
					<van-dropdown-menu>
						<van-dropdown-item ref="filterDropdown" @open="dropdownOpen('filter')" @close="dropdownClose('filter')">
							<template #title>
								<div class="filter-nav-item-title">
									<span>筛选</span>
									<img :class="dropdownName == 'filter' ? 'setUp' : ''" :src="require('@/assets/imgs/arrow-down.png')" alt="">
								</div>
							</template>
							<van-cell center title="包邮">
								<template #right-icon>
									<van-switch v-model="pinkage" size="24" active-color="#ee0a24" />
								</template>
							</van-cell>
							<van-cell center title="团购">
								<template #right-icon>
									<van-switch v-model="groupBuy" size="24" active-color="#ee0a24" />
								</template>
							</van-cell>
							<div style="padding: 5px 16px;">
							<van-button type="danger" block round @click="filterDropdownConfirm">
								确认
							</van-button>
							</div>
						</van-dropdown-item>
					</van-dropdown-menu>
				</div>
				<div class="filter-nav-item">
					<!-- 排序 -->
					<van-dropdown-menu>
						<van-dropdown-item ref="sortDropdown" @open="dropdownOpen('sort')" @close="dropdownClose('sort')">
							<template #title>
								<div class="filter-nav-item-title">
									<span>排序</span>
									<img :class="dropdownName == 'sort' ? 'setUp' : ''" :src="require('@/assets/imgs/arrow-down.png')" alt="">
								</div>
							</template>
							<van-cell 
								v-for="item in sortDropdownList" 
								:key="item.value" center :title="item.text"
								@click="sortValueTemp = item.value"
								:title-style="{color: sortValueTemp == item.value ? '#ee0a24' : ''}">
								<template #right-icon v-if="sortValueTemp == item.value">
									<van-icon name="success" size="24" color="#ee0a24" />
								</template>
							</van-cell>
							<div style="padding: 5px 16px;">
							<van-button type="danger" block round @click="sortDropdownConfirm">
								确认
							</van-button>
							</div>
						</van-dropdown-item>
					</van-dropdown-menu>
				</div>
			</div>
			<!-- 骨架屏 -->
			<skeleton v-if="loading"></skeleton>
			<!-- 商品列表 -->
			<div class="goods-list" v-else>
				<div class="goods-list-item" v-for="item in goodsList" :key="item.prodId" @click="toGoodsDetails(item.prodId)">
					<img class="like" src="@/assets/imgs/like.png" alt="">
					<div class="product-content">
						<div class="product-img" >
							<img v-lazy="item.pic" alt="">
						</div>
						<div class="product-name">
							<span>{{ item.prodName || "" }}</span>
						</div>
					</div>
					<span class="price">￥ {{ numFormat(item.price || 0) }}</span>
				</div>
				<!-- 空列表 -->
				<div v-if="!loading && !goodsList.length" style="width: 100%; text-align: center;">
					<van-empty description="暂无商品" />
				</div>
				<div style="width: 100%; height: 1px; background: #E6E6E6;margin: 5px 0;"></div>
			</div>
        </div>
		<common-footer></common-footer>
    </div>
</template>
<script>
import Vue from 'vue'
import { Lazyload } from "vant"
import commonHeader from "@/components/common/header.vue"
import commonFooter from "@/components/common/footer.vue"
import skeleton from "./skeleton.vue"
import { numFormat } from "@/utils/index"
// 图片懒加载注册
Vue.use(Lazyload, {
  loading: require("@/assets/logo.png")
})

export default {
    components: {
		commonHeader,
		commonFooter,
		skeleton
	},
	data() {
		return {
			categoryId: null,
			haveStock: false, //官网有货
			pinkage: true, //是否包邮
			groupBuy: false, //是否团购
			sortValue: 0,
			sortValueTemp: 0, //待确认排序选项
			dropdownName: "",
			sortDropdownList: [
				{ text: '默认排序', value: 0 },
				{ text: '销量排序', value: 1 },
				{ text: '价格排序', value: 2 },
			],
			goodsList: [], //商品列表
			loading: true, //加载中
			size: 10,
			current: 1
		}
	},
	activated() {
		this.categoryId = this.$route.query.categoryId
        this.$nextTick(() => {
			this.getProductList()
        })
	},
	methods: {
		// 获取数据
		getProductList() {
			this.loading = true
			let params = {
				categoryId: this.categoryId,
				size: this.size,
				current: this.current,
				sort: this.sortValue
			}
			if(this.haveStock) params.haveStock = 1
			this.$http.get("/prod/pageProd", { params }).then(({ data: res }) => {
				this.loading = false
				if(res && res.records) {
					this.goodsList = res.records
				}
			}).catch(err => {
				this.loading = false
				throw err
			})
		},
		// 跳转商品详情页
		toGoodsDetails(prodId) {
			this.$router.push({ name: "goodsDetails", query: { prodId } })
		},
		// 数字千分符
		numFormat(num) {
			return numFormat(num)
		},
		// 官网有货
		haveStockChange(status) {
			if(this.loading) return
			this.getProductList()
		},
		// 开启下拉 
		dropdownOpen(name) {
			this.dropdownName = name
		},
		// 关闭下拉
		dropdownClose(name) {
			if(this.dropdownName == name) {
				this.dropdownName = ""
			}
			this.dropdownCloseInit()
		},
		// 筛选下拉确认
		filterDropdownConfirm() {
			this.$refs.filterDropdown.toggle()
			console.log("filerValue", this.pinkage, this.groupBuy)
		},
		// 排序下拉确认
		sortDropdownConfirm() {
			this.$refs.sortDropdown.toggle()
			if(this.loading) return
			if(this.sortValue != this.sortValueTemp) {
				this.sortValue = this.sortValueTemp
			}
			this.getProductList()
		},
		// 关闭下拉筛选排序重置状态
		dropdownCloseInit() {
			this.sortValueTemp = this.sortValue
		}
	}
 }
</script>
<style lang="scss" scoped>
.main {
	padding-top: 145px;
	.content {
		background: #FFFFFF;
		.nav-title {
			font-size: 12px;
			color: #2F2F2F;
			padding: 16px 0 16px 24px;
			background: #E7E7E7;
		}
		// 筛选条件
		.filter-nav {
			display: flex;
			align-items: center;
			justify-content: space-around;
			border-bottom: 1px solid #E6E6E6;
			.filter-nav-item {
				height: 48px;
				width: 33.3%;
				&.haveStock {
					display: flex;
					align-items: center;
					justify-content: center;
				}
				&.borderRight {
					border-right: 1px solid #E7E7E7;
				}

				.filter-nav-item-title {
					display: flex;
					align-items: center;
					justify-content: center;
					span {
						display: inline-block;
						font-size: 14px;
						color: #1A1A1A;
						margin-right: 6px;
					}
					img {
						width: 11px;
						height: 7px;
						transition: all .3s;
					}
					.setUp {
						transform: rotate(-180deg);
					}
				}

				// /deep/.van-dropdown-item {
				// 	border-top: 1px solid #E6E6E6;
				// }
				/deep/.van-checkbox__label {
					font-size: 14px;
					color: #1A1A1A;
				}
				/deep/.van-dropdown-menu__bar {
					box-shadow: none;
				}
				/deep/.van-dropdown-menu__title::after {
					display: none;
				}
			}
		}
		// 商品列表
		.goods-list {
			width: 100%;
			background: #FFFFFF;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.goods-list-item {
				width: 49.5%;
				height: 336px;
				margin-top: 2px;
				padding: 0 20px;
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-around;
				background: #E6E6E6;
				.like {
					width: 22px;
					height: 20px;
					align-self: flex-end;
				}
				.product-content {
					display: flex;
					flex-direction: column;
					align-items: center;
					.product-img {
						width: 80%;
						height: 170px;
						margin: 0 0 24px;
						display: flex;
						align-items: center;
						justify-content: center;
						img {
							max-width: 100%;
							max-height: 100%;
						}
					}
					.product-name {
						height: 40px;
						span {
							font-size: 14px;
							line-height: 20px;
							color: #545353;
							text-overflow: -o-ellipsis-lastline;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;			
							-webkit-box-orient: vertical;
							word-break: break-all;
							-webkit-line-clamp: 2;
							line-clamp: 2;	
						}
					}
				}
				.price {
					font-size: 14px;
					color: #888888;
				}
			}
		}
	}
}
</style>
