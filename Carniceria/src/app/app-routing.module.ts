import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IngresarCarneComponent } from './components/ingresar-carne/ingresar-carne.component';

const routes: Routes = [
    {path:'inicio',component:HomeComponent},
    {path:'ingresarCarne',component:IngresarCarneComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  