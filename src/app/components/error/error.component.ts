import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent implements OnInit {
  public tituloError: string;
  constructor() {
    this.tituloError = 'Pagina en construcción';
  }

  ngOnInit() {
  }

}
