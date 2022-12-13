<template>
  <v-container>
    <div class="parcours">
      <h2 style="text-align: center;">Parcours 2023</h2>
      <img src="/assets/images/TDF2023Carte.png" height="814" style="display: block; margin-left: auto; margin-right: auto;">
      <h5>Total : nb km</h5>
      <br>

      <div class="table align-content-center">
        <table>
          <thead>
            <tr>
              <th>Étape</th>
              <th>Type</th>
              <th>Date</th>
              <th>Départ et arrivée</th>
              <th>Distance</th>
              <th>Détails</th>
            </tr>
          </thead>
          <tbody>
            <!-- each etape in etapes -->
              <tr>
                <td>etape.libelle_etape</td>
                <td>etape.type_etape</td>
                <td>etape.date_etape</td>
                <td>etape.villes</td>
                <td>etape.longueur + " km"</td>
                <td>
                  <a href="#" data-bs-toogle="button">etape.libelle_etape</a>
                  <!-- href='/etapes/etape-${etape.id_etape}' -->
                </td>
              </tr>
              <!-- each jour in repos -->
                <tr>
                  <td></td>
                  <td>jour.libelle_repos</td>
                  <td>jour.date_repos</td>
                  <td>jour.ville_repos</td>
                  <td></td>
                  <td>
                    <a href="/repos/repos-${jour.id_repos}" data-bs-toogle="button">"Repos " + jour.id_repos</a>
                  </td>
                </tr>
              <!-- -->
            <!-- -->
          </tbody>
        </table>
      </div>

      <hr>
      <div class="details-carte">
        <h2>Carte</h2>
        <a>Deux pays : L'Espagne et bien sûr la France figureront sur la carte du Tour de France en 2023.</a>
        <br><br>
        <a>Pour la deuxième fois de l'histoire de la Grande Boucle, 2 étapes seront tracées entièrement dans la péninsule hibérique. La première fois en 1992 avec un prologue et une étape en ligne à San Sebastian</a>
        <br>
        <a>Dans l’Hexagone, 5 Régions et 24 départements seront visités.</a>
      </div>

      <hr>
      <div class="details-etape">
        <h2>Étapes</h2>
        <a>Elles seront au nombre de 21 :</a>
        <ul style="list-style: square;">
          <li>7 étapes de plaine</li>
          <li>6 étapes accidentées avec 2 arrivées en côte (Chastreix-Sancy et Saint-Flour)</li>
          <li>6 étapes de montagne avec 5 arrivées en altitude (Piau-Engaly, Plateau de Beille, Col de Mantet, Val-Cenis et La Plagne)</li>
          <li>1 étape contre la montre en individuel</li>
          <li>1 étape contre la montre par équipes</li>
          <li>2 journées de repos</li>
        </ul>
      </div>

      <hr>
      <div class="calendar">
        <h2>Calendrier</h2>
        <a>Le Tour 2022 s’élancera le samedi 1er juillet pour aller vers le Sud-Ouest de la France après les trois jours du Grand Départ dans le Pays Basque.</a>
      </div>

      <hr>
      <div class="new-sites">
        <h2>Bienvenue...</h2>
        <a>aux 13 nouveaux sites ou villes-étapes qui accueilleront le Tour pour la première fois :</a>
        <ul style="list-style: square;">
          <li>Bilbao (départ et arrivée 1re étape)</li>
          <li>Amorebieta-Etxano (départ 3e étape)</li>
          <li>Saibt-Geours-de-Marenne (départ 4e étape)</li>
          <li>Cap Ferret (arrivée 4e étape)</li>
          <li>Chastreix-Sancy (arrivée 7e étape)</li>
          <li>Cournon-d'Auvergne (départ 8e étape)</li>
          <li>Murat (arrivée 9e étape)</li>
          <li>Laguiole (départ 10e étape)</li>
          <li>Salies-du-Salat (départ 13e étape)</li>
          <li>Col de Mantet (arrivée 15e étape)</li>
          <li>Valensole (départ 17e étape)</li>
          <li>Val-Cenis (arrivée 19e étape)</li>
          <li>Maurepas (départ 21e étape)</li>
        </ul>
      </div>

      <hr>
      <div class="massifs">
        <h2>Massifs</h2>
        <a>Massif central, Pyrénées, Alpes. Ce seront dans cet ordre les trois massifs au programme de cette 110e édition. Avec plusieurs découvertes :</a>
        <ul style="list-style: square;">
          <li>La montée de Chastreix-Sancy (1 396 m) dans le Puy-de-Dôme</li>
          <li>Le col du Légal (1230 m) dans le Cantal</li>
          <li>Le Col de Mantet (1761 m) dans les Pyrénées-Orientales</li>
          <li>La Montagne de Lure (1744 m) dans les Alpes-de-Haute-Provence</li>
          <li>La montée vers Val-Cenis (Bellecombe, 2308 m) dans le département de la Savoie</li>
        </ul>
      </div>

      <hr>
      <div class="chronos">
        <h2>Chrono</h2><a>53 km, ce sera la distance totale des deux contre-la-montre du Tour 2023 :</a><a>25,5 km en équipe lors de la cinquième étape autour de Royan</a><a>puis 27,5 km en individuel à l’occasion de la dix-huitième étape autour d'Embrun.</a>
      </div>

      <hr>
      <div class="bonifs">
        <h2>Bonifications</h2><a>Elles seront distribuées à l’arrivée de chaque étape en ligne et attribueront respectivement 10, 6 et 4 secondes aux trois premiers coureurs classés mais également au sommet de certaines difficultés de cette édition, à des endroits stratégiques.</a>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "CarteView"
}
</script>

<style scoped>

</style>