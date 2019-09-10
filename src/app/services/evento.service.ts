import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Evento } from '../Interfaces/evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  
  api_endpoint = 'http://127.0.0.1:8000/api';

  constructor(private httpClient: HttpClient) { }

  get(){
    return this.httpClient.get(this.api_endpoint + "/eventos");
  }

  save(evento:Evento){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.api_endpoint + '/eventos',evento,{headers:headers})
  }

  put(evento:Evento){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(this.api_endpoint + '/eventos/' + evento.evento_id,evento,{headers:headers})
  }

  delete(evento_id){
    return this.httpClient.delete(this.api_endpoint + "/eventos/" + evento_id);
  }
}
