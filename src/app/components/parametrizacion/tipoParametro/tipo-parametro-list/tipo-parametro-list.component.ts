import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TipoParametroService } from '../../../../services/parametrizacion/tipo-parametro.service';
import { TipoParametroEntity } from '../../../../entity/parametrizacion/tipo-parametro.entity';

@Component({
  selector: 'app-tipo-parametro-list',
  templateUrl: './tipo-parametro-list.component.html'
})
export class TipoParametroListComponent implements OnInit {

  public tituloTipoParametroList: string;
	public tipoParametroList: TipoParametroEntity[];
	public confirmado;

  constructor(
    private _route: ActivatedRoute,
		private	_router: Router,
		private _tipoParametroService: TipoParametroService
  ) {
    this.tituloTipoParametroList = 'Tipos de Parametros'
    this.confirmado = null;
  }

  ngOnInit() {
    console.log('Se ha cargado tipo-parametro-list.component.ts');
		this.getTipoParametroList();
  }

  getTipoParametroList(){
		this._tipoParametroService.getTipoParametroList().subscribe(
			result => {
				console.log(result);
				if(result.code != 200){
					console.log(result);
				} else {
					this.tipoParametroList = result.data;
				}
			},
			error => {
        console.log(<any>error);
			}
		);
	}

  borrarConfirmado(tipoParametro){
		this.confirmado = tipoParametro;
	}

  cancelarConfirmado(){
		this.confirmado = null;
	}

  tipoParametroDelete(tipoParametro){
		this._tipoParametroService.deleteTipoParametro(tipoParametro).subscribe(
			response => {
				if(response.code == 200){
					this.getTipoParametroList();
				}else{
					alert('Error al borrar Tipo Parametro');
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}

}
