import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GrupoEntity } from '../../entity/cuestionario/grupo.entity';
import { GLOBAL } from './../global';

@Injectable()
export class GrupoService{
	public url: string;
	public bd: string;

  constructor(
		public _http: Http
	){
		this.bd = 'cuesGrupoBD.php/';
		this.url = GLOBAL.url + this.bd;
	}

	getGrupoList(){
		return this._http.get(this.url+'grupoList').map(res => res.json());
	}

	addGrupo(grupo: GrupoEntity){
		let json = JSON.stringify(grupo);
		let params = 'json='+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'grupoAdd', params, {headers: headers})
		.map(res => res.json());
	}

	getGrupoId(idGrupo){
		return this._http.get(this.url+'grupoId/'+idGrupo).map(res => res.json());
	}

	editGrupo(idGrupo, grupo: GrupoEntity){
		let json = JSON.stringify(grupo);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'grupoEdit/'+idGrupo, params, {headers: headers})
						 .map(res => res.json());
	}

	deleteGrupo(idGrupo){
		return this._http.get(this.url+'grupoDelete/'+idGrupo)
						 .map(res => res.json());
	}
}
