<template>
     <div class="absolute bg-white w-full h-full rounded-xl flex flex-col p-6 space-y-4">
        <div class="inline-flex justify-start space-x-6 w-full ">
            <div class="flex flex-col space-y-1">
                <label class="text-sm text-blue-800 font-semibold">Name:</label>
                <input type="text" 
                    v-model="state.name" 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " placeholder="New item name...">
            </div>

            <div class="flex flex-col space-y-1">
                <label class="text-sm text-blue-800 font-semibold">Color:</label>
                <input type="color" 
                    v-model="state.color" 
                    class="shadow appearance-none border rounded w-full h-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "   >
            </div>

            <div class="flex flex-col space-y-1">
                <label class="text-sm text-blue-800 font-semibold">Price:</label>
                <input type="number" 
                    v-model="state.price" 
                    class="shadow appearance-none border rounded w-1/2 h-full px-2 py-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "   >
            </div>
        </div>
        

        {{item}}

        <div class="flex flex-col space-y-1">
            <label class="text-sm text-blue-800 font-semibold">Material:</label>
            <input type="text" 
                v-model="state.material" 
                class="w-1/2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "   >
        </div>

        <button @click="$emit('editItem', id, {
            name: state.name,
            color: state.color,
            price: state.price,
            material: state.material,
            palletId: state.palletId
        })" class="  bg-blue-400 w-1/4 self-start absolute bottom-6 rounded-md py-2 px-4 font-semibold text-white ">
            ADD
        </button>

    </div>
</template>

<script>
import { computed, onMounted, onUpdated } from 'vue'
import ItemsCrud from '@/modules/ItemsCrud'

export default {
    props: {
        itemId: String
    },
    setup(props) {
        const { getItem, state } = ItemsCrud()

        const id = computed({
            get: () => props.itemId,
        })

        onMounted(() => {
            getItem(id.value)
        })

        onUpdated(() => {
            console.log(id.value)
        })

        return {
            state, id
        }
    }
}
</script>