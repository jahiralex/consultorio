import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CuestionarioService } from '../../../../services/cuestionario/cuestionario.service';
import { CuestionarioDTO } from '../../../../dto/cuestionario/cuestionario.dto';

@Component({
  selector: 'app-cuestionario-list',
  templateUrl: './cuestionario-list.component.html'
})
export class CuestionarioListComponent implements OnInit {

  public tituloCuestionarioList: string;
	public cuestionarioList: CuestionarioDTO[];
	public confirmado;

  constructor(
    private _route: ActivatedRoute,
		private	_router: Router,
		private _cuestionarioService: CuestionarioService
  ) {
    this.tituloCuestionarioList = 'Cuestionarios'
    this.confirmado = null;
  }

  ngOnInit() {
    console.log('Se ha cargado cuestionario-list.component.ts');
		this.getCuestionarioList();
  }

  getCuestionarioList(){
		this._cuestionarioService.getCuestionarioList().subscribe(
			result => {
				console.log(result);
				if(result.code != 200){
					console.log(result);
				} else {
					this.cuestionarioList = result.data;
				}
			},
			error => {
        console.log(<any>error);
			}
		);
	}

  borrarConfirmado(cuestionario){
		this.confirmado = cuestionario;
	}

  cancelarConfirmado(){
		this.confirmado = null;
	}

  cuestionarioDelete(cuestionario){
		this._cuestionarioService.deleteCuestionario(cuestionario).subscribe(
			response => {
				if(response.code == 200){
					this.getCuestionarioList();
				}else{
					alert('Error al borrar Cuestionario');
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}

}
