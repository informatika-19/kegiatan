
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', name: 'tampilKegiatan', component: () => import('pages/TampilKegiatan.vue') },
      { path: 'inputkegiatan', name: 'inputKegiatan', component: () => import('pages/InputKegiatan.vue') },
      { path: 'edit/:id', name: 'editKegiatan', component: () => import('pages/EditKegiatan.vue') },
      { path: 'detail/:id', name: 'tampilDetail', component: () => import('pages/TampilDetail.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
