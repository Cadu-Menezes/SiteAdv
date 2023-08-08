
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/Home', component: () => import('pages/IndexPage.vue')},
      { path: '/Escritorio', component: () => import('pages/EscritorioPage.vue') },
      { path: '/AreasPage', component: () => import('pages/AreasPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
