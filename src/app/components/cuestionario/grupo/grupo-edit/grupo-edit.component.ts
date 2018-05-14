import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GrupoService } from '../../../../services/cuestionario/grupo.service';
import { GrupoEntity } from '../../../../entity/cuestionario/grupo.entity';

@Component({
  selector: 'app-grupo-edit',
  templateUrl: '../../../../components/cuestionario/grupo/grupo-add/grupo-add.component.html'
})
export class GrupoEditComponent implements OnInit {
  public tituloGrupoAdd: string;
	public grupo: GrupoEntity;

	constructor(
		private _grupoService: GrupoService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.tituloGrupoAdd = 'Editar Grupo';
		this.grupo = new GrupoEntity(0,'','','','A');
	}

	ngOnInit(){
		console.log(this.tituloGrupoAdd);
		this.getGrupoId();
	}

	onSubmit(){
		console.log(this.grupo);
    this.updateGrupo();
	}

	updateGrupo(){
		this._route.params.forEach((params: Params) => {
			let idGrupo = params['idGrupo'];

			this._grupoService.editGrupo(idGrupo, this.grupo).subscribe(
				response => {
					if(response.code == 200){
						this._router.navigate(['/grupoList']);
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

	getGrupoId(){
		this._route.params.forEach((params: Params) => {
			let idGrupo = params['idGrupo'];
			this._grupoService.getGrupoId(idGrupo).subscribe(
				response => {
					if(response.code == 200){
						this.grupo = response.data;
					}else{
						this._router.navigate(['/grupoList']);
					}
				},
				error => {
					console.log(<any>error);
				}
			);
		});
	}
}
