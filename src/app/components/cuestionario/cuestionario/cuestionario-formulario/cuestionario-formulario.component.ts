import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CuestionarioDTO } from '../../../../dto/cuestionario/cuestionario.dto';
import { CuestionarioService } from '../../../../services/cuestionario/cuestionario.service';

@Component({
  selector: 'app-cuestionario-formulario',
  templateUrl: './cuestionario-formulario.component.html'
})
export class CuestionarioFormularioComponent implements OnInit {

  public tituloCuestionarioFormularioList: string;
  public cuestionarioList: CuestionarioDTO[];
  public campoTXT: string;
  public campoFEC: string;

  constructor(
    private _route: ActivatedRoute,
		private	_router: Router,
		private _cuestionarioService: CuestionarioService
  ) {
    this.tituloCuestionarioFormularioList = 'Cuestionario Formulario: '
    this.campoTXT = 'TXT';
    this.campoFEC = 'FEC';
  }

  ngOnInit() {
    console.log('Se ha cargado cuestionarioFormulario-list.component.ts');
    this.getCuestionarioCodigoCuestionarioList();
  }

  getCuestionarioCodigoCuestionarioList(){
    this._route.params.forEach((params: Params) => {
			let codigoCuestionario = params['codigoCuestionario'];
      this._cuestionarioService.getCuestionarioCodigoCuestionarioList(codigoCuestionario).subscribe(
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
    });
  }
}
