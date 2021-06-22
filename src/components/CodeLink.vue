<template>


<div class="bg-gradient-to-r from-purple-50 via-pink-200 to-red-50    
   text-gray-800 
     max-w-90% md:max-w-75% m-auto text-center p-4
     rounded-xl">

    <div class="p_r">
        Check out the code of
    
        <a :href="link" 
            class="font-bold text-blue-900 
            hover:text-blue-600
            cursor-pointer"
            title="Click">

            {{name}} 
        </a>
        Component.
       
    </div>

</div>




</template>


<script>
    export default {

        props: ['link', 'name']
        
    }
</script>










