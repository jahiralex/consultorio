import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { PaisEntity } from '../../entity/ubicacion/pais.entity';
import { GLOBAL } from './../global';

@Injectable()
export class PaisService{
	public url: string;
	public bd: string;

  constructor(
		public _http: Http
	){
		this.bd = 'ubicPaisBD.php/';
		this.url = GLOBAL.url + this.bd;
	}

	getPaisList(){
		return this._http.get(this.url+'paisList').map(res => res.json());
	}

	addPais(pais: PaisEntity){
		let json = JSON.stringify(pais);
		let params = 'json='+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'paisAdd', params, {headers: headers})
		.map(res => res.json());
	}

	getPaisId(idPais){
		return this._http.get(this.url+'paisId/'+idPais).map(res => res.json());
	}

	editPais(idPais, pais: PaisEntity){
		let json = JSON.stringify(pais);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'paisEdit/'+idPais, params, {headers: headers})
						 .map(res => res.json());
	}

	deletePais(idPais){
		return this._http.get(this.url+'paisDelete/'+idPais)
						 .map(res => res.json());
	}
}
