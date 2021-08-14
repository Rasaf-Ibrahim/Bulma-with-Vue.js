<template>
  <div >


      <main class="p-9">
        <Modal />

        <CodeLink :link="LinkModal" :name="NameModal" />
      </main>

  </div>

</template>



<script>
import Modal from "../components/modal/Modal.vue";
import CodeLink from "../components/CodeLink.vue";


export default {
  components: { Modal, CodeLink },

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








