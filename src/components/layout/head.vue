<template>
  <div class="header">
    <span class="title">快简历</span>
    <nav>
      <router-link to="/">
        <span>模板</span>
      </router-link>
      <router-link to="/data">
        <span>数据</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.component("head", {
  name: "app"
});
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;

  background: #098ac7;
  height: 40px;
  margin-bottom: 40px;
  padding: 10px 30px;
}
.title {
  color: white;
  font-weight: 300;
  font-size: 25px;
}
nav {
  display: flex;
  margin-left: 40px; 
}
nav a {
    text-decoration: none;
     color: #ddd;
  font-size: 20px;
}
nav span {
  margin-right: 20px;
}
</style>