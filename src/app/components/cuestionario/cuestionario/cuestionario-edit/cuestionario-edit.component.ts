import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CuestionarioService } from '../../../../services/cuestionario/cuestionario.service';
import { CuestionarioEntity } from '../../../../entity/cuestionario/cuestionario.entity';

@Component({
  selector: 'app-cuestionario-edit',
  templateUrl: '../../../../components/cuestionario/cuestionario/cuestionario-add/cuestionario-add.component.html'
})
export class CuestionarioEditComponent implements OnInit {
  public tituloCuestionarioAdd: string;
	public cuestionario: CuestionarioEntity;

	constructor(
		private _cuestionarioService: CuestionarioService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.tituloCuestionarioAdd = 'Editar Cuestionario';
		this.cuestionario = new CuestionarioEntity(0,'','','','A');
	}

	ngOnInit(){
		console.log(this.tituloCuestionarioAdd);
		this.getCuestionarioId();
	}

	onSubmit(){
		console.log(this.cuestionario);
    this.updateCuestionario();
	}

	updateCuestionario(){
		this._route.params.forEach((params: Params) => {
			let idCuestionario = params['idCuestionario'];

			this._cuestionarioService.editCuestionario(idCuestionario, this.cuestionario).subscribe(
				response => {
					if(response.code == 200){
						this._router.navigate(['/cuestionarioList']);
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

	getCuestionarioId(){
		this._route.params.forEach((params: Params) => {
			let idCuestionario = params['idCuestionario'];
			this._cuestionarioService.getCuestionarioId(idCuestionario).subscribe(
				response => {
					if(response.code == 200){
						this.cuestionario = response.data;
					}else{
						this._router.navigate(['/cuestionarioList']);
					}
				},
				error => {
					console.log(<any>error);
				}
			);
		});
	}
}
