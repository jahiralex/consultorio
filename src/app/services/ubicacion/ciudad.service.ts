import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { CiudadEntity } from '../../entity/ubicacion/ciudad.entity';
import { GLOBAL } from './../global';

@Injectable()
export class CiudadService{
	public url: string;
	public bd: string;

  constructor(
		public _http: Http
	){
		this.bd = 'ubicCiudadBD.php/';
		this.url = GLOBAL.url + this.bd;
	}

	getCiudadDepartamentoList(idDepartamento){
		return this._http.get(this.url+'ciudadDepartamentoList/'+idDepartamento).map(res => res.json());
	}

	addCiudad(ciudad: CiudadEntity){
		let json = JSON.stringify(ciudad);
		let params = 'json='+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'ciudadAdd', params, {headers: headers})
		.map(res => res.json());
	}

	getCiudadId(idCiudad){
		return this._http.get(this.url+'ciudadId/'+idCiudad).map(res => res.json());
	}

	editCiudad(idCiudad, ciudad: CiudadEntity){
		let json = JSON.stringify(ciudad);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'ciudadEdit/'+idCiudad, params, {headers: headers})
						 .map(res => res.json());
	}

	deleteCiudad(idCiudad){
		return this._http.get(this.url+'ciudadDelete/'+idCiudad)
						 .map(res => res.json());
	}
}
