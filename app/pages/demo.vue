<script setup>
const { data, error, loading, fetch } = useFetchStuff();
onMounted(fetch);
</script>

<template>
  <main v-if="loading">Loading ⏳</main>

  <main v-if="!loading && error">Ah! My bad ✋</main>

  <main v-if="!loading && !error && data">
    <ul>
      <li v-for="item in data" :key="item.id">
        {{ item.title }}
      </li>
    </ul>

    <button @click="fetch">More! 🚀</button>
  </main>
</template>

<style type="text/css">
main {
  @apply flex flex-col gap-8 items-center justify-center min-h-screen w-screen p-10;
}

ul {
  @apply flex flex-col divide-y-2;
}

li {
  @apply px-4 py-2;
}

button {
  @apply rounded bg-blue-600 text-white font-semibold px-4 py-2;
}
</style>
