import { Component, OnInit } from '@angular/core';
import { Carne } from 'src/app/models/carne';
import { CargarService } from 'src/app/services/cargar.service';
import { CarneService } from 'src/app/services/carne.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-carnes',
  templateUrl: './carnes.component.html',
  styleUrls: ['./carnes.component.css'],
  providers:[CarneService,CargarService]
})
export class CarnesComponent implements OnInit{
  public carnes:Carne[];
  public resultados:Carne[];
  public nombre:string;
  public url:string;

  constructor(
    private _carneService:CarneService
  ){
    this.url=Global.url;
    this.carnes=[];
    this.resultados=[];
    this.nombre='';
  }


  ngOnInit():void{
    this.getCarnes();
  }
  getCarnes(){
  this._carneService.getCarnes().subscribe(
    response=>{
      if (response.carnes){
        this.carnes=response.carnes;
        console.log(this.carnes);
      }
    },
    error=>{
      console.log(<any>error);
    }
  );
}

  getResultados(){
    this._carneService.nombreCarne(this.nombre).subscribe(
      response=>{
        if(response.carne){
          this.resultados=response.carne;
          console.log(this.resultados);
        }
      },
      error=>{
        console.log(<any>error);
      }
    )
  }
}
