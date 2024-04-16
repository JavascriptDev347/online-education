<template>
  <div class="group__card">
    <div class="group__card-head">
      <h3>Nomi : {{ group.name }}</h3>
      <p>Xonasi : {{ group.room.name }} <span>Sig'imi :{{ group.room.size }}</span></p>
    </div>
    <div class="group__card-body">
      <p>Kurs nomi : {{ group.course.name }}</p>
      <p>Studentlar soni : {{ group.student_count }} ta</p>
    </div>
    <div class="group__card-footer">
      <p>Boshlangan sanasi : {{ moment(group.start_date).format('MMMM Do YYYY, h:mm:ss a') }}</p>
    </div>
    <router-link to="/" class="group__card-arrow">
      <img :src="arrow" alt="Arrow"/>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import {IGroup} from "@/interfaces";
import moment from "moment";
import arrow from "@/assets/img/png/arrow-right.png"

defineProps({
  group: {
    type: Object as () => IGroup
  }
})
</script>

<style scoped lang="scss">
.group__card {
  min-width: 348px;
  width: 100%;
  background: #fff;
  padding: 24px 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &-head {
    display: flex;
    flex-direction: column;
    gap: 8px;

    h3 {
      font-size: 16px;
      font-weight: 600;
      color: #171822;
      line-height: 20px;
    }

    p {
      color: #394456;
      font-size: 16px;
    }
  }

  &-body {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  &-arrow {
    display: flex;
    justify-content: end;
  }
}
</style>