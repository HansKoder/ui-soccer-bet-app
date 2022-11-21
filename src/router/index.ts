import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

import TournamentView from "../views/TournamentView.vue";
import FootballTeamView from "../views/FootballTeamView.vue";
import MatchView from "../views/MatchView.vue";
import BetView from "../views/BetView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/tournament",
    name: "tournament",
    component: TournamentView,
  },
  {
    path: "/football-team",
    name: "football-team",
    component: FootballTeamView,
  },
  {
    path: "/match",
    name: "match",
    component: MatchView,
  },
  {
    path: "/bet",
    name: "bet",
    component: BetView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
