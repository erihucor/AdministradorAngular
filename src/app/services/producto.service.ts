import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Interfaces/producto';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  api_endpoint = 'http://127.0.0.1:8000/api';

  constructor(private httpClient: HttpClient) { }

  get(){
    return this.httpClient.get(this.api_endpoint + "/productos");
  }

  save(producto:Producto){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.api_endpoint + '/productos',producto,{headers:headers})
  }

  put(producto:Producto){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(this.api_endpoint + '/productos/' + producto.producto_id,producto,{headers:headers})
  }

  delete(producto_id){
    return this.httpClient.delete(this.api_endpoint + "/productos/" + producto_id);
  }
}
