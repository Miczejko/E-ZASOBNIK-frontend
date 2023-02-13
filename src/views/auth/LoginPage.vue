<template>
    <div>
        <div class="flex flex-col space-y-6 bg-gray-800 rounded-md shadow-md p-5">
            <p class="text-center text-white font-semibold text-2xl pb-5">USER LOGIN</p>
            <input class="py-2 px-3 rounded-xl" type="text" v-model="state.newLogin" placeholder="Login">
            <input class="py-2 px-3 rounded-xl" type="password" v-model="state.newPassword" placeholder="Haslo">

            <button class="bg-green-600 py-1 px-2 w-1/2 self-center rounded-lg text-white font-semibold hover:bg-green-800 transition-colors" @click="logIn()">
                SIGN IN
            </button>
        </div>
    </div>
</template>

<script>
import UserCrud from '../../modules/UserCrud'

export default {
    setup() {
        const { logIn, state } = UserCrud()

        

        return { logIn, state }
    }
}
</script>