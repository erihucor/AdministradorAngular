import { Component, OnInit } from '@angular/core';
import { Producto } from '../../Interfaces/producto';
import { ProductoService } from '../../services/producto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  producto: Producto = {
    nombreProducto:null,
    precio:null,
    cantidad:null,
    categoria_id:null,
    estado_id:null
  };
  producto_id:any;
  editing:boolean=false;
  productos:Producto[];
  constructor(private productoService:ProductoService,private activateRoute: ActivatedRoute) { 
    this.producto_id = this.activateRoute.snapshot.params['producto_id'];
    if(this.producto_id){
      this.editing = true;
      this.productoService.get().subscribe((data:Producto[])=>{
        this.productos = data;  
        this.producto = this.productos.find((p)=>{return p.producto_id == this.producto_id})
        console.log(this.producto);
      },(error)=>{
        console.log(error);
      })
    }
  }

  ngOnInit() {
  }

  saveProducto(){
    if(this.editing){
      this.productoService.put(this.producto).subscribe((data)=>{
        alert("Producto Actualizado")
        console.log(data);
      },(error)=>{
        console.log(error)
        alert("Error :(")
      });
    }else{
      this.productoService.save(this.producto).subscribe((data)=>{
        alert("Producto Wardado")
        console.log(data);
      },(error)=>{
        console.log(error)
        alert("Error :(")
      });
    }
  }
}
