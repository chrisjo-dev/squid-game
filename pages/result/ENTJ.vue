<template>
  <div class="Final_MBTI" :class="{ notScroll: showModal }">
    <div class="testMBTI">
      <p class="testTitle">You Are…</p>
      <img
        src="~/assets/image/illust/result_ENTJ.png"
        alt="The Cold Strategist image"
        class="mbtiIMG"
      />
      <p class="mbti">ENTJ</p>
      <p class="charName">The Cold Strategist</p>
      <p class="mbtiSummary">Leads decisively toward goals. A born leader.</p>
    </div>
    <main>
      <div class="mbtiInfo_wrap">
        <section class="mbtiInfo">
          <p class="mbtiInfo_summary">The Cold Strategist</p>
          <ul class="mbtiInfo_text">
            <li v-for="(text, i) in mbtiInfo_text" :key="i">
              <span>{{ text }}</span>
            </li>
          </ul>
        </section>
      </div>
      <div class="mbtiInfo2_wrap">
        <section class="mbtiInfo2">
          <p class="mbtiInfo2_summary">You</p>
          <ul class="mbtiInfo2_text">
            <LinkShare
              v-if="!firstTest"
              :result-link="resultLink"
              :home-link="homeLink"
              :mbti="mbti"
              :middle="true"
              :eng="true"
              @blurClass="blurResult"
            ></LinkShare>
            <li
              v-for="(text, i) in mbtiInfo2_text"
              :key="i"
              :class="{ blurList: blurClass }"
            >
              <span>{{ text }}</span>
            </li>
          </ul>
        </section>
      </div>
      <section v-if="!firstTest" class="typeMatch">
        <p class="title">Compatibility by type</p>
        <div class="GoodBad">
          <section class="typeGood" @click="typeLink('INFP')">
            <p class="typeTitle">GOOD</p>
            <img
              src="~/assets/image/illust/result_INFP.png"
              alt="The Outsider image"
            />
            <p class="typeCharName">The Outsider</p>
            <p class="typeCharInfo">Values beliefs and harmony. An idealist at heart.</p>
          </section>
          <section class="typeBad" @click="typeLink('ISFJ')">
            <p class="typeTitle">BAD</p>
            <img
              src="~/assets/image/illust/result_ISFJ.png"
              alt="The Caretaker image"
            />
            <p class="typeCharName">The Caretaker</p>
            <p class="typeCharInfo">Responsible and devoted. Endlessly patient.</p>
          </section>
        </div>
      </section>
    </main>
    <footer>
      <section v-if="!firstTest">
        <LinkShare
          :result-link="resultLink"
          :home-link="homeLink"
          :mbti="mbti"
          :eng="true"
        ></LinkShare>
        <div class="footerBTN">
          <button class="allResultBTN" @click="showResult">
            All results
            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 0.5L6 5.5L1 10.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button class="testRestart" @click="testRestart">
            Test again
            <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_98_158" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="2" width="10" height="11">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.96521 2.56897H4.9997V7.53449H0.0341797V12.5H9.96521V2.56897Z" fill="#C4C4C4" />
              </mask>
              <g mask="url(#mask0_98_158)">
                <circle cx="4.9997" cy="7.53449" r="4.46552" stroke="white" />
              </g>
              <path d="M7.15463 0.5L4.67188 3.39655L7.15463 6.2931" stroke="white" />
            </svg>
          </button>
        </div>
      </section>
      <article v-else>
        <button class="returnResult" @click="returnResult">Back to result</button>
      </article>
    </footer>
    <Final_Modal v-if="showModal" @close="showModal = false" @closeModal="closeModal"></Final_Modal>
  </div>
</template>

<script>
import Final_Modal from "./Final_Modal.vue";
import LinkShare from "~/components/LinkShare.vue";

export default {
  name: "FinalENTJEN",
  components: { Final_Modal, LinkShare },
  data() {
    return {
      showModal: false,
      resultLinkResult: () => { if (process.client) return window.location.href; },
      homeLinkResult: () => { if (process.client) return window.location.origin; },
      homeLink: null,
      resultLink: null,
      blurClass: true,
      mbti: "ENTJ",
      mbtiInfo_text: [
        "Rapidly analyzes complex situations and sets cold, effective strategies.",
        "Leads the team placing efficiency above sentiment — a commanding presence.",
        "Never hesitates to make the hard call when it serves the goal.",
        "Sees the big picture and allocates resources and people optimally.",
        "Stays calm under pressure and keeps the team pointed in a clear direction.",
      ],
      mbtiInfo2_text: [
        "Somewhat introverted but highly rational in judgment.",
        "Strongly independent and enjoys time alone.",
        "Sets high standards for both self and others.",
        "Combines intuition and logic to solve complex problems.",
        "Pursues goals with strong will and decisiveness.",
        "Finds satisfaction in building long-term plans and seeing them through.",
      ],
      firstTest: null,
    };
  },
  head() {
    return {
      title: "Survival Choices MBTI — The Cold Strategist ENTJ",
      meta: [
        { hid: "title", name: "og:title", content: "Survival Choices MBTI — The Cold Strategist ENTJ" },
        { hid: "description", name: "og:description", content: "What type are you in a survival game?" },
        { hid: "image", name: "og:image", content: `${process.env.baseURL}/image/meta_eng/metaimg_entj.png` },
        { hid: "twitter:title", name: "twitter:title", content: "Survival Choices MBTI — The Cold Strategist ENTJ" },
        { hid: "twitter:description", name: "twitter:description", content: "What type are you in a survival game?" },
        { hid: "twitter:image", name: "twitter:image", content: `${process.env.baseURL}/image/meta_eng/metaimg_entj.png` },
      ],
    };
  },
  created() {
    if (this.$route.query.firstTest) {
      this.firstTest = this.$route.query.firstTest;
      this.blurClass = false;
    }
    this.resultLink = this.resultLinkResult();
    this.homeLink = this.homeLinkResult();
  },
  methods: {
    showResult() { this.showModal = !this.showModal; },
    closeModal(show) { this.showModal = show; },
    typeLink(type) { this.$router.push({ path: `${type}?firstTest=true` }); },
    testRestart() { this.$router.push({ name: "index" }); },
    returnResult() { this.$router.go(-1); },
    blurResult() { this.blurClass = false; },
  },
};
</script>

<style scoped>
@import "~/assets/css/Final_MBTI_EN.css";
</style>
