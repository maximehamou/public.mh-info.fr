<template>
  <div>
    <div class="article-feed" @click="onBeforeUnLoad">
      <div class="card">
        <NuxtLink
          v-for="article in articlesOfCategory"
          :to="{
            path: '/locale/articles/' + article.attributes.slug,
          }"
          :key="article.slug"
        >
          <div
            class="img"
            :style="
              'background-image: url(' +
              'http://localhost:1337' +
              article.attributes.image.data.attributes.url +
              ')'
            "
          >
            <Waiting />
          </div>

          <div class="text-box">
            <h2 class="title">{{ article.attributes.title }}</h2>
            <div>
              <span class="author">
                <i class="fa-solid fa-user"></i>
                <span v-if="$i18n.locale == 'fr'">Par</span>
                <span v-if="$i18n.locale == 'en'">By</span>
                {{ article.attributes.author }}
              </span>
              <span class="dot">&#8729;</span>
              <span class="date">
                <i class="fa-solid fa-calendar-days"></i>
                <span class="date-numbers">{{ article.attributes.date }}</span>
              </span>
            </div>
            <p class="description">{{ article.attributes.summary }}</p>
            <p class="read">
              <span v-if="$i18n.locale == 'fr'">Lire l'article &#x2192;</span>
              <span v-if="$i18n.locale == 'en'">
                Read this article &#x2192;
              </span>
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/components/cards.scss";
</style>

<script>
import { allArticles } from "~/pages/all-articles.vue";
import { sciences } from "~/pages/sciences.vue";
import { news } from "~/pages/news.vue";
import { history } from "~/pages/history.vue";
import { books } from "~/pages/books.vue";
import { didYouKnow } from "~/pages/did-you-know.vue";
import { archives } from "~/pages/archives.vue";

let category;

export default {
  props: {
    articles: Object,
  },
  computed: {
    articlesOfCategory() {
      if (typeof window !== "undefined") {
        return this.articles.data.filter((article) => {
          return article.attributes.category.includes(
            (category =
              allArticles !== undefined
                ? allArticles
                : sciences !== undefined
                ? sciences
                : news !== undefined
                ? news
                : history !== undefined
                ? history
                : books !== undefined
                ? books
                : didYouKnow !== undefined
                ? didYouKnow
                : archives !== undefined
                ? archives
                : undefined),
            window.addEventListener("visibilitychange", () => {
              category =
                allArticles !== undefined
                  ? allArticles
                  : sciences !== undefined
                  ? sciences
                  : news !== undefined
                  ? news
                  : history !== undefined
                  ? history
                  : books !== undefined
                  ? books
                  : didYouKnow !== undefined
                  ? didYouKnow
                  : archives !== undefined
                  ? archives
                  : undefined;
            })
          );
        });
      }
    },
  },
};
</script>
