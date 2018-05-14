import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GrupoService } from '../../../../services/cuestionario/grupo.service';
import { GrupoEntity } from '../../../../entity/cuestionario/grupo.entity';

@Component({
  selector: 'app-grupo-add',
  templateUrl: './grupo-add.component.html'
})
export class GrupoAddComponent implements OnInit {
  public tituloGrupoAdd: string;
	public grupo: GrupoEntity;

  constructor(
		private _grupoService: GrupoService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.tituloGrupoAdd = 'Crear Grupo';
		this.grupo = new GrupoEntity(0,'','','','A');
	}

	ngOnInit(){
		console.log('grupo-add.component cargando...');
	}

	onSubmit(){
		console.log(this.grupo);
		this.saveGrupo();
	}

	saveGrupo(){
		this._grupoService.addGrupo(this.grupo).subscribe(
			response => {
				if(response.code == 200){
					this._router.navigate(['/grupoList']);
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
