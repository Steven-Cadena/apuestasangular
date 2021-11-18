import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { DetallejugadorComponent } from './components/detallejugador/detallejugador.component';
import { ApuestasComponent } from './components/apuestas/apuestas.component';
import { RealizarapuestaComponent } from './components/realizarapuesta/realizarapuesta.component';
import { ResultadobusquedaComponent } from './components/resultadobusqueda/resultadobusqueda.component';

const appRoutes: Routes = [
    {path:"",component: HomeComponent},
    {path:"equipodetalles/:idequipo",component:DetallesComponent},
    {path:"apuestas",component:ApuestasComponent},
    {path:"jugadores/:idequipo",component:JugadoresComponent},
    {path:"detallejugador/:idjugador",component:DetallejugadorComponent},
    {path:"realizarapuesta",component:RealizarapuestaComponent},
    {path:"resultado/:nombre",component:ResultadobusquedaComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);