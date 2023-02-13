<template>
    <div class="bg-sidebar-menu  md:px-0 px-3 md:relative fixed w-full md:w-custom-sidebar flex flex-row md:flex-col justify-center md:justify-between md:items-start items-center">

        <!-- LOGO SECTION -->
        <div class=" hidden md:flex md:order-1 md:bg-red-800/75   rounded-2xl -translate-y-1/2 w-32 md:w-full h-12 md:h-32  justify-center items-end pb-4 shadow-2xl">
            <div class="inline-flex space-x-2 items-center">
                <img class="w-8 h-8" src="../assets/logo1.png" alt="Logo">
                <p class="font-bold text-xl bg-gradient-to-r from-yellow-200 to-yellow-500 text-transparent bg-clip-text">E-ZASOBNIK</p>
            </div>
        </div>

        <!-- NAVIGATION  -->
        <div class="md:order-2 p-2 xl:p-5 w-full h-1/2  flex flex-row md:flex-col space-y-3 justify-start -translate-y-1.5">
            <p class="md:block hidden menu-nav-hint text-xs ">
                MAIN MENU
            </p>

            <!-- NAVBAR ELEMENT -->
            <router-link to="/" class="inline-flex space-x-1 xl:space-x-2 hover:bg-zinc-800 rounded-xl p-1 transition-colors hover:shadow-lg ">
                <div>
                    <svg class="xl:w-6 xl:h-6 w-5 h-5"  viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.39331 9.64478L12.3933 2.64478L21.3933 9.64478V20.6448C21.3933 21.1752 21.1826 21.6839 20.8075 22.059C20.4325 22.4341 19.9237 22.6448 19.3933 22.6448H5.39331C4.86288 22.6448 4.35417 22.4341 3.9791 22.059C3.60402 21.6839 3.39331 21.1752 3.39331 20.6448V9.64478Z" stroke="#CBC5C5"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.39331 22.6448V12.6448H15.3933V22.6448" stroke="#CBC5C5" stroke-width="" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </div>
                <div class="self-center">
                    <p class="hidden md:block menu-nav-font text-md xl:text-xl ">Home</p>
                </div>
            </router-link>

            <!-- NAVBAR ELEMENT -->
            <router-link to="/pallets" 
            active-class="active"
            class="inline-flex space-x-1 xl:space-x-2 hover:bg-zinc-800 rounded-xl p-1 transition-colors hover:shadow-lg">
                <div>
                    <svg class="xl:w-6 xl:h-6 w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 13.3333V6.66666C17.4997 6.37438 17.4225 6.08733 
                        17.2763 5.83429C17.13 5.58125 16.9198 5.37112 16.6667 5.22499L10.8333 
                        1.89166C10.58 1.74538 10.2926 1.66837 10 1.66837C9.70744 1.66837 
                        9.42003 1.74538 9.16667 1.89166L3.33333 5.22499C3.08022 5.37112 
                        2.86998 5.58125 2.72372 5.83429C2.57745 6.08733 2.5003 6.37438 
                        2.5 6.66666V13.3333C2.5003 13.6256 2.57745 13.9126 2.72372 
                        14.1657C2.86998 14.4187 3.08022 14.6289 3.33333 14.775L9.16667 
                        18.1083C9.42003 18.2546 9.70744 18.3316 10 18.3316C10.2926 18.3316 10.58 18.2546 10.8333 18.1083L16.6667 
                        14.775C16.9198 14.6289 17.13 14.4187 17.2763 14.1657C17.4225 13.9126 17.4997 13.6256 17.5 
                        13.3333Z" stroke="#CBC5C5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.7251 5.79999L10.0001 10.0083L17.2751 5.79999" stroke="#CBC5C5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 18.4V10" stroke="#CBC5C5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="self-center">
                    <p class="hidden md:block menu-nav-font text-md xl:text-xl">Pallets</p>
                </div>

                <!-- <div  class="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-300 to-purple-400 self-center translate-x-full shadow-xl">

                </div> -->
            </router-link>

            

            <!-- NAVBAR ELEMENT -->
            <router-link to="/statistics" class="inline-flex space-x-1 xl:space-x-2 hover:bg-zinc-800 rounded-xl p-1 transition-colors hover:shadow-lg">
                <div>
                    <svg class="xl:w-6 xl:h-6 w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.3334 10H15.0001L12.5001 17.5L7.50008 2.5L5.00008 10H1.66675" stroke="#CBC5C5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </div>
                <div class="self-center">
                    <p class="hidden md:block menu-nav-font text-md xl:text-xl">Statistics</p>
                </div>
            </router-link>

        </div>

          
         <!-- <div class="order-first md:order-3 space-y-6 flex flex-row md:flex-col w-full ">

            
            <div class="self-center w-10/12 md:user-profile-bg rounded-xl flex flex-col xl:flex-row items-center xl:space-y-0 space-x-1 space-y-1 py-2 px-3">
                
                <div class="w-full xl:w-1/3 flex justify-start md:justify-center">
                    <img class=" w-8 h-8 md:w-10 md:h-10 " src="../assets/man.png" alt="Avatar icon">
                </div>
                <div class="w-full xl:w-2/3  flex-col space-y-2 md:flex hidden">
                    <p class="vietnam-font text-xs xl:text-sm font-bold text-white  tracking-wide text-center"> Mike Tenver </p>
                    <p class="vietnam-font text-xxs break-words user-email-font-color text-center"> Beginner</p>
                </div>
            </div>
            </div> -->

        <!-- SMALL ICONS SECTION -->
        <div class="md:order-last md:bg-submenu-color md:w-full flex space-x-3 justify-around md:justify-evenly  md:rounded-t-2xl md:py-3 md:px-4">
                <!-- DARK MODE ICON -->
                <svg class="w-8 h-8   hover:stroke-hover stroke-1/5 stroke-color-gray hover:stroke-2 hover:bg-gray-400 p-1.5 rounded-md transition-colors cursor-pointer"  viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 10.8108C18.8424 12.5166 18.2022 14.1423 17.1543 15.4975C16.1065 16.8528 14.6944 17.8816 13.0832 18.4636C11.4719 19.0456 9.72832 19.1566 8.05629 18.7838C6.38426 18.411 4.85298 17.5697 3.64164 16.3584C2.43031 15.147 1.589 13.6157 1.21618 11.9437C0.843359 10.2717 0.954435 8.52805 1.53641 6.91685C2.11839 5.30564 3.1472 3.8935 4.50246 2.84567C5.85772 1.79783 7.48337 1.15764 9.18919 1C8.19048 2.35113 7.7099 4.01585 7.83485 5.69137C7.95979 7.36689 8.68197 8.94191 9.87003 10.13C11.0581 11.318 12.6331 12.0402 14.3086 12.1652C15.9842 12.2901 17.6489 11.8095 19 10.8108V10.8108Z" stroke="" stroke-width="" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <!-- SETTINGS ICON -->
                <svg class="w-8 h-8hover:stroke-hover stroke-1/5 stroke-color-gray hover:stroke-2 hover:bg-gray-400 p-1.5 rounded-md transition-colors cursor-pointer"  viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_28_47)">
                        <path d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z" stroke="" stroke-width="" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.55 11.25C14.4502 11.4762 14.4204 11.7271 14.4645 11.9704C14.5086 12.2137 14.6246 12.4382 14.7975 12.615L14.8425 12.66C14.982 12.7993 15.0926 12.9647 15.1681 13.1468C15.2436 13.3289 15.2824 13.5241 15.2824 13.7213C15.2824 13.9184 15.2436 14.1136 15.1681 14.2957C15.0926 14.4778 14.982 14.6432 14.8425 14.7825C14.7032 14.922 14.5378 15.0326 14.3557 15.1081C14.1736 15.1836 13.9784 15.2224 13.7812 15.2224C13.5841 15.2224 13.3889 15.1836 13.2068 15.1081C13.0247 15.0326 12.8593 14.922 12.72 14.7825L12.675 14.7375C12.4982 14.5646 12.2737 14.4486 12.0304 14.4045C11.7871 14.3604 11.5362 14.3902 11.31 14.49C11.0882 14.5851 10.899 14.7429 10.7657 14.9442C10.6325 15.1454 10.561 15.3812 10.56 15.6225V15.75C10.56 16.1478 10.402 16.5294 10.1207 16.8107C9.83936 17.092 9.45782 17.25 9.06 17.25C8.66218 17.25 8.28064 17.092 7.99934 16.8107C7.71804 16.5294 7.56 16.1478 7.56 15.75V15.6825C7.55419 15.4343 7.47384 15.1935 7.32938 14.9915C7.18493 14.7896 6.98305 14.6357 6.75 14.55C6.52379 14.4502 6.27286 14.4204 6.02956 14.4645C5.78626 14.5086 5.56176 14.6246 5.385 14.7975L5.34 14.8425C5.20069 14.982 5.03526 15.0926 4.85316 15.1681C4.67106 15.2436 4.47587 15.2824 4.27875 15.2824C4.08163 15.2824 3.88644 15.2436 3.70434 15.1681C3.52224 15.0926 3.35681 14.982 3.2175 14.8425C3.07804 14.7032 2.9674 14.5378 2.89191 14.3557C2.81642 14.1736 2.77757 13.9784 2.77757 13.7812C2.77757 13.5841 2.81642 13.3889 2.89191 13.2068C2.9674 13.0247 3.07804 12.8593 3.2175 12.72L3.2625 12.675C3.4354 12.4982 3.55139 12.2737 3.5955 12.0304C3.63962 11.7871 3.60984 11.5362 3.51 11.31C3.41493 11.0882 3.25707 10.899 3.05585 10.7657C2.85463 10.6325 2.61884 10.561 2.3775 10.56H2.25C1.85218 10.56 1.47064 10.402 1.18934 10.1207C0.908035 9.83936 0.75 9.45782 0.75 9.06C0.75 8.66218 0.908035 8.28064 1.18934 7.99934C1.47064 7.71804 1.85218 7.56 2.25 7.56H2.3175C2.56575 7.55419 2.8065 7.47384 3.00847 7.32938C3.21045 7.18493 3.36429 6.98305 3.45 6.75C3.54984 6.52379 3.57962 6.27286 3.5355 6.02956C3.49139 5.78626 3.3754 5.56176 3.2025 5.385L3.1575 5.34C3.01804 5.20069 2.9074 5.03526 2.83191 4.85316C2.75642 4.67106 2.71757 4.47587 2.71757 4.27875C2.71757 4.08163 2.75642 3.88644 2.83191 3.70434C2.9074 3.52224 3.01804 3.35681 3.1575 3.2175C3.29681 3.07804 3.46224 2.9674 3.64434 2.89191C3.82644 2.81642 4.02163 2.77757 4.21875 2.77757C4.41587 2.77757 4.61106 2.81642 4.79316 2.89191C4.97526 2.9674 5.14069 3.07804 5.28 3.2175L5.325 3.2625C5.50176 3.4354 5.72626 3.55139 5.96956 3.5955C6.21285 3.63962 6.46379 3.60984 6.69 3.51H6.75C6.97183 3.41493 7.16101 3.25707 7.29427 3.05585C7.42753 2.85463 7.49904 2.61884 7.5 2.3775V2.25C7.5 1.85218 7.65804 1.47064 7.93934 1.18934C8.22064 0.908035 8.60218 0.75 9 0.75C9.39782 0.75 9.77936 0.908035 10.0607 1.18934C10.342 1.47064 10.5 1.85218 10.5 2.25V2.3175C10.501 2.55884 10.5725 2.79463 10.7057 2.99585C10.839 3.19707 11.0282 3.35493 11.25 3.45C11.4762 3.54984 11.7271 3.57962 11.9704 3.5355C12.2137 3.49139 12.4382 3.3754 12.615 3.2025L12.66 3.1575C12.7993 3.01804 12.9647 2.9074 13.1468 2.83191C13.3289 2.75642 13.5241 2.71757 13.7213 2.71757C13.9184 2.71757 14.1136 2.75642 14.2957 2.83191C14.4778 2.9074 14.6432 3.01804 14.7825 3.1575C14.922 3.29681 15.0326 3.46224 15.1081 3.64434C15.1836 3.82644 15.2224 4.02163 15.2224 4.21875C15.2224 4.41587 15.1836 4.61106 15.1081 4.79316C15.0326 4.97526 14.922 5.14069 14.7825 5.28L14.7375 5.325C14.5646 5.50176 14.4486 5.72626 14.4045 5.96956C14.3604 6.21285 14.3902 6.46379 14.49 6.69V6.75C14.5851 6.97183 14.7429 7.16101 14.9442 7.29427C15.1454 7.42753 15.3812 7.49904 15.6225 7.5H15.75C16.1478 7.5 16.5294 7.65804 16.8107 7.93934C17.092 8.22064 17.25 8.60218 17.25 9C17.25 9.39782 17.092 9.77936 16.8107 10.0607C16.5294 10.342 16.1478 10.5 15.75 10.5H15.6825C15.4412 10.501 15.2054 10.5725 15.0042 10.7057C14.8029 10.839 14.6451 11.0282 14.55 11.25V11.25Z" stroke="" stroke-width="" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_28_47">
                            <rect width="18" height="18" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>

                <!-- LOGOUT ICON -->
                <svg @click="logOut" class="w-8 h-8 hover:stroke-hover stroke-1/5 stroke-color-gray hover:stroke-2 hover:bg-gray-400 p-1.5 rounded-md transition-colors cursor-pointer"  viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.75 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H6.75" stroke="" stroke-width="" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 12.75L15.75 9L12 5.25" stroke="" stroke-width="" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.75 9H6.75" stroke="" stroke-width="" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>

    </div>
</template>

<script>
//import { ref, watch  } from 'vue'
import UserCrud from '../modules/UserCrud'

export default {

    setup(){

        const { logOut } = UserCrud()

        return {
            logOut
        }
    }

    
}
</script>

<style>

</style>