<template>
  <!-- eslint-disable -->
  <section class="container mt-10">
    <h1 class="font-bold text-4xl text-center font-sans text-gray-700">
      Tournament
    </h1>

    <button
      @click="isOpen = true"
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

    <!-- Call compnent modal -->
    <teleport to="body">
      <div v-if="isOpen">
        <ModalAddTournament @closeModalTournament="closeModalTournament" @addNewTournament="addNewTournament" />
      </div>
    </teleport>

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
                <tr
                  class="border-b"
                  v-for="(item, index) in tournaments"
                  :key="index"
                >
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
                    <img :src="item.image" class="w-24 h-24 rounded-full" />
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
                    {{ item.name }}
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
import { defineComponent, ref, onMounted } from "vue";

// Services
import TournamentService from "../services/TournamentService";

// components
import ModalAddTournament from "../components/ModalAddTournament.vue";

export default defineComponent({
  name: "TournamentView",
  setup() {
    // Vars
    let tournaments = ref([] as any[]);
    let isOpen = ref(false);

    // Methods
    const loadTournaments = async () => {
      tournaments.value = await TournamentService.getAll();
    };

    const closeModalTournament = () => {
      isOpen.value = false;
    };

    const addNewTournament = async (event: any) => {
      const item = await TournamentService.save(event);
      tournaments.value.push(item);

      isOpen.value = false;
    };

    // Mounted
    onMounted(async () => {
      await loadTournaments();
    });

    return {
      tournaments,
      isOpen,
      addNewTournament,
      closeModalTournament,
    };
  },
  components: {
    ModalAddTournament,
  },
});
</script>
