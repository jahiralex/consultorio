import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { CuestionarioGrupoEntity } from '../../entity/cuestionario/cuestionario-grupo.entity';
import { GLOBAL } from './../global';

@Injectable()
export class CuestionarioGrupoService{
	public url: string;
	public bd: string;

  constructor(
		public _http: Http
	){
		this.bd = 'cuesCuestionarioGrupoBD.php/';
		this.url = GLOBAL.url + this.bd;
	}

	getCuestionarioGrupoIdCuestionarioList(idCuestionario){
		return this._http.get(this.url+'cuestionarioGrupoIdCuestionarioList/'+idCuestionario).map(res => res.json());
	}

	addCuestionarioGrupo(cuestionarioGrupo: CuestionarioGrupoEntity){
		let json = JSON.stringify(cuestionarioGrupo);
		let params = 'json='+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'cuestionarioGrupoAdd', params, {headers: headers})
		.map(res => res.json());
	}

	getCuestionarioGrupoId(idCuestionarioGrupo){
		return this._http.get(this.url+'cuestionarioGrupoId/'+idCuestionarioGrupo).map(res => res.json());
	}

	editCuestionarioGrupo(idCuestionarioGrupo, cuestionarioGrupo: CuestionarioGrupoEntity){
		let json = JSON.stringify(cuestionarioGrupo);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'cuestionarioGrupoEdit/'+idCuestionarioGrupo, params, {headers: headers})
						 .map(res => res.json());
	}

	deleteCuestionarioGrupo(idCuestionarioGrupo){
		return this._http.get(this.url+'cuestionarioGrupoDelete/'+idCuestionarioGrupo)
						 .map(res => res.json());
	}
}
