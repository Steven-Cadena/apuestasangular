import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Global } from "../global";
import { Observable } from "rxjs";
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
}