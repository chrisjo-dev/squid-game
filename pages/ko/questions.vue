<template>
  <div>
    <TestLoading v-if="test_done" class="container" :lang_en="false" />
    <EventPage 
      v-if="event_show" 
      :lang_en="false"
      @event_close="event_close" 
    />
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
                <img :src="getQuestionImage(question.id)" alt="Question Image" />
                <p class="QuestionText" v-html="question.desc"></p>
              </main>

              <div class="option_box">
                <TimeOut :timer-stop="timerStop" />
                <div class="optionBtn">
                  <button
                    id="option1"
                    class="option option1"
                    :class="{ option1Active: option_0, disable: timerStop }"
                    @click="toUserChoice(0)"
                  >
                    {{ question.option[0] }}
                  </button>

                  <button
                    id="option2"
                    class="option option2"
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
      </footer>
    </div>
  </div>
</template>

<script setup>
import questionList from "~/assets/questions.json"
import TestLoading from "~/components/TestLoading.vue"
import EventPage from "~/components/EventPage.vue"
import TimeOut from "~/components/TimeOut.vue"

// 이미지 임포트
import question0Img from '~/assets/image/0_question.png'
import question1Img from '~/assets/image/1_question.png'
import question2Img from '~/assets/image/2_question.png'
import question3Img from '~/assets/image/3_question.png'
import question4Img from '~/assets/image/4_question.png'
import question5Img from '~/assets/image/5_question.png'
import question6Img from '~/assets/image/6_question.png'
import question7Img from '~/assets/image/7_question.png'
import question8Img from '~/assets/image/8_question.png'
import question9Img from '~/assets/image/9_question.png'
import question10Img from '~/assets/image/10_question.png'
import question11Img from '~/assets/image/11_question.png'
import question12Img from '~/assets/image/12_question.png'
import question13Img from '~/assets/image/13_question.png'

// 페이지 전환 설정
definePageMeta({
  pageTransition: { name: 'fade', mode: 'out-in' }
})

// 반응형 데이터
const counter_list = ref([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
const count = ref(0)
const choice = ref({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, P: 0, J: 0 })
const mbti = ref("")
const option_0 = ref(false)
const option_1 = ref(false)
const timerStop = ref(false)
const time_out_worker = ref(null)
const question_list = ref([])
const test_done = ref(false)
const timer_seconds = ref(15000)
const event_show = ref(false)

// Watch
watch(count, (val) => {
  if (val === 8) {
    event_show.value = true
    timerStop.value = true
  }
  if (val >= 14) {
    test_done.value = true
    setTimeout(() => {
      getResult(choice.value)
    }, 2500)
    return
  }

  time_out_worker.value = setTimeout(() => {
    if (!option_0.value && !option_1.value && !timerStop.value) {
      timeOutRandomChoice()
    }
  }, timer_seconds.value)
})

// 생명주기
onMounted(() => {
  question_list.value = questionList
  
  time_out_worker.value = setTimeout(() => {
    if (!option_0.value && !option_1.value && !timerStop.value) {
      timeOutRandomChoice()
    }
  }, timer_seconds.value)
})

onUnmounted(() => {
  if (time_out_worker.value) {
    clearTimeout(time_out_worker.value)
  }
})

// 메서드들
const getCounterColor = (num) => {
  if (num) return "#E73E7E"
  return "#333333"
}

const timeOutRandomChoice = (option_num) => {
  option_num = Math.round(Math.random())
  toUserChoice(option_num)
}

const toUserChoice = (option_num) => {
  if (count.value >= 14) return 0
  if (timerStop.value) return 0
  
  if (option_num === 0) option_0.value = true
  else if (option_num === 1) option_1.value = true

  const mbti_value = question_list.value[count.value].option_mbti[option_num]
  choice.value[mbti_value] += 1

  clearTimeout(time_out_worker.value)

  clickAnimation().then(() => {
    if (count.value < 14) count.value += 1
    timerStop.value = false
    option_0.value = false
    option_1.value = false
  })
}

const clickAnimation = () => {
  return new Promise((resolve) => {
    timerStop.value = true
    setTimeout(() => {
      counter_list.value.unshift(1)
      counter_list.value.pop()
      resolve()
    }, 800)
  })
}

const getResult = (choice) => {
  for (const i in choice) {
    if (i === "E") {
      if (choice[i] >= 3) {
        mbti.value += i
      }
    } else if (i === "I") {
      if (choice[i] >= 3) {
        mbti.value += i
      }
    } else if (choice[i] >= 2) {
      mbti.value += i
    }
  }
  
  navigateTo(`/ko/result/${mbti.value}`)
  clearTimeout(time_out_worker.value)
  console.log(mbti.value)
}

const event_close = () => {
  event_show.value = false
  timerStop.value = false
  clearTimeout(time_out_worker.value)
  
  time_out_worker.value = setTimeout(() => {
    if (!option_0.value && !option_1.value && !timerStop.value) {
      timeOutRandomChoice()
    }
  }, timer_seconds.value)
}

// 이미지 매핑 함수
const getQuestionImage = (questionId) => {
  const imageMap = [
    question0Img, question1Img, question2Img, question3Img,
    question4Img, question5Img, question6Img, question7Img,
    question8Img, question9Img, question10Img, question11Img,
    question12Img, question13Img
  ]
  return imageMap[questionId] || question0Img
}
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
  line-height: 23.68px;
  font-size: 16px;
  font-weight: 500;
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
.option_box .option {
  margin-top: 10px;
  height: 45px;
  color: white;
  border-radius: 60px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20.72px;
  letter-spacing: -0.02em;
}
.option_box .option1 {
  background-color: rgba(231, 62, 126, 0.25);
  border: 1px solid #e73e7e;
}
.option_box .option2 {
  background: rgba(37, 150, 165, 0.25);
  border: 1px solid #2596a5;
}
.option_box .option1Active {
  background-color: #e73e7e;
}
.option_box .option2Active {
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
