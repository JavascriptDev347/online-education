<template>
  <div class="flex flex-col gap-[10px]">
    <div class="flex justify-between items-center mb-3">
      <a-button size="large" @click="showDrawer"
                class="flex items-center justify-center bg-btn-default text-white hover:text-white">
        <PlusOutlined/>
        {{ t("new.student") }}
      </a-button>

      <div class="w-[200px] bg-bg-1 ">
        <a-input-search v-model:value="search" :placeholder="t('search.input')" size="large"
                        @search="onSearch"/>
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
        <div class="flex gap-[5px]">
          <a-button class="flex items-center justify-center" @click="showModal(record)">
            <EditOutlined/>
          </a-button>
          <a-button class="flex items-center justify-center" danger @click="deleteStudent(record.id)">
            <DeleteOutlined/>
          </a-button>
        </div>
      </template>
    </template>

    <template #title>
      <h2 class="text-bold flex items-center justify-center text-xl ">
        {{ t('length.student') }} : {{ lists["count"] }}
      </h2>
    </template>

  </a-table>
  <createStudent :isOpen="createOpen" :onClose="closeDrawerHandler"/>

  <a-modal v-model:open="open" title="Edit Student" :footer="null">
    <a-form :model="form" layout="vertical">
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="First name" name="first_name" v-bind="validateInfos.first_name">
            <a-input v-model:value="form.first_name" placeholder="Please enter user name"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Last name" name="last_name" v-bind="validateInfos.last_name">
            <a-input v-model:value="form.last_name" placeholder="Please enter user name"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Phone" v-bind="validateInfos.phone">
            <a-input v-model:value="form.phone" v-mask="'+998-##-###-##-##'"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-button @click="handleEdit">Submit</a-button>
    </a-form>
  </a-modal>
</template>

<script lang="ts" setup>
import {useAdminStore} from "@/stores/admin/admin"
import {storeToRefs} from "pinia";
import {PlusOutlined, EditOutlined, DeleteOutlined} from '@ant-design/icons-vue';
import {onMounted, ref, computed, reactive} from 'vue';
import createStudent from "./createStudent.vue";
import moment from "moment";
import {useI18n} from 'vue-i18n'
import {useForm} from "ant-design-vue/es/form";

const {t} = useI18n();
const open = ref<boolean>(false);
let form = reactive({
  phone: "",
  first_name: "",
  last_name: "",
});

const showModal = (record) => {
  open.value = true;
  if (record) {
    Object.assign(form, record)
  }

};

const handleEdit = () => {
  adminStore.editStudent(form?.id, {
    last_name: form.last_name,
    first_name: form.first_name,
    phone: form.phone.split("-").join("")
  })
  open.value = false;
};

const rulesRef = reactive({
  first_name: [
    {
      required: true,
      message: 'Please input first_name',
    },
    {
      min: 4,
      max: 20,
      message: 'Length should be 4 to 20',
      trigger: 'blur',
    },
  ],
  last_name: [
    {
      required: true,
      message: 'Please input last_name',
    },
    {
      min: 4,
      max: 20,
      message: 'Length should be 4 to 20',
      trigger: 'blur',
    },
  ],
  phone: [
    {
      required: true,
      message: 'Please enter phone number',
    },
  ],
  salary: [
    {
      required: true,
      message: "Please enter salary"
    }
  ],
  course: [
    {
      required: true,
      message: "Please enter course"
    }
  ]
});

const {validateInfos} = useForm(form, rulesRef);

//

const adminStore = useAdminStore();

const {lists} = storeToRefs(adminStore);
const search = ref("");

const onSearch = () => {
  console.log("s v", search.value);
}

onMounted(async () => {
  await adminStore.getAllStudents()
})

const createOpen = ref<boolean>(false)

const showDrawer = () => {
  createOpen.value = true;
}

const closeDrawerHandler = () => {
  createOpen.value = false;
};

const columns = computed(() => [
  {title: t('table.student.first_name'), dataIndex: "first_name"},
  {title: t('table.student.last_name'), dataIndex: "last_name"},
  {title: t('table.student.phone'), dataIndex: "phone"},
  {title: t('table.student.start_date'), dataIndex: "start_date"},
  {title: t('table.student.action'), dataIndex: "action"},
]);

const deleteStudent = (id: string) => {
  adminStore.deleteStudent(id)
}

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
