import { Component, OnInit } from '@angular/core';
import { EstadoService } from 'src/app/services/estado.service';
import { Estado } from 'src/app/Interfaces/estado';

@Component({
  selector: 'app-home-estado',
  templateUrl: './home-estado.component.html',
  styleUrls: ['./home-estado.component.css']
})
export class HomeEstadoComponent implements OnInit {

  api_endpoint = 'http://127.0.0.1:8000/api'; 
  estados: Estado[];
  constructor(private estadoService: EstadoService) {
    this.getEstados();
   }

   getEstados(){
    this.estadoService.get().subscribe(
      (data:Estado[])=>{
        this.estados = data;
      },(error)=>{
        console.log(error);
        alert("error");
      })
   }

  ngOnInit() {
  }

  delete(estado_id){
    if(confirm('Seguro que desea borrar este estado?')){
      this.estadoService.delete(estado_id).subscribe((data)=>{
        alert('Eliminado con exito');
        this.getEstados();
      },(error)=>{
        console.log(error);
      })
    }
  }

}
