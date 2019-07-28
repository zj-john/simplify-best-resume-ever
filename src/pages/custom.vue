<template>
  <div class="home">
    <app-header></app-header>

    <div class="content flex_wrapper">
      <div class="smart-timeline custom_form">
        <ul class="smart-timeline-list">
          <li>
            <div class="smart-timeline-icon">1</div>
            <div class="smart-timeline-time">选择布局</div>
            <div class="smart-timeline-content">
              <div class="flex_wrapper">
                <div class="sel_item" v-for="layout in sel_layout_config" :key="layout.id">
                  <div class="radio_wrapper flex_wrapper">
                    <input type="radio" :id="layout.id" :value="layout.value" v-model="sel_layout" />
                    <label :for="layout.id">{{ layout.name }}</label>
                  </div>
                  <div class="desc">
                    <small>{{ layout.desc }}</small>
                  </div>
                  <div class="preview">
                    <div class="preview-wrapper">
                      <img :src="layout.img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="smart-timeline-icon">2</div>
            <div class="smart-timeline-time">选择内容</div>
            <div class="smart-timeline-content">
              <div class="flex_wrapper">
                <div class="sel_item" v-for="layout in sel_content_config" :key="layout.id">
                  <div class="radio_wrapper flex_wrapper">
                    <input type="checkbox" :id="layout.id" :value="layout.id" v-model="content" />
                    <label :for="layout.id">{{ layout.name }}</label>
                  </div>
                  <div class="desc">
                    <small>{{ layout.desc }}</small>
                  </div>
                  <!-- <div class="preview">
                    <div class="preview-wrapper">
                      <img :src="layout.img" />
                    </div>
                  </div> -->
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="resume_demo"></div>
    </div>

    <!-- <app-footer></app-footer> -->
  </div>
</template>

<script>
import Vue from "vue";
import appHeader from "@/components/layout/head";
import appFooter from "@/components/layout/foot";
export default Vue.component("custom", {
  name: "app",
  components: {
    appHeader,
    appFooter
  },
  data: function() {
    return {
      sel_layout: "",
      content: [],

      sel_layout_config:[
        {
          name: "左右布局",
          id: "left_right",
          desc: "适合一页简历",
          img: require("../assets/custom/layout/1.png"),
          value: "left_right",
        },
         {
          name: "上下布局",
          id: "top_bottom",
          desc: "适合内容多的多页简历",
          img: require("../assets/custom/layout/2.png"),
          value: "top_bottom"
        },
         {
          name: "上下布局",
          id: "top_bottom1",
          desc: "适合内容多的多页简历",
          img: require("../assets/custom/layout/3.png"),
          value: "top_bottom"
        },
         {
          name: "上下布局",
          id: "top_bottom2",
          desc: "适合内容多的多页简历",
          img: require("../assets/custom/layout/4.png"),
          value: "top_bottom"
        },
         {
          name: "上下布局",
          id: "top_bottom3",
          desc: "适合内容多的多页简历",
          img: require("../assets/custom/layout/5.png"),
          value: "top_bottom"
        }
      ],
      sel_content_config:[
        {
          name: "头像",
          id: "left_right",
          desc: "适合一页简历",
          img: "../assets/preview/resume-left-right-rtl.png"
        },
         {
          name: "教育经历",
          id: "top_bottom",
          desc: "适合内容多的多页简历",
          img: "../assets/preview/resume-left-right-rtl.png"
        },
         {
          name: "职业经历",
          id: "top_bottom2",
          desc: "适合内容多的多页简历",
          img: "../assets/preview/resume-left-right-rtl.png"
        },
         {
          name: "项目",
          id: "top_bottom3",
          desc: "适合内容多的多页简历",
          img: "../assets/preview/resume-left-right-rtl.png"
        },
         {
          name: "技能",
          id: "top_bottom4",
          desc: "适合内容多的多页简历",
          img: "../assets/preview/resume-left-right-rtl.png"
        }
      ]
    };
  }
});
</script>

<style scoped>
.home {
  font-family: "Roboto" !important;
}
.content {
  margin: 20px;
}
.custom_form {
  background: #fff;
  margin: 10px;
  flex-basis: 50%;
  min-height: 800px;
}
.sel_item {
  padding: 5px;
  border: 1px solid #ddd;
  margin-right: 10px;
  margin-bottom: 10px;
}
.radio_wrapper {
  margin-bottom: 5px;
  font-size: 14px;
}
.desc {
  color: #999;
}
.flex_wrapper {
  display: flex;
  flex-wrap: wrap;
}
.previews {
  width: 90%;
  margin-right: auto;
  margin-left: auto;
}

.preview {
  width: 180px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
  height: 252px;
  overflow: hidden;
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
.smart-timeline {
  position: relative;
}
.smart-timeline-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.smart-timeline-list li {
  position: relative;
  margin: 0;
  padding: 15px 0;
}
.smart-timeline-icon {
  background: #098ac7;
  color: #fff;
  border-radius: 50%;
  position: absolute;
  width: 32px;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  text-align: center;
  left: 80px;
  top: 10px;
  z-index: 100;
  padding: 2px;
}
.smart-timeline-time {
  float: left;
  width: 70px;
  text-align: right;
}
.smart-timeline-content {
  margin-left: 123px;
}
.smart-timeline-list:after {
  content: " ";
  background-color: #eee;
  position: absolute;
  display: block;
  width: 2px;
  top: 0;
  left: 95px;
  bottom: 0;
  z-index: 1;
}
</style>
