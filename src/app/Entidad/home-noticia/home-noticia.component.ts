import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/Interfaces/noticia';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-home-noticia',
  templateUrl: './home-noticia.component.html',
  styleUrls: ['./home-noticia.component.css']
})
export class HomeNoticiaComponent implements OnInit {

  api_endpoint = 'http://127.0.0.1:8000/api'; 
  noticias: Noticia[];
  constructor(private noticiaService: NoticiaService) {
    this.getNoticias();
   }

   getNoticias(){
    this.noticiaService.get().subscribe(
      (data:Noticia[])=>{
        this.noticias = data;
      },(error)=>{
        console.log(error);
        alert("error");
      })
   }

  ngOnInit() {
  }

  delete(noticia_id){
    if(confirm('Seguro que desea borrar este noticia?')){
      this.noticiaService.delete(noticia_id).subscribe((data)=>{
        alert('Eliminado con exito');
        this.getNoticias();
      },(error)=>{
        console.log(error);
      })
    }
  }
}
