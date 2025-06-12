<template>
  <div class="Final_MBTI" :class="{ notScroll: showModal }">
    <div v-if="!easterSkull" class="testMBTI">
      <p class="testTitle">You Are…</p>
      <figure class="charImgContainer">
        <img
          class="charImg"
          :src="jangDukSuImg"
          alt="장덕수 이미지"
          @click="imgClick()"
        />
        <figure class="bloodImgContainer">
          <img
            v-if="bloodImg"
            class="bloodImg"
            :src="getBloodImage(imgNum)"
            alt="장덕수 피눈물 이미지"
            @click="easterImgClick()"
          />
        </figure>
      </figure>
      <p class="mbti">ESTP</p>
      <p class="charName">Player 101</p>
      <p class="mbtiSummary">
        Interested in various fields.<br />
        An active person.
      </p>
    </div>
    <div v-else class="testMBTI">
      <figure class="easterEggContainer">
        <img
          :src="easterSkullImg"
          alt="이스터에그 해골"
          class="easterSkull"
        />
        <figure class="easterHellContainer">
          <img
            v-if="easterHell"
            class="easterHell"
            :src="easterHellEngImg"
            alt="지옥"
          />
        </figure>
      </figure>
    </div>
    <main>
      <div class="mbtiInfo_wrap">
        <section class="mbtiInfo">
          <p class="mbtiInfo_summary">Player 101</p>
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
          <section class="typeGood" @click="typeLink('INFJ')">
            <p class="typeTitle">GOOD</p>
            <img
              :src="ohIlNamImg"
              alt="ESTP와 잘맞는 유형"
            />
            <p class="typeCharName">Player 001</p>
            <p class="typeCharInfo">
              Creative and insightful.<br />
              An original character.
            </p>
          </section>
          <section class="typeBad" @click="typeLink('INFP')">
            <p class="typeTitle">BAD</p>
            <img
              :src="kangSaeByukImg"
              alt="ESTP와 안맞는 유형"
            />
            <p class="typeCharName">Player 067</p>
            <p class="typeCharInfo">
              Values belief and harmony.<br />
              An idealist.
            </p>
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
            All the results
            <svg
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 0.5L6 5.5L1 10.5"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button class="testRestart" @click="testRestart">
            Test again
            <svg
              width="10"
              height="13"
              viewBox="0 0 10 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_98_158"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="2"
                width="10"
                height="11"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.96521 2.56897H4.9997V7.53449H0.0341797V12.5H9.96521V2.56897Z"
                  fill="#C4C4C4"
                />
              </mask>
              <g mask="url(#mask0_98_158)">
                <circle cx="4.9997" cy="7.53449" r="4.46552" stroke="white" />
              </g>
              <path
                d="M7.15463 0.5L4.67188 3.39655L7.15463 6.2931"
                stroke="white"
              />
            </svg>
          </button>
        </div>
      </section>
      <article v-else>
        <button class="returnResult" @click="returnResult">
          Back to result
        </button>
      </article>
    </footer>
    <Final_Modal
      v-if="showModal"
      @close="showModal = false"
      @closeModal="closeModal"
    >
    </Final_Modal>
    <div class="hideImg">
      <img :src="jangDukSuBlood1Img" />
      <img :src="jangDukSuBlood2Img" />
      <img :src="jangDukSuBlood3Img" />
      <img :src="easterHellEngImg" />
      <img :src="easterSkullImg" />
    </div>
  </div>
</template>

<script setup>
import Final_Modal from "./Final_Modal.vue"
import LinkShare from "~/components/LinkShare.vue"

// 이미지 임포트
import jangDukSuImg from '~/assets/image/final/장덕수_ESTP_200.png'
import jangDukSuBlood1Img from '~/assets/image/easterEgg/장덕수_피눈물1.png'
import jangDukSuBlood2Img from '~/assets/image/easterEgg/장덕수_피눈물2.png'
import jangDukSuBlood3Img from '~/assets/image/easterEgg/장덕수_피눈물3.png'
import easterHellEngImg from '~/assets/image/easterEgg/easterHell_eng.png'
import easterSkullImg from '~/assets/image/easterEgg/easterSkull.png'
import ohIlNamImg from '~/assets/image/final/오일남_INFJ_100.png'
import kangSaeByukImg from '~/assets/image/final/강새벽_INFP_100.png'

// 페이지 메타 설정
useHead({
  title: "You are Player 101 ESTP in Squid Game",
  meta: [
    {
      hid: "title",
      name: "og:title",
      content: "You are Player 101 ESTP in Squid Game",
    },
    {
      hid: "description",
      name: "og:description",
      content: "What if I were the main character in Squid Game?",
    },
    {
      hid: "image",
      name: "og:image",
      content: `/image/meta/metaimg_ESTP.png`,
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: "You are Player 101 ESTP in Squid Game",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: "What if I were the main character in Squid Game?",
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: `/image/meta/metaimg_ESTP.png`,
    },
  ],
})

// 반응형 데이터
const route = useRoute()
const router = useRouter()

const showModal = ref(false)
const blurClass = ref(true)
const mbti = ref("ESTP")
const firstTest = ref(null)
const bloodImg = ref(false)
const easterSkull = ref(false)
const easterHell = ref(false)
const imgNum = ref(1)
const imgDelay = ref(true)

const resultLink = ref('')
const homeLink = ref('')

const mbtiInfo2_text = ref([
  "Enjoy life, generous, relaxed and open-minded without prejudice.",
  "Good at defusing situations where conflict or tension arises.",
  "Interested in various fields and want to know.",
  "Very realistic, so frustrated with emotional or indecisive people.",
  "Want to refrain from speaking if possible.",
  "Enjoy thrills, are fearless, and tend to engage in risky behavior frequently.",
])

const mbtiInfo_text = ref([
  "A gangster who impulsively commits cruel violence for his own benefit.",
  "Having lived in a group for a long time, he shows excellent adaptability even within the squid game.",
  "He has better situational judgment and cunning than anyone else.",
  "Just as he betrays when he judges that his team members are not profitable, he easily turns around when he deviates from realistic standards.",
  "Even when betraying Han Mi-nyeo, he showed a tendency to prioritize his own survival.",
])

// Watch
watch(imgNum, () => {
  setTimeout(() => {
    imgDelay.value = true
  }, 1000)
})

// 생명주기
onMounted(() => {
  if (route.query.firstTest) {
    firstTest.value = route.query.firstTest
    blurClass.value = false
  }
  
  if (process.client) {
    resultLink.value = window.location.href
    homeLink.value = window.location.origin
  }
})

// 메서드들
const getBloodImage = (num) => {
  const bloodImages = [null, jangDukSuBlood1Img, jangDukSuBlood2Img, jangDukSuBlood3Img]
  return bloodImages[num] || jangDukSuBlood1Img
}

const showResult = () => {
  showModal.value = !showModal.value
}

const closeModal = (show) => {
  showModal.value = show
}

const typeLink = (type) => {
  navigateTo(`/result/${type}?firstTest=true`)
}

const testRestart = () => {
  navigateTo('/')
}

const returnResult = () => {
  router.go(-1)
}

const blurResult = () => {
  blurClass.value = false
}

const imgClick = () => {
  bloodImg.value = true
}

const easterImgClick = () => {
  if (imgDelay.value && imgNum.value < 3) {
    imgNum.value++
    imgDelay.value = false
  }
  if (imgNum.value <= 3) {
    setTimeout(() => {
      easterSkull.value = true
      setTimeout(() => {
        easterHell.value = true
      }, 2000)
    }, 5000)
  }
}
</script>

<style scoped>
@import "~/assets/css/Final_MBTI_EN.css";

.hideImg img {
  width: 0;
  height: 0;
}
</style>
