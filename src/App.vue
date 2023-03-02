<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import remSize from '@/utils/remSize.js';
export default {
  created() {
    this.windowResizeHandle()
  },
  methods: {
    windowResizeHandle() {
      remSize();
      window.addEventListener('resize', () => {
        remSize();
      })
    },
    toggleLanguage() {
      switch (this.$i18n.locale) {
        case 'en':
          this.$i18n.locale = 'zh';
          localStorage.setItem('languageSetting', 'zh');
          break;
        case 'zh':
          this.$i18n.locale = 'en';
          localStorage.setItem('languageSetting', 'en');
          break;
      }
      document.title = this.$i18n.t('title');
    },
  }
}
</script>
<style lang="scss" scoped>

</style>
