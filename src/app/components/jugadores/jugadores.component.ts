import { Component, OnInit } from '@angular/core';
import { ServiceEquipo } from 'src/app/services/equipo.service';
import { Jugador } from 'src/app/models/jugador';
import { ActivatedRoute, Params, Route } from '@angular/router';


@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {
  public jugadores!:Array<Jugador>;
  constructor(
    private _service:ServiceEquipo,
    private _route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params:Params)=>{
      var idequipo = params['idequipo'];
      this.cargarJugadores(idequipo);
    });
  }

  cargarJugadores(idequipo:string){
    this._service.getJugadores(idequipo).subscribe(response=>{
      this.jugadores = response;
    });
  }
}
