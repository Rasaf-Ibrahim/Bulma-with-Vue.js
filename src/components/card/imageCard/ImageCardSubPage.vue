<template>

<!-- Title -->
<div class="h-2_r text-center my-4 ">
Multiple Image Cards
</div>

<!-- Cards -->
<div class="my-4">

       <Cards/>

</div>

<!-- CodeLink -->

<div class="my-8">

    <CodeLink
    
    name="Image Card"
    
    link="https://github.com/Rasaf-Ibrahim/Some-Designed-Components/blob/master/src/components/card/imageCard"  

/>

</div>   

</template>

<script>
import Cards from './child/Cards.vue'
import CodeLink from '../../CodeLink.vue'
    export default {

        components:{Cards, CodeLink}
        
    }
</script>

