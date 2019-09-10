import { Injectable } from '@angular/core';
import { Estado } from '../Interfaces/estado';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  api_endpoint = 'http://127.0.0.1:8000/api';

  constructor(private httpClient: HttpClient) { }

  get(){
    return this.httpClient.get(this.api_endpoint + "/estados");
  }

  save(estado:Estado){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.api_endpoint + '/estados',estado,{headers:headers})
  }

  put(estado:Estado){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(this.api_endpoint + '/estados/' + estado.estado_id,estado,{headers:headers})
  }

  delete(estado_id){
    return this.httpClient.delete(this.api_endpoint + "/estados/" + estado_id);
  }
}
