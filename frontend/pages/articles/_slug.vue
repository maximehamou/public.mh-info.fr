<template>
  <div class="root-container">
    <Header />
    <!-- Modifier http://localhost:1337 par https://mh-info.fr ! -->

    <div
      class="article-image"
      :style="
        'background-image: url(' +
        'http://localhost:1337' +
        articles.data[0].attributes.image.data.attributes.url +
        ')'
      "
    >
      <Waiting />
      <div class="article-infos">
        <h1 class="article-title">
          {{ articles.data[0].attributes.title }}
        </h1>
        <p class="article-description">
          {{ articles.data[0].attributes.summary }}
        </p>
        <div>
          <span class="author">
            <i class="fa-solid fa-user"></i> Par
            {{ articles.data[0].attributes.author }}
          </span>
          <span class="dot">&#8729;</span>
          <span class="date"
            ><i class="fa-solid fa-calendar-days"></i>
            <span class="date-numbers">
              {{ articles.data[0].attributes.date }}
            </span>
          </span>
        </div>
      </div>
    </div>

    <section class="article-body">
      <section
        class="article-intro"
        v-html="$md.render(articles.data[0].attributes.introduction)"
        v-if="articles.data[0].attributes.introduction"
      ></section>

      <section
        class="article-content"
        id="editor"
        v-html="$md.render(articles.data[0].attributes.content)"
      ></section>

      <section
        class="article-outro"
        v-html="$md.render(articles.data[0].attributes.outro)"
      ></section>
    </section>

    <Footer />
  </div>
</template>

<style lang="scss">
@import "../../scss/components/article.scss";
</style>

<script>
import singleArticleQuery from "~/apollo/queries/articles/article";

export default {
  head() {
    return {
      title:
        typeof document !== "undefined"
          ? (document.head.querySelector("title").textContent =
              document.querySelector("h1").textContent + " | MH info")
          : undefined,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.articles.data[0].attributes.summary,
        },
        {
          name: "og:image",
          content: `${
            "http://localhost:1337" +
            this.articles.data[0].attributes.image.data.attributes.url
          }`,
        },
      ],
    };
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
      query: singleArticleQuery,
      variables() {
        return {
          slug: this.$route.params.slug.substring(
            this.$route.params.slug.lastIndexOf("/") + 1
          ),
          i18nLocale: this.$i18n.locales.find(
            (locale) => locale.code === this.$i18n.locale
          ).iso,
        };
      },
    },
  },
  mounted() {
    let linkOfLocaleSwitcherLink =
      document.querySelector("nav > a:has(>i)").href;
    const linkPathname = new URL(linkOfLocaleSwitcherLink).pathname;

    if (this.articles.data[0].attributes.translatedSlug !== null) {
      if (
        linkPathname == "/en" + window.location.pathname &&
        this.$i18n.locale == "fr"
      ) {
        document.querySelector("nav > a:has(>i)").href =
          "/en/articles/" + this.articles.data[0].attributes.translatedSlug;
      } else if (
        linkPathname == window.location.pathname.replace("/en", "") &&
        this.$i18n.locale == "en"
      ) {
        document.querySelector("nav > a:has(>i)").href =
          "/articles/" + this.articles.data[0].attributes.translatedSlug;
      }
    } else {
      this.$i18n.locale == "fr"
        ? (document.querySelector("nav > a:has(>i)").href = "/en/")
        : (document.querySelector("nav > a:has(>i)").href = "/fr/");
    }

    const articleAnchors = document.querySelectorAll(".article-body a");
    for (let i = 0; i < articleAnchors.length; i++) {
      articleAnchors[i].setAttribute("target", "_blank");
    }

    // À supprimer lors du déploiement !!
    const articleImgs = document.querySelectorAll(".article-body img");
    for (let i = 0; i < articleImgs.length; i++) {
      const articleImgsSrc = articleImgs[i].getAttribute("src");
      articleImgs[i].removeAttribute("src");
      articleImgs[i].setAttribute(
        "src",
        "http://localhost:1337" + articleImgsSrc
      );
    }
  },
};
</script>
