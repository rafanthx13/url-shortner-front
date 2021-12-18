// Decide DEV/PROD
let URL; // BackEnd
let frontURL;
if(window.location.hostname == 'localhost'){
  // local
  URL = 'http://localhost:3000';
  frontURL = 'http://localhost:8080';
} else {
  // production
  URL = 'https://price-log-server.herokuapp.com'
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
      getShort: URL + '/url/short'
    },

    auth: {
      login: URL + '/login',
      signup: URL + '/user',
      authentication: URL + '/auth'
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
