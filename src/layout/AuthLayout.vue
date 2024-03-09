<template>
    <div class="flex items-start w-full relative min-h-screen">
        <div class="auth-inner min-h-screen w-full relative flex flex-wrap">
            <div class="bg-auth">
                <div class="bg-auth-inner">
                    <img :src="login" alt="Login">
                </div>
            </div>
            <div class="auth-bg">
                <div class="auth-bg-inner">
                    <router-view />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import login from "@/assets/img/svg/login.svg"
</script>

<style scoped>
.auth-inner {
    overflow-y: auto;
    height: calc(var(--vh, 1vh)*100);
    margin: 0 !important;
}

.bg-auth {
    background-color: #edeef1;
    padding: 4rem !important;
}

.bg-auth-inner {
    padding-left: 4rem !important;
    padding-right: 4rem !important;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.bg-auth-inner img {
    max-width: 100%;
    height: auto
}

@media (min-width: 992px) {
    .bg-auth {
        display: flex !important;
        flex: 0 0 66.6666666667%;
        max-width: 66.6666666667%;
        position: relative;
        width: 100%;
    }
}

@media (max-width:992px) {
    .bg-auth {
        display: none;
    }

    .auth-bg {
        width: 100%;
    }
}

.auth-bg {
    background-color: #283046;
    padding-right: 1rem;
    padding-left: 1rem;
}

@media (min-width: 992px) {
    .auth-bg {
        flex: 0 0 33.3333333333%;
        max-width: 33.3333333333%;
        position: relative;
        width: 100%;
    }
}

.auth-bg-inner {
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
    margin-right: -1rem;
    margin-left: -1rem;
    height: 100% !important;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
</style>