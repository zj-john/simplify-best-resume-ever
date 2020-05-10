<template>
  <div class="home">
    <div class="previews content">
      <Row type="flex" align="middle">
        <Col span="4" v-for="resume in resumeList" :key="resume.name" class="preview">
          <div class="cv_item">
            <div class="preview-wrapper">
              <img :src="require(`../assets/preview/resume-${resume.name}.png`)" />
              <!-- <span>{{ resume.name }}</span> -->
            </div>
            <div class="action">
              <Button type="info" @click="preview(resume.name)" size="small">预览</Button>
              <Button type="primary" @click="select(resume.name)" size="small">选择</Button>
            </div>
          </div>
        </Col>
      </Row>
      <!-- <div class="preview bg-white">
      <router-link v-bind:to="'/custom'">
        <div class="preview-wrapper">
          <span>不满意?<br/>试试自定义模板</span>
        </div>
      </router-link>
      </div>-->
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
      resumeList: this.$store.state.resumeList
    };
  },
  methods: {
    preview: function(name) {
      let routeData = this.$router.resolve({
        name: "resume",
        params: { resumeid: name }
      });
      window.open(routeData.href, "_blank");
    },
    select: function(name) {
      // let routeData = this.$router.resolve({
      //   name: "data",
      //   params: { resumeid: name }
      // });
      // window.open(routeData.href, "_blank");
      // this.$router.push("/data", {params: { resumeid: name }})
      this.$router.push({
        name: "data",
        params: {
          resumeid: name
        }
      });
    }
  }
});
</script>

<style scoped>
.cv_item {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
  position: relative;
}
.previews {
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  padding-top: 20px;
}

.preview {
  position: relative;
  padding-top: 1.5%;
  padding-left: 1.5%;
  padding-right: 1.5%;
  padding-bottom: 1.5%;
  overflow: hidden;
}
.preview:hover {
  transform: scale(1.2);
  transform-origin: 50% 50%;
}
.preview:hover img {
  filter: blur(0);
  opacity: 1;
}
.action {
  display: none;
  position: absolute;
  bottom: 10px;
  width: 100%;
}
.preview:hover .action {
  display: flex;
  justify-content: space-evenly;
}
.preview-wrapper {
  position: relative;
  background: white;
}

.preview img {
  width: 100%;
  opacity: 0.5;
  filter: blur(1px);
}

.preview span {
  position: absolute;
  max-width: 100%;
  font-size: 24px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.75);
  width: 100%;
  text-align: center;
  display: inline-block;
  top: 50%;
  transform: translateY(-50%);
}
.bg-white {
  background-color: white;
}
.bg-white .preview-wrapper {
  height: 100%;
}
.bg-white .preview-wrapper span {
  font-size: 18px;
}
</style>
