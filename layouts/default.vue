<template>

<div :class="{dark:toggle}">

  <div class="bg-s-t1a1 text-l1-a1">



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
     
  </div>

</div>


 

</template>


<script>

import NavigationMenu from '../components/NavigationMenu.vue'
import ThemeSwitcher from '../components/ThemeSwitcher.vue'


  export default {
  components: { NavigationMenu, ThemeSwitcher },



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


