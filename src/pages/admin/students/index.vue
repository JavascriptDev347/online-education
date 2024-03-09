<template>
    <a-table :columns="columns" :data-source="lists['students']" bordered>
        <template #bodyCell="{ column, text }">
            <template v-if="column.dataIndex === 'name'">
                <a>{{ text }}</a>
            </template>

            <template v-if="column.dataIndex === 'action'">
                <a-popconfirm title="Sure to delete?">
                    <a>Delete</a>
                </a-popconfirm>
            </template>

        </template>

        <template #title>
            <h2 class="text-bold flex items-center justify-center text-xl ">
                Bizdagi o'quvchilar soni : {{ lists["count"] }}
            </h2>
        </template>

        <template #footer>Footer</template>
    </a-table>
</template>

<script lang="ts" setup>
import { useAdminStore } from "@/stores/admin/admin"
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
const adminStore = useAdminStore();

const { lists } = storeToRefs(adminStore)

onMounted(async () => {
    await adminStore.getAllStudents()
})

const columns = [
    { title: "First name", dataIndex: "first_name" },
    { title: "Last name", dataIndex: "last_name" },
    { title: "Phone number", dataIndex: "phone" },
    { title: "Action", dataIndex: "action" },
];

</script>

<style scoped>
th.column-money,
td.column-money {
    text-align: right !important;
}
</style>
