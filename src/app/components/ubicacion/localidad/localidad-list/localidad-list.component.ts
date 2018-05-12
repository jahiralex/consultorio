import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LocalidadService } from '../../../../services/ubicacion/localidad.service';
import { LocalidadEntity } from '../../../../entity/ubicacion/localidad.entity';
import { CiudadService } from '../../../../services/ubicacion/ciudad.service';
import { CiudadEntity } from '../../../../entity/ubicacion/ciudad.entity';

@Component({
  selector: 'app-localidad-list',
  templateUrl: './localidad-list.component.html'
})
export class LocalidadListComponent implements OnInit {

  public tituloLocalidadList: string;
  public localidadList: LocalidadEntity[];
  public ciudad: CiudadEntity;
  public confirmado;

  constructor(
    private _route: ActivatedRoute,
		private	_router: Router,
		private _localidadService: LocalidadService,
    private _ciudadService: CiudadService
  ) {
    this.tituloLocalidadList = 'Localidades: '
    this.ciudad = new CiudadEntity(0,'','',0);
    this.confirmado = null;
  }

  ngOnInit() {
    console.log('Se ha cargado localidad-list.component.ts');
    this.getCiudadId();
		this.getLocalidadCiudadList();
  }

  getCiudadId(){
		this._route.params.forEach((params: Params) => {
			let idCiudad = params['idCiudad'];
			this._ciudadService.getCiudadId(idCiudad).subscribe(
				response => {
					if(response.code == 200){
						this.ciudad = response.data;
            this.tituloLocalidadList = this.tituloLocalidadList + this.ciudad.DESCRIPCION;
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

  getLocalidadCiudadList(){
    this._route.params.forEach((params: Params) => {
			let idCiudad = params['idCiudad'];
      this._localidadService.getLocalidadCiudadList(idCiudad).subscribe(
        result => {
          console.log(result);
          if(result.code != 200){
            console.log(result);
          } else {
            this.localidadList = result.data;
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    });
  }

  borrarConfirmado(localidad){
		this.confirmado = localidad;
	}

  cancelarConfirmado(){
		this.confirmado = null;
	}

  localidadDelete(localidad){
		this._localidadService.deleteLocalidad(localidad).subscribe(
			response => {
				if(response.code == 200){
					this.getLocalidadCiudadList();
				}else{
					alert('Error al borrar Localidad');
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}
}
