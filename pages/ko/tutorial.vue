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
        14개의 상황마다 <br />
        시간제한이 있습니다. <br />
        게임에 참가하시겠습니까?
      </p>
    </main>
    <div class="option_box">
      <div class="timer" :class="{ pause: timerStop }"></div>
      <button
        class="option1"
        :class="{ option1Active: clickClass }"
        @click="click"
      >
        네
      </button>
      <ins
        class="kakao_ad_area"
        style="display: none; margin-top: 10px"
        data-ad-unit="DAN-PhZrS026JE8pku05"
        data-ad-width="320"
        data-ad-height="100"
              ></ins>
    </div>
    <ImgLoading />
  </div>
</template>
<script setup>
import ImgLoading from "~/components/ImgLoading.vue"

// 반응형 데이터
const testStart = ref(true)
const clickClass = ref(false)
const timerStop = ref(false)
const autoTime = ref(null)

// 생명주기
onMounted(() => {
  // 상태 관리가 구현되면 여기서 처리
  autoClick()
})

onUnmounted(() => {
  if (autoTime.value) {
    clearTimeout(autoTime.value)
  }
})

// 메서드들
const click = () => {
  clickClass.value = true
  timerStop.value = true
  setTimeout(() => {
    navigateTo('/ko/questions')
  }, 800)
}

const autoClick = () => {
  autoTime.value = setTimeout(() => {
    click()
  }, 15000)
}
</script>
<style scoped>
main {
  height: 419px;
}

main > img {
  margin: 40px 26px 0px 26px;
}

main > .tutorialText {
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

.option1 {
  position: static;
  margin-top: 10px;
  width: 300px;
  height: 45px;
  left: 30.34px;
  top: 46px;
  background-color: rgba(231, 62, 126, 0.25);
  border: 1px solid #e73e7e;
  border-radius: 60px;
  color: white;
  animation: move 0.8s ease 0.3s;
}
.option1Active {
  background-color: #e73e7e;
}
.pause::before {
  animation-play-state: paused !important;
  background-color: #333 !important;
}
.timer {
  position: relative;
  width: 300px;
  height: 16px;
  background: #333;
  border-radius: 60px;

  margin: 0px auto;
  align-content: center;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
}
.timer::after {
  content: "TIME";
  position: relative;
  color: #000;
}
.timer::before {
  content: "";
  position: absolute;
  width: 300.68px;
  background-color: white;
  display: block;
  height: 16px;
  border-radius: 60px;
  box-sizing: border-box;
  animation: timer 15s 1;
  animation-play-state: running;
}
@keyframes timer {
  0% {
    width: 100%;
    background-color: white;
  }
  20% {
    background-color: #ffbfbf;
  }
  40% {
    background-color: #ff8080;
  }
  60% {
    background-color: #ff4040;
  }
  80% {
    background-color: red;
  }
  100% {
    width: 2%;
  }
}
</style>
