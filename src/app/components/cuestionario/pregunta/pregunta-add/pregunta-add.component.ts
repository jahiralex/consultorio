import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PreguntaService } from '../../../../services/cuestionario/pregunta.service';
import { ParametroService } from '../../../../services/parametrizacion/parametro.service';
import { PreguntaEntity } from '../../../../entity/cuestionario/pregunta.entity';
import { ParametroEntity } from '../../../../entity/parametrizacion/parametro.entity';

@Component({
  selector: 'app-pregunta-add',
  templateUrl: './pregunta-add.component.html'
})
export class PreguntaAddComponent implements OnInit {
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
		this.tituloPreguntaAdd = 'Crear Pregunta';
		this.pregunta = new PreguntaEntity(0,'','','',0,'A');
    this.codigoTipoParamRespuesta = "TIPRES";
	}

	ngOnInit(){
		console.log('pregunta-add.component cargando...');
    this.getParametroCodigoTipoParametroList();
	}

	onSubmit(){
		console.log(this.pregunta);
		this.savePregunta();
	}

	savePregunta(){
    this._preguntaService.addPregunta(this.pregunta).subscribe(
			response => {
				if(response.code == 200){
					this._router.navigate(['/preguntaList']);
				} else {
					console.log(response);
				}
			},
			error => {
				console.log(<any>error);
			}
		);
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
