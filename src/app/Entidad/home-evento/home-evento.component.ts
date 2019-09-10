import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/Interfaces/evento';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-home-evento',
  templateUrl: './home-evento.component.html',
  styleUrls: ['./home-evento.component.css']
})
export class HomeEventoComponent implements OnInit {

  api_endpoint = 'http://127.0.0.1:8000/api'; 
  eventos: Evento[];
  constructor(private eventoService: EventoService) {
    this.getEventos();
   }

   getEventos(){
    this.eventoService.get().subscribe(
      (data:Evento[])=>{
        this.eventos = data;
      },(error)=>{
        console.log(error);
        alert("error");
      })
   }

  ngOnInit() {
  }

  delete(evento_id){
    if(confirm('Seguro que desea borrar este evento?')){
      this.eventoService.delete(evento_id).subscribe((data)=>{
        alert('Eliminado con exito');
        this.getEventos();
      },(error)=>{
        console.log(error);
      })
    }
  }

}
