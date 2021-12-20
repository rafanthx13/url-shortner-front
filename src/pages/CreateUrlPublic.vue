<template>
  <q-layout>
    <q-page-container class="bg-gradient">
      <q-page class="q-pa-sm" style="width: 70%; margin-right: auto; margin-left: auto; text-align: center;">

        <h1 class="text-h2 text-white">Quasar URL Shortener</h1>

        <q-card class="my-card">

          <CreateShortener></CreateShortener>

          <q-separator inset />

          <q-card-section>
            Shorten a URL or reduce a link.
            Use our this Quasar URL Shortener to create a shortened link making it easy to remember
          </q-card-section>

          <q-separator inset />

          <q-card-section class="my-card flex justify-between">
            <div>
              <div class="text-h6">Log in for more features</div>
              <q-btn label="Login" color="primary" @click="this.$router.push({name: 'Login'})" />
            </div>
            <div>
              <div class="text-h6">Show Ranking Urls Most Access</div>
              <q-btn label="Top Urls" color="primary" @click="this.$router.push({name: 'TopUrlsPublic'})" />
            </div>
          </q-card-section>

        </q-card>

      </q-page>
    </q-page-container>
  </q-layout>
</template>
<style>
</style>
<script>
import CreateShortener from '@/components/CreateShortener'

export default {
  name: 'CreateURLPublic',

  components: {
    CreateShortener
  },
}

</script>
<style scoped>
.bg-gradient {
  background-image: linear-gradient(to right, #c3613a, #cf4f65, #bf5095, #8f63be, #1976d2);
}

</style>
