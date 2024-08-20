<script setup lang="ts">
import { MainListProps } from 'contract/main-list'
defineProps<MainListProps>()
</script>

<template>
  <h1 class="hello">Hello {{ tasks.length }}</h1>
</template>

<style scoped>
.hello {
  background-color: red;
}
</style>
