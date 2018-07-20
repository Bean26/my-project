<template>
  <div class="hello">
    <annie></annie>
  </div>
</template>
<script>
/* eslint-disable*/
import annie from '../components/annie'
export default {
name: 'pagesView',
components: {annie},
  data () {
    return {
      msg: '安妮'
    }
  },
    beforeRouteEnter(to, from, next){
      console.log(to);
      console.log(from)
      next()
  },
   beforeRouteLeave(to, from, next){
      console.log(to);
      console.log(from)
      next()
  } 
}

</script>
<style scoped>
h1 {
  font-weight: normal;
}
img {
    width: 100%;
    height: 100%;
}
</style>
