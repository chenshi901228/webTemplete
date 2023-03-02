<!--  -->
<template>
    <div class="footer">
        <van-cell-group>
          <van-cell
            v-for="(item, index) in cellList"
            :key="index"
            :title="item.label"
            :to="item.url"
            is-link
			      title-class="cell_title_class"
          />
        </van-cell-group>

        <div class="icon_line flex">
            <img :src="require('@/assets/imgs/webo.png')" style="width: 25px" />
            <img @click="wechatLogin" :src="require('@/assets/imgs/wechat.png')" style="width: 24px" />
            <img :src="require('@/assets/imgs/redbook.png')" style="width: 19px" />
            <img :src="require('@/assets/imgs/douyin.png')" style="width: 15px" />
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            cellList: [
                { label: "联系客服", url: "/concat" },
                { label: "专属服务", url: "/service" },
                { label: "关于我们", url: "/us" },
                { label: "帮助中心", url: "/help" },
            ],
        }
    },
    methods: {
        wechatLogin() {
            this.$router.push({ name: "login" })
        }
    }
}
</script>
<style lang="scss" scoped>
.footer {
    background: #212121;
    padding: 20px 10px;

    .cell_title_class {
		font-size: 16px;
		font-weight: 400;
		color: #FFFFFF;
	}

	/deep/.van-cell {
		background: #212121;
		padding: 24px;
		border-bottom: 1px solid #5C5A5B;
	}

	/deep/[class*=van-hairline]::after,
	/deep/.van-cell::after {
		border: none;
	}

	.icon_line {
		padding: 24px;
	}
}
</style>
