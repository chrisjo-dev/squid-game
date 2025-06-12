<template>
  <div class="page404">
    <div v-if="error.statusCode === 404">
      <div class="count_box">
        <svg
          width="260"
          height="30"
          viewBox="0 0 50 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="count_svg"
        >
          <circle cx="6.5" cy="6.5" r="6.5" fill="#E73E7E" />
          <path d="M25 0L31.9282 12H18.0718L25 0Z" fill="#E73E7E" />
          <rect x="37" width="12" height="12" fill="#E73E7E" />
        </svg>
      </div>
      <h1 class="number404">404</h1>
      <p>Page not found</p>
    </div>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">
      <button id="error_btn">GO TO HOMEPAGE</button>
    </NuxtLink>
  </div>
</template>

<script setup>
// Nuxt 3에서 에러 객체는 props로 전달됩니다
const props = defineProps({
  error: Object
})

// 페이지 메타 설정
useHead({
  title: 'Error - Squid Game MBTI'
})
</script>

<style scoped>
.page404 {
  margin: 200px auto;
  text-align: center;
}

.number404 {
  font-size: 150px;
  color: #E73E7E;
  margin: 20px 0;
}

.count_box {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

#error_btn {
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
  border: none;
  cursor: pointer;
}

#error_btn:hover {
  background: #d63570;
}

p {
  font-size: 18px;
  color: #666;
  margin: 10px 0;
}

h1 {
  color: #E73E7E;
  margin: 20px 0;
}
</style> 