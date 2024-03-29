import http from './http'
import store from '../store';

let url = store.getters.getRoutes.url;

export default class {

  static getAll(){
    return http.get(url.base);
  }

  static getTopUrls(){
    return http.get(url.getTop);
  }

  static post(body){
    return http.post(url.base, body);
  }

  static postPrivate(body){
    return http.post(url.postPrivate, body);
  }

  static getShorUrl(short_url){
    return http.get(url.getShort + short_url);
  }

  static put(body){
    return http.put(url.base + body.url_id, body);
  }

  static delete(url_id){
    return http.delete(url.base + '/' + url_id);
  }

  static getCities(){
    return http.get(url.base)
  }

}
