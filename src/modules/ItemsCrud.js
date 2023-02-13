import { reactive } from 'vue'
import { useRoute,  } from 'vue-router'
import { useToast } from "vue-toastification";
import axios from 'axios'

const getItems = () => {

    const route = useRoute();
    const toast = useToast()
    //const router = useRouter();

    // tymczasowy obiekt state 
    const state = reactive({
        name: '',
        color: '',
        price: '',
        material: '',
        state: 0,
        palletId: '',
        pallet: {},
        items: []
    })  


    const getAllItems = async () => {
        try
        {
            await axios.get(`https://e-zasobniktest-api.onrender.com/items/${route.params.id}`)
                .then((res) => {
                    state.items = res.data
                })
        }
        catch(error)
        {
          console.log("error from ItemsCrud.js", error) 
        }
    }

    const getSpecificPallet = async (id) => {
        
        await axios.get(`https://e-zasobniktest-api.onrender.com/pallets/get/${id}`)
            .then((res) => {
                state.pallet = res.data
            })
        
    }

    const addItem = async (item) => {
        await axios.post(`https://e-zasobniktest-api.onrender.com/items/new/`, item)
            .then((res) => {
                const newItem = res.data
                console.log("newitem -> ", newItem)
                state.items.push(newItem)
            }).finally(() => {
                toast.info(`New item has been added`, {
                    draggable: true,
                    draggablePercent: 0.6,
                })
            })
    }

    const editItem = async (id, item) => {
        console.log("item",item)
        await axios.put(`https://e-zasobniktest-api.onrender.com/items/update/${id}`, item)
            .then((res) => {
                const updatedItem = res.data
                console.log(updatedItem)
                const index = state.items.findIndex(item => {
                    return item._id === updatedItem._id
                })

                state.items[index] = updatedItem
            })
    }

    const getItem = async (id) => {
        await axios.get(`https://e-zasobniktest-api.onrender.com/items/get/${id}`)
            .then((res) => {
                const item = res.data
                console.log("item", item)
                state.name = item.name
                state.color = item.color
                state.price = item.price
                state.material = item.material
                state.palletId = item.palletId
            })
        
    }

    const markAsSold = async (id) => {
        await axios.put(`https://e-zasobniktest-api.onrender.com/items/update/${id}`, { state: 'SOLD'})
            .then((res) => {
                const updatedItem = res.data
                console.log(updatedItem)
                const index = state.items.findIndex(item => {
                    return item._id === updatedItem._id
                })

                state.items[index] = updatedItem
        })
    }

    const markAsActive = async (id) => {
        await axios.put(`https://e-zasobniktest-api.onrender.com/items/update/${id}`, { state: 'ACTIVE'})
            .then((res) => {
                const updatedItem = res.data
                console.log(updatedItem)
                const index = state.items.findIndex(item => {
                    return item._id === updatedItem._id
                })

                state.items[index] = updatedItem
        })
    }

    const deleteItem = async (id) => {
        try{
            axios.delete(`https://e-zasobniktest-api.onrender.com/items/delete/${id}`)
                .then((res) => {
                    const deletedItem = res.data

                    const index = state.items.findIndex(item => {
                        return item._id === deletedItem._id
                    })

                    delete state.items[index]
                })
        }catch(e){
            console.log(e)
        }
    }

    

    return {
        state,
        getAllItems,
        getSpecificPallet,
        editItem,
        deleteItem,
        getItem,
        addItem,
        markAsSold,
        markAsActive
    }
}

export default getItems