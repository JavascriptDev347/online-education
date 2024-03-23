<template>
    <div>
        <a-table :columns="columns" :data-source="rooms['rooms']" :scroll="{ x: 800 }" :expand-column-width="80">
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
        </a-table>
    </div>
</template>

<script setup lang="ts">
import { useAdminStore } from '@/stores/admin/admin';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const { rooms } = storeToRefs(useAdminStore());
onMounted(async () => {
    await useAdminStore().getAllRooms()
})

const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Size", dataIndex: "size" },
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
