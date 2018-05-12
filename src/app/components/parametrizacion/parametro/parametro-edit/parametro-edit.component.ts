import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ParametroService } from '../../../../services/parametrizacion/parametro.service';
import { ParametroEntity } from '../../../../entity/parametrizacion/parametro.entity';
import { TipoParametroService } from '../../../../services/parametrizacion/tipo-parametro.service';
import { TipoParametroEntity } from '../../../../entity/parametrizacion/tipo-parametro.entity';
import { GLOBAL } from '../../../../services/global';

@Component({
  selector: 'app-parametro-edit',
  templateUrl: '../../../../components/parametrizacion/parametro/parametro-add/parametro-add.component.html'
})
export class ParametroEditComponent implements OnInit {
  public tituloParametroAdd: string;
	public parametro: ParametroEntity;
  public tipoParametro: TipoParametroEntity;
	public is_edit;

	constructor(
		private _parametroService: ParametroService,
    private _tipoParametroService: TipoParametroService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.tituloParametroAdd = 'Editar Parametro (';
		this.parametro = new ParametroEntity(0,'','','',1,0,'A');
    this.tipoParametro = new TipoParametroEntity(0,'','','','A');
	}

	ngOnInit(){
		console.log(this.tituloParametroAdd);
		this.getParametroId();
	}

	onSubmit(){
		console.log(this.parametro);
    this.updateParametro();
	}

	updateParametro(){
		this._route.params.forEach((params: Params) => {
			let idParametro = params['idParametro'];

			this._parametroService.editParametro(idParametro, this.parametro).subscribe(
				response => {
					if(response.code == 200){
						this._router.navigate(['/parametroIdTipoParametroList', this.parametro.TIPO_PARAMETRO]);
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

  getParametroId(){
		this._route.params.forEach((params: Params) => {
			let idParametro = params['idParametro'];
      let descripcionTipoParametro = params['descripcionTipoParametro'];
      this.tituloParametroAdd = this.tituloParametroAdd + descripcionTipoParametro + ')';

			this._parametroService.getParametroId(idParametro).subscribe(
				response => {
					if(response.code == 200){
						this.parametro = response.data;
					}else{
						this._router.navigate(['/parametroList']);
					}
				},
				error => {
					console.log(<any>error);
				}
			);
		});
	}
}
