<template>
  <div id="__nuxt">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// 카카오 SDK 초기화
onMounted(() => {
  const { $config } = useNuxtApp()
  if (window.Kakao && $config.public.kakaoKey) {
    window.Kakao.init($config.public.kakaoKey)
  }

  // Google Analytics
  if (typeof gtag !== 'undefined') {
    gtag('js', new Date())
    gtag('config', 'UA-214707755-1')
  }
})
</script>

<style>
/* 글로벌 스타일은 nuxt.config.ts의 css에서 로드됩니다 */
</style> 