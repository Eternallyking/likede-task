import Layout from '@/layout'
export default {
  path: '/commodity',
  component: Layout,
  meta: { title: '商品管理', icon: 'shangpin' },
  children: [
    {
      path: 'type',
      component: () => import('@/views/commodity/type'),
      meta: { title: '商品类型' }
    },
    {
      path: 'manage',
      component: () => import('@/views/commodity/manage'),
      meta: { title: '商品管理' }
    }
  ]
}
