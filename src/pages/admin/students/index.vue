<template>
    <div class="flex flex-col gap-[10px]">
        <div class="flex justify-between items-center mb-3">
            <a-button size="large" @click="showDrawer"
                class="flex items-center justify-center bg-btn-default text-white hover:text-white">
                <PlusOutlined />
                Add New Student
            </a-button>

            <div class="w-[200px] bg-bg-1 ">
                <a-input-search v-model:value="search" placeholder="input search text" size="large"
                    @search="onSearch" />
            </div>
        </div>
    </div>
    <a-table :columns="columns" :data-source="lists['students']" :scroll="{ x: 800 }" :expand-column-width="80">
        <template #bodyCell="{ column, text, record }">
            <template v-if="column.dataIndex === 'name'">
                <a>{{ text }}</a>
            </template>

            <template v-if="column.dataIndex === 'start_date'">
                <span>{{ moment(record.start_date).format('YYYY-MM-DD HH:mm:ss') }}</span>
                <p>{{ moment(record.start_date, 'YYYYMMDD HH:mm:ss').fromNow() }}</p>
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

    </a-table>
    <createStudent :isOpen="createOpen" :onClose="closeDrawerHandler" />
</template>

<script lang="ts" setup>
import { useAdminStore } from "@/stores/admin/admin"
import { storeToRefs } from "pinia";
import { PlusOutlined } from '@ant-design/icons-vue';
import { onMounted, ref } from "vue";
import createStudent from "./createStudent.vue";
import moment from "moment";

const adminStore = useAdminStore();

const { lists } = storeToRefs(adminStore);
const search = ref("")

const onSearch = () => {
    console.log("s v", search.value);
}

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
    { title: "Start date", dataIndex: "start_date" },
    { title: "Action", dataIndex: "action" },
];

</script>

<style scoped lang="scss">
:deep(table) {
    background-color: #f6f7fb;
}

:deep(.ant-table-thead) {
    background-color: #f6f7fb !important;

    tr {
        background-color: #f6f7fb !important;

        &:first-child th:first-child {
            border-top-left-radius: 10px;
            border-left: 1px solid #e1eaed;
        }

        &:first-child th:last-child {
            border-top-right-radius: 10px;
            border-right: 1px solid #e1eaed;
        }

        th {
            background-color: #f6f7fb !important;
        }
    }
}

:deep(.ant-table-tbody) {
    .ant-table-measure-row {
        display: none !important;
    }

    tr {
        background: #fff;
        height: 84px !important;
        position: relative;

        &::after {
            position: absolute;
            content: "";
            width: 100%;
            height: 6px;
            left: 0;
            bottom: 0;
            background-color: #f6f7fb;
            border-top-left-radius: 10px !important;
            border-top-right-radius: 10px !important;
        }

        &:hover {
            td:first-child {
                border-top-left-radius: 10px !important;
            }

            td:last-child {
                border-top-right-radius: 10px !important;
            }
        }

        td:first-child {
            border-top-left-radius: 10px !important;
        }

        td:last-child {
            border-top-right-radius: 10px !important;
        }
    }
}
</style>
