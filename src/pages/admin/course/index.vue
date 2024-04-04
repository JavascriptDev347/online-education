<template>
  <div>
    <div class="flex flex-col gap-[10px]">
      <div class="flex justify-between items-center mb-3">
        <a-button size="large"
                  @click="setModalVisible(true)"
                  class="flex items-center justify-center bg-btn-default text-white hover:text-white">
          <PlusOutlined/>
          Add Course
        </a-button>

        <div class="w-[200px] bg-bg-1 ">
          <a-input-search placeholder="t('search.input')" size="large"
          />
        </div>
      </div>
    </div>
    <a-table :columns="columns" :data-source="courses['courses']" :scroll="{ x: 800 }" :expand-column-width="80">
      <template #bodyCell="{ column ,text,record}">
        <template v-if="column.dataIndex === 'action'">
          <div class="flex gap-[5px]">
            <a-button class="flex items-center justify-center" @click="editCourse(record)">
              <EditOutlined/>
            </a-button>
            <a-button class="flex items-center justify-center" danger @click="deleteCourse(record._id)">
              <DeleteOutlined/>
            </a-button>
          </div>
        </template>
      </template>
      <template #title>
        <h2 class="text-bold flex items-center justify-center text-xl ">
          Jami kurslar soni : {{ courses["count"] }}
        </h2>
      </template>
    </a-table>

    <a-modal
        v-model:open="modalVisible"
        :title="editOrCreate?'Edit Modal':'Create Modal'"
        style="top: 20px"
        :footer="null"
    >
      <a-form layout="vertical">
        <a-row :gutter="16" class="row">
          <a-col :span="12">
            <a-form-item label="Course name" v-bind="validateInfos.name">
              <a-input v-model:value="form.name"
                       @blur="validate('name', { trigger: 'blur' }).catch(() => { })"/>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Period" v-bind="validateInfos.period">
              <a-input-number v-model:value="form.period" :min="30"
                              @blur="validate('period', { trigger: 'blur' }).catch(() => { })"/>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Period" v-bind="validateInfos.price">
              <a-input-number v-model:value="form.price" :min="200000"
                              @blur="validate('price', { trigger: 'blur' }).catch(() => { })"/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button class="bg-btn-default" v-if="editOrCreate" type="primary" @click.prevent="editedCourse">Edit
          </a-button>
          <a-button class="bg-btn-default" v-else type="primary" @click.prevent="createCourse">Create</a-button>
        </a-form-item>
      </a-form>
    </a-modal>

  </div>
</template>

<script setup lang="ts">
import {useAdminStore} from '@/stores/admin/admin';
import {storeToRefs} from 'pinia';
import {onMounted, ref, reactive, watch} from 'vue';
import {PlusOutlined, EditOutlined, DeleteOutlined} from "@ant-design/icons-vue";
import {ICreateCourse} from "@/interfaces";
import {Form, message} from "ant-design-vue";
import {apiClient} from "@/modules";

const {courses} = storeToRefs(useAdminStore())
const useForm = Form.useForm;
const editOrCreate = ref<boolean>(false)

onMounted(async () => {
  await useAdminStore().getAllCourses()
});

const columns = [
  {title: "Name", dataIndex: "name"},
  {title: "Price", dataIndex: "price"},
  {title: "Period", dataIndex: "period"},
  {title: "Action", dataIndex: "action"},
];

const modalVisible = ref<boolean>(false);
const setModalVisible = (open: boolean) => {
  modalVisible.value = open;
};

const form: ICreateCourse = reactive({
  name: "",
  period: 30,
  price: 200000
});

const rules = reactive({
  name: [
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
  period: [
    {
      required: true,
      message: 'Please enter period',
    }
  ],
  price: [
    {
      required: true,
      message: "Please enter price"
    }
  ]
});

const {validateInfos, validate, resetFields} = useForm(form, rules)

const createCourse = () => {
  validate()
      .then((r) => {
        if (r.period < 30) {
          message.warn("Period kamida 30 bo'lishi kerak")
        }
        useAdminStore().createCourse(form);
        resetFields();
        modalVisible.value = false;
      })
      .catch(err => {
        console.log('error', err);
      });
}

const deleteCourse = (id: string) => {
  useAdminStore().deleteCourse(id)
}

const editCourse = (payload: ICreateCourse) => {
  editOrCreate.value = true
  modalVisible.value = true
  if (payload) {
    Object.assign(form, payload)
  }
}

const editedCourse = () => {
  useAdminStore().editCourse(form);
  editOrCreate.value = false
  modalVisible.value = false
}

watch(modalVisible, (value) => {
  if (!value) {
    form.name = ""
    form.price = 200000
    form.period = 30
  }
})
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
