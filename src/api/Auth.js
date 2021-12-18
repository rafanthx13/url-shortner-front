import http from './http'
import store from '../store';

let auth = store.getters.getRoutes.auth;

export default class {

  static login(body){
    return http.post(auth.login, body);
  }

  static signup(body){
    console.log("entrou api")
    return http.post(auth.signup, body);
  }

  // Infelizmente, as vezes o token não é mandado
  static auth(token){
    return http.get(auth.authentication, {
      headers: { Authorization: "Bearer " + token }
    });
  }

}
