<template>
  <v-app>
    <v-app-bar>
      <header>
        <a class="d-flex align-center" id="logos" href="/">
          <img
              alt="Tour de France Logo"
              class="shrink mr-2 image_nav"
              contain
              src="/assets/images/tdf_logo.png"
              transition="scale-transition"
              width="40"
          />
          <br>
          <img
              alt="UCI Logo"
              class="shrink mr-2 image_nav_uci"
              contain
              src="/assets/images/logo-uci.png"
              transition="scale-transition"
              width="40"
          />
        </a>

        <v-spacer></v-spacer>
        <NavbarApp></NavbarApp>
        <v-spacer></v-spacer>

        <i class="icon icon--account btn-account__icon"></i>
        <span class="btn-account__text">Je me connecte</span>

      </header>
    </v-app-bar>
  </v-app>

  <v-main>
    <router-view/>
  </v-main>

  <v-footer>
    <div class="bggg">
      <h1 class="text-center">Nous suivre</h1>
      <SocialNetworks></SocialNetworks>
    </div>
  </v-footer>
</template>

<script>
import {mapActions} from 'vuex'
import SocialNetworks from "./components/SocialNetworks";
import NavbarApp from "./components/NavbarApp";

export default {
  name: 'App',
  components: {NavbarApp, SocialNetworks},
  data: () => ({
    //
  }),
  methods: {
    ...mapActions(['getAllEtapes']),
    ...mapActions(['getAllTeams'])
  },
  mounted() {
    this.getAllEtapes()
    this.getAllTeams()
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Faster+One&display=swap');
@import "../public/css/styles.css";
@import "../public/css/navbar.css";
</style>
