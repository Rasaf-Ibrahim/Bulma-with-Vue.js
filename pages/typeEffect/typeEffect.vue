<template>
  <div >
 

      <main class="container">
        <h1>
          Coding is
          <span class="typed-text">{{ typeValue }}</span>
          <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
        </h1>
      </main>

    
  </div>
 
</template>



<script>
import Footer from "../../components/Footer.vue";

import { setTimeout } from "timers";
export default {
  components: { Footer },

  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      typeArray: ["fun", "awesome", "a journey", "life"],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,

      //  Footer link
      link: "https://github.com/Rasaf-Ibrahim/Some-Designed-Components/blob/master/views/typeEffect/typeEffect.vue",
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 6rem;
  font-weight: normal;
}

.typed-text {
  color: #d2b94b;
}

.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: #fff;
  animation: cursorBlink 1s infinite;
}
.cursor.typing {
  animation: none;
}

@keyframes cursorBlink {
  49% {
    background-color: #fff;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>