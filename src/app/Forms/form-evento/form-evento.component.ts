import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/Interfaces/evento';
import { EventoService } from 'src/app/services/evento.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-evento',
  templateUrl: './form-evento.component.html',
  styleUrls: ['./form-evento.component.css']
})
export class FormEventoComponent implements OnInit {

  evento: Evento = {
    usuario_id: null,
    titulo:null,
    descripcion:null,
    src_imagen:null,
    link:null
  };
  evento_id:any;
  editing:boolean=false;
  eventos:Evento[];
  constructor(private eventoService:EventoService,private activateRoute: ActivatedRoute) { 
    this.evento_id = this.activateRoute.snapshot.params['evento_id'];
    if(this.evento_id){
      this.editing = true;
      this.eventoService.get().subscribe((data:Evento[])=>{
        this.eventos = data;  
        this.evento = this.eventos.find((p)=>{return p.evento_id == this.evento_id})
        console.log(this.evento);
      },(error)=>{
        console.log(error);
      })
    }
  }

  ngOnInit() {
  }

  saveEvento(){
    if(this.editing){
      this.eventoService.put(this.evento).subscribe((data)=>{
        alert("Evento Actualizado")
        console.log(data);
      },(error)=>{
        console.log(error)
        alert("Error :(")
      });
    }else{
      this.eventoService.save(this.evento).subscribe((data)=>{
        alert("Evento Wardado")
        console.log(data);
      },(error)=>{
        console.log(error)
        alert("Error :(")
      });
    }
  }

}
