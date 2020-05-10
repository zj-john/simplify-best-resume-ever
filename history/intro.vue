<template>
  <div class="intro page-wrapper">
    <div class="come-in" @click="linkto">制作简历 ></div>
    <div class="scroll-banner-wrapper">
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
          <div>
            <p class="title">模板持续更新34，完全免费使用</p>
            <p class="desc">包含各类模板20+，适用于各个行业</p>
          </div>
        </div>
        <div>
          <img src="../assets/logo.png" />
        </div>
      </article>
      <article>
        <div>
          <div>
            <p class="title">模板持续更新12，完全免费使用</p>
            <p class="desc">包含各类模板20+，适用于各个行业</p>
          </div>
        </div>
        <div>
          <img src="../assets/logo.png" />
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.component("resume", {
  name: "app",
  components: {},
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
  },
  methods: {
    linkto: function() {
      this.$router.push("/data");
    }
  }
});
</script>

<style scoped>
.intro {
  position: relative;
}
.come-in {
  position: absolute;
  border: 2px solid #098ac7;
  border-radius: 20px;
  width: 180px;
  height: 50px;
  font-size: 24px;
  line-height: 1.5em;
  bottom: 100px;
  right: 150px;
  z-index: 999;
  /* text-align: center; */
  /* vertical-align: middle; */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.scroll-banner-wrapper {
  height: 100%;
  width: 100vw;
  /* overflow: hidden; */
  display: flex;
  flex-wrap: nowrap;
  /* transform: translateX(-100vw);
  transition: 3s ease; */
  animation-name: slide;
  animation-duration: 12s;
  animation-iteration-count: infinite;
  animation-timing-function: steps(3, end);
}
@keyframes slide {
  from {
    transform: translateX(0px);
  }

  to {
    transform: translateX(-300vw);
  }
}
main:hover .scroll-banner-wrapper {
  animation-play-state: paused;
}
/* main:hover .intro>.come-in {
  animation-play-state: running
} */
article {
  width: 100vw;
  display: flex;
  flex-shrink: 0;
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