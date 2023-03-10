import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarnesComponent } from './components/carnes/carnes.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DetalleCarneComponent } from './components/detalle-carne/detalle-carne.component';
import { EditarCarneComponent } from './components/editar-carne/editar-carne.component';
import { HomeComponent } from './components/home/home.component';
import { IngresarCarneComponent } from './components/ingresar-carne/ingresar-carne.component';

const routes: Routes = [
    {path:'inicio',component:HomeComponent},
    {path:'ingresarCarne',component:IngresarCarneComponent},
    {path:'editarCarne/:id',component:EditarCarneComponent},
    {path:'detalleCarne/:id',component:DetalleCarneComponent},
    {path:'contacto',component:ContactoComponent},
    {path:'carnes',component:CarnesComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  