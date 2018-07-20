<template>
  <div class="hello">
    <draven></draven>
  </div>
</template>
<script>
/* eslint-disable*/
import draven from '../components/draven'
export default {
  name: 'homeView',
  components: {draven},
  data () {
    return {
      msg: '德莱文'
    }
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
