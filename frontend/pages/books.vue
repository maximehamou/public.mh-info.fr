<template>
  <div class="root-container_books">
    <Header />

    <h1>Livres</h1>

    <ArticleFeed :articles="articles"></ArticleFeed>

    <Footer />
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/tous-les-articles.scss";
</style>

<script>
import articlesQuery from "~/apollo/queries/articles/articles";

export { books };

let books;
const categoryName = "livres";

if (typeof window !== "undefined") {
  if (document.querySelector(".root-container_books") !== null) {
    books = categoryName;
  } else if (document.querySelector(".root-container_books") !== null) {
    books = undefined;
  }

  window.addEventListener("visibilitychange", () => {
    if (document.querySelector(".root-container_books") !== null) {
      books = categoryName;
    } else if (document.querySelector(".root-container_books") !== null) {
      books = undefined;
    }
  });
}

export default {
  head() {
    if (this.$i18n.locale == "fr") {
      return {
        title: "Livres | MH info",
        meta: [
          {
            hid: "description",
            name: "description",
            content:
              "Vous trouverez ici les critiques de livres de MH info. Bonne lecture !",
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
