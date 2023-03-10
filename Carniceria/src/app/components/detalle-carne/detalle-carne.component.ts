import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carne } from 'src/app/models/carne';
import { CargarService } from 'src/app/services/cargar.service';
import { CarneService } from 'src/app/services/carne.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-detalle-carne',
  templateUrl: './detalle-carne.component.html',
  styleUrls: ['./detalle-carne.component.css'],
  providers:[CarneService,CargarService]
})
export class DetalleCarneComponent implements OnInit{
  public url:string;
  public carne:Carne;
  public confirm:boolean;

  constructor(
    private _carneService:CarneService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.url=Global.url;
    this.carne=new Carne("","","","","","");
    this.confirm=false;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id=params['id'];
      this.getCarne(id);
    })
  }
  getCarne(id:string){
    this._carneService.getCarne(id).subscribe(
      response=>{
        this.carne=response.carne;
      },
      error=>{
        console.log(<any>error);
      }
    )
  }
  setConfirm(confirm:boolean){
    this.confirm=confirm;
  }
  borrarCarne(id:string){
    this._carneService.deleteCarne(id).subscribe(
      response=>{
          this._router.navigate(['/carnes']);
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

}
