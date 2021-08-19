<template>





 <!-- navbar goes here -->
<nav class="bg-s-t1a3 shadow text-l1-a1 -p ">
  <div class="max-w-6xl mx-auto px-4">
    <div class="flex justify-between">

      <div class="flex space-x-4">
    

        <!-- primary nav -->
        <div class="hidden md:flex items-center space-x-1">
          <a href="#" class="py-5 px-3 hover:text-b-t1l1a2">Features</a>
          <a href="#" class="py-5 px-3 hover:text-b-t1l1a2">Pricing</a>


            <!-- Dropdown (on hover)-->

  <span class="group relative">
    <!-- Button < Dropdown -->
    <span>
      Dropdown
      <svg
        class="inline-block h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /> </svg>
    </span>

    <!-- Content < Dropdown -->

    <span class="hidden group-hover:block -p absolute  pt-1">
      <a
        :href="dhaka"
        class="block bg-s-t1a2 hover:bg-s-t1a5 shadow py-2 px-4 cursor-pointer"
      >
        Dhaka
      </a>

      <a
        :href="chittagong"
        class="block bg-s-t1a2 hover:bg-s-t1a5 shadow py-2 px-4 cursor-pointer"
      >
        Chittagong
      </a>

      <a
        :href="sylhet"
        class="block bg-s-t1a2 hover:bg-s-t1a5 shadow py-2 px-4 cursor-pointer"
      >
        Sylhet
      </a>
    </span>
    <!-- End: Content < Dropdown -->
  </span>
  <!-- End: Dropdown -->









        </div>
      </div>



    </div>
  </div>

  </nav>










</template>




<script>
export default {
  data() {
    return {
      // dropdown link
      dhaka: "https://en.wikipedia.org/wiki/Dhaka",
      chittagong: "https://en.wikipedia.org/wiki/Chittagong",
      sylhet: "https://en.wikipedia.org/wiki/Sylhet",
    };
  },
};
</script>



