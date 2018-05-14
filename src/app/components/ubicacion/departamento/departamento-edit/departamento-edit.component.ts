import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DepartamentoService } from '../../../../services/ubicacion/departamento.service';
import { DepartamentoEntity } from '../../../../entity/ubicacion/departamento.entity';
import { PaisService } from '../../../../services/ubicacion/pais.service';
import { PaisEntity } from '../../../../entity/ubicacion/pais.entity';
import { GLOBAL } from '../../../../services/global';

@Component({
  selector: 'app-departamento-edit',
  templateUrl: '../../../../components/ubicacion/departamento/departamento-add/departamento-add.component.html'
})
export class DepartamentoEditComponent implements OnInit {
  public tituloDepartamentoAdd: string;
	public departamento: DepartamentoEntity;
  public pais: PaisEntity;
	public is_edit;

	constructor(
		private _departamentoService: DepartamentoService,
    private _paisService: PaisService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.tituloDepartamentoAdd = 'Editar Departamento (';
		this.departamento = new DepartamentoEntity(0,'','',0);
    this.pais = new PaisEntity(0,'','');
	}

	ngOnInit(){
		console.log(this.tituloDepartamentoAdd);
		this.getDepartamentoId();
	}

	onSubmit(){
		console.log(this.departamento);
    this.updateDepartamento();
	}

	updateDepartamento(){
		this._route.params.forEach((params: Params) => {
			let idDepartamento = params['idDepartamento'];

			this._departamentoService.editDepartamento(idDepartamento, this.departamento).subscribe(
				response => {
					if(response.code == 200){
						this._router.navigate(['/departamentoPaisList', this.departamento.PAIS]);
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

  getDepartamentoId(){
		this._route.params.forEach((params: Params) => {
			let idDepartamento = params['idDepartamento'];
      let descripcionPais = params['descripcionPais'];
      this.tituloDepartamentoAdd = this.tituloDepartamentoAdd + descripcionPais + ')';

			this._departamentoService.getDepartamentoId(idDepartamento).subscribe(
				response => {
					if(response.code == 200){
						this.departamento = response.data;
					}else{
						this._router.navigate(['/departamentoList']);
					}
				},
				error => {
					console.log(<any>error);
				}
			);
		});
	}
}
