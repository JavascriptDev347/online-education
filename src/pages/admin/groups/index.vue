<template>
  <div>
    <a-table :columns="columns" :data-source="groups['groups']" :scroll="{ x: 800 }" :expand-column-width="80">
      <template #bodyCell="{ column, _, record }">
        <template v-if="column.dataIndex === 'action'">
          <a-tooltip placement="topLeft" title="Guruhga student qo'shish">
            <a-button class="flex items-center" @click="groupAddStudent(record._id)">
              <UserAddOutlined/>
            </a-button>
          </a-tooltip>
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
      <template #title>
        <h2 class="text-bold flex items-center justify-center text-xl ">
          Jami Guruhlar soni : {{ groups["count"] }}
        </h2>
      </template>
    </a-table>

    <a-modal v-model:open="modalOpen" title="Group add Student" :footer="null">
      <a-select
          v-model:value="studentPhone"
          label-in-value
          placeholder="Select users"
          style="width: 100%"
          :filter-option="false"
          :show-search="true"
          @search="studentSearch"
      >
        <a-select-option v-for="student in data.length>0?data:lists['students']" :key="student._id"
                         :value="student.phone">
          {{ student.phone }}
        </a-select-option>
      </a-select>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import {useAdminStore} from '@/stores/admin/admin';
import {storeToRefs} from 'pinia';
import {onMounted, ref} from 'vue';
import {UserAddOutlined} from "@ant-design/icons-vue";

const {groups} = storeToRefs(useAdminStore());
const modalOpen = ref(false);
const studentPhone = ref("")

const {lists} = storeToRefs(useAdminStore());

onMounted(async () => {
  await useAdminStore().getAllGroups()
  await useAdminStore().getAllStudents()
})
let data = [];

const groupAddStudent = (id: string) => {
  modalOpen.value = true
}
const studentSearch = (e) => {
  console.log("e", e)
  data = lists?.value?.students.filter((student: { phone: string }) => {
    return student.phone.toLowerCase().includes(e.toLowerCase())
  })
  return data;
}
const columns = [
  {title: "Name", dataIndex: "name"},
  {title: "Start time", dataIndex: "start_time"},
  {title: "End time", dataIndex: 'end_time'},
  {title: "Status", dataIndex: "status"},
  {title: "Course", dataIndex: "course"},
  {title: "Room", dataIndex: "room"},
  {title: "Student count", dataIndex: 'student_count'},
  {title: "Days", dataIndex: "days"},
  {title: "Action", dataIndex: "action"},
];
</script>

<style scoped></style>