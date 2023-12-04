export const routes = [
    {
        name: 'HomePage',
        path: '/',
        component: () => import(/* webpackChunkName: "HomePage" */'../components/HomePage/HomePage.vue')
    }

];