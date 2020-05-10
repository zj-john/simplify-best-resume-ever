<template>
  <div class="intro page-wrapper">
    <Button class="come-in" type="primary" shape="circle" @click="linkto" large="large" ghost>
      开始制作
      <Icon type="ios-arrow-forward" />
    </Button>
    <Carousel :autoplay="true" v-model="c_value" loop class="carousel_wrapper" :height="c_height">
      <CarouselItem class="carousel_item">
        <div>
          <div>
            <p class="title">模板持续更新，完全免费使用</p>
            <p class="desc">包含各类模板20+，适用于各个行业</p>
          </div>
        </div>
        <div>
          <img src="../assets/logo.png" />
        </div>
      </CarouselItem>
      <CarouselItem class="carousel_item">
        <div>
          <div>
            <p class="title">模板持续更新，完全免费使用</p>
            <p class="desc">包含各类模板20+，适用于各个行业</p>
          </div>
        </div>
        <div>
          <img src="../assets/logo.png" />
        </div>
      </CarouselItem>
      <CarouselItem class="carousel_item">
        <div>
          <div>
            <p class="title">模板持续更新，完全免费使用</p>
            <p class="desc">包含各类模板20+，适用于各个行业</p>
          </div>
        </div>
        <div>
          <img src="../assets/logo.png" />
        </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
export default {
  components: {},
  data: function() {
    return {
      c_value: 0,
      c_height: window.innerHeight - 50
    };
  },
  mounted: function(){
    window.onresize = function() {
      console.log("resize");
      this.c_height = window.innerHeight - 50
    }
  },
  methods: {
    linkto: function() {
      this.$router.push("/data");
    }
  }
};
</script>

<style lang="less" scoped>
.intro {
  position: relative;
  // display: flex;
  // flex-direction: column;
}
.come-in {
  position: absolute;
  font-size: 24px;
  line-height: 1.5em;
  bottom: 100px;
  right: 150px;
  z-index: 999;
}
.carousel_wrapper {
  // height: 100%;
  // flex-grow: 1;
}
.carousel_item {
  display: flex;
  height: 100%;
  & > div {
    flex-basis: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p.title {
    font-size: 30px;
    line-height: 1.5em;
    font-weight: bold;
  }
  p.desc {
    font-size: 18px;
    line-height: 1.5em;
    font-weight: bold;
  }
}

.carousel_item:nth-of-type(1) {
  background-color: lightblue;
}
.carousel_item:nth-of-type(2) {
  background-color: lightsalmon;
}
.carousel_item:nth-of-type(3) {
  background-color: lightskyblue;
}
</style>