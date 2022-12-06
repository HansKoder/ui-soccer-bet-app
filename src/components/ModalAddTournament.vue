<template>
  <!-- eslint-disable -->

  <!-- Modal add tournament -->
  <div id="modal-component-container" class="fixed inset-0">
    <div
      class="
        modal-flex-container
        flex
        items-end
        justify-center
        min-h-screen
        pt-4
        px-4
        pb-20
        text-center
        sm:block sm:p-0
      "
    >
      <div
        class="modal-bg-container fixed inset-0 bg-gray-700 bg-opacity-75"
      ></div>
      <div
        class="
          modal-space-container
          hidden
          sm:inline-block sm:align-middle sm:h-screen
        "
      >
        &nbsp;
      </div>
      <div
        class="
          modal-container
          inline-block
          align-bottom
          bg-white
          rounded-lg
          text-left
          overflow-hidden
          shadow-xl
          transform
          transition-all
          sm:my-8 sm:align-middle sm:max-w-lg
          w-full
        "
      >
        <div class="modal-wrapper bg-white px-4 pt-5 pb-4 sm:p-2 sm:pb-4">
          <div class="modal-wrapper-flex sm:flex sm:items-start">
            <div class="modal-content mt-3 sm:mt-0 sm:ml-4 sm:text-left w-full">
              <h3 class="text-lg font-medium text-gray-900 text-center">
                Form
              </h3>
              <div class="modal-text mt-2 w-full p-1">
                <div class="w-full">
                  <form class="px-8 mt-10">
                    <div class="mb-4">
                      <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="image"
                      >
                        Image
                      </label>
                      <input
                        class="
                          shadow
                          appearance-none
                          border
                          rounded
                          w-full
                          py-2
                          px-3
                          text-gray-700
                          leading-tight
                          focus:outline-none focus:shadow-outline
                        "
                        id="image"
                        type="text"
                        placeholder="Image"
                        v-model="tournament.image"
                      />
                    </div>
                    <div class="mb-4">
                      <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="name"
                      >
                        Name
                      </label>
                      <input
                        class="
                          shadow
                          appearance-none
                          border
                          rounded
                          w-full
                          py-2
                          px-3
                          text-gray-700
                          leading-tight
                          focus:outline-none focus:shadow-outline
                        "
                        id="name"
                        type="text"
                        placeholder="Name"
                        v-model="tournament.name"
                      />
                    </div>
                    <div class="mb-4">
                      <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="description"
                      >
                        Description
                      </label>
                      <input
                        class="
                          shadow
                          appearance-none
                          border
                          rounded
                          w-full
                          py-2
                          px-3
                          text-gray-700
                          leading-tight
                          focus:outline-none focus:shadow-outline
                        "
                        id="description"
                        type="text"
                        placeholder="Description"
                        v-model="tournament.description"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="
            modal-actions
            bg-gray-50
            px-4
            py-3
            sm:px-6 sm:flex sm:flex-row-reverse
          "
        >
          <button
            id="close-modal"
            @click="notify"
            class="
              w-full
              inline-flex
              justify-center
              rounded-md
              border border-transparent
              shadow-md
              px-4
              py-2
              mt-3
              bg-white
              font-medium
              text-gray-700
              hover:bg-gray-200
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-blue-200
              sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm
            "
          >
            Cancel
          </button>
          <button
            class="
              w-full
              inline-flex
              justify-center
              rounded-md
              border border-transparent
              shadow-md
              px-4
              py-2
              bg-blue-300
              font-medium
              text-white
              font-bold
              hover:bg-blue-400
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-blue-200
              sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm
            "
            @click="addNewTournament"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModalAddTournament",
  setup(props, { emit }) {
    const tournament = {
      name: "",
      description: "",
      image: "",
    };

    const notify = () => {
      emit("closeModalTournament");
    };

    const addNewTournament = () => {
      emit("addNewTournament", tournament);
    };

    return {
      tournament,
      notify,
      addNewTournament,
    };
  },
});
</script>
