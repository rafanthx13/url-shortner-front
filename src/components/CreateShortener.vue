<template>
  <div>

    <q-card-section class="q-pt-lg">
      <div class="text-h6">Paste the URL to be shortened</div>
      <div class="q-pa-md">
        <q-form @submit.prevent.stop="createUrlShortner" class="q-gutter-md">
          <div class="row" style="width: 100%;">
            <q-input filled v-model="url.actual_url" label="Your URL" style="width: 80%"
              lazy-rules
              :rules="url_rule"
             />
            <q-btn label="Short Url" type="submit" color="primary" />
          </div>
        </q-form>
      </div>
    </q-card-section>

    <div v-if="created_url">
      <q-separator inset />
      <q-card-section>
        <b>URL Created</b>
        <br>
        <a :href="this.$store.getters.getRoutes.frontURL + '/' + created_url.go_to_url ">
          {{this.$store.getters.getRoutes.frontURL}}/{{ created_url.go_to_url }}
        </a>
        <br>
      </q-card-section>
    </div>

  </div>
</template>

<script>

import Url from '@/api/Url'
import notificationMixin from '@/mixins/notifications'

export default {

  name: 'CreateShortener',

  mixins: [notificationMixin],

  data() {
    return {
      regex_url: new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/),
      url_rule: [
        value => value.match(this.regex_url)|| 'Field must contain a valid URL',
      ],
      url: {
        user_id: '',
        actual_url: '',
      },
      created_url: '',
    }
  },

  methods: {

    createUrlShortner() {
      Url.post(this.url).then((result) => {
          console.log('chegou aqui')
          this.created_url = result.data
        })
        .catch((err) => {
          console.error(err)
          this.notify_error('Erro ao criar URL')
        })

    },
  },

}
</script>
