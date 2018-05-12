import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ParametroService } from '../../../../services/parametrizacion/parametro.service';
import { ParametroEntity } from '../../../../entity/parametrizacion/parametro.entity';
import { TipoParametroService } from '../../../../services/parametrizacion/tipo-parametro.service';
import { TipoParametroEntity } from '../../../../entity/parametrizacion/tipo-parametro.entity';

@Component({
  selector: 'app-parametro-list',
  templateUrl: './parametro-list.component.html'
})
export class ParametroListComponent implements OnInit {

  public tituloParametroList: string;
  public parametroList: ParametroEntity[];
  public tipoParametro: TipoParametroEntity;
  public confirmado;

  constructor(
    private _route: ActivatedRoute,
		private	_router: Router,
		private _parametroService: ParametroService,
    private _tipoParametroService: TipoParametroService
  ) {
    this.tituloParametroList = 'Parametros: '
    this.tipoParametro = new TipoParametroEntity(0,'','','','A');
    this.confirmado = null;
  }

  ngOnInit() {
    console.log('Se ha cargado parametro-list.component.ts');
    this.getTipoParametroId();
		this.getParametroIdTipoParametroList();
  }

  getTipoParametroId(){
		this._route.params.forEach((params: Params) => {
			let idTipoParametro = params['idTipoParametro'];
			this._tipoParametroService.getTipoParametroId(idTipoParametro).subscribe(
				response => {
					if(response.code == 200){
						this.tipoParametro = response.data;
            this.tituloParametroList = this.tituloParametroList + this.tipoParametro.DESCRIPCION;
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

  getParametroIdTipoParametroList(){
    this._route.params.forEach((params: Params) => {
			let idTipoParametro = params['idTipoParametro'];
      this._parametroService.getParametroIdTipoParametroList(idTipoParametro).subscribe(
        result => {
          console.log(result);
          if(result.code != 200){
            console.log(result);
          } else {
            this.parametroList = result.data;
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    });
  }

  borrarConfirmado(parametro){
		this.confirmado = parametro;
	}

  cancelarConfirmado(){
		this.confirmado = null;
	}

  parametroDelete(parametro){
		this._parametroService.deleteParametro(parametro).subscribe(
			response => {
				if(response.code == 200){
					this.getParametroIdTipoParametroList();
				}else{
					alert('Error al borrar Parametro');
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}
}
