<template>
  <div>
 
        <!-- Illustratoin -->
        <div class="bg-s-t1a2 p-8 my-4 flex justify-center">
          
          <SVG_home_1/>

        </div>

        <!-- Text-Card -->

        <div class="max-w-90% md:max-w-75% m-auto bg-transparent group">
          <!-- Title < Text-Card -->
          <div
            class="
              -h3
              font-regular-space font-medium
              mb-4
              flex
              justify-center
              items-start
            "
          >
            <span>About this site</span>

            <svg
              class="inline-block h-5 w-5 text-pink-500 animate-pulse"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <!-- Content < Text-Card -->

          <div class="-p mb-4">
            This site has some building blocks (components) which can be used in
            a website or a web App.
          </div>

          <div>
            <span class="-p font-bold text-b-t1l1a1 group-hover:text-b-t1l1a3">
              Note:
            </span>

            <span class="-p">
              If you want to check a component, open the navigation menu and
              navigate to that component's page. You will also get the code link
              of that component there.
            </span>
          </div>
        </div>
        <!-- Text Card -->

        <!-- Illustratoin -->
        <div class="bg-s-t1a2 p-8 my-4 flex justify-center">
          
          <SVG_home_2/>


        </div>

  </div>

</template>




<script>
import SVG_home_1 from "../components/Illustration/SVG_home_1.vue";
import SVG_home_2 from "../components/Illustration/SVG_home_2.vue";

export default {
  components: {SVG_home_1,SVG_home_2},


// Netlify CMS

  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },

};
</script>


