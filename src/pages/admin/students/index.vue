<template>
    <a-button type="primary" @click="showDrawer">
        <template #icon>
            <PlusOutlined />
        </template>
        New account
    </a-button>
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
    <createStudent :isOpen="createOpen" :onClose="closeDrawerHandler" />
</template>

<script lang="ts" setup>
import { useAdminStore } from "@/stores/admin/admin"
import { storeToRefs } from "pinia";
import { PlusOutlined } from '@ant-design/icons-vue';
import { onMounted, ref } from "vue";
import createStudent from "./createStudent.vue";

const adminStore = useAdminStore();

const { lists } = storeToRefs(adminStore)

onMounted(async () => {
    await adminStore.getAllStudents()
})

const createOpen = ref<boolean>(false)

const showDrawer = () => {
    createOpen.value = true
}

const closeDrawerHandler = () => {
    createOpen.value = false;
};

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
