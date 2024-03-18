<template>
    <a-drawer title="Create a new account" :width="540" :open="isOpen" :body-style="{ paddingBottom: '80px' }"
        :footer-style="{ textAlign: 'right' }" @close="onClose">
        <a-form layout="vertical">
            <a-row :gutter="16">
                <a-col :span="12">
                    <a-form-item label="First name" v-bind="validateInfos.first_name">
                        <a-input v-model:value="modelRef.first_name"
                            @blur="validate('first_name', { trigger: 'blur' }).catch(() => { })" />
                    </a-form-item>
                </a-col>
                <a-col :span="12">
                    <a-form-item label="Last name" v-bind="validateInfos.last_name">
                        <a-input v-model:value="modelRef.last_name"
                            @blur="validate('last_name', { trigger: 'blur' }).catch(() => { })" />
                    </a-form-item>
                </a-col>
            </a-row>
            <a-row :gutter="16">
                <a-col :span="12">
                    <a-form-item label="Role" v-bind="validateInfos.role">
                        <a-select v-model:value="modelRef.role" placeholder="please select role">
                            <a-select-option v-for="role in roles" :key="role._id" :value="role._id">
                                {{ role.name }}
                            </a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col>
                <a-col :span=12>
                    <a-form-item label="Phone" v-bind="validateInfos.phone">
                        <a-input v-model:value="modelRef.phone" v-mask="'+998-##-###-##-##'"
                            @blur="validate('Phone', { trigger: 'blur' }).catch(() => { })" />
                    </a-form-item>
                </a-col>
            </a-row>
            <a-row :gutter="16" class="my-3">
                <a-col :span="12">
                    <a-form-item label="Salary" v-bind="validateInfos.salary">
                        <a-input-number id="inputNumber" v-model:value="modelRef.salary" :min="1000" :max="100000" />
                    </a-form-item>
                </a-col>
                <a-col :span="12">
                    <input type="file" @change="handleFileChange" />
                </a-col>

            </a-row>
            <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
                <a-button class="bg-btn-default" type="primary" @click.prevent="onSubmit">Create</a-button>
                <a-button style="margin-left: 10px" @click="resetFields">Reset</a-button>
            </a-form-item>
        </a-form>
    </a-drawer>
</template>
<script lang="ts" setup>
import { useRolesStore } from '@/stores/roles/roles';
import { useDirectorStore } from '@/stores/director/director';
import { storeToRefs } from 'pinia';
import { IDirectorReq } from '@/interfaces';
import { reactive } from 'vue';
import { Form } from 'ant-design-vue';

const { roles } = storeToRefs(useRolesStore())

const props = defineProps<{
    isOpen: boolean,
    onClose: () => void
}>()

const emit = defineEmits(['update:isOpen'])
const useForm = Form.useForm;

const modelRef: IDirectorReq = reactive({
    first_name: '',
    last_name: "",
    phone: "+998-",
    role: "",
    salary: 1000
});

const handleFileChange = (e: any) => {
    console.log("image:", e.target.files[0]);
}

const rulesRef = reactive({
    first_name: [
        {
            required: true,
            message: 'Please input first_name',
        },
        {
            min: 4,
            max: 10,
            message: 'Length should be 3 to 10',
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
            max: 10,
            message: 'Length should be 4 to 10',
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
    salary: [
        {
            required: true,
            message: "Please enter salary"
        }
    ]
});

const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef);

const createStaff = async () => {
    await useDirectorStore().createStaff({
        first_name: modelRef.first_name,
        last_name: modelRef.last_name,
        phone: modelRef.phone.split("-").join(""),
        role: modelRef.role,
        salary: modelRef.salary
    });
    props.onClose()
    resetFields()
}


const onSubmit = () => {
    validate()
        .then(() => {
            // console.log('msmsmsl', toRaw(modelRef));
            // const formData = new FormData();
            // formData.append("first_name", modelRef.first_name)
            // formData.append("last_name", modelRef.last_name)
            // formData.append("image", modelRef.image)
            // formData.append("phone", modelRef.phone.split("-").join(""))
            // formData.append("role", modelRef.role)
            // console.log("a", formData);
            createStaff()
        })
        .catch(err => {
            console.log('error', err);
        });
};

</script>
