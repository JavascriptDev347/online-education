<template>
  <div class="profile">
    <div class="profile_head">
      <h2>My profile</h2>
      <p>This Information will be displayed publicly so be careful what you share.</p>
    </div>
    <div class="profile_img">
      <h3>Profile picture</h3>
      <div class="profile_img-upload">
        <div class="avatar">
          <a-avatar :size="78">
            <template #icon>
              <UserOutlined/>
            </template>
          </a-avatar>
          <p>
            You Can upload jpg, gif or png image files, Max size of 3mb
          </p>
        </div>
        <input
            type="file"
            @change="onFileChanged($event)"
            accept="image/*"

        />
        <a-button @click="uplo">Up</a-button>
      </div>
    </div>
    <div class="flex mt-[12px]">
      <a-form layout="vertical">
        <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }" class="row w-full">
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-item label="First name" v-bind="validateInfos.first_name">
              <a-input v-model:value="modelRef.first_name"
                       @blur="validate('first_name', { trigger: 'blur' }).catch(() => { })"/>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-item label="Last name" v-bind="validateInfos.last_name">
              <a-input v-model:value="modelRef.last_name"
                       @blur="validate('last_name', { trigger: 'blur' }).catch(() => { })"/>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-item label="Phone" v-bind="validateInfos.phone">
              <a-input v-model:value="modelRef.phone" v-mask="'+998-##-###-##-##'"
                       @blur="validate('phone', { trigger: 'blur' }).catch(() => { })"/>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-item label="Role" v-bind="validateInfos.role">
              <a-input v-model:value="modelRef.role" disabled
                       @blur="validate('role', { trigger: 'blur' }).catch(() => { })"/>
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-item label="Start date" v-bind="validateInfos.start_date">
              <a-input v-model:value="modelRef.start_date" disabled
                       @blur="validate('start_date', { trigger: 'blur' }).catch(() => { })"/>
            </a-form-item>
          </a-col>
          <a-col :span="24">
            <a-form-item>
              <a-button class="bg-btn-default w-[218px] h-[48px]" type="primary" @click.prevent="onSubmit">Update
              </a-button>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {UserOutlined} from "@ant-design/icons-vue";
import "./profile.scss";
import {reactive, ref, watch} from 'vue';
import {useForm} from "ant-design-vue/es/form";
import {IUser} from '@/interfaces';
import {useDefault} from '@/stores/default';
import {storeToRefs} from 'pinia';
import http from "@/plugins/http";

const defaultStore = useDefault()
defaultStore.profileInfo();
const {userInfo} = storeToRefs(defaultStore);

const modelRef: IUser = reactive({
  first_name: "",
  last_name: "",
  phone: "",
  role: "",
  image: "",
  status: false,
  start_date: ""
});

const img = ref(null)

const onFileChanged = (e) => {
  img.value = e.target.files[0]
}

const uplo = async () => {
  const formData = new FormData()
  formData.append("image", img.value)
  await http.post("http://localhost:3000/api/profile/upload-image", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + localStorage.getItem("token")
    }
  }).then((res) => {
    console.log(res)
  }).catch(error => {
    console.log(error)
  })
}

watch(userInfo, () => {
  modelRef.first_name = userInfo.value.first_name
  modelRef.last_name = userInfo.value.last_name
  modelRef.image = userInfo.value.image
  modelRef.status = userInfo.value.status
  modelRef.phone = userInfo.value.phone
  modelRef.start_date = userInfo.value.start_date
  modelRef.role = userInfo.value.role
}, {deep: true})


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
  role: [
    {
      required: true,
      messag: "Please select role"
    }
  ],
  start_date: [
    {
      required: true,
      message: "Please enter start date"
    }
  ]
});

const {validate, validateInfos} = useForm(modelRef, rulesRef);

const onSubmit = () => {
  console.log(12);
}


</script>

<style scoped></style>