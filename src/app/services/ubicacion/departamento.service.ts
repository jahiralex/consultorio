import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { DepartamentoEntity } from '../../entity/ubicacion/departamento.entity';
import { GLOBAL } from './../global';

@Injectable()
export class DepartamentoService{
	public url: string;
	public bd: string;

  constructor(
		public _http: Http
	){
		this.bd = 'ubicDepartamentoBD.php/';
		this.url = GLOBAL.url + this.bd;
	}

	getDepartamentoPaisList(idPais){
		return this._http.get(this.url+'departamentoPaisList/'+idPais).map(res => res.json());
	}

	addDepartamento(departamento: DepartamentoEntity){
		let json = JSON.stringify(departamento);
		let params = 'json='+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'departamentoAdd', params, {headers: headers})
		.map(res => res.json());
	}

	getDepartamentoId(idDepartamento){
		return this._http.get(this.url+'departamentoId/'+idDepartamento).map(res => res.json());
	}

	editDepartamento(idDepartamento, departamento: DepartamentoEntity){
		let json = JSON.stringify(departamento);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'departamentoEdit/'+idDepartamento, params, {headers: headers})
						 .map(res => res.json());
	}

	deleteDepartamento(idDepartamento){
		return this._http.get(this.url+'departamentoDelete/'+idDepartamento)
						 .map(res => res.json());
	}
}
