<template>
    <a-layout has-sider>
        <a-layout-sider v-model:collapsed="collapsed"
            :class="{ 'ant-layout-sider1': !collapsed, 'ant-layout-sider2': collapsed }"
            :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0, transition: '0.1s' }"
            collapsible :trigger="null">
            <div class="logo">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="70"
                    height="52" viewBox="0 0 70 52" class="fs-2vw mr-1">
                    <defs>
                        <linearGradient id="linear-gradient" x1="1.095" y1="2.012" x2="0.615" y2="0.697"
                            gradientUnits="objectBoundingBox">
                            <stop offset="0" stop-color="#314b9a"></stop>
                            <stop offset="1" stop-color="#264194"></stop>
                        </linearGradient>
                        <linearGradient id="linear-gradient-2" x1="0.55" y1="0.864" x2="0.465" y2="0.149"
                            gradientUnits="objectBoundingBox">
                            <stop offset="0" stop-color="#0575f7"></stop>
                            <stop offset="1" stop-color="#264194"></stop>
                        </linearGradient>
                        <linearGradient id="linear-gradient-3" x1="0.557" y1="0.886" x2="0.442" y2="-0.051"
                            gradientUnits="objectBoundingBox">
                            <stop offset="0" stop-color="#abacd6"></stop>
                            <stop offset="1" stop-color="#a8a7d3"></stop>
                        </linearGradient>
                        <clipPath id="clip-Web_1920_1">
                            <rect width="70" height="52"></rect>
                        </clipPath>
                    </defs>
                    <g id="Web_1920_1" data-name="Web 1920 – 1" clip-path="url(#clip-Web_1920_1)">
                        <g id="Group_1395" data-name="Group 1395" transform="translate(-446.533 -885.958)">
                            <path id="Path_29" data-name="Path 29"
                                d="M640.443,1173.045a21.517,21.517,0,0,1-11.043-2.75,16.352,16.352,0,0,1-1.948-1.334,6.647,6.647,0,0,1-1.544-1.774,7.079,7.079,0,0,1-.767-1.815l-2.1-7.865,22.944,10.2a2.231,2.231,0,0,0,.907.194,2.312,2.312,0,0,0,1.9-1.021c4.287-6.187,13.559-15.539,21.1-22.757l1.861,7.2.122.471a6.8,6.8,0,0,1-.776,5.255,32.445,32.445,0,0,1-14.183,12.047,44.619,44.619,0,0,1-6.557,2.436,41.766,41.766,0,0,1-4.4,1.018A32.343,32.343,0,0,1,640.443,1173.045Z"
                                transform="translate(-162.125 -235.58)" fill-rule="evenodd"
                                fill="url(#linear-gradient)">
                            </path>
                            <path id="Path_30" data-name="Path 30"
                                d="M484.767,932.317a2.227,2.227,0,0,1-.907-.194l-22.944-10.2a9.843,9.843,0,0,0-1.124-.5L448,916.187a2.636,2.636,0,0,1-.658-4.262c6.957-6.557,24.663-22.976,30.419-25.748a2.2,2.2,0,0,1,.956-.219,2.235,2.235,0,0,1,.644.1L514.8,896.712a2.618,2.618,0,0,1,.9,4.382c-2.045,1.878-4.848,4.482-7.942,7.445-7.538,7.218-16.81,16.57-21.1,22.756a2.311,2.311,0,0,1-1.9,1.021Zm-14.7-9.8a.184.184,0,0,0-.173.133.2.2,0,0,0,.114.248l12.048,4.442a3.528,3.528,0,0,0,1.269.234,3.667,3.667,0,0,0,2-.591,3.9,3.9,0,0,0,.675-.551l.574-.6,1.142-1.191,22.842-23.826a.423.423,0,0,0,.008-.569.359.359,0,0,0-.531-.008l0,0-23.807,25.212-.566.6a3.419,3.419,0,0,1-.587.486,3.229,3.229,0,0,1-1.772.532,3.1,3.1,0,0,1-1.095-.2l-12.079-4.345A.169.169,0,0,0,470.068,922.515Z"
                                transform="translate(0)" fill-rule="evenodd" fill="url(#linear-gradient-2)"></path>
                            <path id="Path_32" data-name="Path 32"
                                d="M746.584,1075.365a3.518,3.518,0,0,1-1.269-.234l-12.048-4.441a.2.2,0,0,1-.114-.248.184.184,0,0,1,.173-.133.172.172,0,0,1,.058.01l12.079,4.345a3.107,3.107,0,0,0,1.095.2,3.23,3.23,0,0,0,1.772-.532,3.406,3.406,0,0,0,.587-.486l.566-.6,23.807-25.212,0,0a.36.36,0,0,1,.531.008.424.424,0,0,1-.008.57l-22.842,23.826-1.142,1.191-.574.6a3.9,3.9,0,0,1-.675.551A3.672,3.672,0,0,1,746.584,1075.365Z"
                                transform="translate(-263.257 -147.795)" fill-rule="evenodd"
                                fill="url(#linear-gradient-3)">
                            </path>
                        </g>
                        <text id="LMS" transform="translate(16 26)" fill="#e4e4e4" font-size="16"
                            font-family="Arial-Black, Arial Black" font-weight="800">
                            <tspan x="0" y="0">LMS</tspan>
                        </text>
                    </g>
                </svg>
            </div>
            <div class="menu">
                <router-link class="flex items-center justify-start" :to="item.path" v-for="item in  filteredNavLinks "
                    :key="item.title">
                    <component :is="item.icon" />
                    <span class="nav-text text-[16px]">{{ item.title }}</span>
                </router-link>
            </div>
        </a-layout-sider>

        <a-layout :class="{ 'marginLeft1': !collapsed, 'marginLeft2': collapsed }">
            <a-layout-header style=" padding: 0;color:#fff">
                <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
                <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
            </a-layout-header>
            <a-layout-content :style="{ margin: '24px 16px', overflow: 'initial' }">
                <div :style="{ padding: '24px', background: '#fff', minHeight: '100vh' }">
                    <slot />
                </div>
            </a-layout-content>
            <a-layout-footer :style="{ textAlign: 'center' }">
                Najot ta'lim ©2024 Created by Rustambek Eshbo'riyev
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { menu } from '@/constanta/menu';
import {
    MenuFoldOutlined, MenuUnfoldOutlined
} from "@ant-design/icons-vue";
const M = MenuFoldOutlined;
console.log(M);

const collapsed = ref<boolean>(false);

const current_role = localStorage.getItem("role") as string
const filteredNavLinks: any = computed(() => {
    return menu.filter((link) => link.role.includes(current_role));
});

</script>

<style scoped lang="scss">
header {
    z-index: 999;
}

.menu {
    display: flex;
    color: white;
    flex-direction: column;
    gap: 10px;
    margin: 2px;
    overflow: hidden;

    a {
        display: flex;
        padding: 18px 26px;
        gap: 26px;
        border-radius: 8px;

        &:hover {
            background: blue;
            color: white;
        }
    }
}

.logo {
    margin: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.ant-layout-header {
    position: fixed;
    height: 63px;
    width: 100%;
}

.ant-layout-content {
    margin-top: 75px !important;
}

.ant-layout-sider1 {
    min-width: 286px !important;
}

.ant-layout-sider2 {
    min-width: 70px !important;
}

.anticon {
    width: 24px;
    height: 24px;
    font-size: 24px;
}

.router-link-active {
    background: blue;
}

.site-layout .site-layout-background {
    background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
}


.marginLeft1 {
    margin-left: 286px;
}

.marginLeft2 {
    margin-left: 70px;
}
</style>
