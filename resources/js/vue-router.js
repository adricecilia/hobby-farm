import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('./pages/Dashboard.vue')
        },
    ],
})
router.beforeEach((to, from, next) => {
    if (to.path !== '/' && to.path !== '/register' && !isAuthenticated()) {
        return next({path: '/'})
    }
    return next()
})

function isAuthenticated() {
    return Boolean(localStorage.getItem('APP_DEMO_USER_TOKEN'))
}

export default router;
