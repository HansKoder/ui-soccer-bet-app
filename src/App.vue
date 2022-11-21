<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <!-- 
          <img
          src="https://bulma.io/images/bulma-logo2.png"
          width="112"
          height="28"
          alt="Soccer Bet"
        />
         -->
        Soccer Bet
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> More </a>

          <div class="navbar-dropdown">
            <router-link to="/tournament" class="navbar-item"
              >Tournaments</router-link
            >
            <router-link to="/football-team" class="navbar-item"
              >Football Teams</router-link
            >
            <router-link to="/match" class="navbar-item">Matches</router-link>
            <router-link to="/bet" class="navbar-item">Bets</router-link>
            <hr class="navbar-divider" />
            <a class="navbar-item"> Report an issue </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light"> Log in </a>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <section class="section">
    <router-view />
  </section>
</template>
