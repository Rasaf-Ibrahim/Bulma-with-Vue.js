<template>
<div class="flex flex-col min-h-screen"> <!-- Wraper (Everything) ---> 
<div> <!-- Wraper (Everything but footer)

<! --  The above codes are related to footer. (keeping the footer at the bottom)-->


<!-- ⬇️ ⤵️ ⬇️ This page's main code is staring from here ⬇️ ⤵️ ⬇️ -->


<div class="p-4">

<!-- Dropdown (on hover)-->

    <span class="group relative">
      
        <!-- Button < Dropdown -->
        <span class="btn_r btn-pink-dark_r btn-small_r rounded">

              Dropdown
  
        <svg class="inline-block h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
  
    </span>

    <!-- Content < Dropdown -->

    <div class="hidden group-hover:block 
       text-gray-700
       absolute mt-1 pt-1">


     

        <a  :href="dhaka"
            class="block
            bg-pink-200 hover:bg-pink-400 
             py-2 px-4
             cursor-pointer"> 
             Dhaka
         </a>


         <a :href="chittagong"
            class="block
            bg-pink-200 hover:bg-pink-400 
             py-2 px-4
             cursor-pointer"> 
             Chittagong
         </a>


         <a :href="sylhet"
            class="block
            bg-pink-200 hover:bg-pink-400 
             py-2 px-4
             cursor-pointer"> 
             Sylhet
         </a>


    </div> <!-- End: Content < Dropdown -->
  </span> <!-- End: Dropdown -->

</div>



<!-- ⬆️ ⤴️ ⬆️  This page's main code is ending here ⬆️ ⤴️ ⬆️ -->


<!-- The following codes are related to footer -->


</div> <!-- End: Wraper (Everything but footer) -->


<!-- Footer -->
<div class="mt-auto">
<Footer :link="link"/> 
</div>


</div><!-- End: Wraper (Everything) -->
</template>


<script>

import Footer from '../../components/Footer'

  export default {

      components: {Footer},

    data() {
        return {
        


      // dropdown link
      dhaka:"https://en.wikipedia.org/wiki/Dhaka",
      chittagong:"https://en.wikipedia.org/wiki/Chittagong",
      sylhet:"https://en.wikipedia.org/wiki/Sylhet",

      //  Footer link
       link: "https://github.com/Rasaf-Ibrahim/Some-Designed-Components/blob/master/src/views/dropdown/dropdownHover.vue"
                
       }
    },

  }
</script>


