import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/Interfaces/noticia';
import { ActivatedRoute } from '@angular/router';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-form-noticia',
  templateUrl: './form-noticia.component.html',
  styleUrls: ['./form-noticia.component.css']
})
export class FormNoticiaComponent implements OnInit {

  noticia: Noticia = {
    usuario_id: null,
    titulo:null,
    descripcion:null,
    src_imagen:null
  };
  noticia_id:any;
  editing:boolean=false;
  noticias:Noticia[];
  constructor(private noticiaService:NoticiaService,private activateRoute: ActivatedRoute) { 
    this.noticia_id = this.activateRoute.snapshot.params['noticia_id'];
    if(this.noticia_id){
      this.editing = true;
      this.noticiaService.get().subscribe((data:Noticia[])=>{
        this.noticias = data;  
        this.noticia = this.noticias.find((p)=>{return p.noticia_id == this.noticia_id})
        console.log(this.noticia);
      },(error)=>{
        console.log(error);
      })
    }
  }

  ngOnInit() {
  }

  saveNoticia(){
    if(this.editing){
      this.noticiaService.put(this.noticia).subscribe((data)=>{
        alert("Noticia Actualizado")
        console.log(data);
      },(error)=>{
        console.log(error)
        alert("Error :(")
      });
    }else{
      this.noticiaService.save(this.noticia).subscribe((data)=>{
        alert("Noticia Wardado")
        console.log(data);
      },(error)=>{
        console.log(error)
        alert("Error :(")
      });
    }
  }}

