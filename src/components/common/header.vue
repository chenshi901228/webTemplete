<!-- 头部导航 -->
<template>
    <div>
        <van-nav-bar v-if="showNavBar" title="GODSFORGE中国官方网站" fixed safe-area-inset-top />
        <div class="header flex" :style="{ top: showNavBar ? '80px' : '0'}">
            <div class="left flex">
                <img class="menu" :src="require('@/assets/imgs/menu.png')">
                <img class="logo" :src="require('@/assets/imgs/GODSFORGE.png')">
            </div>
            <div class="right flex" :style="{ justifyContent: showCat ? 'space-between' : 'flex-end' }">
                <img v-if="showCat" class="cat" :src="require('@/assets/imgs/cat.png')" @click="$router.push('/cart')">
                <img class="cat" :src="require('@/assets/imgs/search.png')">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        showNavBar: { //是否展示navbar
            type: Boolean,
            default: true
        },
        showCat: { //是否展示购物袋
            type: Boolean,
            default: true
        }
    }
}
</script>
<style lang="scss" scoped>
/deep/.van-nav-bar__content {
  background: #EDEDED;
  height: 80px;

  .van-nav-bar__title {
    max-width: none;
    width: 100%;
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #181818;
  }
}
.header {
    padding: 20px 10px;
    background-color: #fff;
    position: fixed;
    width: 100%;
    box-sizing: border-box;
    z-index: 99;

    .left {
        width: 180px;
    }

    .right {
        width: 60px;
    }

    .menu {
        width: 20px;
    }

    .logo {
        width: 150px;
    }

    .cat {
        width: 20px;
    }
}
</style>