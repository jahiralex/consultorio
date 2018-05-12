import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

/*const app_routes: Routes = [
  { path: 'routePath', component: Component },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes);*/


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];
  constructor( private _heroesService:HeroesService,
               private router:Router
             ) {
    //console.log( "constructor");
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    //console.log (this.heroes);
  }

  verHeroes(idx:number) {
    this.router.navigate( [ '/heroe', idx] );
  }
}
