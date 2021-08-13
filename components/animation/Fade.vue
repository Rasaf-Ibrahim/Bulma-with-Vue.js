<template>
  <div>
    <button @click="toggle" class="-btn -btn-md rounded -btn-color-t1l1">
      <span v-show="show">Fade In</span>
      <span v-show="hide">Fade Out</span>
    </button>

    <transition name="fade">
      <div v-show="hide" class="-h-5 bg-blue-a1 text-l2-a1 p-2 mt-4">
        Hello, welcome to Bangladesh!
      </div>
    </transition>
  </div>
</template>




<script>
export default {
  data() {
    return {
      show: true,
      hide: false,
    };
  },

  methods: {
    toggle() {
      this.show = !this.show;
      this.hide = !this.hide;
    },
  },
};
</script>


<style  scoped>
/* fade */

.fade-enter-active {
  animation: fade ease 3s;
}

.fade-leave-active {
  animation: fade ease 1s reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
