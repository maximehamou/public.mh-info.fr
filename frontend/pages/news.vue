<template>
  <div class="root-container_news">
    <Header />

    <h1>Actualités</h1>

    <ArticleFeed :articles="articles"></ArticleFeed>

    <Footer />
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/actualites.scss";
</style>

<script>
import articlesQuery from "~/apollo/queries/articles/articles";

export { news };

let news;
const categoryName = "actualites";

if (typeof window !== "undefined") {
  if (document.querySelector(".root-container_news") !== null) {
    news = categoryName;
  } else if (document.querySelector(".root-container_news") !== null) {
    news = undefined;
  }

  window.addEventListener("visibilitychange", () => {
    if (document.querySelector(".root-container_news") !== null) {
      news = categoryName;
    } else if (document.querySelector(".root-container_news") !== null) {
      news = undefined;
    }
  });
}

export default {
  head() {
    if (this.$i18n.locale == "fr") {
      return {
        title: "Actualités | MH info",
        meta: [
          {
            hid: "description",
            name: "description",
            content:
              "Vous trouverez ici les articles d'actualités de MH info. Bonne lecture !",
          },
        ],
      };
    }
  },
  methods: {
    onBeforeUnLoad() {
      window.onbeforeunload = function () {
        localStorage.setItem("theme", currentTheme);
      };
    },
  },
  data() {
    return {
      articles: {
        data: [],
      },
    };
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery,
      variables() {
        return {
          i18nLocale: this.$i18n.locales.find(
            (locale) => locale.code === this.$i18n.locale
          ).iso,
        };
      },
    },
  },
};
</script>
