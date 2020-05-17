<template>
  <div class="resume" id="web-frontend">
    <article class="header"></article>
    <article id="CareerObjective">
      <div class="title">{{person.CareerObjective.title}}</div>
      <div class="content">
        <div v-for="item in Object.keys(person.CareerObjective.content)" :key='item' class="content_item">
          <div class="key">
            {{person.CareerObjective.content[item].title}}
          </div>
          <div class="value">
            {{person.CareerObjective.content[item].content}}
          </div>
        </div>
      </div>
    </article>
    <article id="EducationalExperience">
      <div class="title">{{person.EducationalExperience.title}}</div>
      <div class="content">
        <div v-for="item in person.EducationalExperience.content" :key='item.timeFrom + item.timeTo' class="content_item">
          <div class="line1">
            <span>{{item.timeFrom}} - {{item.timeTo}}</span>
            <span>{{item.school}}</span>
          </div>
          <div class="line2">
            <span>{{item.major}} | {{item.degree}}</span>
          </div>
          <div class="line3">
            <span>{{item.content}}</span>
          </div>
        </div>
      </div>
    </article>
    <article></article>
    <article></article>
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
let name = "common-1"; // TODO change name
export default Vue.component(name, getVueOptions(name));
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#web-frontend {
  padding: 15px 15px 20px;
  box-sizing: border-box;
  font-size: 14px;
}
article {
  .title {
    background-color: lightblue;
    width: 150px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    line-height: 1.5em;
    font-weight: bold;
    color: white
  }
}
#CareerObjective {
  .content {
    display: flex;
    margin: 20px 0;
    flex-wrap: wrap;
    .content_item {
      flex-basis: 50%;
      line-height: 1.5em;
      display: flex;      
      .key {

    }
    .key::after {
      content: ':'
    }
    .value {

    }
    }
    
  }
}
#EducationalExperience {
  .content {

  }
  .line1 {
    font-weight: bold;
    font-size: 1.5em;
    display: flex;
    justify-content: space-between;
  }
  .line2 {
    font-size: 1.2em;
  }
  .line3 {
    line-height: 1.5em;
  }
}
</style>
