import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
   // AppComponent, // Agrega aquí otros componentes que tengas en tu proyecto
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,// Importa HttpClientModule para usar HttpClient en los servicios
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
