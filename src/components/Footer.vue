<template>

<div class="heading-5_r bg-gray-900 text-white
     text-center p-8">

    Check out the 

    <span class="animate-pulse">code</span>

    of this   

    <span class="font-bold text-yellow-300 hover:text-yellow-600
          cursor-pointer">
      
          <a :href="link">page</a></span>

</div>


</template>


<script>
    export default {

        props: ['link']
        
    }
</script>









