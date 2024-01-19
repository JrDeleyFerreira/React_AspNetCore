import React from 'react';
import { AtividadeItemProps } from "./../../model/atividadeProps.ts";
import { Prioridade } from '../../model/atividade.ts';

const AtividadeItem: React.FC<AtividadeItemProps> =
	({ ativ, pegarAtividade, handleConfirmModal }: AtividadeItemProps) =>
{

	function prioridadeLabel(param: string) {
		switch (param) {
			case Prioridade.Baixa:
			case Prioridade.Normal:
			case Prioridade.Alta:
				return param;
			default:
				return 'Não definida.'
		}
	}

	function prioridadeStyle(param: string, icon: boolean) {
		switch (param) {
			case Prioridade.Baixa:
				return icon ? 'smile' : 'success';
			case Prioridade.Normal:
				return icon ? 'meh' : 'warning';
			case Prioridade.Alta:
				return icon ? 'dizzy' : 'danger';
			default:
				return 'Não definida.'
		}
	}

	return (
		<div className={'card mb-2 shadow-sm border-' + prioridadeStyle(ativ.prioridade, false)}>
			<div className='card-body'>

				<div className='d-flex justify-content-between'>
					<h5 className='h5 card-title'>
						<span className='badge bg-secondary me-1'> {ativ.id} </span>
						- {ativ.titulo}
					</h5>
					<h6>
						Prioridade:
						<span className={'ms-1 text-' + prioridadeStyle(ativ.prioridade, false)}>
							<i className={'me-1 fa-regular fa-face-'
								+ prioridadeStyle(ativ.prioridade, true)}
							/>
							{prioridadeLabel(ativ.prioridade)}
						</span>
					</h6>
				</div>

				<p className='card-text'> {ativ.descricao} </p>

				<div className='d-flex justify-content-end pt-2 m-0 border-top'>
					<button className='btn btn-sm btn-outline-primary me-2'
						onClick={() => pegarAtividade(ativ.id)} >
						<i className='fa-regular fa-pen-to-square me-2'></i>
						Editar
					</button>

					<button className='btn btn-sm btn-outline-danger'
						onClick={() => handleConfirmModal(ativ.id)} >
						<i className='fa-regular fa-trash-can me-2'></i>
						Deletar
					</button>
				</div>

			</div>
		</div>
	);
}

export default AtividadeItem;