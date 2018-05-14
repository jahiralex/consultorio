import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CuestionarioGrupoService } from '../../../../services/cuestionario/cuestionario-grupo.service';
import { CuestionarioGrupoDTO } from '../../../../dto/cuestionario/cuestionario-grupo.dto';
import { CuestionarioService } from '../../../../services/cuestionario/cuestionario.service';
import { CuestionarioEntity } from '../../../../entity/cuestionario/cuestionario.entity';
import { GrupoService } from '../../../../services/cuestionario/grupo.service';
import { GrupoEntity } from '../../../../entity/cuestionario/grupo.entity';

@Component({
  selector: 'app-cuestionario-grupo-list',
  templateUrl: './cuestionario-grupo-list.component.html'
})
export class CuestionarioGrupoListComponent implements OnInit {

  public tituloCuestionarioGrupoList: string;
  public cuestionarioGrupoList: CuestionarioGrupoDTO[];
  public cuestionario: CuestionarioEntity;
  public confirmado;

  constructor(
    private _route: ActivatedRoute,
		private	_router: Router,
		private _cuestionarioGrupoService: CuestionarioGrupoService,
    private _cuestionarioService: CuestionarioService
  ) {
    this.tituloCuestionarioGrupoList = 'Cuestionario de Grupos: '
    this.cuestionario = new CuestionarioEntity(0,'','','','A');
    this.confirmado = null;
  }

  ngOnInit() {
    console.log('Se ha cargado cuestionarioGrupo-list.component.ts');
    this.getCuestionarioId();
		this.getCuestionarioGrupoIdCuestionarioList();
  }

  getCuestionarioId(){
		this._route.params.forEach((params: Params) => {
			let idCuestionario = params['idCuestionario'];
			this._cuestionarioService.getCuestionarioId(idCuestionario).subscribe(
				response => {
					if(response.code == 200){
						this.cuestionario = response.data;
            this.tituloCuestionarioGrupoList = this.tituloCuestionarioGrupoList + this.cuestionario.DESCRIPCION;
					}else{
						this._router.navigate(['/cuestionarioList']);
					}
				},
				error => {
					console.log(<any>error);
				}
			);
		});
	}

  getCuestionarioGrupoIdCuestionarioList(){
    this._route.params.forEach((params: Params) => {
			let idCuestionario = params['idCuestionario'];
      this._cuestionarioGrupoService.getCuestionarioGrupoIdCuestionarioList(idCuestionario).subscribe(
        result => {
          console.log(result);
          if(result.code != 200){
            console.log(result);
          } else {
            this.cuestionarioGrupoList = result.data;
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    });
  }

  borrarConfirmado(cuestionarioGrupo){
		this.confirmado = cuestionarioGrupo;
	}

  cancelarConfirmado(){
		this.confirmado = null;
	}

  cuestionarioGrupoDelete(cuestionarioGrupo){
		this._cuestionarioGrupoService.deleteCuestionarioGrupo(cuestionarioGrupo).subscribe(
			response => {
				if(response.code == 200){
					this.getCuestionarioGrupoIdCuestionarioList();
				}else{
					alert('Error al borrar CuestionarioGrupo');
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}
}
