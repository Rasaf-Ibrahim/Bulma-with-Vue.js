<template>
<div>

<div>

   <Normal/>

   <CodeLink

   name="Toggle Swithcher (Normal)" 
   
   link="https://github.com/Rasaf-Ibrahim/Some-Designed-Components/blob/master/src/components/Form/ToggleSwitcher/Types/Normal.vue" />

</div>


<div class="mt-8">
    <ThemeSwitcher/>

   <CodeLink
     
   name="Toggle Swithcher (Theme)" 
   
   link="https://github.com/Rasaf-Ibrahim/Some-Designed-Components/blob/master/src/components/Form/ToggleSwitcher/Types/ThemeSwitcher.vue" />

</div>

</div>
</template>



<script>
import Normal from './Types/Normal.vue'
import ThemeSwitcher from './Types/ThemeSwitcher.vue'
import CodeLink from '../../CodeLink.vue'

    export default {

        components:{Normal, ThemeSwitcher, CodeLink}
        
    }
</script>

