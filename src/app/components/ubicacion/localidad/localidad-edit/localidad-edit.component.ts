import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LocalidadService } from '../../../../services/ubicacion/localidad.service';
import { LocalidadEntity } from '../../../../entity/ubicacion/localidad.entity';
import { CiudadService } from '../../../../services/ubicacion/ciudad.service';
import { CiudadEntity } from '../../../../entity/ubicacion/ciudad.entity';
import { GLOBAL } from '../../../../services/global';

@Component({
  selector: 'app-localidad-edit',
  templateUrl: '../../../../components/ubicacion/localidad/localidad-add/localidad-add.component.html'
})
export class LocalidadEditComponent implements OnInit {
  public tituloLocalidadAdd: string;
	public localidad: LocalidadEntity;
  public ciudad: CiudadEntity;
	public is_edit;

	constructor(
		private _localidadService: LocalidadService,
    private _ciudadService: CiudadService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.tituloLocalidadAdd = 'Editar Localidad (';
		this.localidad = new LocalidadEntity(0,'','',0);
    this.ciudad = new CiudadEntity(0,'','',0);
	}

	ngOnInit(){
		console.log(this.tituloLocalidadAdd);
		this.getLocalidadId();
	}

	onSubmit(){
		console.log(this.localidad);
    this.updateLocalidad();
	}

	updateLocalidad(){
		this._route.params.forEach((params: Params) => {
			let idLocalidad = params['idLocalidad'];

			this._localidadService.editLocalidad(idLocalidad, this.localidad).subscribe(
				response => {
					if(response.code == 200){
						this._router.navigate(['/localidadCiudadList', this.localidad.CIUDAD]);
					}else{
						console.log(response);
					}
				},
				error => {
					console.log(<any>error);
				}
			);
		});
	}

  getLocalidadId(){
		this._route.params.forEach((params: Params) => {
			let idLocalidad = params['idLocalidad'];
      let descripcionCiudad = params['descripcionCiudad'];
      this.tituloLocalidadAdd = this.tituloLocalidadAdd + descripcionCiudad + ')';

			this._localidadService.getLocalidadId(idLocalidad).subscribe(
				response => {
					if(response.code == 200){
						this.localidad = response.data;
					}else{
						this._router.navigate(['/localidadList']);
					}
				},
				error => {
					console.log(<any>error);
				}
			);
		});
	}
}
