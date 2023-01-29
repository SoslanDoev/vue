<template>
    <vHeader></vHeader>
    <main class="main">
        <router-view></router-view>
    </main>
    <vFooter></vFooter>
</template>

<script>
    import vHeader from '@/components/Header.vue'
    import vFooter from '@/components/Footer.vue'
    export default {
        name: 'app-view',
        components: {
            vHeader,
            vFooter,
        }
    }
</script>

<style>
    @import url('@/assets/main.css');
</style>