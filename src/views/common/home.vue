<template>
  <div class="container">
    <common-header></common-header>
    <div class="container_list">
      <classify-list :list="list"></classify-list>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import commonHeader from "@/components/common/header.vue"
import commonFooter from "@/components/common/footer.vue"
import classifyList from "@/components/classifyList.vue"

export default {
  components: {
    classifyList,
	commonHeader,
	commonFooter,
  },
  data() {
    return {
      list: [
        { title: "GOD MADE", type: "神造系列" },
        { title: "GAODING SERIES", type: "高定系列" },
        { title: "DESIGNER SERIES", type: "设计师系列" },
        { title: "THE GOD OF LOVE", type: "爱神系列" },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.container {
  &_list {
    margin-top: 145px;
  }
}
</style>