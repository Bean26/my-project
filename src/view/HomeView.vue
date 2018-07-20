<template>
  <div class="home-view">
    <swiper></swiper>
    <ul class="count-box">
        <li class="count">
            <div class="count-left">
                <div class="title">{{msg}}</div>
                <span class="xiabiao">{{xiabiao}}</span> <span class="yue">{{yue}}</span>
            </div>
            <div class="count-right">
                <img src="http://ossweb-img.qq.com/images/lol/act/a20180316irelia/content/hero.jpg" class="count-img" alt="">
            </div>
        </li>
    </ul>
  </div>
</template>
<script>
/* eslint-disable*/
import swiper from "../components/swiper"
export default {
    name: 'home-view',
    components: { swiper },
    data () {
        return {
            msg: '舞礼秘传 承着荣极刀锋舞者艾瑞利亚技能大揭秘!',
            xiabiao: '官方',
            yue: '12.1万阅'
        }
    }
}
</script>
<style scoped>
    .count-box{
        width: 100%;
        height: 105px;;
        position: absolute;
        top: 196px;
        left:0;
        padding: 15px;
        box-sizing: border-box;
    }
    .count {
        width:100%;
        height: 100%;
        padding-bottom: 20px;
        border-bottom: 1px solid #ccc;
    }
    .count-left {
        float: left;
        width: 70%;    
    }
    .title {
        white-space: pre-wrap;
        text-align: left;
        margin-bottom: 10px;
    }
    span {
        float: left;
        font-size: 14px;
        color: #bbb
    }
    .yue{
        margin-left: 10px;
    }
    .count-right {
        float: right;
        width: 27%;
        height: 74px;
    }
    .count-img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }
</style>


