import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Global } from "../global";
import { Observable } from "rxjs";
import { Apuesta } from "../models/apuesta";
@Injectable()
export class ServiceEquipo{
    constructor(private _http:HttpClient){}

    getEquipos(): Observable<any>{
        var request = "/api/equipos";
        var url = Global.urlapuestas + request;
        return this._http.get(url);
    }

    getEquipoId(idequipo: string):Observable<any>{
        var request = "/api/equipos/" + idequipo;
        var url = Global.urlapuestas + request;
        return this._http.get(url);
    }

    getJugadores(idequipo: string):Observable<any>{
        var request = "/api/jugadores/jugadoresequipos/" + idequipo;
        var url = Global.urlapuestas + request;
        return this._http.get(url);
    }

    getJugadoresId(idjugador:string):Observable<any>{
        var request = "/api/jugadores/"+ idjugador;
        var url = Global.urlapuestas + request;
        return this._http.get(url);
    }

    getApuestas():Observable<any>{
        var request = "/api/apuestas";
        var url = Global.urlapuestas + request;
        return this._http.get(url);
    }
    insertApuesta(apuesta:Apuesta):Observable<any>{
        var json = JSON.stringify(apuesta);
        var header = new HttpHeaders().set("Content-Type","application/json");
        var request = "/api/apuestas";
        var url = Global.urlapuestas + request;
        return this._http.post(url,json,{headers: header});
    }

    eliminarApuesta(id:string){
        var request = "/api/apuestas/" + id;
        var url = Global.urlapuestas + request;
        return this._http.delete(url);
    }

    buscarJugadores(nombre:string):Observable<any>{
        var request = "/api/jugadores/buscarjugadores/" + nombre;
        var url = Global.urlapuestas + request;
        return this._http.get(url);
    }
}