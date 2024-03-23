<template>
    <a-table :columns="colums" :data-source="roles" :loading="loading" :scroll="{ x: 800 }"
        :expand-column-width="80" />
</template>

<script setup lang="ts">
import { useRolesStore } from '@/stores/roles/roles';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

const roleStore = useRolesStore();
const loading = ref(true)
const { roles } = storeToRefs(useRolesStore());

onMounted(async () => {
    await roleStore.getAllRole()
    loading.value = false
})

const colums = [
    {
        title: "Id",
        dataIndex: "_id",
        key: "_id"
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "name"
    }
]
</script>

<style scoped></style>