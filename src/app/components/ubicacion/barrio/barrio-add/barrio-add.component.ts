import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BarrioService } from '../../../../services/ubicacion/barrio.service';
import { BarrioEntity } from '../../../../entity/ubicacion/barrio.entity';

@Component({
  selector: 'app-barrio-add',
  templateUrl: './barrio-add.component.html'
})
export class BarrioAddComponent implements OnInit {
  public tituloBarrioAdd: string;
	public barrio: BarrioEntity;

  constructor(
		private _barrioService: BarrioService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.tituloBarrioAdd = 'Crear Barrio';
		this.barrio = new BarrioEntity(0,'','',0);
	}

	ngOnInit(){
		console.log('barrio-add.component cargando...');
    this.getLocalidadId();
	}

  getLocalidadId(){
		this._route.params.forEach((params: Params) => {
    this.barrio.LOCALIDAD = params['idLocalidad'];
		});
	}

	onSubmit(){
		console.log(this.barrio);
		this.saveBarrio();
	}

	saveBarrio(){
		this._barrioService.addBarrio(this.barrio).subscribe(
			response => {
				if(response.code == 200){
					this._router.navigate(['/barrioLocalidadList', this.barrio.LOCALIDAD]);
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
