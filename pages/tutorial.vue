<template>
  <div v-if="testStart" class="container">
    <main>
      <div class="count_box">
        <svg
          width="260"
          height="16"
          viewBox="0 0 260 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="6.5" cy="6.5" r="6.5" fill="#E73E7E" />
          <path d="M25 0L31.9282 12H18.0718L25 0Z" fill="#E73E7E" />
          <rect x="37" width="12" height="12" fill="#E73E7E" />
          <circle cx="59.5" cy="6.5" r="6.5" fill="#E73E7E" />
          <path d="M78 0L84.9282 12H71.0718L78 0Z" fill="#E73E7E" />
          <rect x="90" width="12" height="12" fill="#E73E7E" />
          <circle cx="112.5" cy="6.5" r="6.5" fill="#E73E7E" />
          <path d="M131 0L137.928 12H124.072L131 0Z" fill="#E73E7E" />
          <rect x="143" width="12" height="12" fill="#E73E7E" />
          <circle cx="165.5" cy="6.5" r="6.5" fill="#E73E7E" />
          <path d="M184 0L190.928 12H177.072L184 0Z" fill="#E73E7E" />
          <rect x="196" width="12" height="12" fill="#E73E7E" />
          <circle cx="218.5" cy="6.5" r="6.5" fill="#E73E7E" />
          <path d="M237 0L243.9282 12H230.0718L237 0Z" fill="#E73E7E" />
        </svg>
      </div>
      <img src="~/assets/image/tutorial.png" />
      <p class="tutorialText">
        In every 14 situations, <br />
        there is a time limit. <br />
        Are you ready to join the survival game?
      </p>
    </main>
    <div class="option_box">
      <div class="timer" :class="{ pause: timerStop }"></div>
      <button
        class="option1"
        :class="{ option1Active: clickClass }"
        @click="click"
      >
        Yes
      </button>
    </div>
    <ImgLoading />
  </div>
</template>

<script setup>
import ImgLoading from "~/components/ImgLoading.vue"

const testStart = ref(true)
const clickClass = ref(false)
const timerStop = ref(false)

const router = useRouter()

const click = () => {
  clickClass.value = true
  timerStop.value = true
  setTimeout(() => {
    router.push({ path: '/questions' })
  }, 500)
}
</script>

<style scoped>
.count_box {
  margin-top: 40px;
  margin-bottom: 30px;
}
.tutorialText {
  margin-top: 30px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.7;
  letter-spacing: -0.02em;
  text-align: center;
}
.option_box {
  margin-top: 40px;
}
.timer {
  height: 4px;
  background: #e73e7e;
  animation: timer 6s linear forwards;
}
.timer.pause {
  animation-play-state: paused;
}
@keyframes timer {
  from { width: 100%; }
  to { width: 0%; }
}
.option1 {
  margin-top: 20px;
  width: 200px;
  height: 45px;
  background: #e73e7e;
  color: white;
  border-radius: 60px;
  font-weight: 500;
  font-size: 14px;
}
.option1Active {
  opacity: 0.7;
}
</style>
