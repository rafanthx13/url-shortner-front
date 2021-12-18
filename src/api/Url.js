import http from './http'
import store from '../store';

let url = store.getters.getRoutes.url;

export default class {

  static getAll(){
    return http.get(url.base);
  }

  static post(body){
    console.log('body', body)
    return http.post(url.base, body);
  }

  static getShorUrl(short_url){
    console.log("o que vai buscar agora", url.getShort + short_url)
    return http.get(url.getShort + short_url);
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
