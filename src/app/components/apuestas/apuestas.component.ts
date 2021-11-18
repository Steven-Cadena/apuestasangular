import { Component, OnInit } from '@angular/core';
import { Apuesta } from 'src/app/models/apuesta';
import { ServiceEquipo } from 'src/app/services/equipo.service';


@Component({
  selector: 'app-apuestas',
  templateUrl: './apuestas.component.html',
  styleUrls: ['./apuestas.component.css']
})
export class ApuestasComponent implements OnInit {

  public apuestas! : Array<Apuesta>;
  public apuesta! : Apuesta;

  constructor(private _service : ServiceEquipo) { }

  ngOnInit(): void {
    this.cargarApuestas();
  }

  cargarApuestas(){
    this._service.getApuestas().subscribe(res => {
      this.apuestas = res;
    });
  }

  eliminarApuesta(){
    var id = this.apuesta.idApuesta;
    this._service.eliminarApuesta(id).subscribe(response =>{
      this.cargarApuestas();
    });
  }

  recogerApuesta(apuestaEliminar: Apuesta){
    this.apuesta = apuestaEliminar;
  }

}
