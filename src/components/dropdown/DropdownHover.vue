<template>

<!-- Dropdown (on hover)-->

<span class="group relative">
      
        <!-- Button < Dropdown -->
    <button class="-btn -btn-color-t1 -btn-md rounded">

            Dropdown
  
        <svg class="inline-block h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
  
    </button>

    <!-- Content < Dropdown -->

    <div class="hidden group-hover:block 
         -p
        absolute mt-1 pt-1">


     

        <a  :href="dhaka"
           class="block
           bg-s-t1a2 hover:bg-s-t1a5 shadow
            py-2 px-4
            cursor-pointer"> 
            Dhaka
        </a>

        <a :href="chittagong"
           class="block
           bg-s-t1a2 hover:bg-s-t1a5 shadow
            py-2 px-4
            cursor-pointer"> 
            Chittagong
        </a>

        <a :href="sylhet"
           class="block
           bg-s-t1a2 hover:bg-s-t1a5 shadow
            py-2 px-4
            cursor-pointer"> 
            Sylhet
        </a>

        
    </div> <!-- End: Content < Dropdown -->
</span> <!-- End: Dropdown -->


</template>


<script>


  export default {

    data() {
        return {
        
      // dropdown link
      dhaka:"https://en.wikipedia.org/wiki/Dhaka",
      chittagong:"https://en.wikipedia.org/wiki/Chittagong",
      sylhet:"https://en.wikipedia.org/wiki/Sylhet",

  
       }
    },

  }
</script>




