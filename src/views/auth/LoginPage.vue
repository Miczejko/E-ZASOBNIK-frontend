<template>
    <div>
        <div class="flex flex-col space-y-4 ">
            <input class="py-2 px-3 rounded-xl" type="text" v-model="state.newLogin" placeholder="Login">
            <input class="py-2 px-3 rounded-xl" type="password" v-model="state.newPassword" placeholder="Haslo">

            <button @click="logIn()">
                Zaloguj
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