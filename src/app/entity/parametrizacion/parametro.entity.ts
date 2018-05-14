export class ParametroEntity{
	constructor(
		public PARAMETRO: number,
		public CODIGO: string,
		public DESCRIPCION: string,
		public OBSERVACION: string,
    public ORDEN: number,
    public TIPO_PARAMETRO: number,
		public ESTADO: string
	){}
}
