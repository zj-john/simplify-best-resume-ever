<template>
  <div id="app">
    <app-header v-if="layoutShow"></app-header>
    <main>
      <router-view></router-view>
    </main>
    <!-- <app-footer v-if="layoutShow"></app-footer> -->
  </div>
</template>

<script>
import appHeader from "@/components/layout/head";
import appFooter from "@/components/layout/foot";
import './app.css';
export default {
  components: {
    appHeader,
    appFooter
  },
  computed: {
    layoutShow: function() {
      return this.$store.state.layoutShow
    }
  }
};
</script>

<style>
/* Add new fonts here */
@import "../node_modules/roboto-fontface/css/roboto/roboto-fontface.css";
@import "../node_modules/font-awesome/css/font-awesome.css";
@import "../node_modules/source-sans-pro/source-sans-pro.css";
@import "../node_modules/npm-font-open-sans/open-sans.css";
@import "../node_modules/npm-font-open-sans-condensed/open-sans-condensed.css";
@import "../node_modules/raleway-webfont/raleway.css";
body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  background: #cccccc;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
#app main {
  flex-grow: 1;
}
#app main>div {
  height: 100%;
}
</style>
