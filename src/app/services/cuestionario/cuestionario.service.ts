import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { CuestionarioEntity } from '../../entity/cuestionario/cuestionario.entity';
import { GLOBAL } from './../global';

@Injectable()
export class CuestionarioService{
	public url: string;
	public bd: string;

  constructor(
		public _http: Http
	){
		this.bd = 'cuesCuestionarioBD.php/';
		this.url = GLOBAL.url + this.bd;
	}

	getCuestionarioList(){
		return this._http.get(this.url+'cuestionarioList').map(res => res.json());
	}

	addCuestionario(cuestionario: CuestionarioEntity){
		let json = JSON.stringify(cuestionario);
		let params = 'json='+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'cuestionarioAdd', params, {headers: headers})
		.map(res => res.json());
	}

	getCuestionarioId(idCuestionario){
		return this._http.get(this.url+'cuestionarioId/'+idCuestionario).map(res => res.json());
	}

	editCuestionario(idCuestionario, cuestionario: CuestionarioEntity){
		let json = JSON.stringify(cuestionario);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'cuestionarioEdit/'+idCuestionario, params, {headers: headers})
						 .map(res => res.json());
	}

	deleteCuestionario(idCuestionario){
		return this._http.get(this.url+'cuestionarioDelete/'+idCuestionario)
						 .map(res => res.json());
	}

	getCuestionarioCodigoCuestionarioList(codigoCuestionario){
		return this._http.get(this.url+'cuestionarioCodigoCuestionarioList/'+codigoCuestionario).map(res => res.json());
	}
}
