<template>
  <div class="root-container_didYouKnow">
    <Header />

    <h1>Le saviez-vous ?</h1>

    <ArticleFeed :articles="articles"></ArticleFeed>

    <p></p>

    <Footer />
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/tous-les-articles.scss";
</style>

<script>
import articlesQuery from "~/apollo/queries/articles/articles";

export { didYouKnow };

let didYouKnow;
const categoryName = "vous";

if (typeof window !== "undefined") {
  if (document.querySelector(".root-container_didYouKnow") !== null) {
    didYouKnow = categoryName;
  } else if (document.querySelector(".root-container_didYouKnow") !== null) {
    didYouKnow = undefined;
  }

  window.addEventListener("visibilitychange", () => {
    if (document.querySelector(".root-container_didYouKnow") !== null) {
      didYouKnow = categoryName;
    } else if (document.querySelector(".root-container_didYouKnow") !== null) {
      didYouKnow = undefined;
    }
  });
}

export default {
  head() {
    if (this.$i18n.locale == "fr") {
      return {
        title: "Le saviez-vous ? | MH info",
        meta: [
          {
            hid: "description",
            name: "description",
            content:
              'Vous trouverez ici les "Le saviez-vous ?" de MH info, des courtes réponses à des questions de la vie de tous les jours. Bonne lecture !',
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
