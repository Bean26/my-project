<template>
    <div>
        <button v-on:click="show =! show">show/hide</button>
            <transition name= "fade">
                <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
            </transition>
           
            
    </div>
</template>
<script>
/* eslint-disable */

export default {
  name: "demo",
  data() {
    return {
      show: false
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
.fade-enter-active {
  animation: bounce-in .5s;
}
.fade-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  } 
}
</style>
