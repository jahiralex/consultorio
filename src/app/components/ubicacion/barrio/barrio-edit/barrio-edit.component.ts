import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BarrioService } from '../../../../services/ubicacion/barrio.service';
import { BarrioEntity } from '../../../../entity/ubicacion/barrio.entity';
import { LocalidadService } from '../../../../services/ubicacion/localidad.service';
import { LocalidadEntity } from '../../../../entity/ubicacion/localidad.entity';
import { GLOBAL } from '../../../../services/global';

@Component({
  selector: 'app-barrio-edit',
  templateUrl: '../../../../components/ubicacion/barrio/barrio-add/barrio-add.component.html'
})
export class BarrioEditComponent implements OnInit {
  public tituloBarrioAdd: string;
	public barrio: BarrioEntity;
  public localidad: LocalidadEntity;
	public is_edit;

	constructor(
		private _barrioService: BarrioService,
    private _localidadService: LocalidadService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.tituloBarrioAdd = 'Editar Barrio (';
		this.barrio = new BarrioEntity(0,'','',0);
    this.localidad = new LocalidadEntity(0,'','',0);
	}

	ngOnInit(){
		console.log(this.tituloBarrioAdd);
		this.getBarrioId();
	}

	onSubmit(){
		console.log(this.barrio);
    this.updateBarrio();
	}

	updateBarrio(){
		this._route.params.forEach((params: Params) => {
			let idBarrio = params['idBarrio'];

			this._barrioService.editBarrio(idBarrio, this.barrio).subscribe(
				response => {
					if(response.code == 200){
						this._router.navigate(['/barrioLocalidadList', this.barrio.LOCALIDAD]);
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

  getBarrioId(){
		this._route.params.forEach((params: Params) => {
			let idBarrio = params['idBarrio'];
      let descripcionLocalidad = params['descripcionLocalidad'];
      this.tituloBarrioAdd = this.tituloBarrioAdd + descripcionLocalidad + ')';

			this._barrioService.getBarrioId(idBarrio).subscribe(
				response => {
					if(response.code == 200){
						this.barrio = response.data;
					}else{
						this._router.navigate(['/barrioList']);
					}
				},
				error => {
					console.log(<any>error);
				}
			);
		});
	}
}
