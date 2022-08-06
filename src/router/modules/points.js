import Layout from '@/layout'
export default {
  path: '/points',
  component: Layout,
  meta: { title: '点位管理', icon: 'dianwei' },
  children: [
    {
      path: 'region',
      component: () => import('@/views/points/region'),
      meta: { title: '区域管理' }
    },
    {
      path: 'points',
      component: () => import('@/views/points/points'),
      meta: { title: '点位管理' }
    },
    {
      path: 'collaboration',
      component: () => import('@/views/points/collaboration'),
      meta: { title: '合作商管理' }
    }
  ]
}
