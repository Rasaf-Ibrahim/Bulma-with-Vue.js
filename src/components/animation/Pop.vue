<template>

<button @click="toggle"
        class="btn_r btn-small_r rounded btn-green-light_r">

   <span v-show="show">Pop In</span>
   <span v-show="hide">Pop Out</span>

</button>


<transition name="pop">

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


/* pop */

.pop-enter-active {
     animation: pop 0.3s ease-out;

}

.pop-leave-active {
     animation: pop 0.3s ease-out reverse;
}

@keyframes pop {

     from {
          opacity: 0;
          transform: translateY(-50px) scale(0.9);
     }

     to {
          opacity: 1;
          transfrom: translateY(0) scale(1);
     }
}


</style>