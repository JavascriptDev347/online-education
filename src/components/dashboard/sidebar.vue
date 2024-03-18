<script lang="ts" setup>
import { menu } from "@/constanta/menu";
import { useSidebar } from "@/service/useSidebar";
import { computed } from "vue";
import { Icon } from '@iconify/vue';
const { isOpen } = useSidebar();

const current_role = localStorage.getItem("role") as string
const filteredNavLinks: any = computed(() => {
    return menu.filter((link) => link.role.includes(current_role));
});

</script>
<template>
    <div class="flex">
        <!--    backdrop-->
        <div :class="isOpen ? 'block' : 'hidden'" @click="isOpen = false" class="
        fixed
        inset-0
        z-20
        transition-opacity
        bg-black
        opacity-50
        lg:hidden
      "></div>
        <!--    end backdrop-->
        <div :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'" class="
        fixed
        inset-y-0
        left-0
        z-30
        w-64
        overflow-y-auto
        transition
        duration-300
        transform
      bg-white
        lg:translate-x-0 lg:static lg:inset-0
      ">
            <div class="flex items-center justify-center mt-8">
                <div class="flex items-center">
                </div>
            </div>

            <nav class="mt-10 links">
                <router-link v-for="(item, i) in filteredNavLinks" :key="i" class="link-item" :to="item.path">

                    <Icon :icon="item.icon" width="20px " height="20px" />
                    <span class="mx-4">{{ item.title }}</span>
                </router-link>
            </nav>
        </div>
    </div>
</template>


<style scoped></style>