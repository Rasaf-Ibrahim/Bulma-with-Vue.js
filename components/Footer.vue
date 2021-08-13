<template>

<div class="bg-s-t1a5 shadow 
     text-center p-8
     group">

    <div class="-p">
        Check out the code of the website on 
    
        <a :href="link" 
            class="font-bold text-b-t1a1
            group-hover:animate-pulse
            cursor-pointer"
            title="Click">

           GitHub
        </a>
    
       
    </div>


    <!-- <div class="inline-block
             -h6
             bg-gray-800 
             mt-4 p-1">

    &copy; No Copyright

   </div> -->


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










