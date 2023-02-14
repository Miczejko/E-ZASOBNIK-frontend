<template>
    <div class="w-full h-screen flex justify-center items-center flex flex-col space-y-24">
        <h2 class="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Welcome to <b>E-ZASOBNIK</b></h2>
        <div class="flex w-1/2">
            <div class="flex flex-col space-y-6 items-center  py-5">
                <img class="w-36 h-36"  src="../assets/pallete.png" alt="Pallet Car">
                <p class="text-center w-3/4 text-white/50 font-semibold p-5 bg-indigo-200/25 border-l-8 border-solid border-indigo-400 rounded-r-xl">
                    You can manage your pallets with dynamic tables and more many stuff!
                </p>
            </div>

            <div class="flex flex-col space-y-6  items-center py-5">
                <img class="w-36 h-36"  src="../assets/cubes.png" alt="Pallet Car">
                <p class="text-center w-3/4 text-white/50 font-semibold p-5 bg-indigo-200/25 border-l-8 border-solid border-indigo-400 rounded-r-xl">
                    You can add your items or products to pallets and manage them with many cool functions!
                </p>
            </div>

            <div class="flex flex-col space-y-6  items-center py-5">
                <img class="w-36 h-36"  src="../assets/analysis.png" alt="Pallet Car">
                <p class="text-center w-3/4 text-white/50 font-semibold p-5 bg-indigo-200/25 border-l-8 border-solid border-indigo-400 rounded-r-xl">
                    You can track your solds and many more with statistics page!
                </p>
            </div>
        </div>

        <div class="flex flex-col space-y-4">
            <button @click="moveToLogin()" class="bg-gradient-to-tl from-sky-900 via-fuchsia-800 to-indigo-700 py-2 px-5  text-lg rounded-lg text-white font-semibold hover:from-sky-800 hover:via-fuchsia-900 hover:to-indigo-800 transition-colors">
                EXPLORE
            </button>

            <p @click="moveToRegister()" class="text-indigo-800 italic text-center cursor-pointer hover:text-blue-600 transition-colors">
                Create account
            </p>
        </div>


        <stripe-checkout
                ref="checkoutRef"
                mode="payment"
                :pk="publishableKey"
                :line-items="lineItems"
                :success-url="successURL"
                :cancel-url="cancelURL"
                @loading="v => loading = v"
            />
            <button @click="buy">Buy</button>


    </div>
</template>

<script>
import UserCrud from '../modules/UserCrud'
import { StripeCheckout } from '@vue-stripe/vue-stripe';

 export default {
    components: {
    StripeCheckout,
  },
  data () {
    this.publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;
    return {
      loading: false,
      lineItems: [
        {
          price: 'price_1KcsXSKHnal6LCTQrjTgxg4o', // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: 'https://e-zasobniktest.onrender.com/',
      cancelURL: 'https://e-zasobniktest.onrender.com/',
    };
  },
  methods: {
    buy () {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
    setup() {

        const { moveToLogin, moveToRegister } = UserCrud()

        return {
            moveToLogin,
            moveToRegister
        }
    }
 }
</script>