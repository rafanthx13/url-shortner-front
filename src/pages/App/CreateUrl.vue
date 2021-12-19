<template>
  <q-page class="q-pa-sm q-mt-lg" style="width: 80%; margin-right: auto; margin-left: auto; text-align: center;">
      <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Paste the URL to be shortened</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-card-section class="q-pt-none">
          <div class="q-pa-md">

            <q-form
              @submit="createUrlShortner"
              class="q-gutter-md"
            >

            <div class="row" style="width: 100%;">
              <q-input
                filled
                v-model="url.actual_url"
                label="Your URL"
                style="width: 80%"
              />
              <q-btn label="Short Url" type="submit" color="primary"/>

            </div>

            </q-form>
          </div>
        </q-card-section>

        <div v-if="created_url">

          <q-separator inset />

          <q-card-section>
            <b>URL Created</b>
            <br>
            {{this.$store.getters.getRoutes.frontURL}}/{{ created_url.go_to_url }}
            <br>
          </q-card-section>


        </div>

        <q-separator inset />

        <q-card-section>
          Shorten a URL or reduce a link
          Use our URL Shortener to create a shortened link making it easy to remember
        </q-card-section>
      </q-card-section>

    </q-card>
  </q-page>


</template>

<style>
</style>

<script>
  import Url from '@/api/Url'
  import notificationMixin from '@/mixins/notifications'
export default {
  name: 'CreateURL',

  mixins: [notificationMixin],

  data () {
    return {
      url: {
        user_id: '',
        actual_url: '',
      },
      created_url: '',
    }
  },

  methods: {
    createUrlShortner(){
      Url.post(this.url).then( (result) => {
        console.log('chegou aqui')
        this.created_url = result.data
      })
      .catch( (err) => {
        console.error(err)
        this.notify_error('Erro ao criar URL')
      })

    },
  },


}
</script>

<style scoped>

.bg-gradient {
  background-image: linear-gradient(to right,
   #c3613a, #cf4f65, #bf5095, #8f63be, #1976d2);
}
</style>
