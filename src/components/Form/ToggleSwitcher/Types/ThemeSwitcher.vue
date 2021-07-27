<template>


<!-- Rectangular switch -->
<span>
    <label class="switch">
      <input type="checkbox">
      <span class="slider"></span>
    </label>
</span>


<!-- Rounded switch -->
<span class="ml-8">
    <label class="switch">
      <input type="checkbox">
      <span class="slider round"></span>
    </label>
</span>
    

 
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
  background-color: hsl(150,50%,20%);
  // This background color should be the dark surface color. 
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

  background: hsl(0, 0%, 95%) url('https://raw.githubusercontent.com/Rasaf-Ibrahim/Some-Designed-Components/cb69444d78a6690ecde83a67f39a10539542d7bc/src/assets/svg/sun.svg');
  
  background-repeat: no-repeat;
  background-position: center;

}

input:checked + .slider {
  background-color:hsl(150,50%,70%);;
  // This background color should be the dark surface color.  
}

input:checked + .slider:before {
  transform: translateX(26px);

  background: hsl(0, 0%, 10%) url('https://raw.githubusercontent.com/Rasaf-Ibrahim/Some-Designed-Components/cb69444d78a6690ecde83a67f39a10539542d7bc/src/assets/svg/moon.svg');

  
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