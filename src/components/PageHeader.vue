<template>
  <div class="page-header page-header__row">
    <div class="page-header__actions">
      <div class="page-header__control">
        <div class="checkbox">
          <input type="checkbox" name="options" id="checkbox-unique-id-1" value="checkbox-unique-id-1"
            checked="" />
          <label class="checkbox__label" for="checkbox-unique-id-1">
            <span class="checkbox_faux"><svg class="icon"><use xlink:href="../assets/images/icons/symbols.svg#check"></use></svg></span>
            <span class="form-element__label">전체선택</span>
          </label>
        </div>
      </div>
      <div class="page-header__meta item-count">
        <em class="primary06">1</em>/15
      </div>
    </div>
    <div class="page-header__controls">
      <div class="page-header__control">
        <div class="form-element">
          <label class="blind" for="text-input-id-0">학생 번호 이름 검색</label>
          <div class="form-element__control input-has-icon input-has-icon_right">
            <input type="text" id="text-input-id-0" placeholder="학생 번호 이름을 입력하세요." class="input" />
            <button class="button button_icon" title="Menu Icon">
              <svg class="button__icon" aria-hidden="true">
                <use xlink:href="../assets/images/icons/symbols.svg#search"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="page-header__control">
        <div class="select_container">
          <select class="select" id="select-01">
            <option>이름순</option>
            <option value="option1">참여 시간 (내림차순/오름차순)</option>
            <option value="option2">이름 (내림차순/오름차순)</option>
            <option value="option3">번호 (내림차순/오름차순)</option>
          </select>
          <svg class="icon">
            <use xlink:href="../assets/images/icons/symbols.svg#arrow_down"></use>
          </svg>
        </div>
      </div>
      <div class="page-header__control">
        <button class="button button_outline button_icon button_icon-border refreshButton" :class="{'animate': isAnimating}" title="새로고침" @click="onRefreshClick">
          <svg class="button__icon" aria-hidden="true">
            <use xlink:href="../assets/images/icons/symbols.svg#reset"></use>
          </svg>
          <span class="assistive-text">Reset</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  data() {
    return {
      isAnimating: false
    };
  },
  methods: {
    onRefreshClick() {
      this.isAnimating = true;
      setTimeout(() => {
        this.isAnimating = false;
      }, 700); //animation: spin 의 duration과 동일
    }
  }
}
</script>


<style scoped>
</style>
