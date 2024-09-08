<template>
  <nav class="toolbar">
    <button class="button button_icon button_tool">
      <i class="icon-bg myshare"></i>
      <span class="btn-text">내 화면 공유</span>
    </button>
    <span class="bar"></span>
    <button class="button button_icon button_tool">
      <i class="icon-bg maximize"></i>
      <span class="btn-text">크게보기</span>
    </button>
    <button class="button button_icon button_tool">
      <i class="icon-bg user_edit"></i>
      <span class="btn-text">학생 화면 공유</span>
    </button>
    <button class="button button_icon button_tool">
      <i class="icon-bg link"></i>
      <span class="btn-text">URL 실행</span>
    </button>
    <button class="button button_icon button_tool">
      <i class="icon-bg mobile"></i>
      <span class="btn-text">앱 실행</span>
    </button>
    <button class="button button_icon button_tool">
      <i class="icon-bg message"></i>
      <span class="btn-text">메시지 전송</span>
    </button>
    <button class="button button_icon button_tool">
      <i class="icon-bg lock"></i>
      <span class="btn-text">화면 잠금/해제</span>
    </button>
    <button class="button button_icon button_tool">
      <i class="icon-bg pin"></i>
      <span class="btn-text">상단 고정/해제</span>
    </button>
  </nav>
</template>

<script>
export default {
  name: 'ToolBar'
}
</script>

<style scoped>
</style>
