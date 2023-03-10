import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Carne } from 'src/app/models/carne';
import { CargarService } from 'src/app/services/cargar.service';
import { CarneService } from 'src/app/services/carne.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-editar-carne',
  templateUrl: '../ingresar-carne/ingresar-carne.component.html',
  styleUrls: ['./editar-carne.component.css'],
  providers:[CarneService, CargarService]
})
export class EditarCarneComponent  implements OnInit{
  public titulo:string;
  public carne:Carne;
  public carneGuardar:Carne;
  public url:string;
  public archivosParaCargar:Array<File>;
  public status:string;
  public idGuardado:string;

  constructor(
    private _carneService:CarneService,
    private _cargarService:CargarService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.titulo="EDITAR EL INVENTARIO DE CARNES";
    this.url=Global.url;
    this.carne=new Carne("","","","","","");
    this.carneGuardar=new Carne("","","","","","");
    this.archivosParaCargar=[];
    this.status='';
    this.idGuardado='';
  }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id=params['id'];
      //console.log(id);
      this.getCarne(id);
    })
  }
  getCarne(id:string){
    this._carneService.getCarne(id).subscribe(
      response=>{
        this.carne=response.carne;
        console.log(this.carne)
      },
      error=>{
        console.log(<any>error);
      }
    )
  }
  guardarCarne(form:NgForm){
    this._carneService.updateCarne(this.carne).subscribe(
      response=>{
        if(this.archivosParaCargar){
          this._cargarService.peticionRequest(Global.url+"subir-imagen/"+this.carne._id,[],this.archivosParaCargar,'imagen')
          .then((result:any)=>{
            this.carneGuardar=result.response;
            this.status='success';
            this.idGuardado=result.carne._id;
            form.reset();
          });
        }else{
          this.carneGuardar=response.carne;
            this.status='success';
            form.reset();
        }
      }
    );
  }
  imagenChangeEvent(archivoSeleccionado:any){
    this.archivosParaCargar=<Array<File>>archivoSeleccionado.target.files;
  }
}
