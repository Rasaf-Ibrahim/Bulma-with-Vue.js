<template>

<div v-if="open" 
     class="bg-red-500 text-white p_r
           max-w-98% mx-auto 
           mb-4 px-6 py-4  
           rounded-xl
           grid gap-y-1">


    <!-- Alert Icon -->

    <div class="col-span-6 justify-self-start animate-pulse">

        <svg  class="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
    
    </div>


    <!-- Close Icon -->
    
    <div @click="close"
         class="col-span-6 justify-self-end ">

      <svg class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>

    </div>


   <!-- ALert Message -->

   <div class="col-span-12">

        Bangladesh has never recorded an air temperature below 0 °C (32 °F), with a record low of 1.1 °C (34.0 °F) in the north west city of Dinajpur on 3 February 1905.
    
    </div>

</div>

</template>


<script>


export default {

  
    data() {
        return {
        open: true,

                
        }
    },

    methods: {
        close(){
        this.open = false;
        }
  
    }
}

</script>