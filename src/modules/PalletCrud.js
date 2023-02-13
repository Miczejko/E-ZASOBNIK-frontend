import { useRoute, useRouter  } from 'vue-router'
import { ref, computed  } from 'vue'
import { useToast } from "vue-toastification";
import axios from 'axios'

const getPallets = () => {

    const route = useRoute();
    const router = useRouter();
    const toast = useToast();

    //zmienna ta łapie id  z parametrow routa
    const todoId = computed(() => route.params.id)

    // tymczasowy obiekt state 
    const state = ref({
        subject: '',
        status: '',
        buy_date: '',
        sold_date: '',
        value: 0,
        pallets: []
    })   


    // const palletInfo = ref({})

    const GetAllPallets = async () => {
        try
        {
            const palletsResponse = await axios.get("https://e-zasobniktest-api.onrender.com/pallets/" + localStorage.getItem('auth'))
            state.value.pallets = palletsResponse.data
        }
        catch(error)
        {
            console.log(error)
        }
    }

    const GetAllPalletsData = async () => {
        try
        {
            const promise = axios.get("https://e-zasobniktest-api.onrender.com/pallets/" + localStorage.getItem('auth'))
            const dataPromise = promise.then((response) => response.data)
            return dataPromise
        }
        catch(error)
        {
            console.log(error)
        }
    }

    const palletsDetail = (id) => {
        router.push(`/pallets/items/${id}`)
    }

    const addNewPallet = (pallet) => {
        try{
            pallet.value = -1 * pallet.value;
            axios.post("https://e-zasobniktest-api.onrender.com/pallets/new", pallet)
                .then((res) => {
                    state.value.pallets.push(res.data)
                })
        }catch(e){
            console.log(e)
        }
    }

    const deletePallet = (id) => {
        console.log(id)
        try{
            axios.delete(`https://e-zasobniktest-api.onrender.com/pallets/delete/${id}`)
                .then((res) => {
                    const deletedPallet = res.data

                    const index = state.value.pallets.findIndex(pallet => {
                        return pallet._id === deletedPallet._id
                    })

                    delete state.value.pallets[index]
                })
        }catch(e){
            console.log(e)
        }
    }

    const updatePallet = (id, body) => {
        try{
            axios.put(`https://e-zasobniktest-api.onrender.com/pallets/update/${id}`, body)
            .then((res) => {
                console.log("res->",res)
                const updatedPallet = res.data
                
                const index = state.value.pallets.findIndex(pallet => {
                    return pallet._id === updatedPallet._id
                })

                state.value.pallets[index] = updatedPallet

                toast.info(`${updatedPallet.subject} has been updated`, {
                    draggable: true,
                    draggablePercent: 0.6,
                })
            })
        } catch(e){
            console.log(e)
        }
    }

    

    


    return {
        GetAllPallets,
        GetAllPalletsData,
        state,
        todoId,
        palletsDetail,
        addNewPallet,
        deletePallet,
        updatePallet
    }
}


export default getPallets  