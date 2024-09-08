<template>
  <article class="card-item" :class="{'active': isCardActive}" @click="onCardClick">
    <video height="100%" poster="@/assets/images/temp/video_sample.png" autoplay>
      <!-- <source :src="videoSource" type="video/mp4" /> -->
      <source type="video/mp4" />
    </video>
    <div class="card-controls">
      <div class="card-control flex-end">
        <button class="button button_icon button_icon-x-small" tabindex="0" :class="{'active': isPinActive}" @click="onPinClick">
          <svg class="button__icon" aria-hidden="true">
            <use xlink:href="@/assets/images/icons/symbols.svg#pin_fill"></use>
          </svg>
          <span class="assistive-text">상단고정</span>
        </button>
        <button class="button button_icon button_icon-x-small" tabindex="0" @click="onMoreClick">
          <svg class="button__icon" aria-hidden="true">
            <use xlink:href="@/assets/images/icons/symbols.svg#more"></use>
          </svg>
          <span class="assistive-text">더보기</span>
        </button>
      </div>
      <div class="card-meta flex-start">
        <div class="name" :title="name">{{ name }}</div>
        <div :class="['badge', badgeType]">{{ badgeText }}</div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'CardItem',
  data() {
    return {
      isCardActive: false,
      isPinActive: false
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    badgeType: {
      type: String,
      default: 'warning' // default value
    },
    badgeText: {
      type: String,
      default: '공유중' // default value
    },
    // videoSource: {
    //   type: String,
    //   required: true
    // },
  },
  methods: {
    onCardClick() {
      // 클릭할 때마다 isCardActive 상태를 반전
      this.isCardActive = !this.isCardActive;
    },
    onPinClick(event) {
      event.stopPropagation();
      this.isPinActive = !this.isPinActive;
    },
    onMoreClick(event) {
      event.stopPropagation();
      alert('더보기 버튼 클릭됨');
    }
  }
}
</script>

<style scoped>
/* Add any scoped styles here */
</style>
