import http from './http'
import store from '../store';

let url = store.getters.getRoutes.url;

export default class {

  static getAll(){
    return http.get(url.base);
  }

  static post(body){
    return http.post(url.base, body);
  }

  static put(body){
    return http.put(url.base + body.url_id, body);
  }

  static delete(item){
    return http.delete(url.base  + item.url_id);
  }

  static getCities(){
    return http.get(url.base)
  }

}
