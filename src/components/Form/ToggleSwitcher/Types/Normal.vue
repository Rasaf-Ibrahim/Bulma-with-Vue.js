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
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  display:none;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  background-color: #ccc;
  transition: .4s;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.slider:before {
  position: absolute;
  content: "";
  background-color: white;
  transition: .4s;
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
}

input:checked + .slider {
  background-color: teal;
}

input:focus + .slider {
  box-shadow: 0 0 1px teal;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

</style>