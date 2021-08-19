<template>

<div class="p-8 text-center space-y-8">
     
   <span class="p-4 -h3 bg-s-t1a3 shadow">Counter</span>


    <div class="-h3 js_value">0</div>


    <div>
          <button class="-btn -btn-md -btn-color-t1l1 js_btn js_decrease">decrease</button>

          <button class="-btn -btn-md -btn-color-t1l1 js_btn  js_reset">reset</button>


          <button class="-btn -btn-md -btn-color-t1l1 js_btn  js_increase">increase</button>

    </div>


</div>

</template>



<script>
    export default {



mounted () {

// set inital value to zero
let count = 0;

// select value and buttons
const value = document.querySelector(".js_value");
const btns = document.querySelectorAll(".js_btn");

btns.forEach(function (btn) {

  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("js_decrease")) {
      count--;
    } else if (styles.contains("js_increase")) {
      count++;
    } else {
      count = 0;
    }

    // if (count > 0) {
    //   value.style.color = "green";
    // }
    // if (count < 0) {
    //   value.style.color = "red";
    // }
    // if (count === 0) {
    //   value.style.color = "#222";
    // }


    value.textContent = count;


    });

  });
            
},
 
 


}


</script>
