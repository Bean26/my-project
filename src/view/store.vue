<template>
  <div >
      <p>{{$store.state.count}} - {{count}}</p>
      <p>
        <button @click="$store.commit('jia',{a:10})">+</button>
        <button @click="$store.commit('jian')">-</button>
      </p>
      
     
  </div>
</template>
<script>

import { mapState } from "vuex";
export default {

  name: "store",
  data() {
      return {
        //   count: 0
      }

  },
//   computed:{
//       count() {
//           return this.$store.state.count+1
//       }
//   }
// computed: mapState({
//     count: state => state.count
// })
computed: mapState([
    "count"
    
])
}
</script>
<style scoped>
    button {
        color: red;
        font: 700 20px/20px '微软雅黑';
        width: 50px;
        height: 30px;
    }
</style>
