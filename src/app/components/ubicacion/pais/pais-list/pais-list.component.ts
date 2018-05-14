import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PaisService } from '../../../../services/ubicacion/pais.service';
import { PaisEntity } from '../../../../entity/ubicacion/pais.entity';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html'
})
export class PaisListComponent implements OnInit {

  public tituloPaisList: string;
	public paisList: PaisEntity[];
	public confirmado;

  constructor(
    private _route: ActivatedRoute,
		private	_router: Router,
		private _paisService: PaisService
  ) {
    this.tituloPaisList = 'Paises'
    this.confirmado = null;
  }

  ngOnInit() {
    console.log('Se ha cargado pais-list.component.ts');
		this.getPaisList();
  }

  getPaisList(){
		this._paisService.getPaisList().subscribe(
			result => {
				console.log(result);
				if(result.code != 200){
					console.log(result);
				} else {
					this.paisList = result.data;
				}
			},
			error => {
        console.log(<any>error);
			}
		);
	}

  borrarConfirmado(pais){
		this.confirmado = pais;
	}

  cancelarConfirmado(){
		this.confirmado = null;
	}

  paisDelete(pais){
		this._paisService.deletePais(pais).subscribe(
			response => {
				if(response.code == 200){
					this.getPaisList();
				}else{
					alert('Error al borrar Pais');
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}

}
