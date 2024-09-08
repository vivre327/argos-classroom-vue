<template>
  <aside class="snb scroll" :class="{closed: isSnbClosed}">
    <div class="snb-cont">
      <div class="tabs tabs_flex">
        <ul class="tabs__nav" role="tablist">
          <li class="tabs__item" title="채팅" role="presentation">
            <a class="tabs__link tabs__with-icon" href="#" role="tab" tabindex="-1" aria-selected="false" aria-controls="tab-1" id="tab-1__item">
              <span class="icon-container current-color" title="chat icon">
                <svg class="icon">
                  <use xlink:href="@/assets/images/icons/symbols.svg#chat"></use>
                </svg>
              </span>
              <b class="tabs__label">채팅</b>
            </a>
          </li>
          <li class="tabs__item" title="학생" role="presentation">
            <a class="tabs__link tabs__with-icon" href="#" role="tab" tabindex="-1" aria-selected="false" aria-controls="tab-2" id="tab-2__item">
              <span class="icon-container current-color" title="student icon">
                <svg class="icon">
                  <use xlink:href="@/assets/images/icons/symbols.svg#student"></use>
                </svg>
              </span>
              <b class="tabs__label">학생</b>
            </a>
          </li>
          <li class="tabs__item is-active" title="정보" role="presentation">
            <a class="tabs__link tabs__with-icon" href="#" role="tab" tabindex="0" aria-selected="true" aria-controls="tab-3" id="tab-3__item">
              <span class="icon-container current-color" title="info icon">
                <svg class="icon">
                  <use xlink:href="@/assets/images/icons/symbols.svg#info"></use>
                </svg>
              </span>
              <b class="tabs__label">정보</b>
            </a>
          </li>
        </ul>
        <div id="tab-1" class="tabs__content hide" role="tabpanel" aria-labelledby="tab-1__item">Item One Content</div>
        <div id="tab-2" class="tabs__content hide" role="tabpanel" aria-labelledby="tab-2__item">Item Two Content</div>
        <div id="tab-3" class="tabs__content show" role="tabpanel" aria-labelledby="tab-3__item">
          <h3 class="snb-tit">
            수업 코드
            <div class="btn-group">
              <button class="button button_icon button_icon-x-small" title="Share Icon">
                <svg class="button__icon" aria-hidden="true">
                  <use xlink:href="@/assets/images/icons/symbols.svg#share"></use>
                </svg>
                <span class="assistive-text">수업 코드 최대화</span>
              </button>
              <button class="button button_icon button_icon-x-small" title="Print Icon">
                <svg class="button__icon" aria-hidden="true">
                  <use xlink:href="@/assets/images/icons/symbols.svg#print"></use>
                </svg>
                <span class="assistive-text">수업 코드 인쇄</span>
              </button>
            </div>
          </h3>
          <div class="code code_small">
            <img src="@/assets/images/temp/QR_code_sample.png" alt="수업 코드의 QR code" class="code_qr">
            <p class="body-02-b">or</p>
            <div class="code_text">
              <span>수업 코드</span>
              <em>1234</em>
            </div>
          </div>
          <p class="snb-desc">학생이 Argos Classroom앱에서 수업 코드로 접속할 수 있습니다.</p>
          <h3 class="snb-tit">
            수업 정보
          </h3>
          <div class="form-element">
            <label class="form-element__label" for="text-input-id-0">수업 이름</label>
            <div class="form-element__control">
              <input id="text-input-id-0" value="Argos의 영어 수업" type="text" class="input" readonly>
            </div>
          </div>
          <div class="form-element">
            <label class="form-element__label" for="text-input-id-1">과목</label>
            <div class="form-element__control">
              <input id="text-input-id-1" value="영어" type="text" class="input" readonly>
            </div>
          </div>
          <fieldset class="form-element">
            <legend class="form-element__legend form-element__label">요일</legend>
            <div class="radio_button-group">
              <span class="button radio_button">
                <input type="radio" name="example-unique-name-197" id="example-unique-id-199" value="monday" disabled checked>
                <label class="radio_button__label" for="example-unique-id-199">
                  <span class="radio_faux">월</span>
                </label>
              </span>
              <span class="button radio_button">
                <input type="radio" name="example-unique-name-197" id="example-unique-id-200" value="tuesday" disabled>
                <label class="radio_button__label" for="example-unique-id-200">
                  <span class="radio_faux">화</span>
                </label>
              </span>
              <span class="button radio_button">
                <input type="radio" name="example-unique-name-197" id="example-unique-id-201" value="wednesday" disabled>
                <label class="radio_button__label" for="example-unique-id-201">
                  <span class="radio_faux">수</span>
                </label>
              </span>
              <span class="button radio_button">
                <input type="radio" name="example-unique-name-197" id="example-unique-id-202" value="thursday" disabled>
                <label class="radio_button__label" for="example-unique-id-202">
                  <span class="radio_faux">목</span>
                </label>
              </span>
              <span class="button radio_button">
                <input type="radio" name="example-unique-name-197" id="example-unique-id-203" value="friday" disabled>
                <label class="radio_button__label" for="example-unique-id-203">
                  <span class="radio_faux">금</span>
                </label>
              </span>
            </div>
          </fieldset>
          <div class="form-element"><label class="form-element__label" for="text-input-id-0">마지막 수업 일시</label>
          <!-- <div class="form-element"><label class="form-element__label" for="text-input-id-0">수업 시작 일시</label> -->
            <div class="form-element__control">
              <input type="text" value="시작 2024-09-06 10:00:01" data-input class="input input_date" readonly>
              <input type="text" value="시작 2024-09-06 10:00:01" data-input class="input input_date" readonly>
            </div>
          </div>
          <div class="form-element">
            <label class="form-element__label" for="text-input-id-2">수업 설명</label>
            <div class="form-element__control">
              <input id="text-input-id-2" value="글로벌 인재 양성을 위한 영어수업" type="text" class="input" readonly>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'SideNav',
  props: {
    isSnbClosed: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
