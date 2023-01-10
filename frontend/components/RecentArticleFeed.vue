<template>
  <div>
    <div class="recent-article-feed" @click="onBeforeUnLoad">
      <NuxtLink
        v-for="article in recentArticles"
        :to="{
          path: '/locale/articles/' + article.attributes.slug,
        }"
        :key="article.slug"
      >
        <!-- Modifier http://localhost:1337 par https://mh-info.fr ! -->
        <div
          class="article"
          :style="
            'background-image: url(' +
            'http://localhost:1337' +
            article.attributes.image.data.attributes.url +
            ')'
          "
        >
          <Waiting />

          <div class="dark-window">
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
                  <span class="date-numbers">{{
                    article.attributes.date
                  }}</span>
                </span>
              </div>
              <p class="description">
                {{ article.attributes.summary }}
              </p>
              <p class="read">
                <span v-if="$i18n.locale == 'fr'">
                  Lire l'article &#x2192;
                </span>
                <span v-if="$i18n.locale == 'en'">
                  Read this article &#x2192;
                </span>
              </p>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/components/recent-article-feed.scss";
</style>

<script>
export default {
  props: {
    articles: Object,
  },
  computed: {
    recentArticles() {
      return this.articles.data
        .filter((article) => {
          return article.attributes.category.includes("article");
        })
        .filter((article, index) => index <= 2);
    },
  },
};
</script>
