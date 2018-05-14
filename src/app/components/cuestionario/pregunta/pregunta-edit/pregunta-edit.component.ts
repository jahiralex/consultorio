import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PreguntaService } from '../../../../services/cuestionario/pregunta.service';
import { ParametroService } from '../../../../services/parametrizacion/parametro.service';
import { PreguntaEntity } from '../../../../entity/cuestionario/pregunta.entity';
import { ParametroEntity } from '../../../../entity/parametrizacion/parametro.entity';

@Component({
  selector: 'app-pregunta-edit',
  templateUrl: '../../../../components/cuestionario/pregunta/pregunta-add/pregunta-add.component.html'
})
export class PreguntaEditComponent implements OnInit {
  public tituloPreguntaAdd: string;
	public pregunta: PreguntaEntity;
  public parametroList: ParametroEntity[];
  public codigoTipoParamRespuesta: string;

	constructor(
		private _preguntaService: PreguntaService,
    private _parametroService: ParametroService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.tituloPreguntaAdd = 'Editar Pregunta';
		this.pregunta = new PreguntaEntity(0,'','','',0,'A');
    this.codigoTipoParamRespuesta = "TIPRES";
	}

	ngOnInit(){
		console.log(this.tituloPreguntaAdd);
		this.getPreguntaId();
    this.getParametroCodigoTipoParametroList();
	}

	onSubmit(){
		console.log(this.pregunta);
	  this.updatePregunta();
	}

	updatePregunta(){
		this._route.params.forEach((params: Params) => {
			let idPregunta = params['idPregunta'];

			this._preguntaService.editPregunta(idPregunta, this.pregunta).subscribe(
				response => {
					if(response.code == 200){
						this._router.navigate(['/preguntaList']);
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

	getPreguntaId(){
		this._route.params.forEach((params: Params) => {
			let idPregunta = params['idPregunta'];
			this._preguntaService.getPreguntaId(idPregunta).subscribe(
				response => {
					if(response.code == 200){
						this.pregunta = response.data;
					}else{
						this._router.navigate(['/preguntaList']);
					}
				},
				error => {
					console.log(<any>error);
				}
			);
		});
	}

	getParametroCodigoTipoParametroList(){
    this._parametroService.getParametroCodigoTipoParametroList(this.codigoTipoParamRespuesta).subscribe(
      result => {
        console.log(result);
        if(result.code != 200){
          console.log(result);
        } else {
          this.parametroList = result.data;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
