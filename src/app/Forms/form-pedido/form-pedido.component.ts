import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/Interfaces/pedido';
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-form-pedido',
  templateUrl: './form-pedido.component.html',
  styleUrls: ['./form-pedido.component.css']
})
export class FormPedidoComponent implements OnInit {

  pedido: Pedido = {
    usuario_id: null,
    estadoPedido_id:null,
    producto_id:null,
    cantidad:null,
    precio:null,
  };
  pedido_id:any;
  editing:boolean=false;
  pedidos:Pedido[];
  constructor(private pedidoService:PedidoService,private activateRoute: ActivatedRoute) { 
    this.pedido_id = this.activateRoute.snapshot.params['pedido_id'];
    if(this.pedido_id){
      this.editing = true;
      this.pedidoService.get().subscribe((data:Pedido[])=>{
        this.pedidos = data;  
        this.pedido = this.pedidos.find((p)=>{return p.pedido_id == this.pedido_id})
        console.log(this.pedido);
      },(error)=>{
        console.log(error);
      })
    }
  }

  ngOnInit() {
  }

  savePedido(){
    if(this.editing){
      this.pedidoService.put(this.pedido).subscribe((data)=>{
        alert("Pedido Actualizado")
        console.log(data);
      },(error)=>{
        console.log(error)
        alert("Error :(")
      });
    }else{
      this.pedidoService.save(this.pedido).subscribe((data)=>{
        alert("Pedido Wardado")
        console.log(data);
      },(error)=>{
        console.log(error)
        alert("Error :(")
      });
    }
  }
}

