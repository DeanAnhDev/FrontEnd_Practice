import ListPost from '@/views/ListPost.vue'
import PostDetail from '@/views/PostDetail.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: '/',
    name: 'Home',
    component: ListPost,
  },
  {
    path: '/PostDetail',
    name: 'PostDetail',
    component: PostDetail,
  },
],
})

export default router
