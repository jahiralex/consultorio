import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CiudadService } from '../../../../services/ubicacion/ciudad.service';
import { CiudadEntity } from '../../../../entity/ubicacion/ciudad.entity';
import { DepartamentoService } from '../../../../services/ubicacion/departamento.service';
import { DepartamentoEntity } from '../../../../entity/ubicacion/departamento.entity';

@Component({
  selector: 'app-ciudad-list',
  templateUrl: './ciudad-list.component.html'
})
export class CiudadListComponent implements OnInit {

  public tituloCiudadList: string;
  public ciudadList: CiudadEntity[];
  public departamento: DepartamentoEntity;
  public confirmado;

  constructor(
    private _route: ActivatedRoute,
		private	_router: Router,
		private _ciudadService: CiudadService,
    private _departamentoService: DepartamentoService
  ) {
    this.tituloCiudadList = 'Ciudades: '
    this.departamento = new DepartamentoEntity(0,'','',0);
    this.confirmado = null;
  }

  ngOnInit() {
    console.log('Se ha cargado ciudad-list.component.ts');
    this.getDepartamentoId();
		this.getCiudadDepartamentoList();
  }

  getDepartamentoId(){
		this._route.params.forEach((params: Params) => {
			let idDepartamento = params['idDepartamento'];
			this._departamentoService.getDepartamentoId(idDepartamento).subscribe(
				response => {
					if(response.code == 200){
						this.departamento = response.data;
            this.tituloCiudadList = this.tituloCiudadList + this.departamento.DESCRIPCION;
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

  getCiudadDepartamentoList(){
    this._route.params.forEach((params: Params) => {
			let idDepartamento = params['idDepartamento'];
      this._ciudadService.getCiudadDepartamentoList(idDepartamento).subscribe(
        result => {
          console.log(result);
          if(result.code != 200){
            console.log(result);
          } else {
            this.ciudadList = result.data;
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    });
  }

  borrarConfirmado(ciudad){
		this.confirmado = ciudad;
	}

  cancelarConfirmado(){
		this.confirmado = null;
	}

  ciudadDelete(ciudad){
		this._ciudadService.deleteCiudad(ciudad).subscribe(
			response => {
				if(response.code == 200){
					this.getCiudadDepartamentoList();
				}else{
					alert('Error al borrar Ciudad');
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}
}
