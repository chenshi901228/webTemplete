<template>
	<div class="list_box">
		<div class="list_box_item flex" v-for="(item, index) in list" :key="index" @click="toSeries(item)">
			<div class="item_content flex">
				<span class="item_eng">{{ item.title }}</span>
				<span class="item_chn">{{ item.type }}</span>
				<div class="item_btn">
					立即选购
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name:"classifyList",
	props: {
		list: {
			type: Array,
			default: () => {
				return []
			}
		}
	},
	data() {
		return {
			
		}
	},
	methods: {
		// 跳转系列列表
		toSeries(data) {
			this.$router.push({ name: "series", query: { categoryId: 87 } })
		}	
	}
}
</script>

<style lang="scss" scoped>
.list_box {
	padding: 5px 10px;
	
	&_item {
		margin: 10px 0;
		height: 340px;
		background-color: #999;
		
		.item_content {
			width: 100%;
			flex-direction: column;
			>span {
				padding-bottom: 5px;
			}
			
			.item_eng {
				color: #fff;
				font-size: 30px;
				font-weight: bold;
			}
			
			.item_chn {
				color: #fff;
				font-size: 32px;
				font-weight: 500;
			}
			
			.item_btn {
				padding: 7px 25px;
				border: 1px solid #fff;
				font-size: 18px;
				font-weight: 400;
				color: #FFFFFF;
			}
		}
	}
}
</style>