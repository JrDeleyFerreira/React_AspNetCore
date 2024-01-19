export enum Prioridade {
	NaoDefinida = 'NaoDefinida',
	Baixa = 'Baixa',
	Normal = 'Normal',
	Alta = 'Alta'
}

export interface IAtividade {
	id: number;
	prioridade: string;
	titulo: string;
	descricao: string;
}

export const AtividadeInicial : IAtividade = {
	id: 0,
	titulo: '',
	prioridade: Prioridade.NaoDefinida,
	descricao: '',
};