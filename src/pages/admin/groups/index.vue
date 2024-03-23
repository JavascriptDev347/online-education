<template>
    <div>
        <a-table :columns="columns" :data-source="groups['groups']" :scroll="{ x: 800 }" :expand-column-width="80">
            <template #bodyCell="{ column, _, record }">
                <template v-if="column.dataIndex === 'action'">
                    <a-popconfirm title="Sure to delete?">
                        <a>Delete</a>
                    </a-popconfirm>
                </template>
                <template v-if="column.dataIndex === 'status'">
                    <span>{{ record.status }}</span>
                </template>
                <template v-if="column.dataIndex === 'course'">
                    <span>{{ record.course.name }}</span>
                </template>
                <template v-if="column.dataIndex === 'room'">
                    <span>{{ record.room.name }}</span>
                </template>
                <template v-if="column.dataIndex === 'days'">
                    <span>{{ record.days }}</span>
                </template>
            </template>
        </a-table>
    </div>
</template>

<script setup lang="ts">
import { useAdminStore } from '@/stores/admin/admin';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const { groups } = storeToRefs(useAdminStore());
onMounted(async () => {
    await useAdminStore().getAllGroups()
})

const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Start time", dataIndex: "start_time" },
    { title: "End time", dataIndex: 'end_time' },
    { title: "Status", dataIndex: "status" },
    { title: "Course", dataIndex: "course" },
    { title: "Room", dataIndex: "room" },
    { title: "Student count", dataIndex: 'student_count' },
    { title: "Days", dataIndex: "days" },
    { title: "Action", dataIndex: "action" },
];
</script>

<style scoped></style>