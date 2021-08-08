<template>
<div class="flex flex-col min-h-screen"> <!-- Wraper (Everything) ---> 
<div> <!-- Wraper (Everything but footer) -->

<!--  The above codes are related to footer. (To keep the footer at the bottom)-->


<!-- ⬇️ ⤵️ ⬇️ This page's main code is staring from here ⬇️ ⤵️ ⬇️ -->


<main class="my-8 ">


    <AllSocialMediaIcons/>

</main>


<!-- ⬆️ ⤴️ ⬆️  This page's main code is ending here ⬆️ ⤴️ ⬆️ -->


<!-- The following codes are related to footer -->


</div> <!-- End: Wraper (Everything but footer) -->


<!-- Footer -->
<footer class="mt-auto">
<Footer /> 
</footer>


</div><!-- End: Wraper (Everything) -->
</template>



<script>


import AllSocialMediaIcons from '../components/contact/AllSocialMediaIcons.vue'
import Footer from '../components/Footer.vue'


  export default {

      components: {AllSocialMediaIcons,Footer},

  }
   
</script>












