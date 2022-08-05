import Vue from 'vue';
import Router from 'vue-router';
import goTo from 'vuetify/lib/services/goto'

Vue.use(Router);

export default new Router({
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0
    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }
    return goTo(scrollTo)
  },
  routes: [
    // path 1
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/Login/Login'),
    },
    // path 2
    {
      path: '/',
      name: 'Layout',
      component: () => import('@/components/Layout/Layout'),
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('@/pages/Home/Home'),
          children: [
            {
              path: 'backstory',
              name: 'Backstory',
              component: () => import('@/pages/Home/Backstory/Backstory'),
            },
            {
              path: 'classes',
              name: 'Classes',
              component: () => import('@/pages/Home/Classes/Classes'),
            },
            {
              path: 'about-us',
              name: 'FAQ',
              component: () => import('@/pages/Home/FAQ/FAQ'),
            }
          ]
        },
        {
          path: '/privacy-policy',
          name: 'PrivacyPolicy',
          component: () => import('@/pages/PrivacyPolicy/PrivacyPolicy'),
        },
      ],
    },
    {
      path: '/herd',
      name: 'Herd',
      component: () => import('@/pages/Herd/Herd'),
    },
    // path 3
    {
      path: '*',
      name: 'Error',
      component: () => import('@/components/Error/Error'),
    }
  ],
});
