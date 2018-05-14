import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { LocalidadEntity } from '../../entity/ubicacion/localidad.entity';
import { GLOBAL } from './../global';

@Injectable()
export class LocalidadService{
	public url: string;
	public bd: string;

  constructor(
		public _http: Http
	){
		this.bd = 'ubicLocalidadBD.php/';
		this.url = GLOBAL.url + this.bd;
	}

	getLocalidadCiudadList(idCiudad){
		return this._http.get(this.url+'localidadCiudadList/'+idCiudad).map(res => res.json());
	}

	addLocalidad(localidad: LocalidadEntity){
		let json = JSON.stringify(localidad);
		let params = 'json='+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'localidadAdd', params, {headers: headers})
		.map(res => res.json());
	}

	getLocalidadId(idLocalidad){
		return this._http.get(this.url+'localidadId/'+idLocalidad).map(res => res.json());
	}

	editLocalidad(idLocalidad, localidad: LocalidadEntity){
		let json = JSON.stringify(localidad);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'localidadEdit/'+idLocalidad, params, {headers: headers})
						 .map(res => res.json());
	}

	deleteLocalidad(idLocalidad){
		return this._http.get(this.url+'localidadDelete/'+idLocalidad)
						 .map(res => res.json());
	}
}
