<template>
  <div class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <p class="modal_title">All Types</p>
        <button class="modal_close" @click="$emit('close')">Close</button>
      </div>
      <div class="modal_body">
        <article class="mbtiType" @click="typeLink('ENFJ')">
            <img src="~/assets/image/illust/result_ENFJ.png" alt="The Warm Ally" />
            <p class="charName">The Warm Ally</p>
            <p class="charMbti">ENFJ</p>
          </article>
          <article class="mbtiType" @click="typeLink('ENFP')">
            <img src="~/assets/image/illust/result_ENFP.png" alt="The Free Spirit" />
            <p class="charName">The Free Spirit</p>
            <p class="charMbti">ENFP</p>
          </article>
          <article class="mbtiType" @click="typeLink('ENTJ')">
            <img src="~/assets/image/illust/result_ENTJ.png" alt="The Cold Strategist" />
            <p class="charName">The Cold Strategist</p>
            <p class="charMbti">ENTJ</p>
          </article>
          <article class="mbtiType" @click="typeLink('ENTP')">
            <img src="~/assets/image/illust/result_ENTP.png" alt="The Provocateur" />
            <p class="charName">The Provocateur</p>
            <p class="charMbti">ENTP</p>
          </article>
          <article class="mbtiType" @click="typeLink('ESFJ')">
            <img src="~/assets/image/illust/result_ESFJ.png" alt="The Devoted Guardian" />
            <p class="charName">The Devoted Guardian</p>
            <p class="charMbti">ESFJ</p>
          </article>
          <article class="mbtiType" @click="typeLink('ESFP')">
            <img src="~/assets/image/illust/result_ESFP.png" alt="The Bold Survivor" />
            <p class="charName">The Bold Survivor</p>
            <p class="charMbti">ESFP</p>
          </article>
          <article class="mbtiType" @click="typeLink('ESTJ')">
            <img src="~/assets/image/illust/result_ESTJ.png" alt="The Iron Authority" />
            <p class="charName">The Iron Authority</p>
            <p class="charMbti">ESTJ</p>
          </article>
          <article class="mbtiType" @click="typeLink('ESTP')">
            <img src="~/assets/image/illust/result_ESTP.png" alt="The Gambler" />
            <p class="charName">The Gambler</p>
            <p class="charMbti">ESTP</p>
          </article>
          <article class="mbtiType" @click="typeLink('INFJ')">
            <img src="~/assets/image/illust/result_INFJ.png" alt="The Mystic" />
            <p class="charName">The Mystic</p>
            <p class="charMbti">INFJ</p>
          </article>
          <article class="mbtiType" @click="typeLink('INFP')">
            <img src="~/assets/image/illust/result_INFP.png" alt="The Outsider" />
            <p class="charName">The Outsider</p>
            <p class="charMbti">INFP</p>
          </article>
          <article class="mbtiType" @click="typeLink('INTJ')">
            <img src="~/assets/image/illust/result_INTJ.png" alt="The Puppeteer" />
            <p class="charName">The Puppeteer</p>
            <p class="charMbti">INTJ</p>
          </article>
          <article class="mbtiType" @click="typeLink('INTP')">
            <img src="~/assets/image/illust/result_INTP.png" alt="The Executor" />
            <p class="charName">The Executor</p>
            <p class="charMbti">INTP</p>
          </article>
          <article class="mbtiType" @click="typeLink('ISFJ')">
            <img src="~/assets/image/illust/result_ISFJ.png" alt="The Caretaker" />
            <p class="charName">The Caretaker</p>
            <p class="charMbti">ISFJ</p>
          </article>
          <article class="mbtiType" @click="typeLink('ISFP')">
            <img src="~/assets/image/illust/result_ISFP.png" alt="The Witness" />
            <p class="charName">The Witness</p>
            <p class="charMbti">ISFP</p>
          </article>
          <article class="mbtiType" @click="typeLink('ISTJ')">
            <img src="~/assets/image/illust/result_ISTJ.png" alt="The Pursuer" />
            <p class="charName">The Pursuer</p>
            <p class="charMbti">ISTJ</p>
          </article>
          <article class="mbtiType" @click="typeLink('ISTP')">
            <img src="~/assets/image/illust/result_ISTP.png" alt="The Shadow" />
            <p class="charName">The Shadow</p>
            <p class="charMbti">ISTP</p>
          </article>
      </div>
      <div class="modal_footer">
        <button class="testRestart" @click="testRestart">Take the test again</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FinalModal",
  emits: ["close", "closeModal"],
  methods: {
    typeLink(type) {
      this.$emit("closeModal", false);
      this.$router.push({ path: `/result/${type}?firstTest=true` });
    },
    testRestart() {
      this.$emit("closeModal", false);
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style scoped>
@import "~/assets/css/Final_MBTI.css";
</style>
