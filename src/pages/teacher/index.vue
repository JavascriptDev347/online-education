<template>
  <div class="groups">
    <div v-for="group in groups['groups']" :key="group._id">
      <GroupCard :group="group"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useTeacherStore} from "@/stores/teacher/teacher";
import {storeToRefs} from "pinia";
import GroupCard from "@/components/card/GroupCard.vue";

useTeacherStore().getTeacherGroups();
const {groups} = storeToRefs(useTeacherStore())
</script>

<style scoped lang="scss">
.groups {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
</style>