<template>
  <div class="hello">
     <img src="http://ossweb-img.qq.com/images/lol/web201310/skin/big1011.jpg" alt="annie">
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
export default {
  name: 'annie-view',
  data () {
    return {
      msg: '你看到过我的小熊吗'
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
