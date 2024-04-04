<template>
  <a-drawer title="Create a new account" :width="720" :open="props.isOpen" :body-style="{ paddingBottom: '80px' }"
            :footer-style="{ textAlign: 'right' }" @close="props.onClose">
    <a-form :model="form" layout="vertical">
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="First name" name="first_name" v-bind="validateInfos.first_name">
            <a-input v-model:value="form.first_name" placeholder="Please enter user name"
                     @blur="validate('first_name', { trigger: 'blur' }).catch(() => { })"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Last name" name="last_name" v-bind="validateInfos.last_name">
            <a-input v-model:value="form.last_name" placeholder="Please enter user name"
                     @blur="validate('last_name', { trigger: 'blur' }).catch(() => { })"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Phone" v-bind="validateInfos.phone">
            <a-input v-model:value="form.phone" v-mask="'+998-##-###-##-##'"
                     @blur="validate('phone', { trigger: 'blur' }).catch(() => { })"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Salary" v-bind="validateInfos.salary">
            <a-input-number id="inputNumber" v-model:value="form.salary" :min="1000" :max="100000"/>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <template #extra>
      <a-space>
        <a-button v-if="editOrCreate" @click="handleSubmit">Edit</a-button>
        <a-button v-else @click="handleSubmit">Submit</a-button>
      </a-space>
    </template>
  </a-drawer>
</template>
<script lang="ts" setup>
import {reactive, ref} from 'vue';
import {IAdminRequestPost} from "@/interfaces";
import {useForm} from "ant-design-vue/es/form";
import {storeToRefs} from "pinia";
import {useRolesStore} from "@/stores/roles/roles";
import {useAdminStore} from "@/stores/admin/admin";

const {roles} = storeToRefs(useRolesStore());
const props = defineProps<{
  isOpen: boolean,
  onClose: () => void,
}>();

const editOrCreate = ref(false);

const form: IAdminRequestPost = reactive({
  first_name: "",
  last_name: "",
  phone: "+998-",
  salary: 1000
});

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

const {validateInfos, validate, resetFields} = useForm(form, rulesRef);

const createStudent = async () => {
  await useAdminStore().createStudent({
    phone: form.phone.split("-").join(""),
    salary: form.salary,
    last_name: form.last_name,
    first_name: form.first_name
  })
}

const handleSubmit = () => {
  validate()
      .then(() => {
        createStudent();
        props.onClose()
        resetFields()
      })
      .catch(err => {
        console.log('error', err);
      });
}

</script>
