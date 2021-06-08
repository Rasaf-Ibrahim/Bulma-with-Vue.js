<template>
   
<!-- Dropdown (on Click)-->

<span class="relative">
      
    <!-- Button < Dropdown -->
    <button @click="toggle"
            class="btn_r btn-yellow-dark_r btn-small_r rounded">

            Dropdown
  
       <svg class="inline-block h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
  
    </button>

    <!-- Content < Dropdown -->

    <div v-if="show"
         class="text-gray-700
         absolute mt-1 pt-1
         z-50"> <!-- Z-index is needed when you are using fulbackground     overlay as the closing button of the dropdown -->
     

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


<!-- Full Background Close Button (Overlay without color!) -->
<div v-if="show"
     @click.self="toggle"
     class="fixed inset-0">
</div>


</template>

<script>


  export default {

      

    data() {
        return {
        
        show: false,


      // dropdown link
      coxsBazar:"https://en.wikipedia.org/wiki/Coxs_Bazar",
      kuakata:"https://en.wikipedia.org/wiki/Kuakata",
      martin:"https://en.wikipedia.org/wiki/St._Martins_Island",
   
       }
    },


    methods: {
      toggle(){
        this.show = !this.show;
      }
    }

  }
</script>
