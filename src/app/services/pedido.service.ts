import { Injectable } from '@angular/core';
import { Pedido } from '../Interfaces/pedido';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  api_endpoint = 'http://127.0.0.1:8000/api';

  constructor(private httpClient: HttpClient) { }

  get(){
    return this.httpClient.get(this.api_endpoint + "/pedidos");
  }

  save(pedido:Pedido){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.api_endpoint + '/pedidos',pedido,{headers:headers})
  }

  put(pedido:Pedido){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(this.api_endpoint + '/pedidos/' + pedido.pedido_id,pedido,{headers:headers})
  }

  delete(pedido_id){
    return this.httpClient.delete(this.api_endpoint + "/pedidos/" + pedido_id);
  }
}
