<template>
    <div class="absolute bg-white w-full h-full rounded-xl flex flex-col p-6 space-y-4">
        <div class="inline-flex justify-start space-x-6 w-full ">
            <div class="flex flex-col space-y-1">
                <label class="text-sm text-blue-800 font-semibold">Name:</label>
                <input type="text" 
                    v-model="item.name" 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " placeholder="New item name...">
            </div>

            <div class="flex flex-col space-y-1">
                <label class="text-sm text-blue-800 font-semibold">Color:</label>
                <input type="color" 
                    v-model="item.color" 
                    class="shadow appearance-none border rounded w-full h-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "   >
            </div>

            <div class="flex flex-col space-y-1">
                <label class="text-sm text-blue-800 font-semibold">Price:</label>
                <input type="number" 
                    v-model="item.price" 
                    class="shadow appearance-none border rounded w-1/2 h-full px-2 py-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "   >
            </div>
        </div>
        

        

        <div class="flex flex-col space-y-1">
            <label class="text-sm text-blue-800 font-semibold">Material:</label>
            <input type="text" 
                v-model="item.material" 
                class="w-1/2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "   >
        </div>

        <button @click="$emit('addItem', item)" class="  bg-blue-400 w-1/4 self-start absolute bottom-6 rounded-md py-2 px-4 font-semibold text-white ">
            ADD
        </button>

    </div>
</template>

<script>
import { reactive, computed } from 'vue'
export default {
    props: {
        palletId: String
    },
    setup(props){

        const item = reactive({
            name: "",
            color: "",
            price: "",
            material: "",
            state: "UNACTIVE",
            palletId: computed({ 
                get: () => props.palletId
            }),
        })

        return {
            item
        }
    }
}

</script>