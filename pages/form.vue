<template>
<div class="flex flex-col min-h-screen"> <!-- Wraper (Everything) ---> 
<div> <!-- Wraper (Everything but footer) -->

<!--  The above codes are related to footer. (To keep the footer at the bottom)-->


<!-- ⬇️ ⤵️ ⬇️ This page's main code is staring from here ⬇️ ⤵️ ⬇️ -->


<main class="m-8">

<div class="-h3 mb-8">Toggle Switcher</div>

    <ToggleSwithcher/>

 

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

import Footer from '../components/Footer.vue'
import ToggleSwithcher from '../components/Form/ToggleSwitcher/ToggleSwithcher.vue'


  export default {

      components: {Footer, ToggleSwithcher},

  }
   
</script>
