<template>
  <ul style="display: inline-flex">
    <li>
      <a>Parcours</a>
      <ul>
        <li>
          <a></a>
        </li>
        <li>
          <a></a>
        </li>
        <li>
          <a></a>
        </li>
      </ul>
    </li>
    <li><a href="/carte-TDF-2024">Carte</a></li>
    <li>
      <a>Équipes</a>
      <ul>
        <li>
          <a></a>
        </li>
        <li>
          <a></a>
        </li>
        <li>
          <a></a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "NavbarApp",
  data: () => ({
    //
  }),
  computed: {
    ...mapState(['etapes']),
    ...mapState(['equipes'])
  }
}
</script>