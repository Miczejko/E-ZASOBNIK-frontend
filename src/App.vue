<template>
  <div class="relative min-h-screen flex ">
    
    <SidebarMenu :isActiveSidebar=isActive></SidebarMenu> 
    
    <div class="w-full bg-gradient-to-bl from-gray-700 via-gray-900 to-black flex justify-center items-center">
      <router-view></router-view>
    </div>
    

  </div>
</template>



<script>
import SidebarMenu from '@/components/SidebarMenu.vue'
import { ref } from 'vue'


export default {
  name: 'App',
  components: {
    SidebarMenu, 
  },

  setup() {
      let isActive = ref(false)

      return { isActive }
  }
}
</script>

<style>

</style>
