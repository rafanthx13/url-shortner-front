// Decide DEV/PROD
let URL; // BackEnd
let frontURL;
if(window.location.hostname == 'localhost'){
  // local
  URL = 'http://localhost:3000';
  frontURL = 'http://localhost:8080';
} else {
  // production
  URL = 'https://quasar-url-shortner-api.herokuapp.com'
  frontURL = 'https://quasar-url-shortener.netlify.app';
}

const user = {
  state: {
    user_name: '',
    user_type: ''
  },
  mutations: {
    setUser(state, user) {
      state.user_name = user.user_name;
      state.user_type = user.user_type;
    }
  },
  actions: {},
  getters: {
    getUser(state) {
      return state;
    }
  }
};

const routes = {
  state: {
    URL,
    frontURL,
    url: {
      base: URL + '/url',
      getShort: URL + '/url/short',
      getTop: URL + '/url/top-urls',
      postPrivate: URL + '/url/private-url',
    },

    auth: {
      login: URL + '/login',
      signup: URL + '/user',
      authentication: URL + '/auth',
    },
//       getShopsByCity: URL + '/shop/city?city_name='

  },
  getters: {
    getRoutes(state) {
      return state;
    }
  }

};

export default { user, routes };
