import Layout from '@/layout'
export default {
  path: '/personnel',
  component: Layout,
  meta: { title: '人员管理', icon: 'renyuan' },
  children: [
    {
      path: 'list',
      component: () => import('@/views/personnel/list'),
      meta: { title: '人员列表' }
    },
    {
      path: 'statistics',
      component: () => import('@/views/personnel/statistics'),
      meta: { title: '人效统计' }
    },
    {
      path: 'workload',
      component: () => import('@/views/personnel/workload'),
      meta: { title: '工作量列表' }
    }
  ]
}
