export class PreguntaEntity{
	constructor(
		public PREGUNTA: number,
		public CODIGO: string,
		public DESCRIPCION: string,
		public OBSERVACION: string,
    public PARAM_RESPUESTA : number,
		public ESTADO: string
	){}
}
