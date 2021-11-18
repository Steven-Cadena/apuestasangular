import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ServiceEquipo } from 'src/app/services/equipo.service';
import { Apuesta } from 'src/app/models/apuesta';
import { Router } from '@angular/router';


@Component({
  selector: 'app-realizarapuesta',
  templateUrl: './realizarapuesta.component.html',
  styleUrls: ['./realizarapuesta.component.css']
})
export class RealizarapuestaComponent implements OnInit {
  public newApuesta!: Apuesta;
  @ViewChild("cajanombre") cajanombre!: ElementRef;
  @ViewChild("cajareal") cajareal!: ElementRef;
  @ViewChild("cajaatletico") cajaatletico!: ElementRef;
  @ViewChild("cajafecha") cajafecha!: ElementRef;
  
  constructor(
    private _service:ServiceEquipo,
    private _router:Router,
  ) { }

  ngOnInit(): void {
  }

  nuevaApuesta(): void{
    var num = this.cajanombre.nativeElement.value;
    var atleti = this.cajaatletico.nativeElement.value;
    var real = this.cajareal.nativeElement.value;
    var resultado = real + " - " + atleti;
    var fecha = this.cajafecha.nativeElement.value;
    var nuevaapuesta = new Apuesta(0,num,resultado,fecha); 
    this._service.insertApuesta(nuevaapuesta).subscribe(response=>{
      this._router.navigate(["/"]);
    });
  }
}
