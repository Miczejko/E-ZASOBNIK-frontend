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
            await axios.get(`http://localhost:3000/items/${route.params.id}`)
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
        
        await axios.get(`http://localhost:3000/pallets/get/${id}`)
            .then((res) => {
                state.pallet = res.data
            })
        
    }

    const addItem = async (item) => {
        await axios.post(`http://localhost:3000/items/new/`, item)
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
        await axios.put(`http://localhost:3000/items/update/${id}`, item)
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
        await axios.get(`http://localhost:3000/items/get/${id}`)
            .then((res) => {
                const item = res.data
                state.name = item.name
                state.color = item.color
                state.price = item.price
                state.material = item.material
                state.palletId = item.palletId
            })
        
    }

    const deleteItem = async (id) => {
        try{
            axios.delete(`http://localhost:3000/items/delete/${id}`)
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
        addItem
    }
}

export default getItems