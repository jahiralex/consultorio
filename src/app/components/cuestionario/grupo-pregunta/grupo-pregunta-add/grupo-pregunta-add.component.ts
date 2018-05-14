import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GrupoPreguntaService } from '../../../../services/cuestionario/grupo-pregunta.service';
import { GrupoPreguntaEntity } from '../../../../entity/cuestionario/grupo-pregunta.entity';
import { PreguntaService } from '../../../../services/cuestionario/pregunta.service';
import { PreguntaEntity } from '../../../../entity/cuestionario/pregunta.entity';

@Component({
  selector: 'app-grupo-pregunta-add',
  templateUrl: './grupo-pregunta-add.component.html'
})
export class GrupoPreguntaAddComponent implements OnInit {
  public tituloGrupoPreguntaAdd: string;
	public grupoPregunta: GrupoPreguntaEntity;
  public preguntaList: PreguntaEntity[];

  constructor(
		private _grupoPreguntaService: GrupoPreguntaService,
    private _preguntaService: PreguntaService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.tituloGrupoPreguntaAdd = 'Crear Grupo Pregunta';
		this.grupoPregunta = new GrupoPreguntaEntity(0,'',0,0,1,'A');
	}

	ngOnInit(){
		console.log('grupoPregunta-add.component cargando...');
    this.getGrupoId();
    this.getPreguntaList();
	}

  getGrupoId(){
		this._route.params.forEach((params: Params) => {
    this.grupoPregunta.GRUPO = params['idGrupo'];
		});
	}

  getPreguntaList(){
		this._preguntaService.getPreguntaList().subscribe(
			result => {
				console.log(result);
				if(result.code != 200){
					console.log(result);
				} else {
					this.preguntaList = result.data;
				}
			},
			error => {
        console.log(<any>error);
			}
		);
	}

	onSubmit(){
		console.log(this.grupoPregunta);
		this.saveGrupoPregunta();
	}

	saveGrupoPregunta(){
		this._grupoPreguntaService.addGrupoPregunta(this.grupoPregunta).subscribe(
			response => {
				if(response.code == 200){
					this._router.navigate(['/grupoPreguntaIdGrupoList', this.grupoPregunta.GRUPO]);
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
