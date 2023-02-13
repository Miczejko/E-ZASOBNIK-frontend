import { createApp } from 'vue'
import App from './App.vue'

import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

import router from './router'
import './assets/tailwind.css'

var ToastOptions = {
    position: POSITION.BOTTOM_RIGHT
}

const app = createApp(App)
app.use(router)
app.use(Toast, ToastOptions)
app.mount('#app')


app.config.globalProperties.$filters = {
    nameOfWorkingSpace(action) {
        return `${action.name.split(" ")[0].toUpperCase()} ${action.content.toUpperCase()}`
    },

    priceWithCurrency(value){
        return `${ value !== null ? value : "0"} PLN`
    },

    colorWithSearchQuery(value) {
        return value
    },

    colorState(value){
        if(value==='ACTIVE'){
            return
        }
    }
}
