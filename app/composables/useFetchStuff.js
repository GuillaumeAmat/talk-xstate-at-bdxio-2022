export const useFetchStuff = () => {
  const loading = ref(false);
  const error = ref();
  const data = ref([]);

  const fetch = () =>
    new Promise((resolve) => {
      loading.value = true;

      setTimeout(() => {
        loading.value = false;

        data.value.push(
          ...[
            {
              id: "e6036cd7-9f87-4eaa-9d36-c1e61649592a",
              title: "Gordon Freeman",
            },
            {
              id: "a2bcb4e8-19e6-4d2b-9519-3338a602a876",
              title: "Barney Calhoun",
            },
            {
              id: "8c066d27-5640-4ba1-a585-d47ce614bb61",
              title: "Adrian Shephard",
            },
            { id: "fe4a1914-e4ba-4b99-8a1a-7f26a1f90a38", title: "Gina Cross" },
            {
              id: "6249da4e-7807-4f0d-a45d-e063d520a2d9",
              title: "Colette Green",
            },
            {
              id: "b3bf1eb1-c116-400c-a4b2-270129f910f7",
              title: "Richard Keller",
            },
            {
              id: "b3208c15-1cf6-4597-b03b-9b691013d622",
              title: "Walter Bennet",
            },
          ]
        );

        resolve(data.value);
      }, 2_000);
    });

  return {
    data,
    error,
    fetch,
    loading,
  };
};
