<template>
  <v-container>
    <h2 style="text-align: center;">Tour de France 2024 imaginé</h2>
    <br>
    <div class="countdown" style="background-color: #000; justify-content: space-evenly; height: 160px; position: relative;z-index: 100; color: #fff; display: flex; -webkit-box-align: center; align-items: center; overflow: hidden;">
      <div class="countdown__watch" style="background-image: url('../../src/assets/images/watch-tissot-transparent.png'); background-repeat: no-repeat; width: 123px; height: 160px; position: relative;">
        <div class="timer" style="position: absolute; top: 60px; width: 100%; text-align: center; font-size: 1.6rem;">
          <div class="js-countdown"><span id="cd-days"></span><br><span id="timer"></span>
            <component :is="'script'" datasrc="/js/timer.js"></component>
          </div>
        </div>
      </div>
      <div class="countdown__content" style="text-align: center;">
        <a href="https://www.tissotwatches.com/en-en/tour-de-france.html?jnbc?utm_source=aso&amp;amp;utm_medium=banner&amp;amp;utm_content=banner&amp;amp;utm_campaign=int_tour_de_france" target="_blank" data-xtclick="slider::countdown::timekeeper" data-clicktype="N" style="color: #000; text-decoration: none; background-color: transparent;">
          <img class="logo-tissot" src="/assets/images/logo_countdown.png" alt="logo tissot" style="width: 120px; vertical-align: middle;">
        </a>
        <span class="badge edition is-medium" style="font-size: 1.6rem; width: auto; margin-top: 13px; display: block; vertical-align: middle; text-transform: uppercase; font-weight: 800; color: #000; background-color: #ff0; padding: 4px 15px; line-height: 1.4;">Départ de l'édition 2024</span>
        <div class="date-from-date-to one-date" style="font-size: 1.1em; margin-top: 10px;">29 juin 2024</div>
      </div>
      <div class="countdown__logo" style="text-align: center;">
        <img src="/assets/images/gd2023_white.png" height="160">
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "HomeView"
}
</script>