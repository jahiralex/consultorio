import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CuestionarioService } from '../../../../services/cuestionario/cuestionario.service';
import { CuestionarioEntity } from '../../../../entity/cuestionario/cuestionario.entity';

@Component({
  selector: 'app-cuestionario-add',
  templateUrl: './cuestionario-add.component.html'
})
export class CuestionarioAddComponent implements OnInit {
  public tituloCuestionarioAdd: string;
	public cuestionario: CuestionarioEntity;

  constructor(
		private _cuestionarioService: CuestionarioService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.tituloCuestionarioAdd = 'Crear Cuestionario';
		this.cuestionario = new CuestionarioEntity(0,'','','','A');
	}

	ngOnInit(){
		console.log('cuestionario-add.component cargando...');
	}

	onSubmit(){
		console.log(this.cuestionario);
		this.saveCuestionario();
	}

	saveCuestionario(){
		this._cuestionarioService.addCuestionario(this.cuestionario).subscribe(
			response => {
				if(response.code == 200){
					this._router.navigate(['/cuestionarioList']);
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
