import { Component, OnInit } from '@angular/core';
import { Estado } from 'src/app/Interfaces/estado';
import { EstadoService } from 'src/app/services/estado.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-estado',
  templateUrl: './form-estado.component.html',
  styleUrls: ['./form-estado.component.css']
})
export class FormEstadoComponent implements OnInit {

  estado: Estado = {
    estado:null,
  };
  estado_id:any;
  editing:boolean=false;
  estados:Estado[];
  constructor(private estadoService:EstadoService,private activateRoute: ActivatedRoute) { 
    this.estado_id = this.activateRoute.snapshot.params['estado_id'];
    if(this.estado_id){
      this.editing = true;
      this.estadoService.get().subscribe((data:Estado[])=>{
        this.estados = data;  
        this.estado = this.estados.find((p)=>{return p.estado_id == this.estado_id})
        console.log(this.estado);
      },(error)=>{
        console.log(error);
      })
    }
  }

  ngOnInit() {
  }

  saveEstado(){
    if(this.editing){
      this.estadoService.put(this.estado).subscribe((data)=>{
        alert("Estado Actualizado")
        console.log(data);
      },(error)=>{
        console.log(error)
        alert("Error :(")
      });
    }else{
      this.estadoService.save(this.estado).subscribe((data)=>{
        alert("Estado Wardado")
        console.log(data);
      },(error)=>{
        console.log(error)
        alert("Error :(")
      });
    }
  }

}
