import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TipoParametroService } from '../../../../services/parametrizacion/tipo-parametro.service';
import { TipoParametroEntity } from '../../../../entity/parametrizacion/tipo-parametro.entity';

@Component({
  selector: 'app-tipo-parametro-edit',
  templateUrl: '../../../../components/parametrizacion/tipoParametro/tipo-parametro-add/tipo-parametro-add.component.html'
})
export class TipoParametroEditComponent implements OnInit {
  public tituloTipoParametroAdd: string;
	public tipoParametro: TipoParametroEntity;

	constructor(
		private _tipoParametroService: TipoParametroService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.tituloTipoParametroAdd = 'Editar Tipo de Parametro';
		this.tipoParametro = new TipoParametroEntity(0,'','','','A');
	}

	ngOnInit(){
		console.log(this.tituloTipoParametroAdd);
		this.getTipoParametroId();
	}

	onSubmit(){
		console.log(this.tipoParametro);
    this.updateTipoParametro();
	}

	updateTipoParametro(){
		this._route.params.forEach((params: Params) => {
			let idTipoParametro = params['idTipoParametro'];

			this._tipoParametroService.editTipoParametro(idTipoParametro, this.tipoParametro).subscribe(
				response => {
					if(response.code == 200){
						this._router.navigate(['/tipoParametroList']);
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

	getTipoParametroId(){
		this._route.params.forEach((params: Params) => {
			let idTipoParametro = params['idTipoParametro'];
			this._tipoParametroService.getTipoParametroId(idTipoParametro).subscribe(
				response => {
					if(response.code == 200){
						this.tipoParametro = response.data;
					}else{
						this._router.navigate(['/tipoParametroList']);
					}
				},
				error => {
					console.log(<any>error);
				}
			);
		});
	}
}
