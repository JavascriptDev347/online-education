<template>
    <div class="flex h-screen bg-bg-1  font-roboto">
        <!--    sidebar/-->
        <Sidebar />
        <div class="flex-1 flex flex-col overflow-hidden">
            <!--      header-->
            <Header />
            <main class="flex-1 overflow-x-hidden overflow-y-auto mx-[10px] " style="height: calc(100vh - 62px)">
                <div class="my-5 mr-[10px] ">
                    <slot />
                </div>
            </main>
            <Footer />
        </div>
    </div>
</template>

<script setup lang="ts">
import "./dashboard.scss"
import Sidebar from './sidebar.vue';
import Header from './header.vue';
import Footer from './footer.vue';

</script>

<style scoped></style>