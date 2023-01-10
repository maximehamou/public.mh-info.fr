<template>
  <div class="root-container_history">
    <Header />

    <h1>Histoire</h1>

    <ArticleFeed :articles="articles"></ArticleFeed>

    <Footer />
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/histoire.scss";
</style>

<script>
import articlesQuery from "~/apollo/queries/articles/articles";

export { history };

let history;
const categoryName = "histoire";

if (typeof window !== "undefined") {
  if (document.querySelector(".root-container_history") !== null) {
    history = categoryName;
  } else if (document.querySelector(".root-container_history") !== null) {
    history = undefined;
  }

  window.addEventListener("visibilitychange", () => {
    if (document.querySelector(".root-container_history") !== null) {
      history = categoryName;
    } else if (document.querySelector(".root-container_history") !== null) {
      history = undefined;
    }
  });
}

export default {
  head() {
    if (this.$i18n.locale == "fr") {
      return {
        title: "Histoire | MH info",
        meta: [
          {
            hid: "description",
            name: "description",
            content:
              "Vous trouverez ici les articles d'histoire de MH info. Bonne lecture !",
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
