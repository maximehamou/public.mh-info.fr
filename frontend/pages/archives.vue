<template>
  <div class="root-container_archives">
    <Header />

    <h1>Archives</h1>

    <ArticleFeed :articles="articles"></ArticleFeed>

    <Footer />
  </div>
</template>

<style lang="scss">
@import "../scss/archives.scss";
</style>

<script>
import articlesQuery from "~/apollo/queries/articles/articles";

export { archives };

let archives;
const categoryName = "archives";

if (typeof window !== "undefined") {
  if (document.querySelector(".root-container_archives") !== null) {
    archives = categoryName;
  } else if (document.querySelector(".root-container_archives") !== null) {
    archives = undefined;
  }

  window.addEventListener("visibilitychange", () => {
    if (document.querySelector(".root-container_archives") !== null) {
      archives = categoryName;
    } else if (document.querySelector(".root-container_archives") !== null) {
      archives = undefined;
    }
  });
}

export default {
  head() {
    if (this.$i18n.locale == "fr") {
      return {
        title: "Archives | MH info",
        meta: [
          {
            hid: "description",
            name: "description",
            content:
              "Vous trouvez ici les archives de MH info. Bonne lecture !",
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
