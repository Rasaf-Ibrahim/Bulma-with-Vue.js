<template>
<div>
    
  
        <Alert />

        <CodeLink :link="link" :name="name" />
      
  </div>

</template>




<script>
import Alert from "../components/alert/Alert.vue";
import CodeLink from "../components/CodeLink.vue";


export default {
  components: { Alert, CodeLink },

  data() {
    return {
      //  CodeLink

      name: "Alert",

      link: "https://github.com/Rasaf-Ibrahim/Some-Designed-Components/blob/master/components/alert/Alert.vue",
    };
  },
};
</script>