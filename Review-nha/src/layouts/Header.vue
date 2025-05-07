<template>
    <div class="header flex justify-between items-center p-4 ">
        <div class="flex items-center space-x-4">
            <MenuIcon />
            <h1 class="text-primary-black font-header-custom font-semibold text-base">ReviewNhà</h1>
        </div>
        <div class="flex items-center space-x-4">
            <NotificationIcon />
            <HeartIcon />
            <UserIcon />
            
        </div>
    </div>
</template>



<script setup>
import MenuIcon from '../components/icons/MenuIcon.vue'
import NotificationIcon from '../components/icons/Notification.vue'
import HeartIcon from '../components/icons/HeartIcon.vue'
import UserIcon from '../components/icons/UserIcon.vue'

</script>