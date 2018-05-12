import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LocalidadService } from '../../../../services/ubicacion/localidad.service';
import { LocalidadEntity } from '../../../../entity/ubicacion/localidad.entity';

@Component({
  selector: 'app-localidad-add',
  templateUrl: './localidad-add.component.html'
})
export class LocalidadAddComponent implements OnInit {
  public tituloLocalidadAdd: string;
	public localidad: LocalidadEntity;

  constructor(
		private _localidadService: LocalidadService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.tituloLocalidadAdd = 'Crear Localidad';
		this.localidad = new LocalidadEntity(0,'','',0);
	}

	ngOnInit(){
		console.log('localidad-add.component cargando...');
    this.getCiudadId();
	}

  getCiudadId(){
		this._route.params.forEach((params: Params) => {
    this.localidad.CIUDAD = params['idCiudad'];
		});
	}

	onSubmit(){
		console.log(this.localidad);
		this.saveLocalidad();
	}

	saveLocalidad(){
		this._localidadService.addLocalidad(this.localidad).subscribe(
			response => {
				if(response.code == 200){
					this._router.navigate(['/localidadCiudadList', this.localidad.CIUDAD]);
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
