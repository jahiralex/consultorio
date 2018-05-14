import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CiudadService } from '../../../../services/ubicacion/ciudad.service';
import { CiudadEntity } from '../../../../entity/ubicacion/ciudad.entity';

@Component({
  selector: 'app-ciudad-add',
  templateUrl: './ciudad-add.component.html'
})
export class CiudadAddComponent implements OnInit {
  public tituloCiudadAdd: string;
	public ciudad: CiudadEntity;

  constructor(
		private _ciudadService: CiudadService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.tituloCiudadAdd = 'Crear Ciudad';
		this.ciudad = new CiudadEntity(0,'','',0);
	}

	ngOnInit(){
		console.log('ciudad-add.component cargando...');
    this.getDepartamentoId();
	}

  getDepartamentoId(){
		this._route.params.forEach((params: Params) => {
    this.ciudad.DEPARTAMENTO = params['idDepartamento'];
		});
	}

	onSubmit(){
		console.log(this.ciudad);
		this.saveCiudad();
	}

	saveCiudad(){
		this._ciudadService.addCiudad(this.ciudad).subscribe(
			response => {
				if(response.code == 200){
					this._router.navigate(['/ciudadDepartamentoList', this.ciudad.DEPARTAMENTO]);
				} else {
					console.log(response);
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}

}
