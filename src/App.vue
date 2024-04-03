<script setup lang="ts">

import {onMounted} from "vue";
import {useThemeStore} from "@/stores/theme";

onMounted(() => {
  const theme = useThemeStore()
  theme.loadTheme()
})
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
