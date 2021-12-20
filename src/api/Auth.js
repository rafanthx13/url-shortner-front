import http from './http'
import store from '../store';

let auth = store.getters.getRoutes.auth;

export default class {

  static login(body){
    return http.post(auth.login, body);
  }

  static signup(body){
    return http.post(auth.signup, body);
  }

  static auth(token){
    return http.get(auth.authentication, {
      headers: { Authorization: "Bearer " + token }
    });
  }

}
