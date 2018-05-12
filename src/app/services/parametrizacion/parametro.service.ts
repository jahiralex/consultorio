import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ParametroEntity } from '../../entity/parametrizacion/parametro.entity';
import { GLOBAL } from './../global';

@Injectable()
export class ParametroService{
	public url: string;
	public bd: string;

  constructor(
		public _http: Http
	){
		this.bd = 'paraParametroBD.php/';
		this.url = GLOBAL.url + this.bd;
	}

	getParametroIdTipoParametroList(idTipoParametro){
		return this._http.get(this.url+'parametroIdTipoParametroList/'+idTipoParametro).map(res => res.json());
	}

	getParametroCodigoTipoParametroList(codigoTipoParametro){
		return this._http.get(this.url+'parametroCodigoTipoParametroList/'+codigoTipoParametro).map(res => res.json());
	}

	addParametro(parametro: ParametroEntity){
		let json = JSON.stringify(parametro);
		let params = 'json='+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'parametroAdd', params, {headers: headers})
		.map(res => res.json());
	}

	getParametroId(idParametro){
		return this._http.get(this.url+'parametroId/'+idParametro).map(res => res.json());
	}

	editParametro(idParametro, parametro: ParametroEntity){
		let json = JSON.stringify(parametro);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'parametroEdit/'+idParametro, params, {headers: headers})
						 .map(res => res.json());
	}

	deleteParametro(idParametro){
		return this._http.get(this.url+'parametroDelete/'+idParametro)
						 .map(res => res.json());
	}
}
