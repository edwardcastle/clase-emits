<script setup>
import { useRoute, useRouter } from 'vue-router';
import Estudiante from '@/components/Estudiante.vue';

const route = useRoute();
const router = useRouter();
const id = route.params.id;
const name = route.name;
const fullPath = route.fullPath;
</script>

<template>
  <div>
    <p>Hola soy juan</p>
    {{ id }}
    {{ name }}
    {{ fullPath }}
    <Estudiante />
  </div>
</template>

<style scoped></style>
