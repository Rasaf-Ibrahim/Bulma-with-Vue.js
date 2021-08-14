<template>
    <div>

        <!-- navbar goes here -->
<nav class="bg-s-t1a3 shadow text-l1-a1 -p ">
  <div class="max-w-6xl mx-auto px-4">
    <div class="flex justify-between">

      <div class="flex space-x-4">
        <!-- logo -->
        <div>
          <a href="#" class="flex items-center py-5 px-2 ">
            <svg class="h-6 w-6 mr-1 text-b-t1l1a1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <span class="font-bold">Navbar</span>
          </a>
        </div>

        <!-- primary nav -->
        <div class="hidden md:flex items-center space-x-1">
          <a href="#" class="py-5 px-3 hover:text-b-t1l1a2">Features</a>
          <a href="#" class="py-5 px-3 hover:text-b-t1l1a2">Pricing</a>
        </div>
      </div>

      <!-- secondary nav -->
      <span class="hidden md:flex items-center space-x-1">
        <button href="" class="-btn -btn-border-color-t1l1 -btn-sm -btn-scale-down rounded">Login</button>
        <button href="" class="-btn -btn-color-t1l1 -btn-sm -btn-scale-down rounded">Signup</button>
      </span>

      <!-- mobile button goes here -->
      <div class="md:hidden flex items-center">
        <button id="mobile-menu-button">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

    </div>
  </div>






  <!-- mobile menu -->
  <div class="hidden md:hidden space-y-8px p-4px" id="mobile-menu">

    <a href="#" class="block py-2 px-4 hover:bg-s-t1a5">Features</a>

    <a href="#" class="block py-2 px-4 hover:bg-s-t1a5">Pricing</a>


    <div href="" class="-btn -btn-border-color-t1l1 -btn-sm -btn-scale-down rounded">Login</div>

    <div href="" class="-btn -btn-color-t1l1 -btn-sm -btn-scale-down rounded">Signup</div>
    
  </div>  <!-- End: Mobile-menu -->







</nav>  <!-- End:Nav -->




<!-- content goes here -->
<div class="py-32 text-center -h4">
  <h2 class="font-bold">Content goes here!</h2>
</div>

    </div>
</template>

<script>
    export default {


        mounted () {

            // grab everything we need
const btn = document.querySelector("#mobile-menu-button");
const menu = document.querySelector("#mobile-menu");

// add event listeners
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});



        },

        
    }
</script>

