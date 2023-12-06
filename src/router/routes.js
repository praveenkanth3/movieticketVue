export const routes = [
    {
        name: 'LandingPage',
        path: '/',
        component: () => import(/* webpackChunkName: "LandingPage" */'../components/LandingPage/LandingPage.vue')
    },
    {
        name: 'HomePage',
        path: '/HomePage',
        component: () => import(/* webpackChunkName: "HomePage" */'../components/HomePage/HomePage.vue')
    },
    {
        name: 'BookingPage',
        path: '/BookingPage',
        component: () => import(/* webpackChunkName: "BookingPage" */'../components/SeatingComponent/SeatingComponent.vue')
    },
    {
        name: 'SuccessPage',
        path: '/SuccessPage',
        component: () => import(/* webpackChunkName: "SuccessPage" */'../components/SuccessPage/SuccessPage.vue')
    },
    {
        path :'*',
        component: () => import(/* webpackChunkName: "PageNotFound" */'../components/PageNotFound/PageNotFound.vue')
      }

];