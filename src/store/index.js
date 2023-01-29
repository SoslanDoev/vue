// import axios from 'axios'
// import router from '@/router.js'
import {createStore} from 'vuex'
export default createStore({
    state: {
        contactsPathImage: '@/assets/image/icon/',
        contacts: [
            {id: 1, name: 'Facebook', path_image: `facebook.svg`, url: 'https://google.com'},
            {id: 2, name: 'Behance', path_image: `behance.svg`, url: 'https://google.com'},
            {id: 3, name: 'Telegram', path_image: `telegram.svg`, url: 'https://web.telegram.org'},
            {id: 4, name: 'Vk', path_image: `vk.svg`, url: 'https://vk.com/soslandoev'},
            {id: 5, name: 'Gmail', path_image: `gmail.svg`, url: 'https://www.google.com/intl/ru/gmail/about/'},
        ],
    }
})