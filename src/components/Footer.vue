<template>

<div class="bg-gray-900 text-white
     text-center p-8
     group">

    <div class="h-5_r">
        Check out the code of the website on 
    
        <a :href="link" 
            class="font-bold text-yellow-600 
            group-hover:animate-pulse
            cursor-pointer"
            title="Click">

           GitHub
        </a>
    
       
    </div>


    <div class="inline-block
             h-6_r 
             bg-gray-800 
             mt-4 p-1">

    &copy; No Copyright

   </div>


</div>




</template>


<script>
    export default {

        data() {
            return {
                link: 'https://github.com/Rasaf-Ibrahim/Some-Designed-Components'
            }
        },
        
    }
</script>










