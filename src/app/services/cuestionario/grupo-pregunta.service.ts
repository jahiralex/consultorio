import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GrupoPreguntaEntity } from '../../entity/cuestionario/grupo-pregunta.entity';
import { GLOBAL } from './../global';

@Injectable()
export class GrupoPreguntaService{
	public url: string;
	public bd: string;

  constructor(
		public _http: Http
	){
		this.bd = 'cuesGrupoPreguntaBD.php/';
		this.url = GLOBAL.url + this.bd;
	}

	getGrupoPreguntaIdGrupoList(idGrupo){
		return this._http.get(this.url+'grupoPreguntaIdGrupoList/'+idGrupo).map(res => res.json());
	}

	addGrupoPregunta(grupoPregunta: GrupoPreguntaEntity){
		let json = JSON.stringify(grupoPregunta);
		let params = 'json='+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'grupoPreguntaAdd', params, {headers: headers})
		.map(res => res.json());
	}

	getGrupoPreguntaId(idGrupoPregunta){
		return this._http.get(this.url+'grupoPreguntaId/'+idGrupoPregunta).map(res => res.json());
	}

	editGrupoPregunta(idGrupoPregunta, grupoPregunta: GrupoPreguntaEntity){
		let json = JSON.stringify(grupoPregunta);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'grupoPreguntaEdit/'+idGrupoPregunta, params, {headers: headers})
						 .map(res => res.json());
	}

	deleteGrupoPregunta(idGrupoPregunta){
		return this._http.get(this.url+'grupoPreguntaDelete/'+idGrupoPregunta)
						 .map(res => res.json());
	}
}
