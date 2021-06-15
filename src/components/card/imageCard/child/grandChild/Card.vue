<template>
    
<!-- card -->
<div class="card-1_r bg-gray-700 text-white">

    <!-- image < card -->
    <img class="card-image-1_r" 

         :src="require(`@/assets/photo/tourist-destination/${fileName}`)"

         alt="tourist-destination">


    <!-- caption > card -->
    <div class="h-5_r font-bold
          p-4 text-center">

        <a :href="siteLink">

           {{caption}}

        </a>

    </div>

</div> <!-- End: Card -->


</template>




<script>
    export default {

        props: ['fileName', 'caption', 'siteLink']
        
    }
</script>

