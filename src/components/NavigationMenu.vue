<template>

<!-- Button -->
<div class="flex justify-center">

    <button @click="toggle"
          class="block w-full m-4
                 btn_r btn-sm_r btn-border-blue_r btn-scale-down_r"
    
          title="Menu">
            
          <div v-show="show">
    
              <svg class="inline-block h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" /></svg>
               
               Navigation Menu
    
          </div>
        
          <div v-show="hide">
    
              <svg  class="inline-block h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" /></svg>
    
               Navigation Menu
    
          </div>  
        
    </button>

</div> <!-- End: Button -->

<!-- Navigation Menu -->

 <div  v-if="hide"
       class="bg-blue-50
       p-4 mb-4 
       flex flex-wrap">


    <router-link :to="{name:'home'}" 
                  class="btn_r btn-sm_r bg-white btn-scale-down_r m-2">
                  Home
    </router-link> 


    <router-link :to="{name:'AlertPage'}" 
                  class="btn_r btn-sm_r bg-white btn-scale-down_r m-2">
                  Alert
    </router-link> 


    <router-link 
                 :to="{name:'DropdownPage'}" 
                  class="btn_r btn-sm_r bg-white btn-scale-down_r m-2">
                  Dropdown 
    </router-link> 


    <router-link 
                 :to="{name:'ModalPage'}" 
                  class="btn_r btn-sm_r bg-white btn-scale-down_r m-2">
                  Modal
    </router-link> 


    <router-link 
                 :to="{name:'typeEffect'}" 
                  class="btn_r btn-sm_r bg-white btn-scale-down_r m-2">
                  Type Effect
    </router-link> 


    <router-link 
                 :to="{name:'audio'}" 
                  class="btn_r btn-sm_r bg-white btn-scale-down_r m-2">
                  Audio
    </router-link> 

    <router-link 
                 :to="{name:'AnimationPage'}" 
                  class="btn_r btn-sm_r bg-white btn-scale-down_r m-2">
                  Animation
    </router-link> 

     <router-link 
                 :to="{name:'CardPage'}" 
                  class="btn_r btn-sm_r bg-white btn-scale-down_r m-2">
                  Card
    </router-link> 


     

</div>
</template>



<script>
    export default {

    data() {
       return {
        show: true,
        hide: false,


        item: undefined
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

  .router-link-active {

    @apply
      bg-gray-500
      text-white;
   
    }

</style>