<template>

  <q-layout>
    <q-page-container class="bg-gradient">
      <q-page class="q-pa-sm" style="width: 90%; margin-right: auto; margin-left: auto; text-align: center;">

        <TopUrl></TopUrl>

    </q-page>
    </q-page-container>
  </q-layout>

</template>

<style>
</style>

<script>
  import TopUrl from '@/components/TopUrl';
export default {

  name: 'TopUrlsPublic',

  components: {
    'TopUrl': TopUrl,
  },

}
</script>

<style scoped>

.bg-gradient {
  background-image: linear-gradient(to right,
   #c3613a, #cf4f65, #bf5095, #8f63be, #1976d2);
}
</style>
