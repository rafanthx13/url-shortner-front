<template>

  <q-page class="q-pa-sm" style="width: 95%; margin-right: auto; margin-left: auto; text-align: center;">

    <TopUrl></TopUrl>

  </q-page>

</template>

<script>

import TopUrl from '@/components/TopUrl';

export default {

  name: 'AppTopUrls',

  components: {
    'TopUrl': TopUrl,
  },

}

</script>

