import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GrupoPreguntaService } from '../../../../services/cuestionario/grupo-pregunta.service';
import { GrupoPreguntaEntity } from '../../../../entity/cuestionario/grupo-pregunta.entity';
import { GrupoService } from '../../../../services/cuestionario/grupo.service';
import { GrupoEntity } from '../../../../entity/cuestionario/grupo.entity';
import { PreguntaService } from '../../../../services/cuestionario/pregunta.service';
import { PreguntaEntity } from '../../../../entity/cuestionario/pregunta.entity';

@Component({
  selector: 'app-grupo-pregunta-edit',
  templateUrl: '../../../../components/cuestionario/grupo-pregunta/grupo-pregunta-add/grupo-pregunta-add.component.html'
})
export class GrupoPreguntaEditComponent implements OnInit {
  public tituloGrupoPreguntaAdd: string;
	public grupoPregunta: GrupoPreguntaEntity;
  public preguntaList: PreguntaEntity[];
  public grupo: GrupoEntity;

	public is_edit;

	constructor(
		private _grupoPreguntaService: GrupoPreguntaService,
    private _grupoService: GrupoService,
    private _preguntaService: PreguntaService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.tituloGrupoPreguntaAdd = 'Editar Grupo de Preguntas (';
		this.grupoPregunta = new GrupoPreguntaEntity(0,'',0,0,1,'A');
    this.grupo = new GrupoEntity(0,'','','','A');
	}

	ngOnInit(){
		console.log(this.tituloGrupoPreguntaAdd);
		this.getGrupoPreguntaId();
    this.getPreguntaList();
	}

	onSubmit(){
		console.log(this.grupoPregunta);
    this.updateGrupoPregunta();
	}

	updateGrupoPregunta(){
		this._route.params.forEach((params: Params) => {
			let idGrupoPregunta = params['idGrupoPregunta'];

			this._grupoPreguntaService.editGrupoPregunta(idGrupoPregunta, this.grupoPregunta).subscribe(
				response => {
					if(response.code == 200){
						this._router.navigate(['/grupoPreguntaIdGrupoList', this.grupoPregunta.GRUPO]);
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

  getGrupoPreguntaId(){
		this._route.params.forEach((params: Params) => {
			let idGrupoPregunta = params['idGrupoPregunta'];
      let descripcionGrupo = params['descripcionGrupo'];
      this.tituloGrupoPreguntaAdd = this.tituloGrupoPreguntaAdd + descripcionGrupo + ')';

			this._grupoPreguntaService.getGrupoPreguntaId(idGrupoPregunta).subscribe(
				response => {
					if(response.code == 200){
						this.grupoPregunta = response.data;
					}else{
						this._router.navigate(['/grupoPreguntaList']);
					}
				},
				error => {
					console.log(<any>error);
				}
			);
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
}
