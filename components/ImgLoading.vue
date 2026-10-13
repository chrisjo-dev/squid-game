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
    <img :src="resultENFJImg" />
    <img :src="resultINFPImg" />
    <img :src="resultENFPImg" />
    <img :src="resultISFJImg" />
    <img :src="resultINFJImg" />
    <img :src="resultENTPImg" />
    <img :src="resultESTPImg" />
    <img :src="resultENTJImg" />
    <img :src="resultESFJImg" />
    <img :src="resultINTJImg" />
    <img :src="resultISFPImg" />
    <img :src="resultINTPImg" />
    <img :src="resultISTPImg" />
    <img :src="resultESFPImg" />
    <img :src="resultISTJImg" />
    <img :src="resultESTJImg" />
  </div>
</template>

<script setup>
import tutorialImg from '~/assets/image/tutorial.png'
import question0Img from '~/assets/image/illust/q0.png'
import question1Img from '~/assets/image/illust/q1.png'
import question2Img from '~/assets/image/illust/q2.png'
import question3Img from '~/assets/image/illust/q3.png'
import question4Img from '~/assets/image/illust/q4.png'
import question5Img from '~/assets/image/illust/q5.png'
import question6Img from '~/assets/image/illust/q6.png'
import question7Img from '~/assets/image/illust/q7.png'
import question8Img from '~/assets/image/illust/q8.png'
import question9Img from '~/assets/image/illust/q9.png'
import question10Img from '~/assets/image/illust/q10.png'
import question11Img from '~/assets/image/illust/q11.png'
import question12Img from '~/assets/image/illust/q12.png'
import question13Img from '~/assets/image/illust/q13.png'
import lodingLogoImg from '~/assets/image/lodingLogo.png'
import eventImg from '~/assets/image/event_img.png'

import resultENFJImg from '~/assets/image/illust/result_ENFJ.png'
import resultINFPImg from '~/assets/image/illust/result_INFP.png'
import resultENFPImg from '~/assets/image/illust/result_ENFP.png'
import resultISFJImg from '~/assets/image/illust/result_ISFJ.png'
import resultINFJImg from '~/assets/image/illust/result_INFJ.png'
import resultENTPImg from '~/assets/image/illust/result_ENTP.png'
import resultESTPImg from '~/assets/image/illust/result_ESTP.png'
import resultENTJImg from '~/assets/image/illust/result_ENTJ.png'
import resultESFJImg from '~/assets/image/illust/result_ESFJ.png'
import resultINTJImg from '~/assets/image/illust/result_INTJ.png'
import resultISFPImg from '~/assets/image/illust/result_ISFP.png'
import resultINTPImg from '~/assets/image/illust/result_INTP.png'
import resultISTPImg from '~/assets/image/illust/result_ISTP.png'
import resultESFPImg from '~/assets/image/illust/result_ESFP.png'
import resultISTJImg from '~/assets/image/illust/result_ISTJ.png'
import resultESTJImg from '~/assets/image/illust/result_ESTJ.png'

</script>

<style scoped>
.hideImg img {
  width: 0;
  height: 0;
  opacity: 0;
  position: absolute;
}
</style>
