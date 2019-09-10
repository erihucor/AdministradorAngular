import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../Interfaces/producto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  api_endpoint = 'http://127.0.0.1:8000/api';
  productos: Producto[];
  constructor(private productoService: ProductoService) {
    this.getProductos();
   }

   getProductos(){
    this.productoService.get().subscribe(
      (data:Producto[])=>{
        this.productos = data;
      },(error)=>{
        console.log(error);
        alert("error");
      })
   }

  ngOnInit() {
  }

  delete(producto_id){
    if(confirm('Seguro que desea borrar este producto?')){
      this.productoService.delete(producto_id).subscribe((data)=>{
        alert('Eliminado con exito');
        this.getProductos();
      },(error)=>{
        console.log(error);
      })
    }
  }

}
