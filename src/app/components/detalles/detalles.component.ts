import { Component, OnInit } from '@angular/core';
import { ServiceEquipo } from 'src/app/services/equipo.service';
import { Equipo } from 'src/app/models/equipo';
import { ActivatedRoute, Params, Route } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  public equipo!: Equipo;

  constructor(
    private _service:ServiceEquipo,
    private _route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params:Params)=>{
      var idequipo = params['idequipo'];
      this._service.getEquipoId(idequipo).subscribe(response=>{
        this.equipo = response;
      });
    })
  }
}
