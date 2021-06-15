<template>

<!-- Multiple Cards -->

<div class="card-1-3-grand-parent_r">

    <div class="card-1-3-parent_r ">

        
        <Card
            fileName="ratargul.jpg"
            caption="Ratargul Swamp Forest"
            siteLink="https://en.wikipedia.org/wiki/Ratargul_Swamp_Forest"
        />


        <Card
            fileName="jaflong.jpg"
            caption="Jaflong"
            siteLink="https://en.wikipedia.org/wiki/Jaflong"
        />

         <Card
            fileName="tanguar.jpg"
            caption="Tanguar Haor"
            siteLink="https://en.wikipedia.org/wiki/Tanguar_Haor"
        />

        <Card
            fileName="rema-kalenga.jpg"
            caption="Rema-Kalenga Wildlife Sanctuary"
            siteLink="https://en.wikipedia.org/wiki/Rema-Kalenga_Wildlife_Sanctuary"
        />
  


    </div> 

</div>


</template>


<script>

import Card from './grandChild/Card.vue'

    export default {



          components: {Card},
        
    }
</script>
