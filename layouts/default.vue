<template>

<!--  🌙 ☀️ The above codes are related to Dark & Light Mode -->
<div :class="{dark:toggle}">

  <div class="bg-s-t1a1 text-l1-a1">

<!-- End: 🌙 ☀️  -->



<!-- ⤵️ ⤵️ The following codes are related to Footer (To keep the footer at the bottom) -->


<div class="flex flex-col min-h-screen"> <!-- Wraper (Everything but dark,light mode <div> ) --->
  
    <div> <!-- Wraper (Everything but footer & dark,light mode <div>)  -->

    
<!-- End: ⤴️ ⤴️   -->






      <div class="grid grid-cols-12 gap-4">

        <div class="col-span-9 md:col-span-10 lg:col-span-11 ">
 
            <NavigationMenu/>
        
        </div>


        <div class="col-span-3  md:col-span-2 lg:col-span-1
             self-center justify-self-center">

            <ThemeSwitcher   @switch='themeSwitch()'/>

        </div>

    </div>




    <Nuxt/>
     
 



     

<!-- ⤵️ ⤵️  The following codes are related to footer -->

    </div> <!-- End: Wraper (Everything but footer & dark,light mode) -->

    <!-- Footer -->
    <footer class="mt-auto">

      <Footer link="https://github.com/Rasaf-Ibrahim/Some-Designed-Components/blob/master/views/Home.vue" />

    </footer>
  </div> <!-- End: Wraper (Everything but dark,light mode) -->
 
<!-- End: ⤴️ ⤴️ -->



<!--  🌙 ☀️ The following codes are related to Dark & Light Mode -->
  </div>

</div> 

<!-- End: 🌙 ☀️  -->


</template>


<script>

import NavigationMenu from '../components/NavigationMenu.vue'
import ThemeSwitcher from '../components/ThemeSwitcher.vue'
import Footer from '../components/Footer.vue'


  export default {
  components: { NavigationMenu, ThemeSwitcher, Footer },



 data() {
    return {
      toggle:true

    
    }
  },


  methods: {
      themeSwitch() {
          this.toggle = !this.toggle
        
      }
  }



  

  }




</script>


