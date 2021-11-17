<template>
  <transition name="fade">
    <div class="container" v-if="show">
      <main>
        <div class="count_box">
          <svg
            width="208"
            height="16"
            viewBox="0 0 208 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6.5" cy="6.5" r="6.5" :fill="getCounterColor(counterList[0])" />
            <path d="M25 0L31.9282 12H18.0718L25 0Z" :fill="getCounterColor(counterList[1])" />
            <rect x="37" width="12" height="12" :fill="getCounterColor(counterList[2])" />
            <circle cx="59.5" cy="6.5" r="6.5" :fill="getCounterColor(counterList[3])" />
            <path d="M78 0L84.9282 12H71.0718L78 0Z" :fill="getCounterColor(counterList[4])" />
            <rect x="90" width="12" height="12" :fill="getCounterColor(counterList[5])" />
            <circle cx="112.5" cy="6.5" r="6.5" :fill="getCounterColor(counterList[6])" />
            <path d="M131 0L137.928 12H124.072L131 0Z" :fill="getCounterColor(counterList[7])" />
            <rect x="143" width="12" height="12" :fill="getCounterColor(counterList[8])" />
            <circle cx="165.5" cy="6.5" r="6.5" :fill="getCounterColor(counterList[9])" />
            <path d="M184 0L190.928 12H177.072L184 0Z" :fill="getCounterColor(counterList[10])" />
            <rect x="196" width="12" height="12" :fill="getCounterColor(counterList[11])" />
          </svg>
        </div>
        <img :src="`image/${questions[count].id}_question.png`" />
        <p class="QuestionText" v-html="questions[count].desc"></p>
      </main>

      <div class="option_box">
        <TimeOut :timerStop="timerStop"></TimeOut>
        <router-link
          :to="{ name: 'Loading', params: { mbti: mbti } }"
          v-if="testDone"
          class="optionBtn"
        >
          <button
            v-on:click="questfunc(0, choice)"
            class="option1"
            :class="{ option1Active: option_0 }"
          >
            {{ questions[count].option[0] }}
          </button>
          <button
            v-on:click="questfunc(1, choice)"
            class="option2"
            :class="{ option2Active: option_1 }"
          >
            {{ questions[count].option[1] }}
          </button>
        </router-link>

        <div v-else class="optionBtn">
          <button
            v-on:click="questfunc(0, false)"
            id="option1"
            class="option1"
            :class="{ option1Active: option_0, disable: timerStop }"
          >
            {{ questions[count].option[0] }}
          </button>

          <button
            v-on:click="questfunc(1, false)"
            id="option2"
            class="option2"
            :class="{ option2Active: option_1, disable: timerStop }"
          >
            {{ questions[count].option[1] }}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import questionList from "../assets/questions.json";
import TimeOut from "../components/TimeOut.vue";

export default {
  name: "QuestionsPage",
  watch: {
    count: function (val) {
      if (val >= 11) {
        this.testDone = true;
      }
      const _this = this;
      clearTimeout(this.timeOutWorker);
      this.timeOutWorker = setTimeout(function () {
        if (!_this.option_0 && !_this.option_1 && _this.count < 11) {
          _this.questfunc(3, false);
        } else if (!_this.option_0 && !_this.option_1 && _this.count >= 11) {
          _this.questfunc(3, _this.choice);
        }
      }, 13000);
    },
  },
  created() {
    const _this = this;
    this.timeOutWorker = setTimeout(function () {
      if (!_this.option_0 && !_this.option_1) {
        _this.questfunc(3, false);
      }
    }, 13000);
  },
  computed: {
    questions() {
      return questionList;
    },
  },
  methods: {
    getCounterColor: function (num) {
      if (num) return "#E73E7E";
      return "#333333";
    },
    questfunc: function (option_num, choice) {
      if (option_num == 3) option_num = Math.round(Math.random());

      if (!this.option_0 && !this.option_1) {
        this.toUserChoice(option_num);
        this.clickAnimation(option_num);
        if (choice) this.getResult(choice);
      }
    },
    toUserChoice: function (option_num) {
      if (this.count > 12) return 0;
      let mbti_value = this.questions[this.count].option_mbti[option_num];
      this.choice[mbti_value] += 1;
    },
    getResult: function (choice) {
      for (let i in choice) {
        if (this.mbti.length < 4) {
          if (choice[i] >= 2) {
            this.mbti += i;
          }
        }
        this.$router.push({ name: "Loading", params: { mbti: this.mbti } });
        clearTimeout(this.timeOutWorker);
      }
      console.log(this.mbti);
    },
    clickAnimation: function (option_num) {
      if (option_num == 0) this.option_0 = true;
      else if (option_num == 1) this.option_1 = true;
      setTimeout(() => {
        if (this.count < 11) this.count += 1;
        this.show = false;
        this.counterList.unshift(1);
        this.counterList.pop();
        this.option_0 = false;
        this.option_1 = false;
        this.timerStop = false;
        this.show = true;
      }, 700);
      setTimeout(() => {
        this.show = false;
      }, 100);
      this.timerStop = true;
    },
    resetAnimation: function (id) {
      var el = document.getElementById(id);
      el.style.animation = "none";
      el.offsetHeight; /* trigger reflow */
      el.style.animation = null;
    },
  },
  data() {
    return {
      counterList: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      count: 0,
      choice: new Object({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, P: 0, J: 0 }),
      mbti: "",
      testDone: false,
      option_0: false,
      option_1: false,
      show: true,
      timerStop: false,
      timeOutWorker: setTimeout(() => {}),
    };
  },
  props: {},
  components: {
    TimeOut,
  },
};
</script>
<style scoped>
main {
  height: 419px;
}

main > img {
  margin: 40px 26px 0px 26px;
}

main > .QuestionText {
  margin-top: 32px;
  line-height: 26.64px;
  font-size: 18px;
}

.count_box {
  margin-top: 40px;
}

.option_box {
  margin-top: 35px;
  height: 151px;
}
.optionBtn {
  display: flex;
  width: 300px;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
}

@keyframes move {
  from {
    transform: translateX(300px);
  }
  to {
    transform: translateX(0px);
  }
}
.option1 {
  margin-top: 10px;
  height: 45px;
  color: white;
  background-color: rgba(231, 62, 126, 0.25);
  border: 1px solid #e73e7e;
  border-radius: 60px;
}

.option2 {
  margin-top: 10px;
  height: 45px;
  color: white;
  background: rgba(37, 150, 165, 0.25);
  border: 1px solid #2596a5;
  border-radius: 60px;
}

.option1Active {
  background-color: #e73e7e;
  /* animation: move 0.7s ease 0.7s !important; */
}

.option2Active {
  background-color: #2596a5;
  /* animation: move 0.7s ease 0.7s !important; */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
