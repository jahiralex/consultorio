import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GrupoPreguntaService } from '../../../../services/cuestionario/grupo-pregunta.service';
import { GrupoPreguntaDTO } from '../../../../dto/cuestionario/grupo-pregunta.dto';
import { GrupoService } from '../../../../services/cuestionario/grupo.service';
import { GrupoEntity } from '../../../../entity/cuestionario/grupo.entity';

@Component({
  selector: 'app-grupo-pregunta-list',
  templateUrl: './grupo-pregunta-list.component.html'
})
export class GrupoPreguntaListComponent implements OnInit {

  public tituloGrupoPreguntaList: string;
  public grupoPreguntaList: GrupoPreguntaDTO[];
  public grupo: GrupoEntity;
  public confirmado;

  constructor(
    private _route: ActivatedRoute,
		private	_router: Router,
		private _grupoPreguntaService: GrupoPreguntaService,
    private _grupoService: GrupoService
  ) {
    this.tituloGrupoPreguntaList = 'Grupo: '
    this.grupo = new GrupoEntity(0,'','','','A');
    this.confirmado = null;
  }

  ngOnInit() {
    console.log('Se ha cargado grupoPregunta-list.component.ts');
    this.getGrupoId();
		this.getGrupoPreguntaIdGrupoList();
  }

  getGrupoId(){
		this._route.params.forEach((params: Params) => {
			let idGrupo = params['idGrupo'];
			this._grupoService.getGrupoId(idGrupo).subscribe(
				response => {
					if(response.code == 200){
						this.grupo = response.data;
            this.tituloGrupoPreguntaList = this.tituloGrupoPreguntaList + this.grupo.DESCRIPCION;
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

  getGrupoPreguntaIdGrupoList(){
    this._route.params.forEach((params: Params) => {
			let idGrupo = params['idGrupo'];
      this._grupoPreguntaService.getGrupoPreguntaIdGrupoList(idGrupo).subscribe(
        result => {
          console.log(result);
          if(result.code != 200){
            console.log(result);
          } else {
            this.grupoPreguntaList = result.data;
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    });
  }

  borrarConfirmado(grupoPregunta){
		this.confirmado = grupoPregunta;
	}

  cancelarConfirmado(){
		this.confirmado = null;
	}

  grupoPreguntaDelete(grupoPregunta){
		this._grupoPreguntaService.deleteGrupoPregunta(grupoPregunta).subscribe(
			response => {
				if(response.code == 200){
					this.getGrupoPreguntaIdGrupoList();
				}else{
					alert('Error al borrar GrupoPregunta');
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}
}
