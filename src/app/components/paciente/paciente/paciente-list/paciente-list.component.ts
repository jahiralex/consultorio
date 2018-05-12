import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PacienteService } from '../../../../services/paciente/paciente.service';
import { PacienteDTO } from '../../../../dto/paciente/paciente.dto';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html'
})
export class PacienteListComponent implements OnInit {

  public tituloPacienteList: string;
	public pacienteList: PacienteDTO[];
	public confirmado;

  constructor(
    private _route: ActivatedRoute,
		private	_router: Router,
		private _pacienteService: PacienteService
  ) {
    this.tituloPacienteList = 'Pacientes'
    this.confirmado = null;
  }

  ngOnInit() {
    console.log('Se ha cargado paciente-list.component.ts');
		this.getPacienteList();
  }

  getPacienteList(){
		this._pacienteService.getPacienteList().subscribe(
			result => {
				console.log(result);
				if(result.code != 200){
					console.log(result);
				} else {
					this.pacienteList = result.data;
				}
			},
			error => {
        console.log(<any>error);
			}
		);
	}

  borrarConfirmado(paciente){
		this.confirmado = paciente;
	}

  cancelarConfirmado(){
		this.confirmado = null;
	}

  pacienteDelete(paciente){
		this._pacienteService.deletePaciente(paciente).subscribe(
			response => {
				if(response.code == 200){
					this.getPacienteList();
				}else{
					alert('Error al borrar Paciente');
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}

}
