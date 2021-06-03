<template>


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


     

        <a  :href="martin"
            class="block
            bg-pink-200 hover:bg-pink-400 
             py-2 px-4
             cursor-pointer"> 
             St. Martin's Island 
         </a>


         <a :href="kuakata"
            class="block
            bg-pink-200 hover:bg-pink-400 
             py-2 px-4
             cursor-pointer"> 
             Kuakata
         </a>


         <a :href="coxsBazar"
            class="block
            bg-pink-200 hover:bg-pink-400 
             py-2 px-4
             cursor-pointer"> 
             Cox's Bazar
         </a>


    </div> <!-- End: Content < Dropdown -->
  </span> <!-- End: Dropdown -->

</div>
  



<!-- Footer -->

<div class="mt-96">
<Footer :link="link"/> 
</div>





</template>

<script>

import Footer from '../../components/Footer'

  export default {

      components: {Footer},

    data() {
        return {
        


      // dropdown link
      coxsBazar:"https://en.wikipedia.org/wiki/Coxs_Bazar",
      kuakata:"https://en.wikipedia.org/wiki/Kuakata",
      martin:"https://en.wikipedia.org/wiki/St._Martins_Island",

      //  Footer link
       link: "https://github.com/Rasaf-Ibrahim/Some-Designed-Components/blob/master/src/views/dropdown/dropdown.vue"
                
       }
    },

  }
</script>


