<template>
    <div class="flex flex-col gap-[10px]">
        <div class="flex justify-between items-center mb-3">
            <a-button size="large" @click="openCreate"
                class="flex items-center justify-center bg-btn-default text-white hover:text-white">
                <PlusCircleOutlined />
                Add staff
            </a-button>
            <div class="w-[200px] bg-bg-1 ">
                <a-input-search v-model:value="search" placeholder="input search text" size="large"
                    @search="onSearch" />
            </div>
        </div>

        <create :isOpen="isOpen" :onClose="onClose" @update:is-open="onClose" />
        <a-table :columns="columns" :data-source="staffs['staffs']" :scroll="{ x: 800 }" :expand-column-width="80"
            :loading="loading">
            <template #bodyCell="{ column, _, record }">
                {{ _ }}
                <template v-if="column.dataIndex === 'image'">
                    <div class="flex items-center gap-[10px]">
                        <a-avatar :size="60">
                            <template #icon>
                                <a-image :src="record.image" />
                            </template>
                        </a-avatar>
                        <div class="name">
                            <p class="name">{{ record.first_name + " " + record.last_name }}</p>
                            <a-tag v-if="record.role === 'admin'" color="#f50">{{ record.role }}</a-tag>
                            <a-tag v-else color="#2db7f5">{{ record.role }}</a-tag>
                        </div>
                    </div>
                </template>
                <template v-if="column.dataIndex === 'status'">
                    <a-checkbox v-model:checked="record.status" @change="statusChange(record.id)"></a-checkbox>
                </template>
                <template v-if="column.dataIndex === 'start_date'">
                    <span>{{ moment(record.start_date).format('YYYY-MM-DD HH:mm:ss') }}</span>
                    <p>{{ moment(record.start_date, 'YYYYMMDD HH:mm:ss').fromNow() }}</p>
                </template>
                <template v-if="column.dataIndex === 'action'">
                    <div class="flex gap-[5px]">
                        <a-button class="flex items-center justify-center">
                            <EditOutlined />
                        </a-button>
                        <a-button class="flex items-center justify-center" danger @click="deleteStaff(record.id)">
                            <DeleteOutlined />
                        </a-button>
                    </div>
                </template>
            </template>

        </a-table>
    </div>
</template>

<script setup lang="ts">
import "../director.scss";
import { ref, onMounted } from 'vue';
import create from './create.vue';
import { useDirectorStore } from "@/stores/director/director"
import { storeToRefs } from 'pinia';
import moment from "moment";
import { PlusCircleOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons-vue"
import { useRolesStore } from '@/stores/roles/roles';
import { message } from "ant-design-vue";

const directorStore = useDirectorStore();
const roleStore = useRolesStore()

const { staffs } = storeToRefs(useDirectorStore())

const isOpen = ref(false);
const loading = ref(true)
const search = ref('');

const onSearch = () => {
    message.info(search.value)
}

const openCreate = () => {
    isOpen.value = true
    roleStore.getAllRole()
}
const onClose = () => {
    isOpen.value = false
}

onMounted(async () => {
    await directorStore.getAllStaffs()
    loading.value = false
})

const deleteStaff = async (id: string) => {
    await directorStore.deleteStaff(id);
    message.success("O'chirildi")
}


const statusChange = async (id: any) => {
    await directorStore.activeStaff({
        id: id
    })
}

const columns = [
    {
        title: "Image",
        dataIndex: "image",
        width: 320
    },

    {
        title: 'Phone',
        dataIndex: 'phone',
    },

    {
        title: "Status",
        dataIndex: 'status',
        width: 100
    },
    {
        title: "Start date",
        dataIndex: "start_date"
    },
    {
        title: "Operations",
        dataIndex: "action"
    }

];
</script>


<style scoped lang="scss">
:deep(table) {
    background-color: #F6F7FB;
}

:deep(.ant-table-thead) {
    background-color: #F6F7FB !important;

    tr {
        background-color: #F6F7FB !important;

        &:first-child th:first-child {
            border-top-left-radius: 10px;
            border-left: 1px solid #e1eaed;
        }

        &:first-child th:last-child {
            border-top-right-radius: 10px;
            border-right: 1px solid #e1eaed;
        }

        th {
            background-color: #F6F7FB !important;
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
            content: '';
            width: 100%;
            height: 6px;
            left: 0;
            bottom: 0;
            background-color: #F6F7FB;
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



.name {

    color: #394456;
    text-transform: capitalize;
    font-size: 16px;
    font-family: "sf500";
    color: theme("colors.text.name")
}
</style>