import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CuestionarioGrupoService } from '../../../../services/cuestionario/cuestionario-grupo.service';
import { CuestionarioGrupoEntity } from '../../../../entity/cuestionario/cuestionario-grupo.entity';
import { GrupoService } from '../../../../services/cuestionario/grupo.service';
import { GrupoEntity } from '../../../../entity/cuestionario/grupo.entity';

@Component({
  selector: 'app-cuestionario-grupo-add',
  templateUrl: './cuestionario-grupo-add.component.html'
})
export class CuestionarioGrupoAddComponent implements OnInit {
  public tituloCuestionarioGrupoAdd: string;
	public cuestionarioGrupo: CuestionarioGrupoEntity;
  public grupoList: GrupoEntity[];

  constructor(
		private _cuestionarioGrupoService: CuestionarioGrupoService,
    private _grupoService: GrupoService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.tituloCuestionarioGrupoAdd = 'Crear Cuestionario - Grupo';
		this.cuestionarioGrupo = new CuestionarioGrupoEntity(0,'',0,0,1,'A');
	}

	ngOnInit(){
		console.log('cuestionarioGrupo-add.component cargando...');
    this.getCuestionarioId();
    this.getGrupoList();
	}

  getCuestionarioId(){
		this._route.params.forEach((params: Params) => {
    this.cuestionarioGrupo.CUESTIONARIO = params['idCuestionario'];
		});
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

	onSubmit(){
		console.log(this.cuestionarioGrupo);
		this.saveCuestionarioGrupo();
	}

	saveCuestionarioGrupo(){
		this._cuestionarioGrupoService.addCuestionarioGrupo(this.cuestionarioGrupo).subscribe(
			response => {
				if(response.code == 200){
					this._router.navigate(['/cuestionarioGrupoIdCuestionarioList', this.cuestionarioGrupo.CUESTIONARIO]);
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
