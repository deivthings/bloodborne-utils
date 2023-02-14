<template>
  <article>
    <h1>game</h1>
    <div v-for="card in enemyActionsDeck" :key="card.id">
      {{ card }}
    </div>
  </article>
</template>
<script setup>
import { ref } from 'vue';

const enemyActionsDeck = ref([
  'basic',
  'basic',
  'basic',
  'special',
  'special',
  'capacity'
])

</script>