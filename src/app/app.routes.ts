import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { TipoParametroListComponent } from './components/parametrizacion/tipoParametro/tipo-parametro-list/tipo-parametro-list.component';
import { TipoParametroAddComponent } from './components/parametrizacion/tipoParametro/tipo-parametro-add/tipo-parametro-add.component';
import { TipoParametroEditComponent } from './components/parametrizacion/tipoParametro/tipo-parametro-edit/tipo-parametro-edit.component';
import { ParametroListComponent } from './components/parametrizacion/parametro/parametro-list/parametro-list.component';
import { ParametroAddComponent } from './components/parametrizacion/parametro/parametro-add/parametro-add.component';
import { ParametroEditComponent } from './components/parametrizacion/parametro/parametro-edit/parametro-edit.component';
import { PaisListComponent } from './components/ubicacion/pais/pais-list/pais-list.component';
import { PaisAddComponent } from './components/ubicacion/pais/pais-add/pais-add.component';
import { PaisEditComponent } from './components/ubicacion/pais/pais-edit/pais-edit.component';
import { DepartamentoListComponent } from './components/ubicacion/departamento/departamento-list/departamento-list.component';
import { DepartamentoAddComponent } from './components/ubicacion/departamento/departamento-add/departamento-add.component';
import { DepartamentoEditComponent } from './components/ubicacion/departamento/departamento-edit/departamento-edit.component';
import { CiudadListComponent } from './components/ubicacion/ciudad/ciudad-list/ciudad-list.component';
import { CiudadAddComponent } from './components/ubicacion/ciudad/ciudad-add/ciudad-add.component';
import { CiudadEditComponent } from './components/ubicacion/ciudad/ciudad-edit/ciudad-edit.component';
import { LocalidadListComponent } from './components/ubicacion/localidad/localidad-list/localidad-list.component';
import { LocalidadAddComponent } from './components/ubicacion/localidad/localidad-add/localidad-add.component';
import { LocalidadEditComponent } from './components/ubicacion/localidad/localidad-edit/localidad-edit.component';
import { BarrioListComponent } from './components/ubicacion/barrio/barrio-list/barrio-list.component';
import { BarrioAddComponent } from './components/ubicacion/barrio/barrio-add/barrio-add.component';
import { BarrioEditComponent } from './components/ubicacion/barrio/barrio-edit/barrio-edit.component';
import { CuestionarioListComponent } from './components/cuestionario/cuestionario/cuestionario-list/cuestionario-list.component';
import { CuestionarioAddComponent } from './components/cuestionario/cuestionario/cuestionario-add/cuestionario-add.component';
import { CuestionarioEditComponent } from './components/cuestionario/cuestionario/cuestionario-edit/cuestionario-edit.component';
import { CuestionarioFormularioComponent } from './components/cuestionario/cuestionario/cuestionario-formulario/cuestionario-formulario.component';
import { GrupoListComponent } from './components/cuestionario/grupo/grupo-list/grupo-list.component';
import { GrupoAddComponent } from './components/cuestionario/grupo/grupo-add/grupo-add.component';
import { GrupoEditComponent } from './components/cuestionario/grupo/grupo-edit/grupo-edit.component';
import { PreguntaListComponent } from './components/cuestionario/pregunta/pregunta-list/pregunta-list.component';
import { PreguntaAddComponent } from './components/cuestionario/pregunta/pregunta-add/pregunta-add.component';
import { PreguntaEditComponent } from './components/cuestionario/pregunta/pregunta-edit/pregunta-edit.component';
import { GrupoPreguntaListComponent } from './components/cuestionario/grupo-pregunta/grupo-pregunta-list/grupo-pregunta-list.component';
import { GrupoPreguntaAddComponent } from './components/cuestionario/grupo-pregunta/grupo-pregunta-add/grupo-pregunta-add.component';
import { GrupoPreguntaEditComponent } from './components/cuestionario/grupo-pregunta/grupo-pregunta-edit/grupo-pregunta-edit.component';
import { CuestionarioGrupoListComponent } from './components/cuestionario/cuestionario-grupo/cuestionario-grupo-list/cuestionario-grupo-list.component';
import { CuestionarioGrupoAddComponent } from './components/cuestionario/cuestionario-grupo/cuestionario-grupo-add/cuestionario-grupo-add.component';
import { CuestionarioGrupoEditComponent } from './components/cuestionario/cuestionario-grupo/cuestionario-grupo-edit/cuestionario-grupo-edit.component';
import { PacienteListComponent } from './components/paciente/paciente/paciente-list/paciente-list.component';
import { PacienteAddComponent } from './components/paciente/paciente/paciente-add/paciente-add.component';
import { PacienteEditComponent } from './components/paciente/paciente/paciente-edit/paciente-edit.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'error', component: ErrorComponent },

  { path: 'tipoParametroList', component: TipoParametroListComponent },
  { path: 'tipoParametroAdd', component: TipoParametroAddComponent},
  { path: 'tipoParametroEdit/:idTipoParametro', component: TipoParametroEditComponent},

  { path: 'parametroIdTipoParametroList/:idTipoParametro', component: ParametroListComponent },
  { path: 'parametroCodigoTipoParametroList/:codigoTipoParametro', component: ParametroListComponent },
  { path: 'parametroAdd/:idTipoParametro', component: ParametroAddComponent},
  { path: 'parametroEdit/:idParametro/:descripcionTipoParametro', component: ParametroEditComponent},

  { path: 'paisList', component: PaisListComponent },
  { path: 'paisAdd', component: PaisAddComponent},
  { path: 'paisEdit/:idPais', component: PaisEditComponent},

  { path: 'departamentoPaisList/:idPais', component: DepartamentoListComponent },
  { path: 'departamentoAdd/:idPais', component: DepartamentoAddComponent},
  { path: 'departamentoEdit/:idDepartamento/:descripcionPais', component: DepartamentoEditComponent},

  { path: 'ciudadDepartamentoList/:idDepartamento', component: CiudadListComponent },
  { path: 'ciudadAdd/:idDepartamento', component: CiudadAddComponent},
  { path: 'ciudadEdit/:idCiudad/:descripcionDepartamento', component: CiudadEditComponent},

  { path: 'localidadCiudadList/:idCiudad', component: LocalidadListComponent },
  { path: 'localidadAdd/:idCiudad', component: LocalidadAddComponent},
  { path: 'localidadEdit/:idLocalidad/:descripcionCiudad', component: LocalidadEditComponent},

  { path: 'barrioLocalidadList/:idLocalidad', component: BarrioListComponent },
  { path: 'barrioAdd/:idLocalidad', component: BarrioAddComponent},
  { path: 'barrioEdit/:idBarrio/:descripcionLocalidad', component: BarrioEditComponent},

  { path: 'cuestionarioList', component: CuestionarioListComponent },
  { path: 'cuestionarioAdd', component: CuestionarioAddComponent},
  { path: 'cuestionarioEdit/:idCuestionario', component: CuestionarioEditComponent},
  { path: 'cuestionarioCodigoCuestionarioList/:codigoCuestionario', component: CuestionarioFormularioComponent},

  { path: 'grupoList', component: GrupoListComponent },
  { path: 'grupoAdd', component: GrupoAddComponent},
  { path: 'grupoEdit/:idGrupo', component: GrupoEditComponent},

  { path: 'preguntaList', component: PreguntaListComponent },
  { path: 'preguntaAdd', component: PreguntaAddComponent},
  { path: 'preguntaEdit/:idPregunta', component: PreguntaEditComponent},

  { path: 'grupoPreguntaIdGrupoList/:idGrupo', component: GrupoPreguntaListComponent },
  { path: 'grupoPreguntaAdd/:idGrupo', component: GrupoPreguntaAddComponent},
  { path: 'grupoPreguntaEdit/:idGrupoPregunta/:descripcionGrupo', component: GrupoPreguntaEditComponent},

  { path: 'cuestionarioGrupoIdCuestionarioList/:idCuestionario', component: CuestionarioGrupoListComponent },
  { path: 'cuestionarioGrupoAdd/:idCuestionario', component: CuestionarioGrupoAddComponent},
  { path: 'cuestionarioGrupoEdit/:idCuestionarioGrupo/:descripcionCuestionario', component: CuestionarioGrupoEditComponent},

  { path: 'pacienteList', component: PacienteListComponent },
  { path: 'pacienteAdd', component: PacienteAddComponent},
  { path: 'pacienteEdit/:idPaciente', component: PacienteEditComponent},

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
