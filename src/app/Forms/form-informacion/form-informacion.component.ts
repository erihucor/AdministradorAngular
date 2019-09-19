import { Component, OnInit } from '@angular/core';
import { Informacion } from 'src/app/Interfaces/informacion';
import { ActivatedRoute } from '@angular/router';
import { InformacionService } from 'src/app/services/informacion.service';

@Component({
  selector: 'app-form-informacion',
  templateUrl: './form-informacion.component.html',
  styleUrls: ['./form-informacion.component.css']
})
export class FormInformacionComponent implements OnInit {

  informacion: Informacion = {
    name:null,
    msg:null,
  };
  
  constructor(private informacionService:InformacionService,private activateRoute: ActivatedRoute) { 
  }

  ngOnInit() {
  }

  saveInformacion(){
  this.informacionService.post(this.informacion).subscribe((data)=>{
  },(error)=>{
  });
}
  
}
