<template>
<div class="flex flex-col min-h-screen"> <!-- Wraper (Everything) ---> 
<div> <!-- Wraper (Everything but footer)

<! --  The above codes are related to footer. (keeping the footer at the bottom)-->


<!-- ⬇️ ⤵️ ⬇️ This page's main code is staring from here ⬇️ ⤵️ ⬇️ -->


<div class="p-4">

<!-- Dropdown (on Click)-->

    <span class="relative">
      
        <!-- Button < Dropdown -->
        <span @click="toggle"
              class="btn_r btn-yellow-dark_r btn-small_r rounded">

              Dropdown
  
        <svg class="inline-block h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
  
    </span>

    <!-- Content < Dropdown -->

    <div v-if="show"
         class="text-gray-700
         absolute mt-1 pt-1
         z-50"> <!-- Z-index is needed when you are using full background overlay as the closing button of the dropdown -->
     

        <a  :href="martin"
            class="block
            bg-yellow-200 hover:bg-yellow-400 
             py-2 px-4
             cursor-pointer"> 
             St. Martin's Island 
         </a>


         <a :href="kuakata"
            class="block
            bg-yellow-200 hover:bg-yellow-400 
             py-2 px-4
             cursor-pointer"> 
             Kuakata
         </a>


         <a :href="coxsBazar"
            class="block
            bg-yellow-200 hover:bg-yellow-400 
             py-2 px-4
             cursor-pointer"> 
             Cox's Bazar
         </a>


    </div> <!-- End: Content < Dropdown -->
  </span> <!-- End: Dropdown -->


</div>

<!-- Full Background Close Button (Overlay without color!) -->
<div v-if="show"
     @click.self="toggle"
     class="fixed inset-0">
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
        
        show: false,


      // dropdown link
      coxsBazar:"https://en.wikipedia.org/wiki/Coxs_Bazar",
      kuakata:"https://en.wikipedia.org/wiki/Kuakata",
      martin:"https://en.wikipedia.org/wiki/St._Martins_Island",

      //  Footer link
       link: "https://github.com/Rasaf-Ibrahim/Some-Designed-Components/blob/master/src/views/dropdown/dropdown.vue"
                
       }
    },


    methods: {
      toggle(){
        this.show = !this.show;
      }
    }

  }
</script>




<style scoped>

body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

footer {
  margin-top: auto;
}

</style>