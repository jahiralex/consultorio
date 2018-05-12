import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { BarrioEntity } from '../../entity/ubicacion/barrio.entity';
import { GLOBAL } from './../global';

@Injectable()
export class BarrioService{
	public url: string;
	public bd: string;

  constructor(
		public _http: Http
	){
		this.bd = 'ubicBarrioBD.php/';
		this.url = GLOBAL.url + this.bd;
	}

	getBarrioLocalidadList(idLocalidad){
		return this._http.get(this.url+'barrioLocalidadList/'+idLocalidad).map(res => res.json());
	}

	addBarrio(barrio: BarrioEntity){
		let json = JSON.stringify(barrio);
		let params = 'json='+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'barrioAdd', params, {headers: headers})
		.map(res => res.json());
	}

	getBarrioId(idBarrio){
		return this._http.get(this.url+'barrioId/'+idBarrio).map(res => res.json());
	}

	editBarrio(idBarrio, barrio: BarrioEntity){
		let json = JSON.stringify(barrio);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'barrioEdit/'+idBarrio, params, {headers: headers})
						 .map(res => res.json());
	}

	deleteBarrio(idBarrio){
		return this._http.get(this.url+'barrioDelete/'+idBarrio)
						 .map(res => res.json());
	}
}
