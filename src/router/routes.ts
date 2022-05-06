import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/PageHome.vue'),
        name: 'NFTweets / Home'
      },
      {
        path: '/whatnft',
        component: () => import('pages/Pagewhatnft.vue'),
        name: 'NFTweets / What is an NFT?'
      },
      {
        path: '/different',
        component: () => import('pages/Pagedifferent.vue'),
        name: 'NFTweets / Different from Cryptocurrency?'
      },
      {
        path: '/howwork',
        component: () => import('pages/Pagehowwork.vue'),
        name: 'NFTweets / How Does an NFT Work?'
      },
      {
        path: '/howbuy',
        component: () => import('pages/Pagehowbuy.vue'),
        name: 'NFTweets / How to Buy NFTs?'
      },
      {
        path: '/popular',
        component: () => import('pages/Pagepopular.vue'),
        name: 'NFTweets / Popular NFT Marketplaces'
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
