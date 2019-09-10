import { Injectable } from '@angular/core';
import { Noticia } from '../Interfaces/noticia';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  api_endpoint = 'http://127.0.0.1:8000/api';

  constructor(private httpClient: HttpClient) { }

  get(){
    return this.httpClient.get(this.api_endpoint + "/noticias");
  }

  save(noticia:Noticia){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.api_endpoint + '/noticias',noticia,{headers:headers})
  }

  put(noticia:Noticia){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(this.api_endpoint + '/noticias/' + noticia.noticia_id,noticia,{headers:headers})
  }

  delete(noticia_id){
    return this.httpClient.delete(this.api_endpoint + "/noticias/" + noticia_id);
  }
}
