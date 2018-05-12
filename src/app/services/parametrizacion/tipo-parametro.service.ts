import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { TipoParametroEntity } from '../../entity/parametrizacion/tipo-parametro.entity';
import { GLOBAL } from './../global';

@Injectable()
export class TipoParametroService{
	public url: string;
	public bd: string;

  constructor(
		public _http: Http
	){
		this.bd = 'paraTipoParametroBD.php/';
		this.url = GLOBAL.url + this.bd;
	}

	getTipoParametroList(){
		return this._http.get(this.url+'tipoParametroList').map(res => res.json());
	}

	addTipoParametro(tipoParametro: TipoParametroEntity){
		let json = JSON.stringify(tipoParametro);
		let params = 'json='+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'tipoParametroAdd', params, {headers: headers})
		.map(res => res.json());
	}

	getTipoParametroId(idTipoParametro){
		return this._http.get(this.url+'tipoParametroId/'+idTipoParametro).map(res => res.json());
	}

	editTipoParametro(idTipoParametro, tipoParametro: TipoParametroEntity){
		let json = JSON.stringify(tipoParametro);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'tipoParametroEdit/'+idTipoParametro, params, {headers: headers})
						 .map(res => res.json());
	}

	deleteTipoParametro(idTipoParametro){
		return this._http.get(this.url+'tipoParametroDelete/'+idTipoParametro)
						 .map(res => res.json());
	}
}
