<template>
  <footer>
    <p class="copyright">
      ©<span class="current-year"></span>
      <span v-if="$i18n.locale == 'fr'">par</span>
      <span v-if="$i18n.locale == 'en'">by</span> MH info
    </p>
  </footer>
</template>
