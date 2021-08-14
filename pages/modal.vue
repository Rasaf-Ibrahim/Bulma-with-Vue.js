<template>
  <div class="flex flex-col min-h-screen">
    <!-- Wraper (Everything) --->
    <div>
      <!-- Wraper (Everything but footer) -->

      <!--  The above codes are related to footer. (To keep the footer at the bottom)-->

      <!-- ⬇️ ⤵️ ⬇️ This page's main code is staring from here ⬇️ ⤵️ ⬇️ -->

      <main class="p-9">
        <Modal />

        <CodeLink :link="LinkModal" :name="NameModal" />
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
import Modal from "../components/modal/Modal.vue";
import CodeLink from "../components/CodeLink.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { Modal, CodeLink, Footer },

  data() {
    return {
      showModal: false,

      //  CodeLink

      NameModal: "Modal",

      LinkModal:
        "https://github.com/Rasaf-Ibrahim/Some-Designed-Components/blob/master/components/modal/Modal.vue",
    };
  },

  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>








