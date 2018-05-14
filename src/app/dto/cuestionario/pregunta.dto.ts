export class PreguntaDTO{
	constructor(
		public PREGUNTA: number,
		public CODIGO_PREGUNTA: string,
		public DESCRIPCION_PREGUNTA: string,
		public OBSERVACION_PREGUNTA: string,
    public DESCRIPCION_PARAM_RESPUESTA: string,
    public ESTADO_PREGUNTA: string
	){}
}
