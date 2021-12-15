// Decide DEV/PROD
let URL; // BackEnd
if(window.location.hostname == 'localhost'){
  // local
  URL = 'http://localhost:3000';
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
    URL: URL,
    url: {
		base: URL + '/url',
    },
   
    auth: {
      login: URL + '/login',
      register: URL + '/user',
      auth: URL + '/auth'
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
