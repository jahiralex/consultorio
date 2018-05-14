import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DepartamentoService } from '../../../../services/ubicacion/departamento.service';
import { DepartamentoEntity } from '../../../../entity/ubicacion/departamento.entity';
import { PaisService } from '../../../../services/ubicacion/pais.service';
import { PaisEntity } from '../../../../entity/ubicacion/pais.entity';

@Component({
  selector: 'app-departamento-list',
  templateUrl: './departamento-list.component.html'
})
export class DepartamentoListComponent implements OnInit {

  public tituloDepartamentoList: string;
  public departamentoList: DepartamentoEntity[];
  public pais: PaisEntity;
  public confirmado;

  constructor(
    private _route: ActivatedRoute,
		private	_router: Router,
		private _departamentoService: DepartamentoService,
    private _paisService: PaisService
  ) {
    this.tituloDepartamentoList = 'Departamentos: '
    this.pais = new PaisEntity(0,'','');
    this.confirmado = null;
  }

  ngOnInit() {
    console.log('Se ha cargado departamento-list.component.ts');
    this.getPaisId();
		this.getDepartamentoPaisList();
  }

  getPaisId(){
		this._route.params.forEach((params: Params) => {
			let idPais = params['idPais'];
			this._paisService.getPaisId(idPais).subscribe(
				response => {
					if(response.code == 200){
						this.pais = response.data;
            this.tituloDepartamentoList = this.tituloDepartamentoList + this.pais.DESCRIPCION;
					}else{
						this._router.navigate(['/paisList']);
					}
				},
				error => {
					console.log(<any>error);
				}
			);
		});
	}

  getDepartamentoPaisList(){
    this._route.params.forEach((params: Params) => {
			let idPais = params['idPais'];
      this._departamentoService.getDepartamentoPaisList(idPais).subscribe(
        result => {
          console.log(result);
          if(result.code != 200){
            console.log(result);
          } else {
            this.departamentoList = result.data;
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    });
  }

  borrarConfirmado(departamento){
		this.confirmado = departamento;
	}

  cancelarConfirmado(){
		this.confirmado = null;
	}

  departamentoDelete(departamento){
		this._departamentoService.deleteDepartamento(departamento).subscribe(
			response => {
				if(response.code == 200){
					this.getDepartamentoPaisList();
				}else{
					alert('Error al borrar Departamento');
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}
}
