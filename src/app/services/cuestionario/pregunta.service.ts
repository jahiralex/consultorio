import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { PreguntaEntity } from '../../entity/cuestionario/pregunta.entity';
import { GLOBAL } from './../global';

@Injectable()
export class PreguntaService{
	public url: string;
	public bd: string;

  constructor(
		public _http: Http
	){
		this.bd = 'cuesPreguntaBD.php/';
		this.url = GLOBAL.url + this.bd;
	}

	getPreguntaList(){
		return this._http.get(this.url+'preguntaList').map(res => res.json());
	}

	addPregunta(pregunta: PreguntaEntity){
		let json = JSON.stringify(pregunta);
		let params = 'json='+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'preguntaAdd', params, {headers: headers})
		.map(res => res.json());
	}

	getPreguntaId(idPregunta){
		return this._http.get(this.url+'preguntaId/'+idPregunta).map(res => res.json());
	}

	editPregunta(idPregunta, pregunta: PreguntaEntity){
		let json = JSON.stringify(pregunta);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'preguntaEdit/'+idPregunta, params, {headers: headers})
						 .map(res => res.json());
	}

	deletePregunta(idPregunta){
		return this._http.get(this.url+'preguntaDelete/'+idPregunta)
						 .map(res => res.json());
	}
}
