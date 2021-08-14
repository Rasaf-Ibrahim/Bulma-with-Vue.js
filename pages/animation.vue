<template>
  <div class="flex flex-col min-h-screen">
    <!-- Wraper (Everything) --->
    <div>
      <!-- Wraper (Everything but footer) -->

      <!--  The above codes are related to footer. (To keep the footer at the bottom)-->

      <!-- ⬇️ ⤵️ ⬇️ This page's main code is staring from here ⬇️ ⤵️ ⬇️ -->

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

      <!-- ⬆️ ⤴️ ⬆️  This page's main code is ending here ⬆️ ⤴️ ⬆️ -->

      <!-- The following codes are related to footer -->
    </div>
    <!-- End: Wraper (Everything but footer) -->

    <!-- Footer -->
    <footer class="mt-auto">
      <Footer />
    </footer>
  </div>
  <!-- End: Wraper (Everything) -->
</template>




<script>
import Fade from "../components/animation/Fade.vue";
import Pop from "../components/animation/Pop.vue";
import CodeLink from "../components/CodeLink.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { Fade, Pop, CodeLink, Footer },

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