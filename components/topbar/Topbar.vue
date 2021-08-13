<template>
    <div class="grid grid-cols-12 gap-4">

        <div class="col-span-9 md:col-span-10 lg:col-span-11 ">
 
            <NavigationMenu/>
        
        </div>


        <div class="col-span-3  md:col-span-2 lg:col-span-1
             self-center justify-self-center">

            <ThemeSwitcher/>

        </div>

    </div>




</template>

<script>
import NavigationMenu from  '../NavigationMenu.vue'
import ThemeSwitcher from '../ThemeSwitcher.vue'

export default {
  components: { NavigationMenu, ThemeSwitcher },
    
  }

</script>

