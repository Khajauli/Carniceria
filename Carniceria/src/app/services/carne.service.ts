/*encargado de hacer los metodos get, post, put*/
import {Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Carne } from "../models/carne";
import { Global } from "./global";
import { Observable } from 'rxjs';

@Injectable()
export class CarneService{
    public url:string;
    constructor(
        private _http:HttpClient
    ){
        this.url=Global.url;
    }


    getCarnes():Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'carnes',{headers:headers});
    }


    guardarCarnes(carne:Carne):Observable<any>{
        let params=JSON.stringify(carne);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'guardar-carne',params,{headers:headers});
    }


    getCarne(id:string):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'carne/'+id,{headers:headers});
    }

    nombreCarne(nombre:string):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'nombre-carne/'+nombre,{headers:headers});
    }


    updateCarne(carne:Carne):Observable<any>{
        let params=JSON.stringify(carne);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.put(this.url+'editar/'+carne._id,params,{headers:headers});
    }

    deleteCarne(id:string):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.delete(this.url+'carne/'+id,{headers:headers});
    }

}