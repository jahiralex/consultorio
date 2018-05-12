import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PacienteService } from '../../../../services/paciente/paciente.service';
import { ParametroService } from '../../../../services/parametrizacion/parametro.service';
import { PacienteEntity } from '../../../../entity/paciente/paciente.entity';
import { ParametroEntity } from '../../../../entity/parametrizacion/parametro.entity';


@Component({
  selector: 'app-paciente-add',
  templateUrl: './paciente-add.component.html',
})
export class PacienteAddComponent implements OnInit {
  public tituloPacienteAdd: string;
  public tituloCuestionarioFormularioList: string;
	public paciente: PacienteEntity;
  public parametroList: ParametroEntity[];
  public codigoTipoParamRespuesta: string;

  constructor(
		private _pacienteService: PacienteService,
    private _parametroService: ParametroService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.tituloPacienteAdd = 'Crear Paciente';
    this.tituloCuestionarioFormularioList = 'Cuestionario Paciente';
		this.paciente = new PacienteEntity(0,0,'','A');
    this.codigoTipoParamRespuesta = "TIPDOC";
	}

	ngOnInit(){
		console.log('paciente-add.component cargando...');
    this.getParametroCodigoTipoParametroList();
	}

	onSubmit(){
		console.log(this.paciente);
		this.savePaciente();
	}

	savePaciente(){
		this._pacienteService.addPaciente(this.paciente).subscribe(
			response => {
				if(response.code == 200){
					this._router.navigate(['/pacienteList']);
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
