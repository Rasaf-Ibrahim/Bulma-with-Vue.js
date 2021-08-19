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
      <NuxtLink
        :to="{ name: 'index' }"
        class="-btn -btn-sm -btn-color-t1l1 -btn-scale-down m-2"
      >
        Home
      </NuxtLink>

      <NuxtLink
        :to="{ name: 'alert' }"
        class="-btn -btn-sm -btn-color-t1l1 -btn-scale-down m-2"
      >
        Alert
      </NuxtLink>

      <NuxtLink
        :to="{ name: 'dropdown' }"
        class="-btn -btn-sm -btn-color-t1l1 -btn-scale-down m-2"
      >
        Dropdown
      </NuxtLink>

      <NuxtLink
        :to="{ name: 'modal' }"
        class="-btn -btn-sm -btn-color-t1l1 -btn-scale-down m-2"
      >
        Modal
      </NuxtLink>

       <NuxtLink :to="{ name: 'navbar' }"
                 class="-btn -btn-sm -btn-color-t1l1 -btn-scale-down m-2">
        Navbar
      </NuxtLink>

      <NuxtLink :to="{ name: 'sidebar' }"
                 class="-btn -btn-sm -btn-color-t1l1 -btn-scale-down m-2">
        Sidebar
      </NuxtLink>

      <NuxtLink
        :to="{ name: 'animation' }"
        class="-btn -btn-sm -btn-color-t1l1 -btn-scale-down m-2"
      >
        Animation
      </NuxtLink>

      <NuxtLink
        :to="{ name: 'card' }"
        class="-btn -btn-sm -btn-color-t1l1 -btn-scale-down m-2"
      >
        Card
      </NuxtLink>

      <NuxtLink
        :to="{ name: 'contact' }"
        class="-btn -btn-sm -btn-color-t1l1 -btn-scale-down m-2"
      >
        Contact
      </NuxtLink>

      <NuxtLink
        :to="{ name: 'form' }"
        class="-btn -btn-sm -btn-color-t1l1 -btn-scale-down m-2"
      >
        Form
      </NuxtLink>

         <NuxtLink
        :to="{ name: 'counter' }"
        class="-btn -btn-sm -btn-color-t1l1 -btn-scale-down m-2"
      >
        Counter
      </NuxtLink>


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




