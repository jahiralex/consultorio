import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PreguntaService } from '../../../../services/cuestionario/pregunta.service';
import { PreguntaDTO } from '../../../../dto/cuestionario/pregunta.dto';

@Component({
  selector: 'app-pregunta-list',
  templateUrl: './pregunta-list.component.html'
})
export class PreguntaListComponent implements OnInit {

  public tituloPreguntaList: string;
	public preguntaList: PreguntaDTO[];
	public confirmado;

  constructor(
    private _route: ActivatedRoute,
		private	_router: Router,
		private _preguntaService: PreguntaService
  ) {
    this.tituloPreguntaList = 'Preguntas'
    this.confirmado = null;
  }

  ngOnInit() {
    console.log('Se ha cargado pregunta-list.component.ts');
		this.getPreguntaList();
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

  borrarConfirmado(pregunta){
		this.confirmado = pregunta;
	}

  cancelarConfirmado(){
		this.confirmado = null;
	}

  preguntaDelete(pregunta){
		this._preguntaService.deletePregunta(pregunta).subscribe(
			response => {
				if(response.code == 200){
					this.getPreguntaList();
				}else{
					alert('Error al borrar Pregunta');
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}

}
