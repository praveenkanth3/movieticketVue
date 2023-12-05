export const routes = [
    {
        name: 'HomePage',
        path: '/',
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
        component: () => import(/* webpackChunkName: "BookingPage" */'../components/SuccessPage/SuccessPage.vue')
    }

];