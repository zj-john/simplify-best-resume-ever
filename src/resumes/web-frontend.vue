<template>
  <div class="resume" id="web-frontend">
    <header>
      <div class="name">
        {{person.BasicInformation.name.cn}}
        {{person.BasicInformation.name.en}}
      </div>
      <div>
        <div class="info">
          <span>{{person.BasicInformation.current.company}}</span>
          <span>{{person.BasicInformation.current.position}}</span>
          <span>{{person.BasicInformation.current.working_years}}年以上工作经验</span>
          <span>{{person.BasicInformation.current.degree}}</span>
        </div>
        <div class="contact">
          <span>
            <Icon type="ios-call" class="icon" />
            {{person.BasicInformation.contact.tel}}
          </span>
          <span>
            <Icon type="ios-mail" class="icon" />
            <a
              :href="'mailto:' + person.BasicInformation.contact.email"
            >{{person.BasicInformation.contact.email}}</a>
          </span>
          <span>
            <Icon type="logo-github" class="icon" />
            <a
              :href="'https://github.com/' + person.BasicInformation.contact.github"
              target="_blank"
            >https://github.com/{{person.BasicInformation.contact.github}}</a>
          </span>
          <span>
            <Icon type="md-globe" class="icon" />
            <a
              :href="person.BasicInformation.contact.website"
              target="_blank"
            >{{person.BasicInformation.contact.website}}</a>
          </span>
        </div>
      </div>
    </header>
    <article class="work">
      <div class="article_title">{{person.WorkExperience.title}}</div>
      <div class="card" v-for="(data,index) in person.WorkExperience.content" :key="index">
        <div class="card_title">
          <div>{{data.company}}</div>
          <div>{{data.timeFrom}} - {{data.timeTo}}</div>
        </div>
        <div class="card_content work_content">{{data.content}}</div>
      </div>
    </article>
    <article class="study">
      <div class="article_title">{{person.EducationalExperience.title}}</div>
      <div class="card" v-for="(data,index) in person.EducationalExperience.content" :key="index">
        <div class="card_title">
          <div>{{data.school}}</div>
          <div>{{data.timeFrom}} - {{data.timeTo}}</div>
        </div>
        <div class="card_content study_content">{{data.content}}</div>
      </div>
    </article>
    <article class="skill">
      <div class="article_title">{{person.RelatedSkill.title}}</div>
      <ul class="card">
        <li v-for="item in person.RelatedSkill.content" :key="item">{{item}}</li>
      </ul>
    </article>
    <article class="project">
      <div class="article_title">{{person.ProjectExperience.title}}</div>
      <div class="web_project">
        <!-- <div class="project_category">WEB项目</div> -->
        <div
          class="project_card"
          v-for="project in person.ProjectExperience.content"
          :key="project.name"
        >
          <div class="project_name">{{project.name}}</div>
          <div class="project_desc">{{project.desc}}</div>
          <div class="project_tech">{{project.tech}}</div>
          <div class="project_work">{{project.work}}</div>
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
  padding: 15px 15px 20px;
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

  & > div {
    color: gray;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    line-height: 1.5em;
    .info {
      width: 70%;
    }
    .contact {
      width: 100%;
      a {
        text-decoration: none;
        
      }
      span {
          display: flex;
          align-items: flex-end;
          .icon {
            height: 20px;
            margin-right: 2px;
          }
        }
    }
  }
}

.name {
  color: black;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.1em;
  line-height: 2em;
}

header > div .info,
header > div .job,
header > div .contact {
  display: flex;
  justify-content: space-around;
  margin-bottom: 5px;
}

header .contact a:hover,
header .contact a:visited,
header .contact a:link {
  text-decoration: none;
  color: gray;
}

article {
  border-top: 1px solid #e8e8e8;
  position: relative;
  padding-top: 15px;
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
}

.card {
  margin: 10px 0;
  line-height: 1.5em;
}

ul.card {
  font-size: 14px;
  line-height: 1.8em;
  margin-left: 20px;
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

// .work_content::before {
//   content: "职责：";
// }

// .study_content::before {
//   content: "研究方向：";
// }

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
