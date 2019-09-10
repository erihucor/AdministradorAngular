import { Injectable } from '@angular/core';
import { Categoria } from '../Interfaces/categoria';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  api_endpoint = 'http://127.0.0.1:8000/api';

  constructor(private httpClient: HttpClient) { }

  get(){
    return this.httpClient.get(this.api_endpoint + "/categorias");
  }

  save(categoria:Categoria){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.api_endpoint + '/categorias',categoria,{headers:headers})
  }

  put(categoria:Categoria){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(this.api_endpoint + '/categorias/' + categoria.categoria_id,categoria,{headers:headers})
  }

  delete(categoria_id){
    return this.httpClient.delete(this.api_endpoint + "/categorias/" + categoria_id);
  }
}
