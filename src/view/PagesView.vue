<template>
  <div class="pages-view">
      <HeaderBar></HeaderBar>
      <router-view></router-view>
  </div>
</template>
<script>
/* eslint-disable*/
import HeaderBar from '../components/header'
export default {
  name: 'pages-view',
  components: {HeaderBar}
}
</script>
<style scoped>

</style>

