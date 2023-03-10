import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { PieComponent } from './components/pie/pie.component';
import { IngresarCarneComponent } from './components/ingresar-carne/ingresar-carne.component';
import { CarnesComponent } from './components/carnes/carnes.component';
import { EditarCarneComponent } from './components/editar-carne/editar-carne.component';
import { DetalleCarneComponent } from './components/detalle-carne/detalle-carne.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EncabezadoComponent,
    PieComponent,
    IngresarCarneComponent,
    CarnesComponent,
    EditarCarneComponent,
    DetalleCarneComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
