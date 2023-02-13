<template>
    <div class="container flex flex-col justify-between items-center h-full ">
        
        <div class="w-full h-1/2 flex justify-between pt-12">
            <div class="relative bg-white inline-flex space-x-2 items-center rounded-xl shadow-2xl w-1/4 h-1/2 px-4">

                <div class="w-12 h-12 bg-amber-400 absolute -right-0 top-0 rounded-tr-xl rounded-bl-xl flex justify-center items-center">
                    <button @click="action.name = 'edit Pallet';action.content = 'pallet'" class="hover:bg-gray-300 p-2 rounded-xl transition-all">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 4.5H4C3.46957 4.5 2.96086 4.71071 2.58579 5.08579C2.21071 5.46086 2 5.96957 2 6.5V20.5C2 21.0304 2.21071 21.5391 2.58579 21.9142C2.96086 22.2893 3.46957 22.5 4 22.5H18C18.5304 22.5 19.0391 22.2893 19.4142 21.9142C19.7893 21.5391 20 21.0304 20 20.5V13.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18.5 3C18.8978 2.60218 19.4374 2.37868 20 2.37868C20.5626 2.37868 21.1022 2.60218 21.5 3C21.8978 3.39783 22.1213 3.93739 22.1213 4.5C22.1213 5.06261 21.8978 5.60218 21.5 6L12 15.5L8 16.5L9 12.5L18.5 3Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>

                <div class="w-1/3">
                    <img src="../assets/pallet.png" alt="Pallet">
                </div>
                <div class="w-2/3 flex flex-col space-y-px ">
                    <p class="text-xs font-semibold italic">
                        {{ state.pallet._id }}
                    </p>

                    <p class="text-xl td-font">
                        {{state.pallet.subject}}
                    </p>

                    <p class="td-font" >
                        {{state.pallet.status}}
                    </p>

                    <p class="td-font">
                        {{state.pallet.buy_date}}
                    </p>

                    <p class="td-font">
                        {{state.pallet.sold_date}}
                    </p>

                    <p class="td-font">
                        {{state.pallet.value}}
                    </p>
                </div>
            </div>

            
            <div class="relative w-1/3 h-2/3 border-2 border-dashed border-gray-700 rounded-xl bg-gray-800/25">
                <p class="absolute -translate-y-full pb-2 text-2xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                    {{ $filters.nameOfWorkingSpace(action) }}
                </p>

                <EditItem v-if="action.name === 'edit Item'" 
                            :itemId="itemId"
                            @edit-item="editItem"
                          ></EditItem>

                <EditPallet v-if="action.name === 'edit Pallet'" 
                            :palletInfo="state.pallet"
                            @update-pallet="updatePallet"
                ></EditPallet>

                <NewItem v-if="action.name === 'new Item'"
                            :palletId="state.pallet._id"
                            @add-item="addItem"
                ></NewItem>

            </div>

            
        </div>

        

        <div :class="{'w-full ' : state.items.length > 0}" class="h-1/2 flex flex-col space-y-5 ">

            <div>
                <button @click="action.name = 'new Item';action.content = 'item'" 
                class="bg-blue-400 hover:bg-blue-500  transition-colors rounded-md shadow-2xl py-2 px-3 th-font text-xl text-white   ">
                    + ADD NEW ITEM 
                </button>
            </div>

            <div v-if="state.items.length > 0"  class="overflow-y-scroll">
                <!-- TABLE -->
                <table class="w-full">
                    <thead>
                        <tr class="bg-slate-700">
                            <th class="rounded-tl-xl">#</th>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>COLOR</th>
                            <th>PRICE</th>
                            <th>MATERIAL</th>
                            <th>STATE</th>
                            <th  class="rounded-tr-xl"></th>
                        </tr>
                    </thead>

                    <tbody>
                        <!-- Pojedynczy wiersz tabelki o unikalnym ID palety -->
                        <tr v-for="item in state.items" :key="item._id" :id="item._id" class="cursor-pointer">

                            <td class="hover:bg-white cursor-default">
                                <img class="w-6 h-6 mx-auto" src="../assets/pallet.png" alt="Pallet icon">
                            </td>

                            <td class="text-center hover:bg-white cursor-default"> 
                                <i>
                                    {{ shortIdVersion(item._id) }}
                                </i> 
                            </td>

                            <td class="text-center hover:bg-white cursor-default"> 
                                {{ item.name }} 
                            </td>

                            <td class="hover:bg-white cursor-default"> 
                                <div class="mx-auto w-6 h-6 rounded-full" :style="{ 'background-color' : item.color}">
                                    
                                </div>  
                            </td>


                            <td class="text-center hover:bg-white cursor-default"> 
                                {{ $filters.priceWithCurrency(item.price) }} 
                            </td>

                            <td class="text-center hover:bg-white cursor-default"> {{ item.material }} </td>
                            <td class="text-center hover:bg-white cursor-default" :class="{'text-green-700 font-semibold' : item.state === 'ACTIVE'}"> {{ item.state }} </td>

                            <td class="hover:bg-white cursor-default">
                                
                                <div class="inline-flex space-x-2 items-center translate-x-1/3">
                                    

                                    <button @click.stop="markAsSold(item._id)" class="hover:bg-gray-300 p-2 rounded-xl transition-colors ease-in-out">
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
                                    </button>

                                    <button @click.stop="markAsActive(item._id)" class="hover:bg-gray-300 p-2 rounded-xl transition-all">
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.39331 15.6448C4.39331 15.6448 5.39331 14.6448 8.39331 14.6448C11.3933 14.6448 13.3933 16.6448 16.3933 16.6448C19.3933 16.6448 20.3933 15.6448 20.3933 15.6448V3.64478C20.3933 3.64478 19.3933 4.64478 16.3933 4.64478C13.3933 4.64478 11.3933 2.64478 8.39331 2.64478C5.39331 2.64478 4.39331 3.64478 4.39331 3.64478V15.6448Z" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M4.39331 22.6448V15.6448" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>

                                    <button @click.stop="[action.name = 'edit Item', action.content = 'item', itemId = item._id]" class="hover:bg-gray-300 p-2 rounded-xl transition-all">
                                        <svg width="25" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 4.5H4C3.46957 4.5 2.96086 4.71071 2.58579 5.08579C2.21071 5.46086 2 5.96957 2 6.5V20.5C2 21.0304 2.21071 21.5391 2.58579 21.9142C2.96086 22.2893 3.46957 22.5 4 22.5H18C18.5304 22.5 19.0391 22.2893 19.4142 21.9142C19.7893 21.5391 20 21.0304 20 20.5V13.5" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M18.5 3C18.8978 2.60218 19.4374 2.37868 20 2.37868C20.5626 2.37868 21.1022 2.60218 21.5 3C21.8978 3.39783 22.1213 3.93739 22.1213 4.5C22.1213 5.06261 21.8978 5.60218 21.5 6L12 15.5L8 16.5L9 12.5L18.5 3Z" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                    

                                    <button @click.stop="deleteItem(item._id)" class="hover:bg-gray-300 p-2 rounded-xl transition-colors ease-in-out">
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.89221 6.06604H5.89221H21.8922" stroke="red" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M19.8922 6.06604V20.066C19.8922 20.5965 19.6815 21.1052 19.3064 21.4803C18.9314 21.8553 18.4226 22.066 17.8922 22.066H7.89221C7.36178 22.066 6.85307 21.8553 6.478 21.4803C6.10293 21.1052 5.89221 20.5965 5.89221 20.066V6.06604M8.89221 6.06604V4.06604C8.89221 3.53561 9.10293 3.0269 9.478 2.65183C9.85307 2.27675 10.3618 2.06604 10.8922 2.06604H14.8922C15.4226 2.06604 15.9314 2.27675 16.3064 2.65183C16.6815 3.0269 16.8922 3.53561 16.8922 4.06604V6.06604" stroke="red" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M10.8922 11.066V17.066" stroke="red" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M14.8922 11.066V17.066" stroke="red" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>

                                    
                                </div>

                            </td>
                        </tr>
                    </tbody>
                </table>
                
            </div>

            <NoItemsCase v-if="state.items.length === 0"></NoItemsCase>

            
        </div>

        

        


 
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute,  } from 'vue-router'
import ItemsCrud from '@/modules/ItemsCrud'
import PalletCrud from '@/modules/PalletCrud'
import EditItem from '@/components/EditItem'
import EditPallet from '@/components/EditPallet'
import NewItem from '@/components/NewItem'
import NoItemsCase from '@/components/NoItemsCase'
// import PalletCrud from '@/modules/PalletCrud'

export default {
    setup() {
        const { state, getAllItems, getSpecificPallet, palletInfo, addItem, editItem, deleteItem, markAsActive, markAsSold  } = ItemsCrud()
        const { updatePallet  } = PalletCrud()

        const route = useRoute()

        const itemId = ref("")

        const action = ref({
            name: "",
            content: ""
        })

        

        onMounted(() => {
            getAllItems()
            getSpecificPallet(route.params.id)
        })

        

        // const changeBackgroundOnHover = (id, cursor) => {
        //     const row = document.getElementById(id)
        //     const color = cursor ? "#e6faff" : "white"
        //     const fontWeight = cursor ? "bold" : "normal"

        //     Array.from(row.childNodes).forEach((node) => {
        //             node.style.backgroundColor = color
        //             node.style.fontWeight = fontWeight
        //     })
        // }

        const shortIdVersion = (id) => {
            return id.slice(0, 6) + "..."
        }

        return {
            getAllItems, 
            shortIdVersion,
            palletInfo,
            action,
            updatePallet,
            addItem,
            editItem,
            deleteItem,
            itemId,
            state,
            markAsActive,
            markAsSold
        }
    },

    components: {
        EditItem, NewItem, EditPallet, NoItemsCase
    }
}
</script>
