<template>
  <header class="global-header_container">
    <a href="#" class="assistive-text assistive-text_focus">Skip to Navigation</a>
    <a href="#" class="assistive-text assistive-text_focus">Skip to Main Content</a>

    <div class="global-header">
      <div class="global-header__item left">
        <ul class="global-actions">
          <li class="global-actions__item">
            <!-- 부모에게 이벤트 전파 -->
            <!-- 부모로부터 받은 상태로 클래스 제어 -->
           <button
              @click="$emit('toggle-snb')"  
              class="button toggle-snb"
              :class="{ closed: isSnbClosed }"  
              title="Menu Icon"
            >
              <span class="snb-bar"></span>
              <span class="assistive-text">Menu</span>
            </button>
          </li>
        </ul>
      </div>

      <div class="global-header__item center">
        <ul class="global-actions">
          <li class="global-actions__item">
            <div class="global__text">Arogos의 수학 수업</div>
          </li>
          <li class="global-actions__item">
            <button class="button button_outline-primary">수업코드 : 1234
              <svg class="icon icon_x-small icon_right">
                <use xlink:href="../assets/images/icons/symbols.svg#arrow_right"></use>
              </svg>
            </button>
          </li>
        </ul>
      </div>

      <!-- 동적 케이스 렌더링 -->
      <div class="global-header__item right">
        <ul class="global-actions">
          <!-- 수업 타이머 -->
          <li v-if="classState === 'in-progress'" class="global-header__time">
            <svg class="icon icon_x-small gray07">
              <use xlink:href="../assets/images/icons/symbols.svg#time"></use>
            </svg>
            <span class="text">00 : 45 : 01</span>
          </li>

          <!-- 수업 시작/종료 버튼 -->
          <li v-if="classState !== 'after'">
            <button class="button button_secondary">
              <svg class="icon icon_small icon_left">
                <use xlink:href="../assets/images/icons/symbols.svg#export"></use>
              </svg>
              {{ buttonText }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'GlobalHeader',
  data() {
    return {
      // classState는 추후 수업 상태에 맞춰 변경
      classState: 'in-progress' // 예시로 'in-progress' 설정
    };
  },
  props: {
    isSnbClosed: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    buttonText() {
      if (this.classState === 'before') {
        return '수업 시작';
      } else if (this.classState === 'in-progress') {
        return '수업 종료';
      }
      return '';
    }
  }
}
</script>

<style scoped>
</style>
