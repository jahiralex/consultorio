import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PaisService } from '../../../../services/ubicacion/pais.service';
import { PaisEntity } from '../../../../entity/ubicacion/pais.entity';
import { GLOBAL } from '../../../../services/global';

@Component({
  selector: 'app-pais-add',
  templateUrl: './pais-add.component.html'
})
export class PaisAddComponent implements OnInit {
  public tituloPaisAdd: string;
	public pais: PaisEntity;

  constructor(
		private _paisService: PaisService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.tituloPaisAdd = 'Crear Pais';
		this.pais = new PaisEntity(0,'','',);
	}

	ngOnInit(){
		console.log('pais-add.component cargando...');
	}

	onSubmit(){
		console.log(this.pais);
		this.savePais();
	}

	savePais(){
		this._paisService.addPais(this.pais).subscribe(
			response => {
				if(response.code == 200){
					this._router.navigate(['/paisList']);
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
