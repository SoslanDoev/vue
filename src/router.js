import {createRouter, createWebHistory} from 'vue-router'
// import store from '@/store' // Vuex
// Маршруты
const routes = [
    // Главная страница
    {path: '/', component: () => import(`./views/Home.vue`), name: 'Home', meta: {
        guard: 'all', // Защита (guest - для гостей; all - для всех; auth - для авторизированных)
        title: 'Главная', // Название страницы
        Header: true, // Показывать Header (true - вкл; false - выкл)
        Footer: true, // Показывать Footer (true - вкл; false - выкл)
    },},
    // {path: '/home', component: () => import(`./views/Home.vue`), name: 'Home', meta: {
    //     guard: 'all', // Защита (guest - для гостей; all - для всех; auth - для авторизированных)
    //     title: 'Главная', // Название страницы
    //     Header: true, // Показывать Header (true - вкл; false - выкл)
    //     Footer: true, // Показывать Footer (true - вкл; false - выкл)
    // },},
    // Страница не найдена
    {path: '/:has(.*)*', component: import(`./views/NotFound.vue`), name: 'NotFound', meta: {
        guard: 'all', // Защита (guest - для гостей; all - для всех; auth - для авторизированных)
        title: 'Страница не найдена', // Название страницы
        Header: false, // Показывать Header (true - вкл; false - выкл)
        Footer: false, // Показывать Footer (true - вкл; false - выкл)
    },},
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

// const DEFAULT_TITLE = 'Document';
// router.beforeEach((to, from, next) => { // Проверка пользователя на авторизированность
//     // to - на какую страницу идем
//     // from - откуда мы пришли
//     // next - редирект
//     document.title = to.meta.title || DEFAULT_TITLE
//     if (!store.state.user.name) {
//         if (to.meta.guard === 'auth') {
//             return next({ name: 'NotFound' })  
//             // return next({ name: 'Login' })  
//         } else {
//             return next()
//         }
//     } else {
//         if (to.meta.guard === 'guest') {
//             return next({ name: 'Personal' })
//         } else {
//             return next()
//         }
//     }
// })

export default router