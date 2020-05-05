<template>
  <div class="resume" id="web-frontend">
    <header>
      <div class="name">{{person.name.cn}} {{person.name.en}}</div>
      <div>
        <div class="info">
          <span>{{person.current.company}}</span>
          <span>{{person.current.position}}</span>
          <span>{{person.current.working_years}}年以上工作经验</span>
          <span>{{person.current.degree}}</span>
        </div>
        <div class="contact">
          <span>
            <!-- <img src="./tel.png" /> -->
            <div class="icon">
          <i class="fa fa-phone" aria-hidden="true"></i>
        </div>
            {{person.contact.tel}}
          </span>
          <span>
            <!-- <img src="./email.png" /> -->
            <div class="icon">
          <i class="fa fa-envelope" aria-hidden="true"></i>
        </div>
            <a :href="'mailto:' + person.contact.email">{{person.contact.email}}</a>
          </span>
          <span>
            <!-- <img src="./github.png" /> -->
            <div class="icon">
          <i class="fa fa-github"></i>
        </div>
            <a :href="'https://github.com/' + person.contact.github" target="_blank">https://github.com/{{person.contact.github}}</a>
          </span>
          <span>
            <!-- <img src="./blog.png" /> -->
            <div class="icon">
          <i class="fa fa-globe" aria-hidden="true"></i>
        </div>
            <a :href="person.contact.website" target="_blank">{{person.contact.website}}</a>
          </span>
        </div>
      </div>
    </header>
    <!-- <div class="header"></div> -->
    <article class="work">
      <div class="article_title">工作经历</div>
      <div class="card" v-for="(data,index) in person.experience" :key="index">
        <div class="card_title">
          <div>{{data.company}}</div>
          <div>{{data.time_from}} - {{data.time_to}}</div>
        </div>
        <div class="card_content work_content">{{data.description}}</div>
      </div>
    </article>
    <article class="study">
      <div class="article_title">教育经历</div>
      <div class="card" v-for="(data,index) in person.education" :key="index">
        <div class="card_title">
          <div>{{data.school}}</div>
          <div>{{data.time_from}} - {{data.time_to}}</div>
        </div>
        <div class="card_content study_content">{{data.description}}</div>
      </div>
    </article>
    <article class="skill">
      <div class="article_title">专业技能</div>
      <ul class="card">
        <li v-for="item in person.skills" :key="item">{{item}}</li>
      </ul>
    </article>
    <article class="project">
      <div class="article_title">项目经验</div>
      <div class="web_project">
        <div class="project_category">WEB项目</div>
        <div class="project_card" v-for="project in person.projects.web" :key="project.name">
          <div class="project_name">{{project.name}}</div>
          <div class="project_desc">{{project.desc}}</div>
          <div class="project_tech">{{project.tech}}</div>
          <div class="project_work">{{project.work}}</div>
        </div>
      </div>
      <div class="hybrid_project">
        <div class="project_category">Hybrid项目</div>
        <div class="project_card" v-for="project in person.projects.hybrid" :key="project.name">
          <div class="project_name">{{project.name}}</div>
          <div class="project_desc">{{project.desc}}</div>
          <div class="project_tech">{{project.tech}}</div>
          <div class="project_work">{{project.work}}</div>
        </div>
      </div>
      <div class="github_project">
        <div class="project_category">Github项目</div>
        <div class="project_card" v-for="project in person.projects.github" :key="project.name">
          <div class="project_name">{{project.name}}</div>
          <div class="project_desc">{{project.desc}}</div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import Vue from "vue";
import { getVueOptions } from "./options";
let name = "web-frontend"; // TODO change name
export default Vue.component(name, getVueOptions(name));
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#web-frontend {
  padding: 20px 15px;
  box-sizing: border-box;
}

// .page {
//   background: #fff;
//   position: relative;
//   width: 21cm;
//   /* height: 29.68cm; */
//   display: block;
//   page-break-after: auto;
//   overflow: hidden;
//   padding: 20px 15px;
// }

/* header */
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
}

.name {
  color: black;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.1em;
  line-height: 2em;
}

header > div {
  color: gray;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  line-height: 1.5em;
}

header > div .info {
  width: 70%;
}
header > div .contact {
  width: 100%;
}
header > div .info,
header > div .job,
header > div .contact {
  display: flex;
  justify-content: space-around;
  margin-bottom: 5px;
}

header .contact a {
  text-decoration: none;
}

header .contact a:hover,
header .contact a:visited,
header .contact a:link {
  text-decoration: none;
  color: gray;
}

header .contact span {
  display: flex;
  align-items: center;
}

header .contact span .icon {
  width: 20px;
  height: 20px;
  margin-right: 2px;
}

.header {
  margin: 10px 0;
}

.header_title {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  line-height: 2em;
}

.header_title .name {
  font-weight: bold;
}

.header_title .word {
  color: #999898;
  font-size: 14px;
}

.header_info {
  line-height: 1.5em;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}

.header_info span {
  flex-basis: 25%;
  display: flex;
}

.header_info span img {
  width: 20px;
  height: 20px;
}

/* header>div .info span {
        border-right: 1px solid #ccc;
      }
      header>div .info span:last-child {
        border-right: none;
      } */
article {
  border-top: 1px solid #e8e8e8;
  position: relative;
  padding-top: 15px;
  padding-right: 20px;
}

.article_title {
  position: relative;
  padding-left: 25px;
  font-size: 16px;
  font-weight: bold;
  color: #607d8b;
}

.article_title::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  left: 0px;
  background-color: #03a9f4;
}

.card {
  margin: 10px 0;
  line-height: 1.5em;
}

ul.card {
  font-size: 14px;
  line-height: 1.8em;
}

.card_title {
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
}

.card_title div:nth-of-type(2) {
  font-size: 12px;
}

.work_content::before {
  content: "职责：";
}

.study_content::before {
  content: "研究方向：";
}

.card_content {
  font-size: 14px;
}

/* project */
.project_card {
  margin: 20px 0;
  line-height: 1.5em;
  font-size: 14px;
  /* background-color: #f5f3f3; */
  /* box-shadow: 0px 0px 1px #cccccc; */
  padding: 5px;
}

.project_category + .project_card {
  margin-top: 10px;
}

.project_category {
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
}

.project_name::before {
  content: "项目名称";
  background-color: #efefef;
  margin-right: 10px;
}

.project_desc::before {
  content: "项目描述";
  background-color: #efefef;
  margin-right: 10px;
}

.project_tech::before {
  content: "主要技术";
  background-color: #efefef;
  margin-right: 10px;
}

.project_work::before {
  content: "主要工作";
  background-color: #efefef;
  margin-right: 10px;
}

.project_name {
  text-transform: uppercase;
}
</style>
