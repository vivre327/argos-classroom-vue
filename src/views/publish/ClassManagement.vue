<template>

<GlobalHeader />

<div class="container">
<SideNav />
<main class="main-content scroll">
  <PageHeader />
 <section class="cards-container scroll">
    <!-- Case: 종료 상태 -->
    <!-- <CardItem
      name="김나나"
      badgeType="error"
      badgeText="종료"
      videoSource="@/assets/videos/sample.mp4"
    /> -->

    <!-- Case: 공유중 상태 -->
    <!-- <CardItem
      name="김나나"
      badgeType="warning"
      badgeText="공유중"
      videoSource="@/assets/videos/sample.mp4"
    /> -->

    <!-- 레이아웃 테스트: 컴포넌트를 25번 반복 -->
    <CardItem
      v-for="(item, index) in items"
      :key="index"
      :name="item.name"
      :badgeType="item.badgeType"
      :badgeText="item.badgeText"
      :videoSource="item.videoSource"
      :videoPoster="item.videoPoster"
    />
 </section>
</main>

</div>

</template>

<script>
import GlobalHeader from '@/components/GlobalHeader.vue'
import PageHeader from '@/components/PageHeader.vue'
import SideNav from '@/components/SideNav.vue'
import CardItem from '@/components/CardItem.vue'

export default {
  name: 'ClassManagement',
  data() {
    return {
      // 25개의 카드 아이템을 생성
      items: Array.from({ length: 25 }, (_, index) => ({
        name: `김나나`, // 예시 이름
        badgeType: index % 2 === 0 ? 'warning' : 'error', // 예시 배지 타입
        badgeText: index % 2 === 0 ? '공유중' : '종료', // 예시 배지 텍스트
        videoSource: '@/assets/videos/sample.mp4',
        videoPoster: '@/assets/images/temp/video_sample.png'
      }))
    };
  },
  components: {
    GlobalHeader,
    SideNav,
    CardItem,
    PageHeader
  }
}

</script>

<style>
/* styles */
</style>