<template>
  <div class="flex flex-col min-h-screen">
    <!-- Wraper (Everything) --->
    <div>
      <!-- Wraper (Everything but footer) -->

      <!--  The above codes are related to footer. (To keep the footer at the bottom)-->

      <!-- ⬇️ ⤵️ ⬇️ This page's main code is staring from here ⬇️ ⤵️ ⬇️ -->

      <main>
        <Alert />

        <CodeLink :link="link" :name="name" />
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
import Alert from "../components/alert/Alert.vue";
import CodeLink from "../components/CodeLink.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { Alert, CodeLink, Footer },

  data() {
    return {
      //  CodeLink

      name: "Alert",

      link: "https://github.com/Rasaf-Ibrahim/Some-Designed-Components/blob/master/components/alert/Alert.vue",
    };
  },
};
</script>