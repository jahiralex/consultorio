export class CuestionarioEntity{
	constructor(
		public CUESTIONARIO: number,
		public CODIGO: string,
		public DESCRIPCION: string,
		public OBSERVACION: string,
    public ESTADO: string
	){}
}
