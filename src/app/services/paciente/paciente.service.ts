import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { PacienteEntity } from '../../entity/paciente/paciente.entity';
import { GLOBAL } from './../global';

@Injectable()
export class PacienteService{
	public url: string;
	public bd: string;

  constructor(
		public _http: Http
	){
		this.bd = 'pacPacienteBD.php/';
		this.url = GLOBAL.url + this.bd;
	}

	getPacienteList(){
		return this._http.get(this.url+'pacienteList').map(res => res.json());
	}

	addPaciente(paciente: PacienteEntity){
		let json = JSON.stringify(paciente);
		let params = 'json='+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'pacienteAdd', params, {headers: headers})
		.map(res => res.json());
	}

	getPacienteId(idPaciente){
		return this._http.get(this.url+'pacienteId/'+idPaciente).map(res => res.json());
	}

	editPaciente(idPaciente, paciente: PacienteEntity){
		let json = JSON.stringify(paciente);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'pacienteEdit/'+idPaciente, params, {headers: headers})
						 .map(res => res.json());
	}

	deletePaciente(idPaciente){
		return this._http.get(this.url+'pacienteDelete/'+idPaciente)
						 .map(res => res.json());
	}

	getPacienteNumeroIdentificacionList(numeroIdentificacion){
		return this._http.get(this.url+'pacienteNumeroIdentificacionList/'+numeroIdentificacion).map(res => res.json());
	}
}
