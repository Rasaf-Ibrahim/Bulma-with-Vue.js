<template>
  
<!-- Button -->
<div @click="toggle"
      class="btn_r btn-sm_r rounded btn-border-pink_r btn-scale-down_r">
      Dropdown

      <svg class="inline-block h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clip-rule="evenodd" />
</svg>
</div>



    <div v-if="show" class="bg-gray-200 w-32
      shadow-2xl 
      grid gap-4 py-4 relative z-50 ">
    <div class="text-center hover:bg-indigo-500">Hello</div>
    <div class=" text-center hover:bg-indigo-500">Hi</div>
    <div class=" text-center hover:bg-indigo-500">Bye</div>
    </div>


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

