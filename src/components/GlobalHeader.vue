<template>
  <header class="global-header_container">
    <a href="#" class="assistive-text assistive-text_focus">Skip to Navigation</a>
    <a href="#" class="assistive-text assistive-text_focus">Skip to Main Content</a>

    <div class="global-header">
      <div class="global-header__item left">
        <ul class="global-actions">
          <li class="global-actions__item">
            <button id="toggle-snb" class="button button_icon toggle-snb" title="Menu Icon">
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
      snb: null,
      toggleButton: null,
      // classState는 추후 수업 상태에 맞춰 변경
      // 'before', 'in-progress', 'after' 등의 상태
      classState: 'in-progress' // 예시로 'in-progress' 설정
    };
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
  },
  mounted() {
    // DOM 요소 선택 및 이벤트 리스너 추가
    this.snb = document.querySelector('.snb');
    this.toggleButton = document.getElementById('toggle-snb');

    this.toggleButton.addEventListener('click', this.toggleSnb);
  },
  beforeUnmount() {
    // 메모리 누수를 방지하기 위해 이벤트 리스너를 제거해야 합니다.
    if (this.toggleButton) {
      this.toggleButton.removeEventListener('click', this.toggleSnb);
    }
  },
  methods: {
    toggleSnb() {
      // 메뉴 및 버튼에 'closed' 클래스 토글
      this.snb.classList.toggle('closed');
      this.toggleButton.classList.toggle('closed');
    }
  }
}
</script>

<style scoped>
</style>
