import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Equipo } from 'src/app/models/equipo';
import { ServiceEquipo } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public equipos!: Array<Equipo>;
  public valor!:string;
  @ViewChild("cajabusqueda") cajabusqueda!:ElementRef;
  constructor(
    private _service:ServiceEquipo
  ) { }

  ngOnInit(): void {
    this.cargarEquipos();
  }

  cargarEquipos(): void{
    this._service.getEquipos().subscribe(response=>{
      this.equipos = response;
    });
  }

  cambiarValor(){
    this.valor=this.cajabusqueda.nativeElement.value;
    console.log(this.valor);
  }
}
