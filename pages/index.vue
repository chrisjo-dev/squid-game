<template>
  <main class="container">
    <img class="logoImg" src="~/assets/image/logo_en.png" />
    <h2 class="subtitle">
      What kind of person <br />
      am I in the squid game?
    </h2>

    <img class="mainImg" src="~/assets/image/main.png" />

    <section>
      <nav>
        <NuxtLink to="/tutorial">
          <button id="start_btn" type="button">
            Test
            <svg class="svg-icon-angle" viewBox="0 0 1024 1024" version="1.1">
              <path
                d="M383.291616 808.954249c-5.175883 0-10.353812-1.950422-14.338566-5.862521-8.064676-7.919367-8.182356-20.877493-0.26299-28.942169l273.602402-278.620695L368.69006 216.907145c-7.919367-8.064676-7.801686-21.022803 0.26299-28.942169 8.065699-7.918343 21.022803-7.80271 28.942169 0.26299l287.685141 292.960285c7.818059 7.961322 7.818059 20.717857 0 28.67918L397.895219 802.826692C393.887952 806.907637 388.591319 808.954249 383.291616 808.954249z"
              />
            </svg>
          </button>
        </NuxtLink>
      </nav>
      <article>
        <p class="share_box">Share</p>
        <article class="share_btn">
          <button @click="urlLink">
            <img src="~/assets/image/linkshare_btn.svg" />
          </button>
          <button @click="facebookLink">
            <img src="~/assets/image/facebook.svg" />
          </button>
          <button class="twitter-share-button" @click="twitterLink">
            <img src="~/assets/image/twitter.svg" />
          </button>
        </article>
      </article>
    </section>
    <footer class="email">
      <small>Feedback</small>
      <small>ddusi.developer@gmail.com</small>
    </footer>
  </main>
</template>

<script setup>
// Nuxt 3 미들웨어
definePageMeta({
  middleware: (to, from) => {
    if (process.server) {
      const acceptLanguage = useRequestHeaders()['accept-language']
      const locale = acceptLanguage?.substring(0, 2)
      if (locale === 'ko') {
        return navigateTo('/ko')
      }
    }
  }
})

// 반응형 데이터
const homeLink = ref('')

// 생명주기
onMounted(() => {
  // 타이머 클리어 (상태 관리 필요시 추후 구현)
  // clearTimer()
  homeLink.value = window.location.origin
})

// 메서드들
const urlLink = async () => {
  try {
    await navigator.clipboard.writeText(homeLink.value)
    alert('Copied Successfully')
  } catch (err) {
    // 폴백: 클립보드 API가 지원되지 않을 경우
    const textArea = document.createElement('textarea')
    textArea.value = homeLink.value
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    alert('Copied Successfully')
  }
}

const facebookLink = () => {
  if (process.client) {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${homeLink.value}&src=sdkpreparse`,
      'pop01',
      'top=10, left=10, width=460, height=600, status=no, menubar=no, toolbar=no, resizable=no'
    )
  }
}

const twitterLink = () => {
  const text = 'Would you like to play a game?'
  const hashtags = 'SquidGame,SquidGameTest'
  if (process.client) {
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${homeLink.value}&hashtags=${hashtags}`,
      'pop02',
      'top=10, left=10, width=460, height=600, status=no, menubar=no, toolbar=no, resizable=no'
    )
  }
}
</script>

<style scoped>
.logoImg {
  height: 60px;
  margin-top: 60px;
}
.subtitle {
  margin-top: 20px;
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 16px;
  line-height: 23.68px;
  letter-spacing: -0.02em;
}
#start_btn {
  position: static;
  margin-top: 20px;
  width: 164px;
  height: 45px;
  background: #e73e7e;
  color: white;
  border-radius: 60px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
}
.svg-icon-angle {
  width: 1em;
  height: 1em;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
.share_box {
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  font-weight: 700;
}
.share_btn {
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 144px;
}
.email {
  margin-top: 80px;
  margin-bottom: 60px;
  color: #888888;
  font-family: Roboto;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
}
.email small:nth-child(1) {
  margin-right: 8px;
}
</style>
