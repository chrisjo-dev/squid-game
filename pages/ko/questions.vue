<template>
  <div>
    <TestLoading v-if="test_done" class="container" />
    <EventPage v-if="event_show" @event_close="event_close" />
    <div v-else>
      <ul
        v-for="question in question_list.slice().reverse()"
        :key="question.id"
      >
        <div>
          <transition name="fade">
            <div v-if="!counter_list[question.id]" class="container">
              <main class="question_main">
                <div class="count_box">
                  <svg
                    width="260"
                    height="16"
                    viewBox="0 0 260 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6.5" cy="6.5" r="6.5" fill="#E73E7E" />
                    <path
                      d="M25 0L31.9282 12H18.0718L25 0Z"
                      :fill="getCounterColor(counter_list[0])"
                    />
                    <rect
                      x="37"
                      width="12"
                      height="12"
                      :fill="getCounterColor(counter_list[1])"
                    />
                    <circle
                      cx="59.5"
                      cy="6.5"
                      r="6.5"
                      :fill="getCounterColor(counter_list[2])"
                    />
                    <path
                      d="M78 0L84.9282 12H71.0718L78 0Z"
                      :fill="getCounterColor(counter_list[3])"
                    />
                    <rect
                      x="90"
                      width="12"
                      height="12"
                      :fill="getCounterColor(counter_list[4])"
                    />
                    <circle
                      cx="112.5"
                      cy="6.5"
                      r="6.5"
                      :fill="getCounterColor(counter_list[5])"
                    />
                    <path
                      d="M131 0L137.928 12H124.072L131 0Z"
                      :fill="getCounterColor(counter_list[6])"
                    />
                    <rect
                      x="143"
                      width="12"
                      height="12"
                      :fill="getCounterColor(counter_list[7])"
                    />
                    <circle
                      cx="165.5"
                      cy="6.5"
                      r="6.5"
                      :fill="getCounterColor(counter_list[8])"
                    />
                    <path
                      d="M184 0L190.928 12H177.072L184 0Z"
                      :fill="getCounterColor(counter_list[9])"
                    />
                    <rect
                      x="196"
                      width="12"
                      height="12"
                      :fill="getCounterColor(counter_list[10])"
                    />
                    <circle
                      cx="218.5"
                      cy="6.5"
                      r="6.5"
                      :fill="getCounterColor(counter_list[11])"
                    />
                    <path
                      d="M237 0L243.9282 12H230.0718L237 0Z"
                      :fill="getCounterColor(counter_list[12])"
                    />
                  </svg>
                </div>
                <img
                  :src="require(`~/assets/image/${question.id}_question.png`)"
                />
                <p class="QuestionText" v-html="question.desc"></p>
              </main>

              <div class="option_box">
                <TimeOut :timer-stop="timerStop"></TimeOut>
                <div class="optionBtn">
                  <button
                    id="option1"
                    class="option1"
                    :class="{ option1Active: option_0, disable: timerStop }"
                    @click="toUserChoice(0)"
                  >
                    {{ question.option[0] }}
                  </button>

                  <button
                    id="option2"
                    class="option2"
                    :class="{ option2Active: option_1, disable: timerStop }"
                    @click="toUserChoice(1)"
                  >
                    {{ question.option[1] }}
                  </button>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </ul>
      <footer>
        <ins
          class="kakao_ad_area"
          style="display: none"
          data-ad-unit="DAN-PhZrS026JE8pku05"
          data-ad-width="320"
          data-ad-height="100"
        ></ins>
        <script
          type="text/javascript"
          src="//t1.daumcdn.net/kas/static/ba.min.js"
          async
        ></script>
      </footer>
    </div>
  </div>
</template>
<script>
import TimeOut from "~/components/TimeOut.vue";
import EventPage from "~/components/EventPage.vue";
import questionList from "~/assets/questions.json";

export default {
  name: "QuestionsPage",
  components: {
    TimeOut,
    EventPage,
  },
  transition: "fade",
  data() {
    return {
      counter_list: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      count: 0,
      // eslint-disable-next-line no-new-object
      choice: new Object({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, P: 0, J: 0 }),
      mbti: "",
      option_0: false,
      option_1: false,
      timerStop: false,
      time_out_worker: setTimeout(() => {}),
      question_list: [],
      test_done: false,
      timer_seconds: 15000,
      event_show: false,
    };
  },
  watch: {
    count(val) {
      const _this = this;
      if (val === 8) {
        this.event_show = true;
        this.timerStop = true;
      }
      if (val >= 14) {
        this.test_done = true;
        setTimeout(function () {
          _this.getResult(_this.choice);
        }, 2500);
      }

      this.time_out_worker = setTimeout(function () {
        if (!_this.option_0 && !_this.option_1 && !_this.timerStop) {
          _this.timeOutRandomChoice();
        }
      }, _this.timer_seconds);
    },
  },
  mounted() {
    this.question_list = questionList;
    const _this = this;
    this.time_out_worker = setTimeout(function () {
      if (!_this.option_0 && !_this.option_1 && !_this.timerStop) {
        _this.timeOutRandomChoice();
      }
    }, _this.timer_seconds);
    this.$store.commit("setTimer", this.time_out_worker);
  },
  methods: {
    getCounterColor(num) {
      if (num) return "#E73E7E";
      return "#333333";
    },
    timeOutRandomChoice(option_num) {
      option_num = Math.round(Math.random());
      this.toUserChoice(option_num);
    },
    toUserChoice(option_num) {
      if (this.count >= 14) return 0;
      if (this.timerStop) return 0;
      if (option_num === 0) this.option_0 = true;
      else if (option_num === 1) this.option_1 = true;

      const mbti_value = this.question_list[this.count].option_mbti[option_num];
      this.choice[mbti_value] += 1;

      clearTimeout(this.time_out_worker);

      this.clickAnimation().then(() => {
        if (this.count < 14) this.count += 1;
        this.timerStop = false;
        this.option_0 = false;
        this.option_1 = false;
      });
    },
    clickAnimation() {
      return new Promise((resolve, reject) => {
        this.timerStop = true;
        setTimeout(() => {
          this.counter_list.unshift(1);
          this.counter_list.pop();
          resolve();
        }, 800);
      });
    },
    getResult(choice) {
      for (const i in choice) {
        if (i === "E") {
          if (choice[i] >= 3) {
            this.mbti += i;
          }
        } else if (i === "I") {
          if (choice[i] >= 3) {
            this.mbti += i;
          }
        } else if (choice[i] >= 2) {
          this.mbti += i;
        }
        this.$router.push({
          path: `result/${this.mbti}`,
          params: { mbti: this.mbti },
        });

        clearTimeout(this.time_out_worker);
      }
      console.log(this.mbti);
    },
    event_close() {
      this.event_show = false;
      this.timerStop = false;
      clearTimeout(this.time_out_worker);
      const _this = this;
      this.time_out_worker = setTimeout(function () {
        if (!_this.option_0 && !_this.option_1 && !_this.timerStop) {
          _this.timeOutRandomChoice();
        }
      }, _this.timer_seconds);
    },
  },
};
</script>
<style scoped>
.container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.question_main {
  height: 419px;
}

.question_main img {
  margin: 40px 26px 0px 26px;
}

.question_main .QuestionText {
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
}

.option2Active {
  background-color: #2596a5;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

footer {
  position: absolute;
  top: 635px;
  margin: 0 26px;
}
</style>
