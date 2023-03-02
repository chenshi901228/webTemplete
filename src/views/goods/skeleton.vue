<template>
    <div class="skeleton">
        <div class="goods-list-item" v-for="item in list" :key="item">
            <div class="like"></div>
            <div class="product-content">
                <div class="product-img">
                    <div></div>
                </div>
                <div class="product-name">
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div class="price"></div>
        </div>
        <div style="width: 100%; height: 1px; background: #E6E6E6;margin: 5px 0;"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [1, 2, 3, 4]
        }
    }
}
</script>
<style lang="scss" scoped>
.skeleton {
    width: 100%;
    background: #f2f3f5;
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
        background: #FFFFFF;

        .like {
            width: 22px;
            height: 20px;
            align-self: flex-end;
            background: #f2f3f5;
        }

        .product-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            .product-img {
                width: 70%;
                height: 170px;
                margin: 0 0 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #f2f3f5;

                div {
                    max-width: 100%;
                    max-height: 100%;
                }
            }

            .product-name {
                width: 80%;
                height: 40px;

                div {
                    width: 100%;
                    height: 18px;
                    background: #f2f3f5;
                    &:first-child {
                        margin-bottom: 4px;
                    }
                }
            }
        }

        .price {
            width: 40%;
            height: 20px;
            background: #f2f3f5;
        }
    }
}</style>