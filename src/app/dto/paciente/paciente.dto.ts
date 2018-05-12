export class PacienteDTO{
	constructor(
		public PACIENTE: number,
    public PARAM_TIPO_IDENTIFICACION : number,
    public DESCRIPCION_PARAM_TIPO_IDENTIFICACION: string,
    public OBSERVACION_PARAM_TIPO_IDENTIFICACION: string,
		public NUMERO_IDENTIFICACION_PACIENTE: string,
		public ESTADO_PACIENTE: string
	){}
}
