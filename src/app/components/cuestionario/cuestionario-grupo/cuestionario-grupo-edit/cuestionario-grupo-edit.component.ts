import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CuestionarioGrupoService } from '../../../../services/cuestionario/cuestionario-grupo.service';
import { CuestionarioGrupoEntity } from '../../../../entity/cuestionario/cuestionario-grupo.entity';
import { CuestionarioService } from '../../../../services/cuestionario/cuestionario.service';
import { CuestionarioEntity } from '../../../../entity/cuestionario/cuestionario.entity';
import { GrupoService } from '../../../../services/cuestionario/grupo.service';
import { GrupoEntity } from '../../../../entity/cuestionario/grupo.entity';

@Component({
  selector: 'app-cuestionario-grupo-edit',
  templateUrl: '../../../../components/cuestionario/cuestionario-grupo/cuestionario-grupo-add/cuestionario-grupo-add.component.html'
})
export class CuestionarioGrupoEditComponent implements OnInit {
  public tituloCuestionarioGrupoAdd: string;
	public cuestionarioGrupo: CuestionarioGrupoEntity;
  public grupoList: GrupoEntity[];
  public cuestionario: CuestionarioEntity;

	public is_edit;

	constructor(
		private _cuestionarioGrupoService: CuestionarioGrupoService,
    private _cuestionarioService: CuestionarioService,
    private _grupoService: GrupoService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.tituloCuestionarioGrupoAdd = 'Editar Cuestionario -  Grupos (';
		this.cuestionarioGrupo = new CuestionarioGrupoEntity(0,'',0,0,1,'A');
    this.cuestionario = new CuestionarioEntity(0,'','','','A');
	}

	ngOnInit(){
		console.log(this.tituloCuestionarioGrupoAdd);
		this.getCuestionarioGrupoId();
    this.getGrupoList();
	}

	onSubmit(){
		console.log(this.cuestionarioGrupo);
    this.updateCuestionarioGrupo();
	}

	updateCuestionarioGrupo(){
		this._route.params.forEach((params: Params) => {
			let idCuestionarioGrupo = params['idCuestionarioGrupo'];

			this._cuestionarioGrupoService.editCuestionarioGrupo(idCuestionarioGrupo, this.cuestionarioGrupo).subscribe(
				response => {
					if(response.code == 200){
						this._router.navigate(['/cuestionarioGrupoIdCuestionarioList', this.cuestionarioGrupo.GRUPO]);
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

  getCuestionarioGrupoId(){
		this._route.params.forEach((params: Params) => {
			let idCuestionarioGrupo = params['idCuestionarioGrupo'];
      let descripcionCuestionario = params['descripcionCuestionario'];
      this.tituloCuestionarioGrupoAdd = this.tituloCuestionarioGrupoAdd + descripcionCuestionario + ')';

			this._cuestionarioGrupoService.getCuestionarioGrupoId(idCuestionarioGrupo).subscribe(
				response => {
					if(response.code == 200){
						this.cuestionarioGrupo = response.data;
					}else{
						this._router.navigate(['/cuestionarioGrupoList']);
					}
				},
				error => {
					console.log(<any>error);
				}
			);
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
}
