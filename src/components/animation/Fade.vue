<template>

<button @click="toggle"
        class="btn_r btn-small_r rounded btn-green-light_r">

   <span v-show="show">Fade In</span>
   <span v-show="hide">Fade Out</span>

</button>


<transition name="fade">

    <div v-show="hide"
         class="h-5_r bg-gray-500 text-gray-100
         p-2 mt-4">

     Hello, welcome to Bangladesh!
     
    </div>

</transition>
    



</template>




<script>

  export default {

   
    data() {
        return {
        show: true,
        hide: false

        
       }
    },

    methods: {
      toggle(){
        this.show = !this.show;
        this.hide = !this.hide;
      }
    }
}
</script>


<style  scoped>


/* fade */

.fade-enter-active {
animation: fade ease 3s;
}

.fade-leave-active {
animation: fade ease 1s reverse;
}


@keyframes fade{
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}


</style>