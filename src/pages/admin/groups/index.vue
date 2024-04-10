<template>
  <div>
    <a-table :columns="columns" :data-source="groups['groups']" :scroll="{ x: 800 }" :expand-column-width="80">
      <template #bodyCell="{ column, _, record }">
        <template v-if="column.dataIndex === 'action'">
          <div class="flex gap-[3px]">
            <a-tooltip placement="topLeft" title="Guruhga student qo'shish">
              <a-button class="flex items-center" @click="groupAddStudent(record._id)">
                <UsergroupAddOutlined/>
              </a-button>
            </a-tooltip>
            <a-tooltip placement="topLeft" title="Guruhga Teacher biriktirish">
              <a-button class="flex items-center" @click="groupAddTeacher(record._id)">
                <UserAddOutlined/>
              </a-button>
            </a-tooltip>
            <a-tooltip placement="topLeft" title="Guruhdagi studentlar">
              <a-button class="flex items-center" @click="groupAllStudents(record._id)">
                <TableOutlined/>
              </a-button>
            </a-tooltip>
          </div>
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
    <!--    student add modal-->
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
        <a-select-option v-for="student in data" :key="student._id"
                         :value="student.phone">
          {{ student.phone }}
        </a-select-option>
      </a-select>
      <div class="flex mt-3 justify-end">
        <a-button :disabled="!studentPhone" @click="handleAddStudent">Qo'shish</a-button>
      </div>
    </a-modal>

    <!--    teacher add modal-->
    <a-modal v-model:open="modalOpen1" title="Group add Teacher" :footer="null">
      <a-select
          label-in-value
          placeholder="Select Teacher"
          style="width: 100%"
          :filter-option="false"
          :show-search="true"
          @search="teacherSearch"
      >
        <a-select-option v-for="teacher in data1" :key="teacher._id"
                         :value="teacher.phone">
          {{ teacher.phone }}
        </a-select-option>
      </a-select>
      <div class="flex mt-3 justify-end">
        <a-button @click="handleAddTeacher">Qo'shish</a-button>
      </div>
    </a-modal>

    <!--   group all student-->
    <a-modal v-model:open="groupAllStudentModal" :footer="null">
      <div class="my-6" v-if="groupIdStudents?.students.length >0">
        <a-collapse accordion>
          <a-collapse-panel v-for="student in groupIdStudents?.students" :key="student._id"
                            :header="student.phone">
            <div class="flex justify-between items-center">
              <p>{{ student.first_name + ' ' + student.last_name }}</p>
              <a-button danger @click="deleteGroupIdByStudent(student.phone)">Delete</a-button>
              <!--              <span>{{ student._id }}</span>-->
            </div>
          </a-collapse-panel>
        </a-collapse>
      </div>
      <div class="my-6" v-else-if="groupIdStudents?.students.length===0">
        Bu guruhda studentlar mavjud emas.
      </div>
      <div class="my-6" v-else>
        <a-skeleton active/>
      </div>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import {useAdminStore} from '@/stores/admin/admin';
import {storeToRefs} from 'pinia';
import {onMounted, ref, watch} from 'vue';
import {UserAddOutlined, UsergroupAddOutlined, TableOutlined} from "@ant-design/icons-vue";
import {apiClient} from "@/modules";

const {lists, groups, teachers} = storeToRefs(useAdminStore());
const modalOpen = ref(false);
const modalOpen1 = ref(false);
const studentPhone = ref("");
const groupAllStudentModal = ref(false);
const groupIdStudents = ref()

onMounted(async () => {
  await useAdminStore().getAllGroups()
})

let data = ref([]);
let data1 = ref([]);
const groupId = ref("");
const teacher_id = ref('')

const groupAddStudent = async (id: string) => {
  modalOpen.value = true;
  groupId.value = id;
  await useAdminStore().getAllStudents();
  data.value = lists.value.students
}

const groupAddTeacher = async (id: string) => {
  modalOpen1.value = true;
  groupId.value = id;
  await useAdminStore().getAllTeachers();
  data1.value = teachers.value.teachers
}

const studentSearch = async (e) => {
  if (e.length > 11) {
    const {student} = await apiClient.admin.searchStudent(e)
    data.value = student
  }
}

const teacherSearch = async (e) => {
  if (e.length > 11) {
    const {teacher} = await apiClient.admin.searchTeacher(e)
    data1.value = teacher;
    teacher_id.value = teacher[0]?._id
  }
}

watch(modalOpen, (newV) => {
  if (!newV) {
    studentPhone.value = "";
    groupId.value = ""
    data.value = lists.value.students
  }
})

watch(modalOpen1, (newV) => {
  if (!newV) {
    groupId.value = ""
    data1.value = teachers.value.teachers
  }
})

watch(groupId, (newV) => {
  if (!newV) {
    groupId.value = ""
    groupIdStudents.value = []
  }
})

const handleAddStudent = async () => {
  modalOpen.value = false
  await useAdminStore().addGroupStudent({group: groupId.value, student_phone: studentPhone.value?.value})
  studentPhone.value = ''
  data.value = lists.value.students
  groupId.value = ""
}

const handleAddTeacher = async () => {
  await useAdminStore().addGroupTeacher({teacher: teacher_id.value, group: groupId.value})
  modalOpen1.value = false;
  groupId.value = ""
  teacher_id.value = ""
}
const groupAllStudents = async (id: string) => {
  groupAllStudentModal.value = true;
  groupId.value = id;
  groupIdStudents.value = await apiClient.admin.groupAllStudents(id)
}

const deleteGroupIdByStudent = async (student_phone: string) => {
  console.log(student_phone, groupId.value)
  // await apiClient.admin.deleteGroupIdStudent({student_phone, group: groupId.value})
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