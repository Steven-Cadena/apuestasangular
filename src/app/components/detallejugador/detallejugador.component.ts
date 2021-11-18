import { Component, OnInit } from '@angular/core';
import { ServiceEquipo } from 'src/app/services/equipo.service';
import { Jugador } from 'src/app/models/jugador';
import { ActivatedRoute, Params, Route } from '@angular/router';

@Component({
  selector: 'app-detallejugador',
  templateUrl: './detallejugador.component.html',
  styleUrls: ['./detallejugador.component.css']
})
export class DetallejugadorComponent implements OnInit {
  public jugador!: Jugador;
  constructor(
    private _service:ServiceEquipo,
    private _route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params:Params)=>{
      var idjugador = params['idjugador'];
      this.cargarJugador(idjugador);
    });
  }
  cargarJugador(idjugador:string): void{
    this._service.getJugadoresId(idjugador).subscribe(response=>{
      this.jugador = response;
    });
  }

}
