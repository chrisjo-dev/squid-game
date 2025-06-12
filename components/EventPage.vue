<template>
  <section class="event_container">
    <h2 class="ir">event 화면</h2>
    <article v-if="questionShow" class="event_cont">
      <p class="event_text" :class="{ event_textOut: textOut }">
        {{ lang_en ? "Suddenly a gunshot" : "어둠속에서" }}<br />
        {{ lang_en ? "was heard in the dark" : "갑자기 총소리가 들렸다." }}
      </p>
      <img
        v-if="imgShow"
        src="~/assets/image/event_img.png"
        alt="이벤트화면 이미지"
        class="img_fadeIn"
      />
    </article>
    <article v-else class="event_question">
      <p class="question_text" :class="{ question_EngText: lang_en }">
        {{ lang_en ? "You might die soon." : "곧 죽을지도 모른다." }}
      </p>
      <TimeOut :half-time="halfTime" :timer-stop="timerStop"></TimeOut>
      <div class="question_btn">
        <button
          class="event_option1"
          :class="{ event_option1Active: option1 }"
          @click="option1Click"
        >
          {{ lang_en ? "Run!!" : "도망친다" }}
        </button>
        <button
          class="event_option2"
          :class="{ event_option2Active: option2 }"
          @click="option2Click"
        >
          {{ lang_en ? "try to steal the gun." : "맞서 싸운다" }}
        </button>
      </div>
    </article>
  </section>
</template>

<script setup>
import TimeOut from "./TimeOut.vue"

// Props 정의
const props = defineProps({
  lang_en: {
    type: Boolean,
    default: false
  }
})

// Emits 정의
const emit = defineEmits(['event_close'])

// 반응형 데이터
const questionShow = ref(true)
const imgShow = ref(false)
const textOut = ref(false)
const halfTime = ref(true)
const timerStop = ref(false)
const option1 = ref(false)
const option2 = ref(false)
const option_num = ref("")

// 생명주기
onMounted(() => {
  setTimeout(() => {
    playSound()
    imgShow.value = true
  }, 500)
  
  setTimeout(() => {
    imgShow.value = false
    textOut.value = true
  }, 2300)
  
  setTimeout(() => {
    questionShow.value = false
  }, 3000)
  
  setTimeout(() => {
    if (!option1.value && !option2.value) {
      option_num.value = Math.round(Math.random())
      console.log(option_num.value)
      clickBtn(option_num.value)
    }
  }, 11000)
})

// 메서드들
const option1Click = () => {
  timerStop.value = true
  option1.value = true
  setTimeout(() => {
    emit("event_close")
  }, 800)
}

const option2Click = () => {
  timerStop.value = true
  option2.value = true
  setTimeout(() => {
    emit("event_close")
  }, 800)
}

const clickBtn = (num) => {
  if (num === 0) option1Click()
  else option2Click()
}

const delay = (t, v) => {
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, v), t)
  })
}

const playSound = () => {
  try {
    const audio = new Audio("/gunSound.mp3")
    audio.volume = 0.3
    
    // 오디오 로드 에러 처리
    audio.addEventListener('error', (e) => {
      console.warn('Audio file could not be loaded:', e)
    })
    
    // 오디오 재생 에러 처리
    audio.play().catch((error) => {
      console.warn('Audio playback failed:', error)
    })
    
    delay(200).then(() => {
      if (process.client && window.navigator && window.navigator.vibrate) {
        navigator.vibrate(800)
      }
    })
  } catch (error) {
    console.warn('Audio initialization failed:', error)
  }
}
</script>

<style scoped>
.event_container {
  color: white;
}
.event_cont .event_text {
  font-size: 18px;
  font-weight: 500;
  line-height: 26.64px;
  margin-bottom: 39px;
  margin-top: 80px;
}
.event_question {
  padding-top: 228px;
  animation: fadeIn 1s;
}
.event_question .question_text {
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 500;
  line-height: 26.64px;
}
.event_question .question_EngText {
  font-size: 16px;
  line-height: 23.68px;
}
.event_question .question_btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  line-height: 20.72px;
  letter-spacing: -0.02em;
  font-weight: 500;
}
.event_question .question_btn .event_option1 {
  margin-top: 10px;
  width: 300px;
  height: 45px;
  background-color: rgba(231, 62, 126, 0.25);
  border: 1px solid #e73e7e;
  border-radius: 60px;
}
.event_question .question_btn .event_option1Active {
  background-color: #e73e7e;
}
.event_question .question_btn .event_option2 {
  margin-top: 10px;
  width: 300px;
  height: 45px;
  background: rgba(37, 150, 165, 0.25);
  border: 1px solid #2596a5;
  border-radius: 60px;
}
.event_question .question_btn .event_option2Active {
  background-color: #2596a5;
}
.event_textOut {
  animation: fadeOut 1s;
}
.img_fadeIn {
  animation: fadeInOut 1s;
  -webkit-animation: fadeInOut 2s; /* Safari and Chrome */
}
@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes fadeInOut {
  /* Safari and Chrome */
  0% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes fadeOut {
  /* Safari and Chrome */
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes fadeIn {
  /* Safari and Chrome */
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
