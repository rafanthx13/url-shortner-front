<template>
  <img src="@/assets/wave.png" class="wave" alt="login-wave">
  <img src="@/assets/wave.png" class="wave2" alt="login-wave-2">
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
              <h2 class="text-h4 text-uppercase q-my-none text-weight-regular">Sign up</h2>
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
              <q-btn class="full-width" color="primary" label="Create An Account" @click="submit" rounded></q-btn>
            </div>
            <div class="text-center q-mt-sm q-gutter-lg">
              <span>Do you already have an account?</span>
              <router-link to="/login" style="text-decoration: none;">
                <q-btn outline color="primary" label="Login" rounded></q-btn>
              </router-link>
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
          Auth.signup(this.signup).then( () => {
            this.$router.push({name: 'Login'})
          })
          .catch( () => {
            this.notify_error('Erro ao cadastrar')
          })
        },
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

.wave2 {
  position: fixed;
    height: 100%;
    right: 0;
    bottom: 0;
    z-index: -1;
    transform: rotate(180deg);
    filter: invert(1);
}

</style>
