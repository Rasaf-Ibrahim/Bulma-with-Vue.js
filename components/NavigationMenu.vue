<template>
  <div>
    <!-- Button -->
    <div class="flex justify-center">
      <button
        @click="toggle"
        class="
          block
          w-full
          m-4
          -btn -btn-md -btn-border-color-t1l1 -btn-scale-down
        "
        title="Menu"
      >
        <div v-show="show">
          <svg
            class="inline-block h-6 w-6 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </svg>

          Navigation Menu
        </div>

        <div v-show="hide">
          <svg
            class="inline-block h-6 w-6 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 11l7-7 7 7M5 19l7-7 7 7"
            />
          </svg>

          Navigation Menu
        </div>
      </button>
    </div>
    <!-- End: Button -->

    <!-- Navigation Menu -->

    <div v-if="hide" class="bg-s-t1a2 shadow-sm p-4 mb-4 flex flex-wrap">
      <router-link
        :to="{ name: 'index' }"
        class="-btn -btn-sm -btn-color-t1l1 -btn-scale-down m-2"
      >
        Home
      </router-link>

      <router-link
        :to="{ name: 'alert' }"
        class="-btn -btn-sm -btn-color-t1l1 -btn-scale-down m-2"
      >
        Alert
      </router-link>

      <router-link
        :to="{ name: 'dropdown' }"
        class="-btn -btn-sm -btn-color-t1l1 -btn-scale-down m-2"
      >
        Dropdown
      </router-link>

      <router-link
        :to="{ name: 'modal' }"
        class="-btn -btn-sm -btn-color-t1l1 -btn-scale-down m-2"
      >
        Modal
      </router-link>

      <router-link
        :to="{ name: 'animation' }"
        class="-btn -btn-sm -btn-color-t1l1 -btn-scale-down m-2"
      >
        Animation
      </router-link>

      <router-link
        :to="{ name: 'card' }"
        class="-btn -btn-sm -btn-color-t1l1 -btn-scale-down m-2"
      >
        Card
      </router-link>

      <router-link
        :to="{ name: 'contact' }"
        class="-btn -btn-sm -btn-color-t1l1 -btn-scale-down m-2"
      >
        Contact
      </router-link>

      <router-link
        :to="{ name: 'form' }"
        class="-btn -btn-sm -btn-color-t1l1 -btn-scale-down m-2"
      >
        Form
      </router-link>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      show: true,
      hide: false,

      item: undefined,
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




