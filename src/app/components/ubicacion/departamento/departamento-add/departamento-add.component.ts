import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DepartamentoService } from '../../../../services/ubicacion/departamento.service';
import { DepartamentoEntity } from '../../../../entity/ubicacion/departamento.entity';

@Component({
  selector: 'app-departamento-add',
  templateUrl: './departamento-add.component.html'
})
export class DepartamentoAddComponent implements OnInit {
  public tituloDepartamentoAdd: string;
	public departamento: DepartamentoEntity;

  constructor(
		private _departamentoService: DepartamentoService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.tituloDepartamentoAdd = 'Crear Departamento';
		this.departamento = new DepartamentoEntity(0,'','',0);
	}

	ngOnInit(){
		console.log('departamento-add.component cargando...');
    this.getPaisId();
	}

  getPaisId(){
		this._route.params.forEach((params: Params) => {
    this.departamento.PAIS = params['idPais'];
		});
	}

	onSubmit(){
		console.log(this.departamento);
		this.saveDepartamento();
	}

	saveDepartamento(){
		this._departamentoService.addDepartamento(this.departamento).subscribe(
			response => {
				if(response.code == 200){
					this._router.navigate(['/departamentoPaisList', this.departamento.PAIS]);
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
