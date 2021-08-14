<template>

<div class="relative min-h-screen md:flex">

  <!-- mobile menu bar -->
  <div class="bg-s-t1a3 text-l1-a1 flex justify-between md:hidden">
    <!-- logo -->
    <a href="#" class="block p-4 font-bold">Sidebar</a>

    <!-- mobile menu button -->
    <button class="p-4 focus:outline-none focus:bg-s-t1a5" id="mobile-menu-button">
      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>

  <!-- sidebar -->
  <div class="bg-b-t1l1a1 text-l2-a1 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out" id="sidebar">

    <!-- logo -->
    <a href="#" class="flex items-center space-x-2 px-4">
      <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
      <span class="text-2xl font-extrabold">Sidebar</span>
    </a>

    <!-- nav -->
    <nav>
      <a href="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-b-t1l2a1 hover:text-l1-a1">
        Home
      </a>
      <a href="" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-b-t1l2a1 hover:text-l1-a1">
        About
      </a>
      <a href="" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-b-t1l2a1 hover:text-l1-a1">
        Features
      </a>
      <a href="" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-b-t1l2a1 hover:text-l1-a1">
        Pricing
      </a>
    </nav>
  </div>

  <!-- content -->
  <div class="flex-1 p-10 text-2xl font-bold">
    content goes here
  </div>

</div>







</template>




<script>
    export default {

       


        mounted () {
            // grab everything we need
const btn = document.querySelector("#mobile-menu-button");
const sidebar = document.querySelector("#sidebar");

// add our event listener for the click
btn.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
});

        },


        
    }
</script>

