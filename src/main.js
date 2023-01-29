import { createApp } from 'vue'
import App from './App.vue' // Шаблон
import store from '@/store' // Vuex
import router from '@/router.js' // Маршрутизатор
import BtnGreen from '@/components/BtnGreen.vue' // Кнопка 
import InputGrey from '@/components/InputGrey.vue' // Текстовая кнопка
import vAside from '@/components/vAside.vue' // Навигационное меню
import BtnDouble from '@/components/BtnDouble.vue' // Двойная кнопка
import vCarousel from '@/components/vCarousel.vue' // Слайдер 
import vSliderCoverflow from '@/components/vSliderCoverflow.vue' // Слайдер с эффектом
import vContacts from '@/components/vContacts.vue' // Контакты
createApp(App)
    .component('BtnGreen', BtnGreen) // Кнопка
    .component('InputGrey', InputGrey) // Текстовая кнопка
    .component('vAside', vAside) // Навигационное меню
    .component('BtnDouble', BtnDouble) // Двойная кнопка
    .component('vCarousel', vCarousel) // Слайдер
    .component('vSliderCoverflow', vSliderCoverflow) // Слайдер с эффектом 
    .component('vContacts', vContacts) // Контакты
    .use(router) // Маршрутизатор
    .use(store) // Vuex
    .mount('#app') 