<template>
  <div class="hideImg">
    <img :src="tutorialImg" />
    <img :src="question0Img" />
    <img :src="question1Img" />
    <img :src="question2Img" />
    <img :src="question3Img" />
    <img :src="question4Img" />
    <img :src="question5Img" />
    <img :src="question6Img" />
    <img :src="question7Img" />
    <img :src="question8Img" />
    <img :src="question9Img" />
    <img :src="question10Img" />
    <img :src="question11Img" />
    <img :src="question12Img" />
    <img :src="question13Img" />
    <img :src="lodingLogoImg" />
    <img :src="eventImg" />
    <img :src="aliImg" />
    <img :src="kangSaeByukImg" />
    <img :src="sungKiHunImg" />
    <img :src="sungKiHunMomImg" />
    <img :src="ohIlNamImg" />
    <img :src="mysteryManImg" />
    <img :src="jangDukSuImg" />
    <img :src="joSangWooImg" />
    <img :src="joSangWooMomImg" />
    <img :src="hostImg" />
    <img :src="jiYoungImg" />
    <img :src="agentImg" />
    <img :src="frontManImg" />
    <img :src="hanMiNyeoImg" />
    <img :src="hwangJunHoImg" />
    <img :src="vipImg" />
    <img :src="jangDukSuBlood1Img" />
    <img :src="jangDukSuBlood2Img" />
    <img :src="jangDukSuBlood3Img" />
    <img :src="easterHellImg" />
    <img :src="easterHellEngImg" />
    <img :src="easterSkullImg" />
    <audio ref="gunSoundRef" muted preload="auto">
      <source :src="gunSoundSrc" type="audio/mpeg">
    </audio>
  </div>
</template>

<script setup>
// 이미지 import
import tutorialImg from '~/assets/image/tutorial.png'
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
import lodingLogoImg from '~/assets/image/lodingLogo.png'
import eventImg from '~/assets/image/event_img.png'

import aliImg from '~/assets/image/final/알리_ENFJ_200.png'
import kangSaeByukImg from '~/assets/image/final/강새벽_INFP_200.png'
import sungKiHunImg from '~/assets/image/final/성기훈_ENFP_200.png'
import sungKiHunMomImg from '~/assets/image/final/성기훈어머니_ISFJ_200.png'
import ohIlNamImg from '~/assets/image/final/오일남_INFJ_200.png'
import mysteryManImg from '~/assets/image/final/의문남_ENTP_200.png'
import jangDukSuImg from '~/assets/image/final/장덕수_ESTP_200.png'
import joSangWooImg from '~/assets/image/final/조상우_ENTJ_200.png'
import joSangWooMomImg from '~/assets/image/final/조상우맘_ESFJ_200.png'
import hostImg from '~/assets/image/final/주최자_INTJ_200.png'
import jiYoungImg from '~/assets/image/final/지영_ISFP_200.png'
import agentImg from '~/assets/image/final/진행요원_INTP_200.png'
import frontManImg from '~/assets/image/final/프런트맨_ISTP_200.png'
import hanMiNyeoImg from '~/assets/image/final/한미녀_ESFP_200.png'
import hwangJunHoImg from '~/assets/image/final/황준호_ISTJ_200.png'
import vipImg from '~/assets/image/final/VIP_ESTJ_200.png'

import jangDukSuBlood1Img from '~/assets/image/easterEgg/장덕수_피눈물1.png'
import jangDukSuBlood2Img from '~/assets/image/easterEgg/장덕수_피눈물2.png'
import jangDukSuBlood3Img from '~/assets/image/easterEgg/장덕수_피눈물3.png'
import easterHellImg from '~/assets/image/easterEgg/easterHell.png'
import easterHellEngImg from '~/assets/image/easterEgg/easterHell_eng.png'
import easterSkullImg from '~/assets/image/easterEgg/easterSkull.png'

// 오디오 파일은 public 폴더에서 직접 참조
const gunSoundSrc = '/gunSound.mp3'

// 오디오 참조
const gunSoundRef = ref(null)

onMounted(() => {
  // 오디오 파일 프리로드 (필요시)
  if (gunSoundRef.value) {
    gunSoundRef.value.load()
  }
})
</script>

<style scoped>
.hideImg img,
.hideImg audio {
  width: 0;
  height: 0;
  opacity: 0;
  position: absolute;
}
</style>
