<template>
  <div >


      <main class="p-8">
        <!-- Dropdown on Hover -->

        <div class="-h3 text-center my-4">Dropdown on Hover</div>

        <div class="my-8">
          <DropdownHover />
        </div>

        <div class="mb-20">
          <CodeLink :link="LinkDropdownHover" :name="NameDropdownHover" />
        </div>

        <!-- Dropdown on Click -->

        <div class="-h3 text-center my-4">Dropdown on Click</div>

        <div class="my-8">
          <DropdownClick />
        </div>

        <div class="mb-20">
          <CodeLink :link="LinkDropdownClick" :name="NameDropdownClick" />
        </div>
      </main>

  </div>

</template>




<script>
import DropdownClick from "../components/dropdown/DropdownClick.vue";
import DropdownHover from "../components/dropdown/DropdownHover.vue";
import CodeLink from "../components/CodeLink.vue";


export default {
  components: { DropdownClick, DropdownHover, CodeLink },

  data() {
    return {
      //  CodeLink

      NameDropdownHover: "Dropdown Hover",

      LinkDropdownHover:
        "https://github.com/Rasaf-Ibrahim/Some-Designed-Components/blob/master/components/dropdown/DropdownHover.vue",

      NameDropdownClick: "Dropdown Click",

      LinkDropdownClick:
        "https://github.com/Rasaf-Ibrahim/Some-Designed-Components/blob/master/components/dropdown/DropdownClick.vue",
    };
  },
};
</script>