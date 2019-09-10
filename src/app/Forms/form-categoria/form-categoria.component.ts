import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/Interfaces/categoria';

@Component({
  selector: 'app-form-categoria',
  templateUrl: './form-categoria.component.html',
  styleUrls: ['./form-categoria.component.css']
})
export class FormCategoriaComponent implements OnInit {
  categoria: Categoria = {
    categoria:null,
  };
  categoria_id:any;
  editing:boolean=false;
  categorias:Categoria[];
  constructor(private categoriaService:CategoriasService,private activateRoute: ActivatedRoute) { 
    this.categoria_id = this.activateRoute.snapshot.params['categoria_id'];
    if(this.categoria_id){
      this.editing = true;
      this.categoriaService.get().subscribe((data:Categoria[])=>{
        this.categorias = data;  
        this.categoria = this.categorias.find((p)=>{return p.categoria_id == this.categoria_id})
        console.log(this.categoria);
      },(error)=>{
        console.log(error);
      })
    }
  }

  ngOnInit() {
  }

  saveCategoria(){
    if(this.editing){
      this.categoriaService.put(this.categoria).subscribe((data)=>{
        alert("Categoria Actualizado")
        console.log(data);
      },(error)=>{
        console.log(error)
        alert("Error :(")
      });
    }else{
      this.categoriaService.save(this.categoria).subscribe((data)=>{
        alert("Categoria Wardado")
        console.log(data);
      },(error)=>{
        console.log(error)
        alert("Error :(")
      });
    }
  }

}
