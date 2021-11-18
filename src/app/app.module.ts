import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';

//importamos para la navegacion
import { routing,appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
//importamos forms para los formularios 
import { FormsModule } from '@angular/forms';
import { DetallesComponent } from './components/detalles/detalles.component';

import { ServiceEquipo } from './services/equipo.service';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { ApuestasComponent } from './components/apuestas/apuestas.component';
import { DetallejugadorComponent } from './components/detallejugador/detallejugador.component';
import { RealizarapuestaComponent } from './components/realizarapuesta/realizarapuesta.component';
import { ResultadobusquedaComponent } from './components/resultadobusqueda/resultadobusqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    DetallesComponent,
    JugadoresComponent,
    ApuestasComponent,
    DetallejugadorComponent,
    RealizarapuestaComponent,
    ResultadobusquedaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders,ServiceEquipo],
  bootstrap: [AppComponent]
})
export class AppModule { }
