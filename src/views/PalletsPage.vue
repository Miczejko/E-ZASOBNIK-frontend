<template>
    <div class="container flex flex-col justify-between items-center h-full space-y-12 py-12">
        {{ v$.$errors }}
        <div class="flex flex-col justify-center bg-white  rounded-xl shadow-xl">
            <div class="bg-amber-400 rounded-t-xl py-2">
                <p class="text-center th-font text-rose-600 font-bolder">
                    ADD NEW PALLET
                </p>
            </div>
            <div class="p-5 space-y-5 flex flex-col justify-center">
                <div class="flex flex-col space-y-2 " >
                    <p class="font-semibold">Subject of pallet:</p>
                    <input v-model="newPallet.subject" placeholder="Subject..." class="bg-neutral-200 rounded-md py-2 px-1" type="text">

                    <span v-if="v$.subject.$error"> {{ v$.subject.$errors[0].$message }} </span>
                    <!-- ERROR -->
                    <!-- <div class="bg-blue-100" v-for="error of v$.firstName.$errors" :key="error.$uid">
                        <div class="text-red-200">{{ error.$message }}</div>
                    </div> -->

                </div>

                <div class="flex flex-col space-y-2 ">
                    <p class="font-semibold">Buy date:</p>
                    <input v-model="newPallet.buy_date" class="bg-neutral-200 rounded-md py-2 px-1" type="date">                
                </div>

                <div class="flex flex-col space-y-2 ">
                    <p class="font-semibold">Value:</p>
                    <input v-model="newPallet.value" placeholder="Value of pallet..." class="bg-neutral-200 rounded-md py-2 px-1" type="number">                
                </div>

                <button @click="addNewPallet(newPallet)"  class="cursor-pointer w-1/2 bg-amber-300 py-2 px-1 text-center font-semibold text-white rounded-xl shadow-xl self-center hover:bg-amber-500 transition-colors">
                    ADD
                </button>
            </div>
        </div>

        

        <div class="flex flex-col w-3/4 space-y-2">
            <div class="flex justify-between w-full bg-white/25 px-1 py-2 rounded-xl items-center">
                <div class="inline-flex space-x-3 ">
                    <p>Sort by: </p>
                    {{sort}}
                    <select @change="sort" class="rounded-md">
                        <option value="">Subject</option>
                        <option value="">Buy Date</option>
                        <option value="">Sold Date</option>
                        <option value="">Value</option>
                    </select>
                </div>

                <div class="w-1/2  rounded-md">
                    <input  
                    placeholder="Search your pallet there..."
                    v-model="querySearch"
                    type="text" 
                    class="w-full rounded-md p-2 focus:outline-none">
                </div>

                <div class="inline-flex space-x-1">
                    <div>
                        <svg class="w-6 h-6 fill-gray-800 hover:fill-gray-900 transition-colors cursor-pointer" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M38.9531 18.5725L34.4029 4.34429C34.3733 4.24908 34.3139 4.16592 34.2334 4.10713C34.1529 4.04833 34.0556 4.01702 33.9559 4.01784H30.0686C29.8627 4.01784 29.6869 4.14842 29.6216 4.34429L25.0362 18.5725C25.0212 18.6177 25.0111 18.668 25.0111 18.7182C25.0111 18.9743 25.2221 19.1852 25.4782 19.1852H28.3108C28.5217 19.1852 28.7025 19.0446 28.7628 18.8437L29.6417 15.75H34.1116L34.9804 18.8387C35.0357 19.0396 35.2215 19.1802 35.4324 19.1802H38.5061C38.5563 19.1802 38.6015 19.1752 38.6467 19.1601C38.7673 19.12 38.8627 19.0396 38.923 18.9291C38.9782 18.8186 38.9883 18.6931 38.9531 18.5725ZM30.0987 13.1334L31.7461 7.26226H32.0625L33.6746 13.1334H30.0987ZM37.3058 37.8884H30.7968V37.8683L37.4564 28.3811C37.5117 28.3008 37.5418 28.2104 37.5418 28.1099V26.2818C37.5418 26.0257 37.3309 25.8147 37.0747 25.8147H26.8292C26.5731 25.8147 26.3621 26.0257 26.3621 26.2818V28.4414C26.3621 28.6975 26.5731 28.9085 26.8292 28.9085H32.9866V28.9286L26.3019 38.4157C26.2461 38.4951 26.2162 38.5899 26.2165 38.6869V40.515C26.2165 40.7712 26.4274 40.9821 26.6836 40.9821H37.3008C37.5569 40.9821 37.7678 40.7712 37.7678 40.515V38.3554C37.7685 38.2944 37.757 38.2337 37.7341 38.1771C37.7112 38.1204 37.6773 38.0689 37.6343 38.0255C37.5913 37.982 37.5402 37.9476 37.4838 37.924C37.4274 37.9005 37.3669 37.8884 37.3058 37.8884ZM17.6785 32.0424H13.8616V5.42409C13.8616 5.20311 13.6808 5.0223 13.4598 5.0223H10.6473C10.4263 5.0223 10.2455 5.20311 10.2455 5.42409V32.0424H6.42854C6.09205 32.0424 5.9012 32.4341 6.11214 32.6953L11.7371 39.822C11.7747 39.87 11.8227 39.9088 11.8776 39.9355C11.9324 39.9622 11.9926 39.9761 12.0535 39.9761C12.1145 39.9761 12.1747 39.9622 12.2295 39.9355C12.2843 39.9088 12.3324 39.87 12.3699 39.822L17.9949 32.6953C18.2009 32.4341 18.015 32.0424 17.6785 32.0424Z"/>
                        </svg>
                    </div>

                    <div>
                        <svg class="w-6 h-6 fill-gray-800 hover:fill-gray-900 transition-colors cursor-pointer" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M38.9531 18.5725L34.4029 4.34429C34.3733 4.24908 34.3139 4.16592 34.2334 4.10713C34.1529 4.04833 34.0556 4.01702 33.9559 4.01784H30.0686C29.8627 4.01784 29.6869 4.14842 29.6216 4.34429L25.0362 18.5725C25.0212 18.6177 25.0111 18.668 25.0111 18.7182C25.0111 18.9743 25.2221 19.1852 25.4782 19.1852H28.3108C28.5217 19.1852 28.7025 19.0446 28.7628 18.8437L29.6417 15.75H34.1116L34.9804 18.8387C35.0357 19.0396 35.2215 19.1802 35.4324 19.1802H38.5061C38.5563 19.1802 38.6015 19.1752 38.6467 19.1601C38.7673 19.12 38.8627 19.0396 38.923 18.9291C38.9782 18.8186 38.9883 18.6931 38.9531 18.5725ZM30.0987 13.1334L31.7461 7.26226H32.0625L33.6746 13.1334H30.0987ZM37.3058 37.8884H30.7968V37.8683L37.4564 28.3811C37.5117 28.3008 37.5418 28.2104 37.5418 28.1099V26.2818C37.5418 26.0257 37.3309 25.8147 37.0747 25.8147H26.8292C26.5731 25.8147 26.3621 26.0257 26.3621 26.2818V28.4414C26.3621 28.6975 26.5731 28.9085 26.8292 28.9085H32.9866V28.9286L26.3019 38.4157C26.2461 38.4951 26.2162 38.5899 26.2165 38.6869V40.515C26.2165 40.7712 26.4274 40.9821 26.6836 40.9821H37.3008C37.5569 40.9821 37.7678 40.7712 37.7678 40.515V38.3554C37.7685 38.2944 37.757 38.2337 37.7341 38.1771C37.7112 38.1204 37.6773 38.0689 37.6343 38.0255C37.5913 37.982 37.5402 37.9476 37.4838 37.924C37.4274 37.9005 37.3669 37.8884 37.3058 37.8884ZM12.3699 5.17799C12.3324 5.12997 12.2843 5.09113 12.2295 5.06443C12.1747 5.03772 12.1145 5.02383 12.0535 5.02383C11.9926 5.02383 11.9324 5.03772 11.8776 5.06443C11.8227 5.09113 11.7747 5.12997 11.7371 5.17799L6.11214 12.3047C5.9012 12.5709 6.09205 12.9576 6.42854 12.9576H10.2455V39.5759C10.2455 39.7969 10.4263 39.9777 10.6473 39.9777H13.4598C13.6808 39.9777 13.8616 39.7969 13.8616 39.5759V12.9576H17.6785C18.015 12.9576 18.2059 12.5658 17.9949 12.3047L12.3699 5.17799Z" />
                        </svg>
                    </div>
                </div>
            </div>

            

            <!-- TABLE -->
            <table class="w-full" v-if="filteredPallets.length > 0">
                <thead>
                    <tr class="bg-slate-700">
                        <th class="rounded-tl-xl">#</th>
                        <th>ID</th>
                        <th>SUBJECT</th>
                        <th>STATUS</th>
                        <th>BUY DATE</th>
                        <th>SOLD DATE</th>
                        <th>VALUE</th>
                        <th class="rounded-tr-xl"></th>
                    </tr>
                </thead>

                <tbody>
                    <!-- Pojedynczy wiersz tabelki o unikalnym ID palety -->
                    <tr v-for="pallet in filteredPallets" :key="pallet._id" :id="pallet._id" 
                        @click="palletsDetail(pallet._id)"
                        @mouseenter="changeBackgroundOnHover(pallet._id, true)"
                        @mouseleave="changeBackgroundOnHover(pallet._id, false)"
                        class="cursor-pointer">

                        <td>
                            <img class="w-6 h-6 mx-auto" src="../assets/pallet.png" alt="Pallet icon">
                        </td>

                        <td> 
                            <i>
                                {{ shortIdVersion(pallet._id) }}
                            </i> 
                        </td>

                        <td class="text-start"> 
                            <span v-for="letter in pallet.subject" :key="letter" :class="{'text-green-700 font-semibold' : querySearch.includes(letter)}">
                                {{ letter }}
                            </span> 
                        </td>

                        <td> 
                            <div v-status:status=pallet.status class="w-1/2 mx-auto text-xs text-white bg-green-500 rounded-2xl shadow-lg px-2 py-1 text-center">
                                {{ pallet.status }}  
                            </div>  
                        </td>


                        <td class="text-center"> {{ pallet.buy_date }} </td>
                        <td class="text-center"> {{ pallet.sold_date }} </td>

                        <td class="text-center"> 
                            
                            <div class="inline-flex space-x-1 items-center">
                                <p :class="{'text-green-600' : pallet.value > 0, 'text-red-600' : pallet.value < 0}" >
                                    {{ pallet.value }} 
                                </p>

                                <!-- TRENDING DOWN -->
                                <div v-if="pallet.value < 0">
                                    <svg class="w-4 h-4 stroke-red-600" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_106_5)">
                                            <path d="M23.3933 18.6448L13.8933 9.14478L8.89331 14.1448L1.39331 6.64478"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M17.3933 18.6448H23.3933V12.6448"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_106_5">
                                            <rect width="24" height="24" fill="white" transform="translate(0.393311 0.644775)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>

                                <!-- TRENDING UP -->
                                <div v-if="pallet.value > 0">
                                    <svg class="w-4 h-4 stroke-green-600" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_106_2)">
                                            <path d="M23.3933 6.64478L13.8933 16.1448L8.89331 11.1448L1.39331 18.6448"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M17.3933 6.64478H23.3933V12.6448"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_106_2">
                                                <rect width="24" height="24" fill="white" transform="translate(0.393311 0.644775)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>

                        </td>


                        <td class="">
                            <div class="inline-flex space-x-1 ">
                                <button @click.stop="deletePallet(pallet._id)" class="hover:bg-gray-300 p-2 rounded-xl transition-all">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.89221 6.06604H5.89221H21.8922" stroke="red" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M19.8922 6.06604V20.066C19.8922 20.5965 19.6815 21.1052 19.3064 21.4803C18.9314 21.8553 18.4226 22.066 17.8922 22.066H7.89221C7.36178 22.066 6.85307 21.8553 6.478 21.4803C6.10293 21.1052 5.89221 20.5965 5.89221 20.066V6.06604M8.89221 6.06604V4.06604C8.89221 3.53561 9.10293 3.0269 9.478 2.65183C9.85307 2.27675 10.3618 2.06604 10.8922 2.06604H14.8922C15.4226 2.06604 15.9314 2.27675 16.3064 2.65183C16.6815 3.0269 16.8922 3.53561 16.8922 4.06604V6.06604" stroke="red" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M10.8922 11.066V17.066" stroke="red" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M14.8922 11.066V17.066" stroke="red" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>

                                <!-- <button class="hover:bg-gray-300 p-2 rounded-xl transition-colors ease-in-out">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_103_2)">
                                        <path d="M12.3933 1.64478V23.6448" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M17.3933 5.64478H9.89331C8.96505 5.64478 8.07481 6.01352 7.41844 6.6699C6.76206 7.32628 6.39331 8.21652 6.39331 9.14478C6.39331 10.073 6.76206 10.9633 7.41844 11.6196C8.07481 12.276 8.96505 12.6448 9.89331 12.6448H14.8933C15.8216 12.6448 16.7118 13.0135 17.3682 13.6699C18.0246 14.3263 18.3933 15.2165 18.3933 16.1448C18.3933 17.073 18.0246 17.9633 17.3682 18.6196C16.7118 19.276 15.8216 19.6448 14.8933 19.6448H6.39331" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_103_2">
                                        <rect width="24" height="24" fill="white" transform="translate(0.393311 0.644775)"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </button> -->
                            </div>
                        </td>


                    </tr>
                </tbody>
            </table>

            <NoResultsCase v-if="filteredPallets.length === 0"></NoResultsCase>
        </div>

        

        

        
    </div>
</template>

<script>
import { onMounted, onUpdated, ref, computed } from 'vue'
import PalletCrud from '@/modules/PalletCrud'
import NoResultsCase from '@/components/NoResultsCase'
import UserCrud from '@/modules/UserCrud'
import { useRouter } from 'vue-router'

// Vuelidate stuff imports
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'

export default {
    setup() {
        const { GetAllPallets, state, palletsDetail, addNewPallet, deletePallet } = PalletCrud();

        // token uzytkownika, reaktywny
        const { authToken } = UserCrud()

        const router = useRouter()

        const isHovered = ref(false)

        const querySearch = ref("")
        const sort = ref("")

        let newPallet = ref({
            subject: "",
            status: "IN SOLD",
            buy_date: null,
            sold_date: "...",
            value: 0,
            userId: ""
        })
        

        const filteredPallets = computed(() => {
            return state.value.pallets.filter(pallet => pallet.subject.toUpperCase().includes(querySearch.value.toUpperCase()))
        })

        const sortedPallets = () => {
            return state.value.pallets.sort((a, b) => a.subject.toLowerCase() > b.subject.toLowerCase() ? 1 : -1);
        }

        const rules = computed(() => {
            return {
                subject: { required, minLength: minLength(3) },
                buy_date: { required },
                value: { required },
            }
        })

        const v$ = useVuelidate(rules, newPallet)

        onMounted(() => {
            GetAllPallets()
        })


        // Hook ktory sprawdza czy token jest w localstorage i w zaleznosci od tego odpala dany komponent
        onUpdated(() => {
            if(authToken.value.getItem('auth') !== null){
                router.push({path: "/pallets"})
                //userId = localStorage.getItem('auth')
                newPallet.value.userId = String(localStorage.getItem('auth'))
                console.log(v$.value)
            }else{
                router.push({path: "/nologin"})
            }
        })

        const changeBackgroundOnHover = (id, cursor) => {
            const row = document.getElementById(id)
            const color = cursor ? "#e6faff" : "white"
            const fontWeight = cursor ? "bold" : "normal"

            Array.from(row.childNodes).forEach((node) => {
                    node.style.backgroundColor = color
                    node.style.fontWeight = fontWeight
            })
        }

        const shortIdVersion = (id) => {
            return id.slice(0, 6) + "..."
        }


        return { 
            GetAllPallets, 
            palletsDetail, 
            state, 
            shortIdVersion, 
            isHovered, 
            changeBackgroundOnHover, 
            newPallet, 
            querySearch,
            addNewPallet,
            deletePallet,
            filteredPallets,
            sortedPallets,
            sort,
            v$,
        }
    },
    components: {
        NoResultsCase
    }
}

</script>