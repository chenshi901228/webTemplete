<template>
    <div id="app">
        <!-- <div class="">GODSFORGE中国官方网站</div> -->
        <!-- <van-nav-bar title="GODSFORGE中国官方网站" fixed safe-area-inset-top /> -->
        <keep-alive>
            <router-view />
        </keep-alive>
    </div>
</template>

<style lang="scss" scoped>
#app {
  background: #EDEDED;
  font-family: Source Han Sans CN;
}
// /deep/.van-nav-bar__content {
//   background: #EDEDED;
//   height: 80px;

//   .van-nav-bar__title {
//     max-width: none;
//     width: 100%;
//     font-size: 24px;
//     font-family: Source Han Sans CN;
//     font-weight: 500;
//     color: #181818;
//   }
// }
</style>