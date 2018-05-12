import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TipoParametroService } from '../../../../services/parametrizacion/tipo-parametro.service';
import { TipoParametroEntity } from '../../../../entity/parametrizacion/tipo-parametro.entity';
import { GLOBAL } from '../../../../services/global';

@Component({
  selector: 'app-tipo-parametro-add',
  templateUrl: './tipo-parametro-add.component.html'
})
export class TipoParametroAddComponent implements OnInit {
  public tituloTipoParametroAdd: string;
	public tipoParametro: TipoParametroEntity;

  constructor(
		private _tipoParametroService: TipoParametroService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.tituloTipoParametroAdd = 'Crear Tipo de Parametro';
		this.tipoParametro = new TipoParametroEntity(0,'','','','A');
	}

	ngOnInit(){
		console.log('tipo-parametro-add.component cargando...');
	}

	onSubmit(){
		console.log(this.tipoParametro);
		this.saveTipoParametro();
	}

	saveTipoParametro(){
		this._tipoParametroService.addTipoParametro(this.tipoParametro).subscribe(
			response => {
				if(response.code == 200){
					this._router.navigate(['/tipoParametroList']);
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
