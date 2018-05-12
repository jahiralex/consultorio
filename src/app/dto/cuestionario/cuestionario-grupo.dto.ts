export class CuestionarioGrupoDTO{
	constructor(
		public CUESTIONARIO_GRUPO: number,
		public CODIGO_CUESTIONARIO_GRUPO: string,
		public DESCRIPCION_CUESTIONARIO: string,
		public DESCRIPCION_GRUPO: string,
    public ORDEN_CUESTIONARIO_GRUPO: number,
		public ESTADO_CUESTIONARIO_GRUPO: string
	){}
}
