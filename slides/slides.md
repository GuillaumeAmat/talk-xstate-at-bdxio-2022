---
# colorSchema: light
theme: default
# https://sli.dev/custom/highlighters.html
highlighter: shiki
lineNumbers: true
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS
css: windicss
layout: intro
---

# Still not<br>into State Machines<br>in 2023?!

---

<Split>
<template #left>

```vue {all|1-4|6-26|all}
<script setup>
  const { data, error, fetch, loading } = useFetchStuff();
  onMounted(fetch);
</script>

<template>
  <main v-if="loading">
    Loading ⏳
  </main>

  <main v-if="error">
    Ah! My bad ✋
  </main>

  <main v-if="data">
    <ul>
      <li v-for="item in data" :key="item.id">
        {{ item.title }}
      </li>
    </ul>

    <button @click="fetch">
      More! 🚀
    </button>
  </main>
</template>
```

</template>
</Split>

---

<Split>
<template #left>

```vue {7,11,15|2,22-24|7-9,15-25|11-13,15-25|all}
<script setup>
  const { data, error, fetch, loading } = useFetchStuff();
  onMounted(fetch);
</script>

<template>
  <main v-if="loading">
    Loading ⏳
  </main>

  <main v-if="error">
    Ah! My bad ✋
  </main>

  <main v-if="data">
    <ul>
      <li v-for="item in data" :key="item.id">
        {{ item.title }}
      </li>
    </ul>

    <button @click="fetch">
      More! 🚀
    </button>
  </main>
</template>
```

</template>
<template #right>

  - Broken/impossible states

</template>
</Split>

---

<Split>
<template #left>

```vue {7,11,15}
<script setup>
  const { data, error, fetch, loading } = useFetchStuff();
  onMounted(fetch);
</script>

<template>
  <main v-if="loading">
    Loading ⏳
  </main>

  <main v-if="!loading && error">
    Ah! My bad ✋
  </main>

  <main v-if="!loading && !error && data">
    <ul>
      <li v-for="item in data" :key="item.id">
        {{ item.title }}
      </li>
    </ul>

    <button @click="fetch">
      More! 🚀
    </button>
  </main>
</template>
```

</template>
<template #right>

  - Broken/impossible states

</template>
</Split>

---

<Split>
<template #left>

```vue
<script setup>
  const { data, error, fetch, loading } = useFetchStuff();
  onMounted(fetch);
</script>

<template>
  <main v-if="loading">
    Loading ⏳
  </main>

  <main v-if="!loading && error">
    Ah! My bad ✋
  </main>

  <main v-if="!loading && !error && data">
    <ul>
      <li v-for="item in data" :key="item.id">
        {{ item.title }}
      </li>
    </ul>

    <button @click="fetch">
      More! 🚀
    </button>
  </main>
</template>
```

</template>
<template #right>

  - Broken/impossible states
  - Readability issue
  - Tooling workaround
  - Low level logic leaks in the view
  - With a finer UX, it gets worse

</template>
</Split>

---

<Split>
<template #left>

```vue {all|7,16|9-12,22|all}
<script setup>
  import { onMounted, ref } from 'vue'

  const { data, error, fetch, loading } = useFetchStuff();
  onMounted(fetch);

  const isFirstFetch = ref(true);

  const customFetch = () => {
    isFirstFetch.value = false;
    return fetch();
  };
</script>

<template>
  <main v-if="loading && isFirstFetch"><!-- [...] --></main>

  <main v-if="!loading && error"><!-- [...] --></main>

  <main v-if="!loading && !error && data">
    <!-- [...] -->
    <button @click="customFetch"><!-- [...] --></button>
  </main>
</template>
```

</template>
<template #right>

  - Broken/impossible states
  - Readability issue
  - Tooling workaround
  - Low level logic leaks in the view
  - With a finer UX, it gets worse
  - Oh no

</template>
</Split>

---

<Split>
<template #left>

```vue
<template>
  <main v-if="loading && isFirstFetch"></main>

  <main v-if="!loading && error"></main>

  <main v-if="!loading && !error && data">
    <button @click="customFetch"></button>
  </main>
</template>
```

<div class="flex justify-center">
  <mdi:arrow-down-bold />
</div>

```vue
<template>
  <main v-if="isInInitialLoadingState"></main>

  <main v-if="isInLoadingFailedState"></main>

  <main v-if="isInDisplayDataState">
    <button @click="fetchMorePlease"></button>
  </main>
</template>
```

</template>
<template #right>
<aside class="self-center">

  - Declarative over imperative
  - No implementation details
  - No coupling with the tools

</aside>
</template>
</Split>

---
layout: section
---

# Behavior driven

Designing the behavior logic surfaces product and UX issues, avoids the implementation leak

---
class: p-1
layout: iframe
url: "https://stately.ai/registry/editor/0edc71a7-d70f-4f09-9823-deb647cb316a?machineId=7dc3bb85-1704-4d87-9d52-ba2241d41149"
---

---
layout: section
---

# Then! We code

TDD is just a step ahead, by the way

---
layout: iframe-right
url: "https://xstate.js.org/docs/guides/introduction-to-state-machines-and-statecharts/#states"
---

# State machines 101

- A state describe the current shape of the application
- Finite number of states
- Only in one state at any given time
  - No broken/impossible state
- Only one _initial_ state
- Multiple _final_ states
- No undesired transition

---
layout: iframe-right
url: "https://xstate.js.org/"
---

# XState 101

- https://xstate.js.org/
- Library created by David KHOURSHID
  - Ex-Microsoft, Stately founder
  - a.k.a. [@DavidKPiano](https://twitter.com/DavidKPiano)
- Handle state machines and _statecharts_
  - Hierarchy: parent/child states (compound)
  - Concurrency: parallel states
  - Communication: inter-connected machines
- Multiple framework variants
- Light version available (@xstate/fsm)
- VSCode extension: Stately Editor + TypeGen

---
layout: section
---

# Context & Actions

State management alongside the business logic

---
layout: section
---

# And beyond

Entry/exit actions, guards, delayed transitions, auto-generated tests

---
layout: center
class: text-center
---

# Guillaume AMAT

<p class="!opacity-100">Front-end Engineer at Back Market 💚</p>

<div class="mt-10">

  [https://backmarket.fr](https://backmarket.fr)

</div>

<div class="grid grid-cols-3 mt-24">
  <div>

  <mdi-github /><br>[@GuillaumeAmat](https://github.com/GuillaumeAmat)

  </div>
  <div>

  <mdi-mastodon /><br>[@GuillaumeAmat@mastodon.social](https://mastodon.social/@GuillaumeAmat)

  </div>
  <div>

  <mdi-twitter /><br>[@guillaume_amat](https://twitter.com/guillaume_amat)

  </div>
</div>

---
layout: center
class: text-center
---

<div class="flex justify-center">
  <img width="400" src="/qr.png" />
</div>

https://openfeedback.io/r46KviPgLYMQfQnFpaGS/2022-10-31/541