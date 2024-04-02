<template>
    <a-drawer title="Create a new account" class="my-drawer" :width="size ? '45%' : '100%'" :open="isOpen"
        :body-style="{ paddingBottom: '80px' }" :footer-style="{ textAlign: 'right' }" @close="onClose">
        <a-form layout="vertical">
            <a-row :gutter="16" class="row">
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
            <a-row :gutter="16" class="row">
                <a-col :span="12">
                    <a-form-item label="Role" v-bind="validateInfos.role">
                        <a-select v-model:value="modelRef.role" placeholder="please select role">
                            <a-select-option v-for=" role  in  roles " :key="role._id" :value="role._id">
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
            <a-row :gutter="16" class="my-3 row">
                <a-col :span="12">
                    <a-form-item label="Salary" v-bind="validateInfos.salary">
                        <a-input-number id="inputNumber" v-model:value="modelRef.salary" :min="1000" :max="100000" />
                    </a-form-item>
                </a-col>
                <a-col :span="12">
                    <a-form-item label="Image Url" v-bind="validateInfos.image">
                        <a-input v-model:value="modelRef.image" />
                    </a-form-item>
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
import { onMounted, reactive, ref } from 'vue';
import { Form } from 'ant-design-vue';

const { roles } = storeToRefs(useRolesStore());


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
    salary: 1000,
    image: ""
});

const screenWidth = ref(window.innerWidth);
const size = ref(false)

const updateScreenWidth = () => {
    screenWidth.value = window.innerWidth;
    if (screenWidth.value > 786) {
        size.value = true
    } else {
        size.value = false
    }
};


onMounted(() => {
    window.addEventListener('resize', updateScreenWidth);
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
    ],
    image: [
        {
            required: true,
            message: "Please enter image url"
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
        image: modelRef.image,
        salary: modelRef.salary
    })
    props.onClose()
    resetFields()
}

const onSubmit = () => {
    validate()
        .then(() => {
            createStaff();
        })
        .catch(err => {
            console.log('error', err);
        });
};

</script>

<style lang="scss" scoped>
@media(max-width:575px) {
    .row {
        flex-direction: column;

        .ant-col {
            max-width: 100% !important;
        }
    }


}
</style>