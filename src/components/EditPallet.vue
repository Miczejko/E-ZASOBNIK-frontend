<template>
    <div class="absolute bg-white w-full h-full rounded-xl flex flex-col p-6 space-y-4">
        <div class="flex flex-col space-y-1">
            <label class="text-sm text-blue-800 font-semibold">Subject:</label>
            <input type="text" 
                v-model="pallet.subject" 
                class="w-1/2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " placeholder="New subject...">
        </div>

        <div class="flex flex-col space-y-1">
            <label class="text-sm text-blue-800 font-semibold">Buy Date:</label>
            <input type="date" 
                v-model="pallet.buy_date" 
                class="w-1/2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "   >
        </div>
        

        <div class="flex flex-col space-y-1">
            <label class="text-sm text-blue-800 font-semibold">Sold Date:</label>
            <input type="date" 
                v-model="pallet.sold_date" 
                class="w-1/2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "   >
        </div>

        <button @click="$emit('updatePallet', palletInfo._id, pallet)" class="right-6 bottom-6  absolute bg-amber-400 w-1/4 self-start rounded-md py-2 px-4 font-semibold text-white ">
            SAVE
        </button>

    </div>
</template>

<script>
import { computed } from 'vue'

export default {
    props:{
        palletInfo: Object
    },
    setup(props){

        const pallet = computed({
            get: () => props.palletInfo,
        })
        

        return {
            pallet
        }
    }
}

</script>