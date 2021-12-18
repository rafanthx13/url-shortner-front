<template>
  <img src="@/assets/wave.png" class="wave" alt="login-wave">
  <div class="row" style="height: 90vh">
    <div class="col-0 col-md-6 flex justify-center content-center">
      <img src="@/assets/bit-ly-image.png" class="responsive" alt="login-image">
    </div>
    <div v-bind:class="{'justify-center': $q.screen.md || $q.screen.sm ||$q.screen.xs}"
         class="col-12 col-md-6 flex content-center">
      <q-card v-bind:style="$q.screen.lt.sm ? {'width': '80%'} : {'width': '50%'}">
        <q-card-section>
          <q-avatar size="103px" class="absolute-center shadow-10">
            <img src="@/assets/avatar.svg" alt="avatar">
          </q-avatar>
        </q-card-section>
        <q-card-section>
          <div class="q-pt-lg">
            <div class="col text-h6 ellipsis flex justify-center">
              <!-- <h2 class="text-h2 text-uppercase q-my-none text-weight-regular">Login</h2> -->
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-gutter-md" @submit.prevent="submitForm">
            <q-input label="Username" v-model="signup.user_name">
            </q-input>
            <q-input label="Password" type="password" v-model="signup.password">
            </q-input>
            <q-input label="Email" type="email" v-model="signup.email">
            </q-input>
            <div>
              <q-btn class="full-width" color="primary" label="Cadastrar" @click="submit" rounded></q-btn>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>

import Auth from '../api/Auth'
import notificationMixin from './../mixins/notifications'

// @ is an alias to /src
export default {
  name: 'SignUp',

  mixins: [notificationMixin],

  data () {
    return {
      signup: {
        user_name: '',
        password: '',
        email: '',
      }
    }
  },

  methods: {
    submit() {
      // this.$refs.observer.validate().then(result => {
        // if (result) {
          // console.log(result)
          Auth.signup(this.signup).then( () => {
            // console.log('sucess')
            // this.notify_success('SUCESSO ao cadastrar')
          })
          .catch( () => {
            // console.log('error r')
            this.notify_error('Erro ao cadastrar')
          })
        },
      // })
    },

}
</script>

<style scoped>
.wave {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}
</style>
