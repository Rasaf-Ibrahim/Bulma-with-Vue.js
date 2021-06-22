<template>

<!-- Multiple Cards -->

<div class="card-1-3-grand-parent_r">

    <div class="card-1-3-parent_r ">

        
        <Card
            fileLink="https://raw.githubusercontent.com/Rasaf-Ibrahim/Some-Designed-Components/master/src/assets/photo/tourist-destination/ratargul.jpg"
            caption="Ratargul Swamp Forest"
            siteLink="https://en.wikipedia.org/wiki/Ratargul_Swamp_Forest"
        />


        <Card
            fileLink="https://raw.githubusercontent.com/Rasaf-Ibrahim/Some-Designed-Components/master/src/assets/photo/tourist-destination/jaflong.jpg"
            caption="Jaflong"
            siteLink="https://en.wikipedia.org/wiki/Jaflong"
        />

         <Card
            fileLink="https://raw.githubusercontent.com/Rasaf-Ibrahim/Some-Designed-Components/master/src/assets/photo/tourist-destination/tanguar.jpg"
            caption="Tanguar Haor"
            siteLink="https://en.wikipedia.org/wiki/Tanguar_Haor"
        />

        <Card
            fileLink="https://raw.githubusercontent.com/Rasaf-Ibrahim/Some-Designed-Components/master/src/assets/photo/tourist-destination/rema-kalenga.jpg"
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
