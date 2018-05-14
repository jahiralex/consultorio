import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ParametroService } from '../../../../services/parametrizacion/parametro.service';
import { ParametroEntity } from '../../../../entity/parametrizacion/parametro.entity';

@Component({
  selector: 'app-parametro-add',
  templateUrl: './parametro-add.component.html'
})
export class ParametroAddComponent implements OnInit {
  public tituloParametroAdd: string;
	public parametro: ParametroEntity;

  constructor(
		private _parametroService: ParametroService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.tituloParametroAdd = 'Crear Parametro';
		this.parametro = new ParametroEntity(0,'','','',1,0,'A');
	}

	ngOnInit(){
		console.log('parametro-add.component cargando...');
    this.getTipoParametroId();
	}

  getTipoParametroId(){
		this._route.params.forEach((params: Params) => {
    this.parametro.TIPO_PARAMETRO = params['idTipoParametro'];
		});
	}

	onSubmit(){
		console.log(this.parametro);
		this.saveParametro();
	}

	saveParametro(){
		this._parametroService.addParametro(this.parametro).subscribe(
			response => {
				if(response.code == 200){
					this._router.navigate(['/parametroIdTipoParametroList', this.parametro.TIPO_PARAMETRO]);
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
