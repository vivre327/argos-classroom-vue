import { createRouter, createWebHistory } from 'vue-router'

// 라우트 정의
const routes = [
  {
    path: '/docs/StyleGuide',
    component: () =>
      import('@/views/docs/StyleGuide.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'ConnectionError',
    component: () =>
      import('@/views/publish/ConnectionError.vue'),
  },
  {
    path: '/publish/ClassManagement',
    component: () =>
      import('@/views/publish/ClassManagement.vue'),
  },
  {
    path: '/test',
    component: () =>
      import('@/views/publish/test.vue'),
  },
// 페이지 추가
]

// 라우터 인스턴스 생성
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
