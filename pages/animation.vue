<template>
  <div>
 

      <main class="p-8">
        <!-- Fade in and Out -->
        <div>
          <div class="mb-8">
            <Fade />
          </div>

          <CodeLink :link="LinkFade" :name="NameFade" />
        </div>

        <!-- Pop -->
        <div>
          <div class="mb-8">
            <Pop />
          </div>

          <CodeLink :link="LinkPop" :name="NamePop" />
        </div>
      </main>


  </div>

</template>




<script>
import Fade from "../components/animation/Fade.vue";
import Pop from "../components/animation/Pop.vue";
import CodeLink from "../components/CodeLink.vue";


export default {
  components: { Fade, Pop, CodeLink },

  data() {
    return {
      //  CodeLink

      NameFade: "Fade Animation",

      LinkFade:
        "https://github.com/Rasaf-Ibrahim/Some-Designed-Components/blob/master/components/animation/Fade.vue",

      NamePop: "Pop Animation",

      LinkPop:
        "https://github.com/Rasaf-Ibrahim/Some-Designed-Components/blob/master/components/animation/Pop.vue",
    };
  },
};
</script>