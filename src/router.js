import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";


import Business from "./views/Business.vue";
import Portfolio from "./views/Portfolio.vue";
import Introduce from "./views/Introduce.vue";
import Location from "./views/Location.vue";
import Profile from "./views/Profile.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "business",
      components: {
        header: AppHeader,
        default: Business,
        footer: AppFooter
      }
    },
    {
      path: "/portfolio",
      name: "portfolio",
      components: {
        header: AppHeader,
        default: Portfolio,
        footer: AppFooter
      }
    },
    {
      path: "/introduce",
      name: "introduce",
      components: {
        header: AppHeader,
        default: Introduce,
        footer: AppFooter
      }
    },
    {
      path: "/location",
      name: "location",
      components: {
        header: AppHeader,
        default: Location,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
