<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
    default: '',
  },
  edad: {
    type: Number,
    required: true,
    default: null,
  },
  personas: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const pepe = defineEmits(['aumentarValor', 'disminuirValor']);

const aumentar = () => pepe('aumentarValor');
const disminuir = () => pepe('disminuirValor');
</script>

<template>
  <div>
    <p>
      {{
        `Hola soy ${props.name}, estoy en la iglesia y tengo ${props.edad} annos`
      }}
    </p>
    <ul>
      <li
        v-for="(persona, index) in props.personas"
        :key="index"
      >
        {{ persona }}
      </li>
    </ul>
    <button @click="aumentar">aumentar</button>
    <button @click="disminuir">disminuir</button>
  </div>
</template>

<style scoped></style>
