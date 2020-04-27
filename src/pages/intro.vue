<template>
  <div class="intro page-wrapper">
    <app-header></app-header>
    <article>
      <div>
        <div>
          <p class="title">模板持续更新，完全免费使用</p>
          <p class="desc">包含各类模板20+，适用于各个行业</p>
        </div>
      </div>
      <div>
        <img src="../assets/logo.png" />
      </div>
    </article>
    <article>
      <div>
        <img src="../assets/logo.png" />
      </div>
      <div>
        <div>
          <p class="title">模板持续更新，完全免费使用</p>
          <p class="desc">包含各类模板20+，适用于各个行业</p>
        </div>
      </div>
    </article>
    <article>
      <div>
        <div>
          <p class="title">模板持续更新，完全免费使用</p>
          <p class="desc">包含各类模板20+，适用于各个行业</p>
        </div>
      </div>
      <div>
        <img src="../assets/logo.png" />
      </div>
    </article>
  </div>
</template>

<script>
import Vue from "vue";
import appHeader from "@/components/layout/head";
export default Vue.component("resume", {
  name: "app",
  components: {
    appHeader
  },
  data: function() {
    return {
      resumeList: [
        { name: "material-dark" },
        { name: "left-right" },
        { name: "oblique" },
        { name: "side-bar" },
        { name: "purple" },
        { name: "left-right-rtl" },
        { name: "side-bar-rtl" }
      ]
    };
  }
});
</script>

<style scoped>
article {
  height: 400px;
  width: 100%;
  display: flex;
}

article > div {
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

article p.title {
  font-size: 30px;
  line-height: 1.5em;
  font-weight: bold;
}

article p.desc {
  font-size: 18px;
  line-height: 1.5em;
  font-weight: bold;
}

article:nth-of-type(1) {
  background-color: lightblue;
}
article:nth-of-type(2) {
  background-color: lightsalmon;
}
article:nth-of-type(3) {
  background-color: lightskyblue;
}
</style>