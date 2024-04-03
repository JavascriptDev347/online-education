<template>
  <div class="dashboard bg-white dark:bg-[#000] ">
    <div class="dashboard_card bg-[#F6F7FB] dark:bg-[#14151B]">
      <div class="dashboard_card-img">
        <Icon icon="eos-icons:role-binding-outlined" width="74px" height="74px"/>
      </div>
      <div class="dashboard_card-title ">
        <h3>Name : <span class="text-text-active font-semibold uppercase dark:text-white">Roles</span></h3>
        <p>Total : <span class="text-text-active font-semibold dark:text-white">{{ roles.length }}</span> ta </p>
      </div>
    </div>

    <div class="dashboard_card bg-[#F6F7FB] dark:bg-[#14151B]">
      <div class="dashboard_card-img">
        <Icon icon="ph:users-bold" width="74px" height="74px"/>
      </div>
      <div class="dashboard_card-title">
        <h3>Name : <span class="text-text-active font-semibold uppercase dark:text-white">Staffs</span></h3>
        <p>Total : <span class="text-text-active font-semibold dark:text-white">{{ staffs?.count }}</span> ta </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useDirectorStore} from '@/stores/director/director';
import {useRolesStore} from '@/stores/roles/roles';
import {Icon} from '@iconify/vue';
import {storeToRefs} from 'pinia';
import {onMounted} from 'vue';

const {roles} = storeToRefs(useRolesStore());
const {staffs} = storeToRefs(useDirectorStore())

onMounted(async () => {
  await useRolesStore().getAllRole()
  await useDirectorStore().getAllStaffs()
});


</script>

<style scoped lang="scss">
.dashboard {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  border-radius: 10px;
  padding: 24px 20px;
  justify-content: space-around;

  &_card {
    display: flex;
    gap: 20px;
    border-radius: 10px;
    width: 348px;
    height: 124px;
    padding: 24px 20px;

    &-img {
      color: theme("colors.text.active");
    }

    &-title {
      color: theme("colors.text.default")
    }
  }
}
</style>