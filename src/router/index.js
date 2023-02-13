import { createWebHistory, createRouter } from "vue-router";
import HomePage from '@/views/HomePage'
import PalletsPage from '@/views/PalletsPage'
import StatisticsPage from '@/views/StatisticsPage'
import LoginPage from '@/views/auth/LoginPage'
import RegisterPage from '@/views/auth/RegisterPage'
import NoLoggedIn from '@/views/auth/NoLoggedInPage'
import Items from '@/views/ItemsPage'

const CheckIfLoggedIn = () => {
    if(localStorage.getItem('auth') !== null){
        return true
    }else{
        return false
    }
}

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage
    },
    {
        path: "/pallets",
        name: "Pallets",
        component: CheckIfLoggedIn() ? PalletsPage : NoLoggedIn,
    },
    {
        path: "/pallets/items/:id",
        name: "Items",
        component: Items,
    },
    {
        path:'/statistics',
        name: "Statistics",
        component: CheckIfLoggedIn() ? StatisticsPage : NoLoggedIn
    },
    {
        path:'/user/login',
        name: "Login",
        component: LoginPage
    },
    {
        path:'/user/register',
        name: "Register",
        component: RegisterPage
    },
    {
        path:'/nologin',
        name: "NoLoggedIn",
        component: NoLoggedIn
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
})

export default router