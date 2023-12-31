export const routes = [
    {
        name: 'HomePage',
        path: '/',
        component: () => import(/* webpackChunkName: "HomePage" */'../components/HomePage/HomePage.vue'),
    },
    {
        name: 'BookingPage',
        path: '/bookingpage',
        component: () => import(/* webpackChunkName: "BookingPage" */'../components/SeatingComponent/SeatingComponent.vue'),
        meta: { requiresAuth: true }
    },
    {
        name: 'SuccessPage',
        path: '/successpage',
        component: () => import(/* webpackChunkName: "SuccessPage" */'../components/SuccessPage/SuccessPage.vue'),
        meta: { requiresAuth: true }
    },
    {
        path :'*',
        component: () => import(/* webpackChunkName: "PageNotFound" */'../components/PageNotFound/PageNotFound.vue')
      }

];