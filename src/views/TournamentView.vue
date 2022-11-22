<template>
  <!-- eslint-disable -->
  <section class="container mt-10">
    <h1 class="font-bold text-4xl text-center font-sans text-gray-700">
      Tournament
    </h1>

    <button
      class="
        bg-sky-500/75
        hover:bg-sky-500/100
        text-white
        font-bold
        py-2
        px-4
        rounded
      "
    >
      Add Tournament
    </button>

    <div class="flex flex-col mt-8">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class="border-b">
                <tr>
                  <th
                    scope="col"
                    class="
                      text-sm
                      font-medium
                      text-gray-900
                      px-6
                      py-4
                      text-left
                    "
                  ></th>
                  <th
                    scope="col"
                    class="
                      text-sm
                      font-medium
                      text-gray-900
                      px-6
                      py-4
                      text-left
                    "
                  >
                    Tournament
                  </th>
                  <th
                    scope="col"
                    class="
                      text-sm
                      font-medium
                      text-gray-900
                      px-6
                      py-4
                      text-left
                    "
                  >
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b" v-for="(item, index) in tournaments" :key="index">
                  <td
                    class="
                      px-6
                      py-4
                      whitespace-nowrap
                      text-sm
                      font-medium
                      text-gray-900
                    "
                  >
                    <img
                      :src="item.image"
                      class="w-24 h-24 rounded-full"
                    />
                  </td>
                  <td
                    class="
                      text-sm text-gray-900
                      font-light
                      px-6
                      py-4
                      whitespace-nowrap
                    "
                  >
                     {{ item.title }}
                  </td>
                  <td
                    class="
                      text-sm text-gray-900
                      font-light
                      px-6
                      py-4
                      whitespace-nowrap
                    "
                  >
                    {{ item.description }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TournamentView",
  setup() {
    // make users variable reactive with the ref() function
    const tournaments = ref([
      {
        image: "https://cdn.dribbble.com/users/84058/screenshots/7194795/1.jpg",
        title: "Qatar 2022",
        description: "La copa mundial de futbol de la FIFA Catar 2022",
      },
      {
        image: "https://cdn.dribbble.com/users/84058/screenshots/7194795/1.jpg",
        title: "Qatar 2025",
        description: "La copa mundial de futbol de la FIFA Catar 2022",
      },
    ]);

    return {
      tournaments,
    };
  },
});
</script>
