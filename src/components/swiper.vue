<template>
    <div class="slide">
        <mt-swipe :auto="4000" :prevent="true" >
            <mt-swipe-item class="swiper1">
                <img src="http://ossweb-img.qq.com/upload/adw/image/20180321/1521620009.jpg?_r=1521620030" alt="">
            </mt-swipe-item>
            <mt-swipe-item class="swiper2">
                <img src="http://ossweb-img.qq.com/upload/adw/image/20180321/1521598468.jpg?_r=1521620030" alt="">
            </mt-swipe-item>
            <mt-swipe-item class="swiper3">
                <img src="http://ossweb-img.qq.com/upload/adw/image/20180319/1521449193.jpg?_r=1521620030" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
 /* eslint-disable*/
export default {
  data () {
      return {
          msg: ''
      }
  }
}
</script>
<style scoped>

* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.slide {
    width: 100%;
    height: 159px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
}
.slide img {
    width: 100%;
    height: 100%;
}
.swiper1, .swiper2, .swiper3 {
    width: 100%;
    height: 100%;
}
</style>
