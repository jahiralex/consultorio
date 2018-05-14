import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { HeroesService } from './servicios/heroes.service';
import { TipoParametroService } from './services/parametrizacion/tipo-parametro.service';
import { ParametroService } from './services/parametrizacion/parametro.service';
import { PaisService } from './services/ubicacion/pais.service';
import { DepartamentoService } from './services/ubicacion/departamento.service';
import { CiudadService } from './services/ubicacion/ciudad.service';
import { LocalidadService } from './services/ubicacion/localidad.service';
import { BarrioService } from './services/ubicacion/barrio.service';
import { CuestionarioService } from './services/cuestionario/cuestionario.service';
import { GrupoService } from './services/cuestionario/grupo.service';
import { PreguntaService } from './services/cuestionario/pregunta.service';
import { GrupoPreguntaService } from './services/cuestionario/grupo-pregunta.service';
import { CuestionarioGrupoService } from './services/cuestionario/cuestionario-grupo.service';
import { PacienteService } from './services/paciente/paciente.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

import { TipoParametroEditComponent } from './components/parametrizacion/tipoParametro/tipo-parametro-edit/tipo-parametro-edit.component';
import { TipoParametroAddComponent } from './components/parametrizacion/tipoParametro/tipo-parametro-add/tipo-parametro-add.component';
import { TipoParametroListComponent } from './components/parametrizacion/tipoParametro/tipo-parametro-list/tipo-parametro-list.component';
import { ParametroAddComponent } from './components/parametrizacion/parametro/parametro-add/parametro-add.component';
import { ParametroEditComponent } from './components/parametrizacion/parametro/parametro-edit/parametro-edit.component';
import { ParametroListComponent } from './components/parametrizacion/parametro/parametro-list/parametro-list.component';
import { ErrorComponent } from './components/error/error.component';
import { PaisEditComponent } from './components/ubicacion/pais/pais-edit/pais-edit.component';
import { PaisAddComponent } from './components/ubicacion/pais/pais-add/pais-add.component';
import { PaisListComponent } from './components/ubicacion/pais/pais-list/pais-list.component';
import { DepartamentoEditComponent } from './components/ubicacion/departamento/departamento-edit/departamento-edit.component';
import { DepartamentoAddComponent } from './components/ubicacion/departamento/departamento-add/departamento-add.component';
import { DepartamentoListComponent } from './components/ubicacion/departamento/departamento-list/departamento-list.component';
import { CiudadEditComponent } from './components/ubicacion/ciudad/ciudad-edit/ciudad-edit.component';
import { CiudadAddComponent } from './components/ubicacion/ciudad/ciudad-add/ciudad-add.component';
import { CiudadListComponent } from './components/ubicacion/ciudad/ciudad-list/ciudad-list.component';
import { LocalidadEditComponent } from './components/ubicacion/localidad/localidad-edit/localidad-edit.component';
import { LocalidadAddComponent } from './components/ubicacion/localidad/localidad-add/localidad-add.component';
import { LocalidadListComponent } from './components/ubicacion/localidad/localidad-list/localidad-list.component';
import { BarrioEditComponent } from './components/ubicacion/barrio/barrio-edit/barrio-edit.component';
import { BarrioAddComponent } from './components/ubicacion/barrio/barrio-add/barrio-add.component';
import { BarrioListComponent } from './components/ubicacion/barrio/barrio-list/barrio-list.component';
import { CuestionarioAddComponent } from './components/cuestionario/cuestionario/cuestionario-add/cuestionario-add.component';
import { CuestionarioEditComponent } from './components/cuestionario/cuestionario/cuestionario-edit/cuestionario-edit.component';
import { CuestionarioListComponent } from './components/cuestionario/cuestionario/cuestionario-list/cuestionario-list.component';
import { GrupoEditComponent } from './components/cuestionario/grupo/grupo-edit/grupo-edit.component';
import { GrupoAddComponent } from './components/cuestionario/grupo/grupo-add/grupo-add.component';
import { GrupoListComponent } from './components/cuestionario/grupo/grupo-list/grupo-list.component';
import { PreguntaAddComponent } from './components/cuestionario/pregunta/pregunta-add/pregunta-add.component';
import { PreguntaEditComponent } from './components/cuestionario/pregunta/pregunta-edit/pregunta-edit.component';
import { PreguntaListComponent } from './components/cuestionario/pregunta/pregunta-list/pregunta-list.component';
import { GrupoPreguntaAddComponent } from './components/cuestionario/grupo-pregunta/grupo-pregunta-add/grupo-pregunta-add.component';
import { GrupoPreguntaEditComponent } from './components/cuestionario/grupo-pregunta/grupo-pregunta-edit/grupo-pregunta-edit.component';
import { GrupoPreguntaListComponent } from './components/cuestionario/grupo-pregunta/grupo-pregunta-list/grupo-pregunta-list.component';
import { CuestionarioGrupoAddComponent } from './components/cuestionario/cuestionario-grupo/cuestionario-grupo-add/cuestionario-grupo-add.component';
import { CuestionarioGrupoEditComponent } from './components/cuestionario/cuestionario-grupo/cuestionario-grupo-edit/cuestionario-grupo-edit.component';
import { CuestionarioGrupoListComponent } from './components/cuestionario/cuestionario-grupo/cuestionario-grupo-list/cuestionario-grupo-list.component';
import { CuestionarioFormularioComponent } from './components/cuestionario/cuestionario/cuestionario-formulario/cuestionario-formulario.component';
import { PacienteAddComponent } from './components/paciente/paciente/paciente-add/paciente-add.component';
import { PacienteEditComponent } from './components/paciente/paciente/paciente-edit/paciente-edit.component';
import { PacienteListComponent } from './components/paciente/paciente/paciente-list/paciente-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ErrorComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent,
    TipoParametroEditComponent,
    TipoParametroAddComponent,
    TipoParametroListComponent,
    ParametroAddComponent,
    ParametroEditComponent,
    ParametroListComponent,
    PaisEditComponent,
    PaisAddComponent,
    PaisListComponent,
    DepartamentoEditComponent,
    DepartamentoAddComponent,
    DepartamentoListComponent,
    CiudadEditComponent,
    CiudadAddComponent,
    CiudadListComponent,
    LocalidadEditComponent,
    LocalidadAddComponent,
    LocalidadListComponent,
    BarrioEditComponent,
    BarrioAddComponent,
    BarrioListComponent,
    CuestionarioAddComponent,
    CuestionarioEditComponent,
    CuestionarioListComponent,
    GrupoEditComponent,
    GrupoAddComponent,
    GrupoListComponent,
    PreguntaAddComponent,
    PreguntaEditComponent,
    PreguntaListComponent,
    GrupoPreguntaAddComponent,
    GrupoPreguntaEditComponent,
    GrupoPreguntaListComponent,
    CuestionarioGrupoAddComponent,
    CuestionarioGrupoEditComponent,
    CuestionarioGrupoListComponent,
    CuestionarioFormularioComponent,
    PacienteAddComponent,
    PacienteEditComponent,
    PacienteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService,
    TipoParametroService,
    ParametroService,
    PaisService,
    DepartamentoService,
    CiudadService,
    LocalidadService,
    BarrioService,
    CuestionarioService,
    GrupoService,
    PreguntaService,
    GrupoPreguntaService,
    CuestionarioGrupoService,
    PacienteService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
