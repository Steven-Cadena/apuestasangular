import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ServiceEquipo } from 'src/app/services/equipo.service';
import { Apuesta } from 'src/app/models/apuesta';


@Component({
  selector: 'app-realizarapuesta',
  templateUrl: './realizarapuesta.component.html',
  styleUrls: ['./realizarapuesta.component.css']
})
export class RealizarapuestaComponent implements OnInit {
  public newApuesta!: Apuesta;
  constructor(
    private _service:ServiceEquipo
  ) { }

  ngOnInit(): void {
  }

  nuevaApuesta(): void{

  }
}
