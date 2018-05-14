import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PaisService } from '../../../../services/ubicacion/pais.service';
import { PaisEntity } from '../../../../entity/ubicacion/pais.entity';

@Component({
  selector: 'app-pais-edit',
  templateUrl: '../../../../components/ubicacion/pais/pais-add/pais-add.component.html'
})
export class PaisEditComponent implements OnInit {
  public tituloPaisAdd: string;
	public pais: PaisEntity;

	constructor(
		private _paisService: PaisService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.tituloPaisAdd = 'Editar Pais';
		this.pais = new PaisEntity(0,'','');
	}

	ngOnInit(){
		console.log(this.tituloPaisAdd);
		this.getPaisId();
	}

	onSubmit(){
		console.log(this.pais);
    this.updatePais();
	}

	updatePais(){
		this._route.params.forEach((params: Params) => {
			let idPais = params['idPais'];

			this._paisService.editPais(idPais, this.pais).subscribe(
				response => {
					if(response.code == 200){
						this._router.navigate(['/paisList']);
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

	getPaisId(){
		this._route.params.forEach((params: Params) => {
			let idPais = params['idPais'];
			this._paisService.getPaisId(idPais).subscribe(
				response => {
					if(response.code == 200){
						this.pais = response.data;
					}else{
						this._router.navigate(['/paisList']);
					}
				},
				error => {
					console.log(<any>error);
				}
			);
		});
	}
}
