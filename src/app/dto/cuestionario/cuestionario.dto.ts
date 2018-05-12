export class CuestionarioDTO{
	constructor(
    public CUESTIONARIO: number,
		public CODIGO_CUESTIONARIO: string,
		public DESCRIPCION_CUESTIONARIO: string,
		public ORDEN_GRUPO: number,
		public DESCRIPCION_GRUPO: string,
		public ORDEN_PREGUNTA: number,
		public CODIGO_PREGUNTA: string,
		public DESCRIPCION_PREGUNTA: string,
		public CODIGO_PARAM_RESPUESTA: string,
		public DESCRIPCION_PARAM_RESPUESTA: string,
		public CODIGO_TIPO_PARAM_RESPUESTA: string,
		public DESCRIPCION_TIPO_PARAM_RESPUESTA: string
	){}
}
