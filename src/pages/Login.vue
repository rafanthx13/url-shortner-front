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
              <router-link to="/" style="text-decoration: none;">
                <q-btn flat round icon="arrow_back" rounded style="color: black;"></q-btn>
              </router-link>
              <h2 class="text-h4 text-uppercase q-my-none text-weight-regular">Login</h2>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-gutter-md">
            <q-input label="Username" v-model="login.user_name">
            </q-input>
            <q-input label="Password" type="password" v-model="login.password">
            </q-input>
            <div>
              <q-btn class="full-width" color="primary" label="Login" @click="submit" rounded></q-btn>
              <div class="text-center q-mt-sm q-gutter-lg">
                <span>You do not have an account?</span>
                <router-link to="/sign-up" style="text-decoration: none;">
                  <q-btn outline color="primary" label="Sign Up" rounded></q-btn>
                </router-link>
              </div>
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

  name: 'Login',

  mixins: [notificationMixin],

  data () {
    return {
      login: {
        user_name: '',
        password: ''
      }
    }
  },

  mounted: function () {
    if (this.$route.params.auth) {
      this.notify_error('É necessário logar corretamente para acessar')
    }
  },

    methods: {

      submit() {
        Auth.login(this.login).then( (result) => {
          localStorage.setItem('token', result.data.token);
          result.data.user_name = this.login.user_name
          this.$store.commit("setUser", result.data);
          if (localStorage.getItem('token') != null){
            this.$router.push({name: 'AppHome'})
          }
        })
        .catch( () => {
          this.notify_error('Erro ao fazer login')
          localStorage.removeItem('user');
          localStorage.removeItem('token');
        })
      },

    }

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
