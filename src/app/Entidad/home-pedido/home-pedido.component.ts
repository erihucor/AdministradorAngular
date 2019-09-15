import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/Interfaces/pedido';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-home-pedido',
  templateUrl: './home-pedido.component.html',
  styleUrls: ['./home-pedido.component.css']
})
export class HomePedidoComponent implements OnInit {

  api_endpoint = 'http://127.0.0.1:8000/api'; 
  pedidos: Pedido[];
  constructor(private pedidoService: PedidoService) {
    this.getPedidos();
   }

   getPedidos(){
    this.pedidoService.get().subscribe(
      (data:Pedido[])=>{
        this.pedidos = data;
      },(error)=>{
        console.log(error);
        alert("error");
      })
   }

  ngOnInit() {
  }

  delete(pedido_id){
    if(confirm('Seguro que desea borrar este pedido?')){
      this.pedidoService.delete(pedido_id).subscribe((data)=>{
        alert('Eliminado con exito');
        this.getPedidos();
      },(error)=>{
        console.log(error);
      })
    }
  }
}