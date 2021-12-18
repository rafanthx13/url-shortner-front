<template>
  <q-layout>
    <q-page-container>
      <q-page class="q-pa-sm" style="width: 70%; margin-right: auto; margin-left: auto; text-align: center;">

      <h1 class="text-h3">Quasar App - Shortner URL</h1>

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
                label="Your URL *"
                hint="Insert yout URL to be Shortner"
              />
              <q-btn label="ShortUrl" type="submit" color="primary"/>

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
          ShortURL.at is a free tool to shorten a URL or reduce a link
          Use our URL Shortener to create a shortened link making it easy to remember
        </q-card-section>
      </q-card-section>

    </q-card>

    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Para mais Featuers faça login</div>
        <q-btn label="Login" color="primary" @click="this.$router.push({name: 'Login'})"/>
      </q-card-section>
    </q-card>

      </q-page>
    </q-page-container>
  </q-layout>

</template>

<style>
</style>

<script>
  import Url from './../api/Url'
  import notificationMixin from './../mixins/notifications'
export default {
  name: 'CreateURLPublic',

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
