export class GrupoPreguntaDTO{
	constructor(
		public GRUPO_PREGUNTA: number,
		public CODIGO_GRUPO_PREGUNTA: string,
		public DESCRIPCION_GRUPO: string,
		public DESCRIPCION_PREGUNTA: string,
    public ORDEN_GRUPO_PREGUNTA: number,
		public ESTADO_GRUPO_PREGUNTA: string
	){}
}
