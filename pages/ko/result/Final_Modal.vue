<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <p class="headerText">전체 결과보기</p>
          <i class="fas fa-times" @click="closeModal()"></i>
        </div>
        <main class="finalModal">
          <article class="mbtiType" @click="typeLink('ENFP')">
            <img
              src="~/assets/image/final/성기훈_ENFP_200.png"
              alt="성기훈 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">성기훈</p>
                <p class="charType">ENFP</p>
              </section>
              <p class="charSummary">
                풍부한 열정과 상상력으로 <br />무엇이든 해내는 인물
              </p>
            </section>
          </article>
          <article class="mbtiType" @click="typeLink('INFJ')">
            <img
              src="~/assets/image/final/오일남_INFJ_200.png"
              alt="오일남 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">오일남</p>
                <p class="charType">INFJ</p>
              </section>
              <p class="charSummary">
                창의력과 통찰력이 뛰어난 <br />독창적인 인물
              </p>
            </section>
          </article>
          <article class="mbtiType" @click="typeLink('ENTJ')">
            <img
              src="~/assets/image/final/조상우_ENTJ_200.png"
              alt="조상우 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">조상우</p>
                <p class="charType">ENTJ</p>
              </section>
              <p class="charSummary">
                전략가로서 실리를 챙기는 <br />지도자형 인물
              </p>
            </section>
          </article>
          <article class="mbtiType" @click="typeLink('ESTP')">
            <img
              src="~/assets/image/final/장덕수_ESTP_200.png"
              alt="장덕수 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">장덕수</p>
                <p class="charType">ESTP</p>
              </section>
              <p class="charSummary">
                다양한 분야에 관심이 있는 <br />활동적인 인물
              </p>
            </section>
          </article>
          <article class="mbtiType" @click="typeLink('INFP')">
            <img
              src="~/assets/image/final/강새벽_INFP_200.png"
              alt="강새벽 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">강새벽</p>
                <p class="charType">INFP</p>
              </section>
              <p class="charSummary">
                신념과 조화를 중시하는 <br />이상주의자 인물
              </p>
            </section>
          </article>
          <article class="mbtiType" @click="typeLink('ESFP')">
            <img
              src="~/assets/image/final/한미녀_ESFP_200.png"
              alt="한미녀 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">한미녀</p>
                <p class="charType">ESFP</p>
              </section>
              <p class="charSummary">현실적이고 실제적인 <br />사교적인 인물</p>
            </section>
          </article>
          <article class="mbtiType" @click="typeLink('ISTJ')">
            <img
              src="~/assets/image/final/황준호_ISTJ_200.png"
              alt="황준호 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">황준호</p>
                <p class="charType">ISTJ</p>
              </section>
              <p class="charSummary">
                시작한 일은 끝까지 하는 <br />완벽주의자 인물
              </p>
            </section>
          </article>
          <article class="mbtiType" @click="typeLink('ISTP')">
            <img
              src="~/assets/image/final/프런트맨_ISTP_200.png"
              alt="프런트맨 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">프런트맨</p>
                <p class="charType">ISTP</p>
              </section>
              <p class="charSummary">
                논리적이고 객관적인 <br />백과사전형 인물
              </p>
            </section>
          </article>
          <article class="mbtiType" @click="typeLink('ISFJ')">
            <img
              src="~/assets/image/final/성기훈어머니_ISFJ_200.png"
              alt="성기훈어머니 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">성기훈의 어머니</p>
                <p class="charType">ISFJ</p>
              </section>
              <p class="charSummary">
                책임감이 강하고 헌신적인 <br />인내심 많은 인물
              </p>
            </section>
          </article>
          <article class="mbtiType" @click="typeLink('ESTJ')">
            <img
              src="~/assets/image/final/VIP_ESTJ_200.png"
              alt="VIPS 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">VIPS</p>
                <p class="charType">ESTJ</p>
              </section>
              <p class="charSummary">
                계획하는 능력이 뛰어난 <br />사업가형 인물
              </p>
            </section>
          </article>
          <article class="mbtiType" @click="typeLink('ENTP')">
            <img
              src="~/assets/image/final/의문남_ENTP_200.png"
              alt="의문남 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">의문의 남자</p>
                <p class="charType">ENTP</p>
              </section>
              <p class="charSummary">
                자신감과 에너지가 넘치는 <br />현실적인 인물
              </p>
            </section>
          </article>
          <article class="mbtiType" @click="typeLink('ENFJ')">
            <img
              src="~/assets/image/final/알리_ENFJ_200.png"
              alt="알리 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">알리압둘</p>
                <p class="charType">ENFJ</p>
              </section>
              <p class="charSummary">
                주변을 행복하게 만드는 <br />친절한 인물
              </p>
            </section>
          </article>
          <article class="mbtiType" @click="typeLink('ISFP')">
            <img
              src="~/assets/image/final/지영_ISFP_200.png"
              alt="지영 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">지영</p>
                <p class="charType">ISFP</p>
              </section>
              <p class="charSummary">
                감수성이 풍부하고 <br />독립심이 많은 인물
              </p>
            </section>
          </article>
          <article class="mbtiType" @click="typeLink('INTP')">
            <img
              src="~/assets/image/final/진행요원_INTP_200.png"
              alt="진행요원 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">진행요원</p>
                <p class="charType">INTP</p>
              </section>
              <p class="charSummary">
                이해가 빠르고 통찰력 있는 <br />아이디어형 인물
              </p>
            </section>
          </article>
          <article class="mbtiType" @click="typeLink('ESFJ')">
            <img
              src="~/assets/image/final/조상우맘_ESFJ_200.png"
              alt="조상우맘 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">조상우의 어머니</p>
                <p class="charType">ESFJ</p>
              </section>
              <p class="charSummary">
                동정심과 참을성이 많은 <br />양심적인 인물
              </p>
            </section>
          </article>
          <article class="mbtiType" @click="typeLink('INTJ')">
            <img
              src="~/assets/image/final/주최자_INTJ_200.png"
              alt="주최자 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">주최자</p>
                <p class="charType">INTJ</p>
              </section>
              <p class="charSummary">
                행동과 사고가 단호한 <br />독립적인 인물
              </p>
            </section>
          </article>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      close: true,
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeModal", !this.close);
    },
    typeLink(type) {
      this.$router.push({
        path: `${type}?firstTest=true`,
      });
    },
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  transition: opacity 0.3s ease;
  overflow: auto;
}
.modal-wrapper {
  vertical-align: middle;
}
.modal-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: black;
  transition: all 0.3s ease;
  color: white;
  width: 360px;
  margin: auto;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 40px;
}
.fa-times {
  cursor: pointer;
}
.modal-default-button {
  float: right;
}
.mbtiType {
  display: flex;
  width: 275px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  cursor: pointer;
}
.charInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  text-align: left;
}
.charSummary {
  letter-spacing: -0.02em;
  font-weight: 400;
  line-height: 21px;
}
.typeInfo {
  display: flex;
  margin-bottom: 8px;
}
.charType {
  font-size: 12px;
  color: #e73e7e;
  padding-left: 8px;
  padding-top: 1px;
}
.charName {
  font-weight: 700;
  font-size: 14px;
}
.typeImg {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}
</style>
