<template>
<div class="flex flex-col min-h-screen"> <!-- Wraper (Everything) ---> 
<div> <!-- Wraper (Everything but footer) -->

<!--  The above codes are related to footer. (To keep the footer at the bottom)-->


<!-- ⬇️ ⤵️ ⬇️ This page's main code is staring from here ⬇️ ⤵️ ⬇️ -->


<main class="p-4
      grid grid-cols-1 md:grid-cols-2 gap-x-20">


<div class="cols-span-6">
<DropdownHover/>

<CodeLink :link="LinkDropdownHover"  :name="NameDropdownHover"/>
</div>

<div class="cols-span-6">
<DropdownClick/>

<CodeLink :link="LinkDropdownClick"  :name="NameDropdownClick"/>
</div>
</main>



<!-- ⬆️ ⤴️ ⬆️  This page's main code is ending here ⬆️ ⤴️ ⬆️ -->


<!-- The following codes are related to footer -->


</div> <!-- End: Wraper (Everything but footer) -->


<!-- Footer -->
<footer class="mt-auto">
<Footer/> 
</footer>


</div><!-- End: Wraper (Everything) -->
</template>




<script>

import DropdownClick from '../components/dropdown/DropdownClick.vue'
import DropdownHover from '../components/dropdown/DropdownHover.vue'
import CodeLink from '../components/CodeLink.vue'
import Footer from '../components/Footer.vue'

export default {

    components: {DropdownClick, DropdownHover, CodeLink, Footer},


    data() {
        return {
  

         //  CodeLink 

        NameDropdownHover: 'Dropdown Hover',

        LinkDropdownHover: "https://github.com/Rasaf-Ibrahim/Some-Designed-Components/blob/master/src/components/dropdown/DropdownHover.vue",

        NameDropdownClick: 'Dropdown Click',

        LinkDropdownClick: "https://github.com/Rasaf-Ibrahim/Some-Designed-Components/blob/master/src/components/dropdown/DropdownClick.vue"
                
        }
    },


}

</script>