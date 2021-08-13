<template>


<div class="bg-s-t1a2 shadow 
     max-w-90% md:max-w-75% m-auto text-center p-4
     rounded-xl">

    <div class="-p">
        Check out the code of
    
        <a :href="link" 
            class="font-bold text-b-t1a2
            hover:text-b-t1a3
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










