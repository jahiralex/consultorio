import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CiudadService } from '../../../../services/ubicacion/ciudad.service';
import { CiudadEntity } from '../../../../entity/ubicacion/ciudad.entity';
import { DepartamentoEntity } from '../../../../entity/ubicacion/departamento.entity';
import { DepartamentoService } from '../../../../services/ubicacion/departamento.service';
import { GLOBAL } from '../../../../services/global';

@Component({
  selector: 'app-ciudad-edit',
  templateUrl: '../../../../components/ubicacion/ciudad/ciudad-add/ciudad-add.component.html'
})
export class CiudadEditComponent implements OnInit {
  public tituloCiudadAdd: string;
	public ciudad: CiudadEntity;
  public departamento: DepartamentoEntity;
	public is_edit;

	constructor(
		private _ciudadService: CiudadService,
    private _departamentoService: DepartamentoService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.tituloCiudadAdd = 'Editar Ciudad (';
		this.ciudad = new CiudadEntity(0,'','',0);
    this.departamento = new DepartamentoEntity(0,'','',0);
	}

	ngOnInit(){
		console.log(this.tituloCiudadAdd);
		this.getCiudadId();
	}

	onSubmit(){
		console.log(this.ciudad);
    this.updateCiudad();
	}

	updateCiudad(){
		this._route.params.forEach((params: Params) => {
			let idCiudad = params['idCiudad'];

			this._ciudadService.editCiudad(idCiudad, this.ciudad).subscribe(
				response => {
					if(response.code == 200){
						this._router.navigate(['/ciudadDepartamentoList', this.ciudad.DEPARTAMENTO]);
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

  getCiudadId(){
		this._route.params.forEach((params: Params) => {
			let idCiudad = params['idCiudad'];
      let descripcionDepartamento = params['descripcionDepartamento'];
      this.tituloCiudadAdd = this.tituloCiudadAdd + descripcionDepartamento + ')';

			this._ciudadService.getCiudadId(idCiudad).subscribe(
				response => {
					if(response.code == 200){
						this.ciudad = response.data;
					}else{
						this._router.navigate(['/ciudadList']);
					}
				},
				error => {
					console.log(<any>error);
				}
			);
		});
	}
}
