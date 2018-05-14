import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GrupoService } from '../../../../services/cuestionario/grupo.service';
import { GrupoDTO } from '../../../../dto/cuestionario/grupo.dto';

@Component({
  selector: 'app-grupo-list',
  templateUrl: './grupo-list.component.html'
})
export class GrupoListComponent implements OnInit {

  public tituloGrupoList: string;
	public grupoList: GrupoDTO[];
	public confirmado;

  constructor(
    private _route: ActivatedRoute,
		private	_router: Router,
		private _grupoService: GrupoService
  ) {
    this.tituloGrupoList = 'Grupos'
    this.confirmado = null;
  }

  ngOnInit() {
    console.log('Se ha cargado grupo-list.component.ts');
		this.getGrupoList();
  }

  getGrupoList(){
		this._grupoService.getGrupoList().subscribe(
			result => {
				console.log(result);
				if(result.code != 200){
					console.log(result);
				} else {
					this.grupoList = result.data;
				}
			},
			error => {
        console.log(<any>error);
			}
		);
	}

  borrarConfirmado(grupo){
		this.confirmado = grupo;
	}

  cancelarConfirmado(){
		this.confirmado = null;
	}

  grupoDelete(grupo){
		this._grupoService.deleteGrupo(grupo).subscribe(
			response => {
				if(response.code == 200){
					this.getGrupoList();
				}else{
					alert('Error al borrar Grupo');
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}

}
