import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Carne } from 'src/app/models/carne';
import { CargarService } from 'src/app/services/cargar.service';
import { CarneService } from 'src/app/services/carne.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-ingresar-carne',
  templateUrl: './ingresar-carne.component.html',
  styleUrls: ['./ingresar-carne.component.css'],
  providers:[CarneService,CargarService]
})
export class IngresarCarneComponent implements OnInit{
  public titulo:string;
  public carne:Carne;
  public carneGuardar:Carne;
  public url:string;
  public status:string;
  public idGuardado:string;
  public archivosParaCargar:Array<File>;
  @ViewChild('archivoImagen') fileInput:any;

  constructor(
    private _carneService:CarneService,
    private _cargarService:CargarService
    
  ){
    this.titulo="GUARDAR PELICULA";
    this.url=Global.url;
    this.carne=new Carne('','','','','','');
    this.carneGuardar=new Carne('','','','','','');
    this.status="";
    this.idGuardado="";
    this.archivosParaCargar=[];
  }

  ngOnInit():void{

  }

  guardarCarne(form:NgForm){
    this._carneService.guardarCarnes(this.carne).subscribe(
      response=>{
        if(response.carne){ 
          if(this.archivosParaCargar){
            this._cargarService.peticionRequest(Global.url+"subir-imagen/"+response.carne._id,[],this.archivosParaCargar,'imagen')
            .then((result:any)=>{
              this.carneGuardar=result.response;
              this.idGuardado=result.carne._id;
              this.status='success';
              form.reset();
              this.fileInput.nativeElement.value='';
            });
          }else{
            this.status='failed';
          }
        }else{
          this.status='falied';
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

  imagenChangeEvent(archivoSeleccionado:any){
    this.archivosParaCargar=<Array<File>>archivoSeleccionado.target.files;
  }

}
