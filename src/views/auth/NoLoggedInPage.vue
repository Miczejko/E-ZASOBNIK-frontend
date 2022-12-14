<template>
    <div class="w-full h-full bg-gradient-to-bl from-gray-700 via-gray-900 to-black flex justify-center items-center">
        
        <div class="bg-opacity rounded-xl  w-1/2 h-1/2 xl:w-1/4  shadow-4xl flex flex-col items-center justify-center space-y-5">
            <div>
                <img class="w-32 h-32" src="../../assets/padlock.png" alt="">
            </div>

            <div>
                <p class="text-md md:text-2xl font-bold text-white/75">
                    You are not logged in
                </p>
            </div>

            <div class="inline-flex space-x-4">
                <!-- LOGIN BUTTON -->
                <button class="w-1/2 bg-blue-400 hover:bg-blue-600 transition-colors text-white px-3 py-2 rounded-md font-semibold">
                    <router-link to="/user/login">
                        Login
                    </router-link>
                </button>

                <!-- REGISTER BUTTON -->
                <button class="w-1/2 bg-green-400 hover:bg-green-600 transition-colors text-white px-3 py-2 rounded-md font-semibold">
                    <router-link to="/user/register">
                        Register
                    </router-link>
                </button>
                
            </div>
            
        </div>

    </div>
</template>