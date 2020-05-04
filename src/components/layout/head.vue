<template>
  <div class="header">
    <img src="../../assets/logo.png" class="logo" />
    <router-link to="/" exact style="text-decoration: none;">
      <span class="title">快简历</span>
    </router-link>
    <nav>      
      <!-- <router-link to="/custom" active-class="link_active">
        <span>自定义</span>
      </router-link> -->
      <router-link to="/data" active-class="link_active">
        <span>简历</span>
      </router-link>
      <router-link to="/resume" active-class="link_active" exact>
        <span>模板</span>
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
  padding: 10px 30px;
}
.title {
  color: white;
  font-weight: 300;
  font-size: 20px;
}
nav {
  display: flex;
  margin-left: 40px;
  align-items: baseline;
}
nav a {
  text-decoration: none;
  color: #ddd;
  font-size: 18px;
}
nav span {
  margin-right: 20px;
}
.link_active {
  color: white;
  font-size: 20px;
}
.logo {
  width: 30px;
  margin-right: 10px;
}
</style>