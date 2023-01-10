<template>
  <div class="root-container_allArticles">
    <Header />

    <h1 v-if="$i18n.locale == 'fr'">Tous les articles</h1>
    <h1 v-if="$i18n.locale == 'en'">All articles</h1>

    <ArticleFeed :articles="articles"></ArticleFeed>

    <Footer />
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/tous-les-articles.scss";
</style>

<script>
import articlesQuery from "~/apollo/queries/articles/articles";

export { allArticles };

let allArticles;
const categoryName = "article";

if (typeof window !== "undefined") {
  if (document.querySelector(".root-container_allArticles") !== null) {
    allArticles = categoryName;
  } else if (document.querySelector(".root-container_allArticles") !== null) {
    allArticles = undefined;
  }

  window.addEventListener("visibilitychange", () => {
    if (document.querySelector(".root-container_allArticles") !== null) {
      allArticles = categoryName;
    } else if (document.querySelector(".root-container_allArticles") !== null) {
      allArticles = undefined;
    }
  });
}

export default {
  head() {
    if (this.$i18n.locale == "fr") {
      return {
        title: "Tous les articles | MH info",
        meta: [
          {
            hid: "description",
            name: "description",
            content:
              "Vous trouverez ici l'ensemble des articles de MH info. Bonne lecture !",
          },
        ],
      };
    } else if (this.$i18n.locale == "en") {
      return {
        title: "All articles | MH info",
        meta: [
          {
            hid: "description",
            name: "description",
            content:
              "You will find here the whole of the articles of MH info. Enjoy your reading!",
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
