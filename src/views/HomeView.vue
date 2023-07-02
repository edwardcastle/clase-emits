<script setup>
//ref
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Estudiante from '@/components/Estudiante.vue';
// import Persona from '@/components/Persona.vue';

let count = ref(0);
const name = ref('');
const check = ref(false);
let a = ref('victor');
const b = ref('gonzalez');
const edad = ref(98);

const arr = ref(['asdf', 5454, true, null]);

const team = ref({
  name: 'alvaro',
  edad: 98,
});

const arrObj = ref([
  {
    name: 'eduardo',
    edad: 28,
  },
  {
    name: 'alavaro',
    edad: 57,
  },
  {
    name: 'victor',
    edad: 98,
  },
]);

// function suma(a, b) {
//   return a + b;
// }

const suma = (a, b) => a + b;
const showResults = () => alert(name.value + check.value);

// router

const router = useRouter();

const changeRoute = () => router.push({ name: 'juan', params: { id: 126 } });

const increaseCount = () => count.value++;
const decreaseCount = () => count.value--;
</script>

<template>
  <!-- v-if v-else v-else-if v-bind  v-on v-model v-for -->
  <main>
    <div>
      <ul>
        <li
          v-for="(team, index) in arrObj"
          :key="index"
        >
          {{ team }}
          {{ index }}
        </li>
      </ul>
      <hr />
      nombre
      <input
        v-model="name"
        type="text"
      />
      <br />
      aceptas terminos
      <input
        v-model="check"
        type="checkbox"
      />
      <br />
      <button @click="showResults">submit</button>
      <hr />
      <button @click="changeRoute()">change route</button>
      <hr />
      <Estudiante
        :name="a"
        :edad="456"
        :personas="arrObj"
        @aumentar-valor="increaseCount"
        @disminuir-valor="decreaseCount"
      />
      count: {{ count }}
    </div>
  </main>
</template>

<style scoped></style>
