<template>
  <q-page class="q-pa-sm q-mt-lg" style="width: 80%; margin-right: auto; margin-left: auto; text-align: center;">
    <q-card class="my-card">

      <CreateShortener v-bind:isInApp="true"></CreateShortener>

    </q-card>
  </q-page>
</template>

<script>

import CreateShortener from '@/components/CreateShortener'

export default {
  name: 'CreateURL',

  components: {
    CreateShortener
  },

}
</script>
