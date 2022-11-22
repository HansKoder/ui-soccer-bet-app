<template>
  <!-- Navbar goes here -->
  <!-- eslint-disable -->
  <nav class="bg-white shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-7">
          <!-- Website Logo -->
          <div>
            <a href="#" class="flex items-center py-4 px-2">
              <!-- <img src="bet.png" alt="Logo" class="h-8 w-8 mr-2" /> -->
              <span class="font-semibold text-gray-500 text-lg"
                >Soccer Bet App</span
              >
            </a>
          </div>
          <!-- Primary Navbar items -->
          <div class="hidden md:flex items-center space-x-1">
            <router-link
              to="/"
              class="
                py-4
                px-2
                text-gray-500
                font-semibold
                hover:text-green-500
                transition
                duration-300
              "
              >Home</router-link
            >
            <router-link
              to="/tournament"
              class="
                py-4
                px-2
                text-gray-500
                font-semibold
                hover:text-green-500
                transition
                duration-300
              "
              >Tournament</router-link
            >
            <router-link
              to="/match"
              class="
                py-4
                px-2
                text-gray-500
                font-semibold
                hover:text-green-500
                transition
                duration-300
              "
              >Match</router-link
            >
            <router-link
              to="/football-team"
              class="
                py-4
                px-2
                text-gray-500
                font-semibold
                hover:text-green-500
                transition
                duration-300
              "
              >Football Team</router-link
            >
            <router-link
              to="/bet"
              class="
                py-4
                px-2
                text-gray-500
                font-semibold
                hover:text-green-500
                transition
                duration-300
              "
              >Bet</router-link
            >
            <router-link
              to="/about"
              class="
                py-4
                px-2
                text-gray-500
                font-semibold
                hover:text-green-500
                transition
                duration-300
              "
              >About us</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </nav>

  <!-- 
    <router-link to="/" class="navbar-item">Home</router-link>
  -->

  <router-view />
</template>
