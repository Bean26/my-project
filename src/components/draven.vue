
<template>
  <div class="hello">
    <img src="http://ossweb-img.qq.com/images/lol/web201310/skin/big119001.jpg" alt="draven">
    <h1>{{ msg }}</h1>
    <ul>
      <li>技能</li>
      <li>属性</li>
      <li>购买</li>
    </ul>
  </div>
</template>
<script>
/* eslint-disable*/
import request from "superagent";
import jsonp from "superagent-jsonp";
export default {
  name: 'draven',
  data () {
    return {
      msg: '欢迎来到德莱联盟'
    }
  }
}  
</script>
<style scoped>
h1 {
  font-weight: normal;
  color: #ccc;
  font-size: 26px;
}
img {
    width: 100%;
    height: 100%;
}
ul{
  display: flex;
  padding: 0;
}
li {
list-style: none;
flex: 1;
margin-left: 5px;
background-color:#ff6600;
}
</style>
