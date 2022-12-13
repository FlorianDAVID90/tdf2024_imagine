import Vue from 'vue'
import VueRouter from 'vue-router'
import ApplicationsView from "../views/ApplicationsView";
import HomeView from "../views/HomeView";
import StageView from "../views/StageView";
import TeamView from "../views/TeamView";
import RiderView from "../views/RiderView";
import CarteView from "../views/CarteView";

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/apps/applications-mobiles',
    name: 'Mobile applications',
    component: ApplicationsView
  },
  {
    path: '/carte-TDF-2024',
    name: 'Carte officielle',
    component: CarteView
  },
  {
    path: '/etapes/etape-:id',
    name: 'Show stage',
    component: StageView
  },
  {
    path: '/teams/:team',
    name: 'Show team',
    component: TeamView
  },
  {
    path: '/rider/:id',
    name: 'Show rider',
    component: RiderView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
