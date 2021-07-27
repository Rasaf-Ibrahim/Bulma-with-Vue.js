<template>


   <div>
        <label  class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
        </label>
   </div>

    

 
</template>


<style lang="scss" scoped>


/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  height: 34px;
  width: 60px;
   
}


/* Hide default HTML checkbox */
.switch input {
    display:none;
}


.slider {
  position: absolute;
  background-color: #ccc;
  cursor: pointer;
  transition: .4s;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  bottom: 4px;
  left: 4px;
  transition: .4s;
  background: white url('https://i.ibb.co/FxzBYR9/night.png');
  background-repeat: no-repeat;
  background-position: center;

}

input:checked + .slider {
  background-color: teal;
}

input:checked + .slider:before {
  transform: translateX(26px);
  background: white url('https://i.ibb.co/7JfqXxB/sunny.png');
  background-position: center;
  background-repeat: no-repeat;

}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}


</style>