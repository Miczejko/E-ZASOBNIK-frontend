//import { useRoute  } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useToast } from "vue-toastification";

const Users = () => {

    //const route = useRoute();
    const router = useRouter();
    const toast = useToast()

    // tymczasowy obiekt state 
    const state = ref({
        newLogin: '',
        newPassword: '',
        newName: '',
        newProfPic: '',
        newRank: 0,
        users: {}
    })   

    const authToken = ref(localStorage)

    const newUser = () => {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            url: "https://e-zasobniktest-api.onrender.com/user/register",
            data: {
                login: state.value.newLogin,
                password: state.value.newPassword,
                name: state.value.newName,
                profPic: state.value.newProfPic,
                rank: 0,
            }
        }

        try{
            axios(requestOptions)
                .then(res => {
                    authToken.value.setItem('auth', res.data._id)
                })
                .finally(() => {
                    router.push("/pallets")
                    toast.success("You have been registered successfully!", {
                        draggable: true,
                        draggablePercent: 0.6,
                    })
                })
        } catch(err){
            console.log(err)
        }
    }

    const logIn = () => {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            url: "https://e-zasobniktest-api.onrender.com/user/login",
            data: {
                login: state.value.newLogin,
                password: state.value.newPassword,
                name: "",
                profPic: "",
                rank: 0,
            }
        }

        try{
            axios(requestOptions)
                .then(res => {
                    authToken.value.setItem('auth', res.data._id)
                })
                .finally(() => {
                    router.push("/pallets")
                    toast.success("You have been logged successfully!", {
                        draggable: true,
                        draggablePercent: 0.6,
                    })
                })

            
        } catch(err){
            console.log(err)
        }
    }

    const logOut = () => {
        localStorage.clear()
        router.push({ path: "/" })
        toast.info("You have been logged out")
    }

    const CheckIfLoggedIn = () => {
        
    }


    return {
        newUser,
        logIn, 
        state,
        CheckIfLoggedIn,
        authToken,
        logOut
    }
}


export default Users