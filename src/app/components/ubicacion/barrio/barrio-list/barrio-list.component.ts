import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BarrioService } from '../../../../services/ubicacion/barrio.service';
import { BarrioEntity } from '../../../../entity/ubicacion/barrio.entity';
import { LocalidadService } from '../../../../services/ubicacion/localidad.service';
import { LocalidadEntity } from '../../../../entity/ubicacion/localidad.entity';

@Component({
  selector: 'app-barrio-list',
  templateUrl: './barrio-list.component.html'
})
export class BarrioListComponent implements OnInit {

  public tituloBarrioList: string;
  public barrioList: BarrioEntity[];
  public localidad: LocalidadEntity;
  public confirmado;

  constructor(
    private _route: ActivatedRoute,
		private	_router: Router,
		private _barrioService: BarrioService,
    private _localidadService: LocalidadService
  ) {
    this.tituloBarrioList = 'Barrio: '
    this.localidad = new LocalidadEntity(0,'','',0);
    this.confirmado = null;
  }

  ngOnInit() {
    console.log('Se ha cargado barrio-list.component.ts');
    this.getLocalidadId();
		this.getBarrioLocalidadList();
  }

  getLocalidadId(){
		this._route.params.forEach((params: Params) => {
			let idLocalidad = params['idLocalidad'];
			this._localidadService.getLocalidadId(idLocalidad).subscribe(
				response => {
					if(response.code == 200){
						this.localidad = response.data;
            this.tituloBarrioList = this.tituloBarrioList + this.localidad.DESCRIPCION;
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

  getBarrioLocalidadList(){
    this._route.params.forEach((params: Params) => {
			let idLocalidad = params['idLocalidad'];
      this._barrioService.getBarrioLocalidadList(idLocalidad).subscribe(
        result => {
          console.log(result);
          if(result.code != 200){
            console.log(result);
          } else {
            this.barrioList = result.data;
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    });
  }

  borrarConfirmado(barrio){
		this.confirmado = barrio;
	}

  cancelarConfirmado(){
		this.confirmado = null;
	}

  barrioDelete(barrio){
		this._barrioService.deleteBarrio(barrio).subscribe(
			response => {
				if(response.code == 200){
					this.getBarrioLocalidadList();
				}else{
					alert('Error al borrar Barrio');
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}
}
