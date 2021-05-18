<template>

   
<!-- Button to open the modal -->
<div v-on:click="toggleModal()"
    class="centerXY_r
    btn_r btn-sm_r rounded btn-border-green_r">
    Click me to open the Modal
</div>



<!-- Modal Background -->

<div v-if="showModal"
     class="overlay_r" >


    <!-- Modal -->
    
    <div 
         class="centerXY_r
         w-3/4 lg:w-1/2
         p-2
       bg-gray-100
         shadow-2xl
         grid gap-y-4"> 




        <!-- Close Icon < Modal < Modal Background --> 
        <div v-on:click="toggleModal()"
             class="col-span-12 justify-self-end 
                    text-red-600">
    
            <svg class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
    
        </div>

        <!-- Content < Modal  < Modal Background  -->
         <div class="col-span-12
              p-4 
              h-32 overflow-x-hidden overflow-y-auto">

              The Varendra Research Museum is the oldest museum in Bangladesh. It houses important collections from both the pre-Islamic and Islamic periods, including the sculptures of the Pala-Sena School of Art and the Indus Valley Civilization; as well as Sanskrit, Arabic and Persian manuscripts and inscriptions. The Ahsan Manzil, the former residence of the Nawab of Dhaka, is a national museum housing collections from the British Raj. It was the site of the founding conference of the All India Muslim League and hosted many British Viceroys in Dhaka.

        </div>


        <!-- Border Separator < Modal  < Modal Background  -->

        <div class="col-span-12 
             my-2
             border-b border-gray-300"> 
        </div>


       


        <!-- Button < Modal  < Modal Background  -->
        <div class="col-span-12 justify-self-center
             btn_r btn-sm_r btn-yellow_r rounded btn-scale-down_r">

         Subscribe!
         
        </div>

        


      
    </div> <!-- End: Modal-->

</div> <!-- End: Modal Background -->


   

</template>



<script>

export default {
 
    data() {
        return {
        showModal: false
       }
    },

  
    methods: {
      toggleModal(){
        this.showModal = !this.showModal;
      }
    }
}
</script>








