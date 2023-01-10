<template>
  <div class="root-container_sciences">
    <Header />

    <h1>Sciences</h1>

    <ArticleFeed :articles="articles"></ArticleFeed>

    <Footer />
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/sciences.scss";
</style>

<script>
import articlesQuery from "~/apollo/queries/articles/articles";

export { sciences };

let sciences;
const categoryName = "sciences";

if (typeof window !== "undefined") {
  if (document.querySelector(".root-container_sciences") !== null) {
    sciences = categoryName;
  } else if (document.querySelector(".root-container_sciences") !== null) {
    sciences = undefined;
  }

  window.addEventListener("visibilitychange", () => {
    if (document.querySelector(".root-container_sciences") !== null) {
      sciences = categoryName;
    } else if (document.querySelector(".root-container_sciences") !== null) {
      sciences = undefined;
    }
  });
}

export default {
  head() {
    if (this.$i18n.locale == "fr") {
      return {
        title: "Sciences | MH info",
        meta: [
          {
            hid: "description",
            name: "description",
            content:
              "Vous trouverez ici les articles scientifiques de MH info. Bonne lecture !",
          },
        ],
      };
    } else if (this.$i18n.locale == "en") {
      return {
        title: "Sciences | MH info",
        meta: [
          {
            hid: "description",
            name: "description",
            content:
              "You will find here the scientific articles of MH info. Enjoy your reading!",
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
