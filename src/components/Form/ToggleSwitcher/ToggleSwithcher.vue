<template>


<div>
   <Normal/>
</div>


<div class="mt-8">
    <ThemeSwitcher/>
</div>


</template>

<script>
import Normal from './Types/Normal.vue'
import ThemeSwitcher from './Types/ThemeSwitcher.vue'

    export default {

        components:{Normal, ThemeSwitcher}
        
    }
</script>

