import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ServiceEquipo } from 'src/app/services/equipo.service';
import { Jugador } from 'src/app/models/jugador';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-resultadobusqueda',
  templateUrl: './resultadobusqueda.component.html',
  styleUrls: ['./resultadobusqueda.component.css']
})
export class ResultadobusquedaComponent implements OnInit {
  public jugadores!:Array<Jugador>;
  @ViewChild("cajabusqueda") cajabusqueda!: ElementRef;
  constructor(
    private _service:ServiceEquipo,
    private _route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params : Params) => {
      var valor = params['nombre'];
      this.cargarJugadores(valor);
    });
  }

  cargarJugadores(nombre:string){
    this._service.buscarJugadores(nombre).subscribe(response=>{
      this.jugadores=response;
    });
  }

}
