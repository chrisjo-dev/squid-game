<template>
  <div
    class="timer"
    :class="{
      pause: timerStop,
      disable: timerStop,
      halfTime: halfTime,
      eng: eng,
    }"
  ></div>
</template>

<script setup>
// Props 정의
defineProps({
  timerStop: {
    type: Boolean,
    default: false
  },
  halfTime: {
    type: Boolean,
    default: false
  },
  eng: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
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
}
.timer.eng::before {
  animation: timer 20s 1;
}
.timer.halfTime::before {
  content: "";
  position: absolute;
  width: 300.68px;
  background-color: white;
  display: block;
  height: 16px;
  border-radius: 60px;
  box-sizing: border-box;
  animation: timerHalf 8s 1;
}
.timer.disable::before {
  content: "";
  position: absolute;
  width: 300.68px;
  background-color: white;
  display: none;
  height: 16px;
  border-radius: 60px;
  box-sizing: border-box;
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
    width: 0%;
  }
}
@keyframes timerHalf {
  0% {
    width: 50%;
    background-color: #ff8080;
  }

  100% {
    width: 0%;
    background-color: #ff8080;
  }
}
</style>
