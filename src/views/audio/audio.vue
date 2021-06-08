<template>
<div class="flex flex-col min-h-screen"> <!-- Wraper (Everything) ---> 
<div> <!-- Wraper (Everything but footer) -->

<!--  The above codes are related to footer. (To keep the footer at the bottom)-->


<!-- ⬇️ ⤵️ ⬇️ This page's main code is staring from here ⬇️ ⤵️ ⬇️ -->

<main class="p-4">


<div>Audio</div>


<audio  controls rasaf
        class= "block w-96 bg-gray-900 p-4 outline-none rounded-none"
      >
  <source src='../../assests/audio/ant.mp3'>
  Your browser does not support the audio element.
</audio>





<div>Audio with no download option</div>

<audio   controls controlsList="nodownload">
  <source src='../../assests/audio/ant.mp3'>
  Your browser does not support the audio element.
</audio>





</main>

<!-- ⬆️ ⤴️ ⬆️  This page's main code is ending here ⬆️ ⤴️ ⬆️ -->


<!-- The following codes are related to footer -->


</div> <!-- End: Wraper (Everything but footer) -->


<!-- Footer -->
<footer class="mt-auto">
<Footer :link="link"/> 
</footer>


</div><!-- End: Wraper (Everything) -->
</template>




<script>


import Footer from '../../components/Footer.vue'


var rasaf = 10;

console.log(rasaf);

  export default {

      components: {Footer},


      

      data() {
           return {



                //  Footer link
                link: "https://github.com/Rasaf-Ibrahim/Some-Designed-Components/blob/master/src/views/audio/audio.vue"
                
           }
      },


      




  }
</script>

<style scoped>

audio[rasaf]::-webkit-media-controls-enclosure{
background-color: green;

}


audio[rasaf]::-moz-media-controls-enclosure{
background-color: green;

}
</style>