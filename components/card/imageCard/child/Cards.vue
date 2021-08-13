<template>

<!-- Multiple Cards -->

<div class="-card-1-3-grand-parent">

    <div class="-card-1-3-parent ">

        
        <Card
            fileLink="https://raw.githubusercontent.com/Rasaf-Ibrahim/Some-Designed-Components/master/src/assets/image/tourist-destination/ratargul.jpg"
            caption="Ratargul Swamp Forest"
            siteLink="https://en.wikipedia.org/wiki/Ratargul_Swamp_Forest"
        />


        <Card
            fileLink="https://raw.githubusercontent.com/Rasaf-Ibrahim/Some-Designed-Components/master/src/assets/image/tourist-destination/jaflong.jpg"
            caption="Jaflong"
            siteLink="https://en.wikipedia.org/wiki/Jaflong"
        />

         <Card
            fileLink="https://raw.githubusercontent.com/Rasaf-Ibrahim/Some-Designed-Components/master/src/assets/image/tourist-destination/tanguar.jpg"
            caption="Tanguar Haor"
            siteLink="https://en.wikipedia.org/wiki/Tanguar_Haor"
        />

        <Card
            fileLink="https://raw.githubusercontent.com/Rasaf-Ibrahim/Some-Designed-Components/master/src/assets/image/tourist-destination/rema-kalenga.jpg"
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
