<template>

<!-- GlobalHeader에 상태와 이벤트 전달 -->
<GlobalHeader :isSnbClosed="isSnbClosed" @toggle-snb="toggleSnb"/>
<div class="container">

  <!-- SideNav에 상태 전달 -->
  <SideNav :isSnbClosed="isSnbClosed"/>
  <main class="main-content scroll">
    <!-- 데이터가 없을 때 보여줄 UI -->
    <template v-if="items.length === 0">
      <section class="no-data">
        <p>수업이 아직 시작되지 않았습니다.</p>
      </section>
    </template>

    <!-- 데이터가 있을 때 PageHeader 및 CardItem 렌더링 -->
    <template v-else>
      <PageHeader />
      <section class="cards-container scroll">
        <CardItem
          v-for="(item, index) in items"
          :key="index"
          :name="item.name"
          :badgeType="item.badgeType"
          :badgeText="item.badgeText"
          :videoSource="item.videoSource"
          :videoPoster="item.videoPoster"
        />

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
      </section>
      <ToolBar />
    </template>
  </main>
</div>

</template>

<script>
import GlobalHeader from '@/components/GlobalHeader.vue'
import PageHeader from '@/components/PageHeader.vue'
import SideNav from '@/components/SideNav.vue'
import ToolBar from '@/components/ToolBar.vue'
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
        //videoSource: require('@/assets/videos/sample_horizon.mp4'), // require로 경로 처리
        videoPoster: require('@/assets/images/temp/video_sample.png') // require로 경로 처리
      })),
      // items: []

      // snb의 열림/닫힘 상태를 관리
      isSnbClosed: false
    };
  },
  methods: {
    toggleSnb() {
      // snb 상태를 토글
      this.isSnbClosed = !this.isSnbClosed;
    }
  },
  components: {
    GlobalHeader,
    SideNav,
    CardItem,
    PageHeader,
    ToolBar,
  }
}

</script>

<style>
/* styles */
</style>