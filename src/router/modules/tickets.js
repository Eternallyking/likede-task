import Layout from '@/layout'
export default {
  path: '/tickets',
  component: Layout,
  meta: { title: '工单管理', icon: 'gongdan' },
  children: [
    {
      path: 'om',
      component: () => import('@/views/tickets/om'),
      meta: { title: '运营工单' }
    },
    {
      path: 'operation',
      component: () => import('@/views/tickets/operation'),
      meta: { title: '运维工单' }
    }
  ]
}
