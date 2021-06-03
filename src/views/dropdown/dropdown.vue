<template>


<!-- Dropdown New (Trying to make) -->
<span class="flex flex-col fixed ">


  <!-- Button -->

    <span @click="toggle">Open</span>
   
    
  <!-- Content -->

   <span v-show="show" class="flex flex-col bg-transparent 
     ml-8 mt-2 py-4 
     shadow-2xl 
    relative z-50">

       
    <span class="text-center btn_r btn-blue_r font-bold border-t-2 hover:bg-red-200  ">Hello</span>
    <span class="text-center font-bold border-t-2 hover:bg-red-200 ">Hi</span>
    <span class="text-center font-bold border-t-2 hover:bg-red-200  ">Bye</span>

    </span>


</span>


<!-- 
Dropdown (Old) 

 <span @click="toggle"
      class="btn_r btn-sm_r btn-scale-down_r
      ml-96">
      Dropdown

      <svg class="inline-block h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clip-rule="evenodd" /></svg>



 Dropdown 

<div v-if="show" class="bg-transparent 
     w-32 ml-8 mt-2 py-4 
     shadow-2xl 
    relative z-50 ">

    <div class="text-center font-bold border-t-2 hover:bg-red-200  btn-scale-down_r">Hello</div>
    <div class="text-center font-bold border-t-2 hover:bg-red-200  btn-scale-down_r">Hi</div>
    <div class="text-center font-bold border-t-2 hover:bg-red-200  btn-small_r btn-scale-down_r">Bye</div>

</div>

</span>
 -->




<!-- Full Background Close Button (Overlay without color!) -->
<div v-if="show"
     @click.self="toggle"
     class="fixed inset-0">
</div>
  









</template>

<script>
  export default {

    data() {
        return {
        show: false
       }
    },

  
    methods: {
      toggle(){
        this.show = !this.show;
      }
    }
    
  }
</script>

