import { Component, OnInit } from '@angular/core';
import { Apuesta } from 'src/app/models/apuesta';
import { ServiceEquipo } from 'src/app/services/equipo.service';


@Component({
  selector: 'app-apuestas',
  templateUrl: './apuestas.component.html',
  styleUrls: ['./apuestas.component.css']
})
export class ApuestasComponent implements OnInit {
  public apuestas!: Array<Apuesta>;
  public apuestadelete!: Apuesta;
  constructor(
    private _service:ServiceEquipo,
  ) { }

  ngOnInit(): void {
    this.cargarApuesta();
  }

  cargarApuesta(){
    this._service.getApuestas().subscribe(response=>{
      this.apuestas = response;
    });
  }

  eliminarApuesta(){
    // this._service.eliminarApuesta(idapuesta).subscribe(response=>{
    // });
  }
  recogerApuesta(){
    this._service
  }
}
