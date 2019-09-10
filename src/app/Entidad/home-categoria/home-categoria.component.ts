import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/Interfaces/categoria';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-home-categoria',
  templateUrl: './home-categoria.component.html',
  styleUrls: ['./home-categoria.component.css']
})
export class HomeCategoriaComponent implements OnInit {
  api_endpoint = 'http://127.0.0.1:8000/api'; 
  categorias: Categoria[];
  constructor(private categoriaService: CategoriasService) {
    this.getCategorias();
   }

   getCategorias(){
    this.categoriaService.get().subscribe(
      (data:Categoria[])=>{
        this.categorias = data;
      },(error)=>{
        console.log(error);
        alert("error");
      })
   }

  ngOnInit() {
  }

  delete(categoria_id){
    if(confirm('Seguro que desea borrar este categoria?')){
      this.categoriaService.delete(categoria_id).subscribe((data)=>{
        alert('Eliminado con exito');
        this.getCategorias();
      },(error)=>{
        console.log(error);
      })
    }
  }

}
