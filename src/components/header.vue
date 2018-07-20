<template>
    <div class="header-bar">
        <!-- <p class="title">LOL</p> -->
        <ul class="nav">
            <li><router-link :to="{ name: 'HomeView'}">推荐 </router-link></li>
            <li><router-link :to="{ name: 'DravenView'}">热点</router-link></li>
            <li><router-link :to="{ name: 'AnnieView'}">视频</router-link></li>
            <li><router-link :to="{ name: 'StoreView'}">版本</router-link></li>
            <li><router-link :to="{ name: 'Transition'}">官方</router-link></li>
        </ul>
    </div>
</template>
<script>
/* eslint-disable*/
export default {
  name: "header-bar",
  data() {
    return {};
  }
}
</script>
<style scoped>
* {  
    margin: 0;  
    padding: 0;  
    list-style: none;  
  } 
.title {
  float: left;
}
a {
  display: block;
  text-decoration: none;
  color: white;
}
a:hover {
  color: rgb(238, 200, 34);
}

.nav {
  display: flex;
  width: 100%;
  float: left;
  height: 40px;
  line-height: 40px;
  background-color: #367eeb;
}
li {
  flex: 1;
  list-style: none;
  padding: 0;
  margin-left: 10px;
}
</style>
