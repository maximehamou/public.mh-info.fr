<template>
  <div>
    <header class="desktop-menu" @click="onBeforeUnLoad">
      <nav v-if="$i18n.locale == 'fr'" class="container-menuFR">
        <a :href="localePath('index', 'fr')" class="accueil inactive">
          Accueil
        </a>
        <a
          :href="localePath('all-articles', 'fr')"
          class="tous-les-articles"
          id="inactive"
        >
          Tous les articles
        </a>
        <a :href="localePath('sciences', 'fr')" class="sciences inactive">
          Sciences
        </a>
        <a :href="localePath('news', 'fr')" class="actualites inactive">
          Actualités
        </a>
        <a :href="localePath('history', 'fr')" class="histoire inactive">
          Histoire
        </a>
        <a :href="localePath('books', 'fr')" class="livres" id="inactive">
          Livres
        </a>
        <a
          :href="localePath('did-you-know', 'fr')"
          class="le-saviez-vous inactive"
        >
          Le saviez-vous ?
        </a>
        <a :href="localePath('archives', 'fr')" class="archives inactive">
          Archives
        </a>
        <!-- À changer -->
        <a href="/#s-abonner">S'abonner</a>
        <a href="/#contact">Contact</a>
        <!--  -->
        <a :href="switchLocalePath('en')">
          <i class="fa-solid fa-language"></i> English
        </a>
        <i class="fa-solid fa-circle-half-stroke mode" @click="modeOnClick"></i>
      </nav>

      <nav v-if="$i18n.locale == 'en'" class="container-menuEN">
        <a :href="localePath('index', 'en')" class="home inactive">Home</a>
        <a
          :href="localePath('all-articles', 'en')"
          class="all-articles inactive"
        >
          All articles
        </a>
        <a :href="localePath('sciences', 'en')" class="sciences inactive"
          >Sciences</a
        >
        <!-- À changer -->
        <a href="/en/#s-abonner">Subscribe</a>
        <a href="/en/#contact">Contact</a>
        <!--  -->
        <a :href="switchLocalePath('fr')">
          <i class="fa-solid fa-language"></i> Français
        </a>
        <i class="fa-solid fa-circle-half-stroke mode" @click="modeOnClick"></i>
      </nav>
    </header>

    <header class="mobile-menu">
      <nav>
        <i class="fa-solid fa-bars menu-icon" onclick="liensDisplayFlex()"></i>

        <div class="liens" v-if="$i18n.locale == 'fr'">
          <i class="fa-solid fa-xmark close-icon" onclick="closeMenu()"></i>

          <a
            :href="localePath('index', 'fr')"
            onclick="closeMenu()"
            class="accueil"
            id="inactive"
          >
            Accueil
          </a>
          <a
            :href="localePath('all-articles', 'fr')"
            onclick="closeMenu()"
            class="tous-les-articles inactive"
          >
            Tous les articles
          </a>
          <a
            :href="localePath('sciences', 'fr')"
            onclick="closeMenu()"
            class="sciences inactive"
          >
            Sciences
          </a>
          <a
            :href="localePath('news', 'fr')"
            onclick="closeMenu()"
            class="actualites inactive"
          >
            Actualités
          </a>
          <a
            :href="localePath('history', 'fr')"
            onclick="closeMenu()"
            class="histoire inactive"
          >
            Histoire
          </a>
          <a
            :href="localePath('books', 'fr')"
            onclick="closeMenu()"
            class="livres inactive"
          >
            Livres
          </a>
          <a
            :href="localePath('did-you-know', 'fr')"
            onclick="closeMenu()"
            class="le-saviez-vous inactive"
          >
            Le saviez-vous ?
          </a>
          <a :href="localePath('archives', 'fr')" class="archives inactive"
            >Archives</a
          >
          <a href="/fr/#s-abonner/" onclick="closeMenu()">S'abonner</a>
          <a href="/fr/#contact/" onclick="closeMenu()">Contact</a>
          <a :href="switchLocalePath('en')" onclick="closeMenu()">
            <i class="fa-solid fa-language"></i> English
          </a>
          <i
            class="fa-solid fa-circle-half-stroke mode"
            @click="modeOnClick"
          ></i>
        </div>

        <div class="liens" v-if="$i18n.locale == 'en'">
          <i class="fa-solid fa-xmark close-icon" onclick="closeMenu()"></i>

          <a
            :href="localePath('index', 'en')"
            onclick="closeMenu()"
            class="home inactive"
          >
            Home
          </a>
          <a
            :href="localePath('all-articles', 'en')"
            onclick="closeMenu()"
            class="all-articles inactive"
          >
            All articles
          </a>
          <a
            :href="localePath('sciences', 'en')"
            onclick="closeMenu()"
            class="sciences inactive"
          >
            Sciences
          </a>
          <a href="/en/#s-abonner/" onclick="closeMenu()">S'abonner</a>
          <a href="/en/#contact/" onclick="closeMenu()">Contact</a>
          <a :href="switchLocalePath('fr')" onclick="closeMenu()">
            <i class="fa-solid fa-language"></i> Français
          </a>
          <i
            class="fa-solid fa-circle-half-stroke mode"
            @click="modeOnClick"
          ></i>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  methods: {
    modeOnClick() {
      let modeClicks = 1;
      let numberOfClicks = modeClicks++;

      if (
        window.getComputedStyle(document.body).backgroundColor ==
        "rgb(250, 251, 252)"
      ) {
        numberOfClicks = modeClicks - 1;

        if (
          window.getComputedStyle(document.body).backgroundColor ==
          "rgb(34, 34, 34)"
        ) {
          numberOfClicks = modeClicks + 1;
        }
      }

      if (
        window.getComputedStyle(document.body).backgroundColor ==
        "rgb(34, 34, 34)"
      ) {
        numberOfClicks = numberOfClicks + 1;

        if (
          window.getComputedStyle(document.body).backgroundColor ==
          "rgb(250, 251, 252)"
        ) {
          numberOfClicks = modeClicks - 1;
        }
      }

      if (numberOfClicks % 2 !== 0) {
        darkMode();
      } else if (numberOfClicks % 2 == 0) {
        lightMode();
      }

      Vue.prototype.$currentTheme = localStorage.getItem("theme");
    },

    onBeforeUnLoad() {
      window.onbeforeunload = function () {
        localStorage.setItem("theme", currentTheme);
      };
    },
  },
  mounted() {
    let linkOfLocaleSwitcherLink =
      document.querySelector("nav > a:has(>i)").href;
    const linkPathname = new URL(linkOfLocaleSwitcherLink).pathname;
    if (linkPathname == window.location.pathname) {
      document.querySelector("nav > a:has(>i)").href = "/en/";
    }

    const linksToArticles = document.querySelector(
      ".card, .recent-article-feed"
    );

    if (this.$i18n.locale == "fr" && linksToArticles !== null) {
      linksToArticles.innerHTML = linksToArticles.innerHTML.replaceAll(
        'href="/locale',
        'href="'
      );
    }
    if (this.$i18n.locale == "en" && linksToArticles !== null) {
      linksToArticles.innerHTML = linksToArticles.innerHTML.replaceAll(
        'href="/locale',
        'href="/en'
      );
    }
  },
};
</script>
