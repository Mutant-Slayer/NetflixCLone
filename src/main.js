import { createApp } from 'vue'
import App from './App.vue'

// vuex
import store from './store/index'

//router
import router from './router'

//tailwind
import './styles/app.css';

//icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faChevronRight, faSearch, faPlay } from '@fortawesome/free-solid-svg-icons'


library.add(faChevronLeft, faChevronRight, faSearch, faPlay)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app')
