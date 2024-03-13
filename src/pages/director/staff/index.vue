<template>

    <div class="flex flex-col gap-[10px]">
        <div>
            <a-button size="large" @click="openCreate" class="flex items-center justify-center">
                <PlusCircleOutlined />
                Add staff
            </a-button>
        </div>
        <create :isOpen="isOpen" :onClose="onClose" />
        <a-table :columns="columns" :data-source="loading ? [] : staffs['staffs']" :loading="loading" bordered>
            <template #bodyCell="{ column, _, record }">
                <template v-if="column.dataIndex === 'first_name'">
                    <a>{{ record.last_name + " " + record.last_name }}</a>
                </template>
                <template v-if="column.dataIndex === 'image'">
                    <a-space :size="12">
                        <a-image :width="80" :src="record.image ? record.image : person">
                            <template #placeholder>
                                <a-image :src="record.image ? record.image : person" :width="80" :preview="false" />
                            </template>
                        </a-image>
                    </a-space>
                </template>
                <template v-if="column.dataIndex === 'role'">
                    <a-tag v-if="record.role === 'admin'" color="#f50">{{ record.role }}</a-tag>
                    <a-tag v-else="record.role === 'admin'" color="#2db7f5">{{ record.role }}</a-tag>
                </template>
                <template v-if="column.dataIndex === 'status'">
                    <a-checkbox v-model:checked="record.status"></a-checkbox>
                </template>
                <template v-if="column.dataIndex === 'start_date'">
                    <span>{{ moment(record.start_date).format('YYYY-MM-DD HH:mm:ss') }}</span>
                    <p>{{ moment(record.start_date, 'YYYYMMDD').fromNow() }}</p>
                </template>
                <template v-if="column.dataIndex === 'action'">
                    <div class="flex gap-[5px]">
                        <a-button class="flex items-center justify-center">
                            <EditOutlined />
                        </a-button>
                        <a-button class="flex items-center justify-center" danger>
                            <DeleteOutlined />
                        </a-button>
                    </div>
                </template>
            </template>
            <template #title>
                <h2 class="text-center text-2xl text-bold">Staffs</h2>
            </template>
            <template #footer>Footer</template>
        </a-table>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import create from './create.vue';
import { useDirectorStore } from "@/stores/director/director"
import { storeToRefs } from 'pinia';
import moment from "moment";
import { PlusCircleOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons-vue"
import person from '@/assets/img/png/person.png'

const { staffs } = storeToRefs(useDirectorStore())

const directorStore = useDirectorStore()
const isOpen = ref(false);
const loading = ref(true)

const openCreate = () => {

    isOpen.value = true
    console.log(isOpen.value);
}
const onClose = () => {
    isOpen.value = false
}

onMounted(async () => {
    await directorStore.getAllStaffs()
    loading.value = false
})


const columns = [
    {
        title: "Image",
        dataIndex: "image"
    },
    {
        title: 'Name',
        dataIndex: 'first_name',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
    },
    {
        title: "Role",
        dataIndex: 'role'
    },
    {
        title: "Status",
        dataIndex: 'status'
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


<style scoped></style>