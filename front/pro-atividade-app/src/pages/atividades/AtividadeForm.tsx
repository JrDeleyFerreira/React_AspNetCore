import React from 'react';
import { useState, useEffect } from 'react';
import { IAtividade, AtividadeInicial } from '../../model/atividade.ts';
import { AtividadeFormProps } from '../../model/atividadeProps.ts';

const AtividadeForm: React.FC<AtividadeFormProps> =
(
	{ ativSelecionada, atualizarAtividade, addAtividade, cancelarAtividade, 	
	}: AtividadeFormProps
) =>
{
	const [atividade, setAtividade] = useState<IAtividade>(atividadeAtual());

	// Hook useEffect()
	useEffect(() => {
		if (ativSelecionada.id !== 0)
			setAtividade(ativSelecionada);
	}, [ativSelecionada]);
	/* Colchetes indicam quem gera a ação de efeito desse hook
	 * Caso fique vazio [], é inicializado apenas 1x 
	 * Se deixar sem o [], atualiza a cada iteração na tela */

	const handleValueText = (e: any) => { // Any pq retorna 3 tipos: input, select e textarea
		const { name, value } = e.target;

		setAtividade({ ...atividade, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (ativSelecionada.id !== 0)
			atualizarAtividade(atividade);
		else
			addAtividade(atividade);

		setAtividade(AtividadeInicial);
	};

	const handleCancelar = (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault();

		cancelarAtividade();

		setAtividade(AtividadeInicial);
	};

	function atividadeAtual() : IAtividade {
		if (ativSelecionada.id !== 0)
			return ativSelecionada;
		else
			return AtividadeInicial;
	}

	return (
		<>
			<form className='row g-3' onSubmit={handleSubmit}>

				<div className='col-md-6'>
					<label className='form-label'>Título</label>
					<input
						name='titulo'
						value={atividade.titulo}
						onChange={handleValueText}
						id='titulo'
						type='text'
						className='form-control'
						placeholder='Título'
					/>
				</div>

				<div className='col-md-6'>
					<label className='form-label'>Prioridade</label>
					<select
						name='prioridade'
						value={atividade.prioridade}
						onChange={handleValueText}
						id='prioridade'
						className='form-select'
					>
						<option value='NaoDefinida'>Selecione...</option>
						<option value='Baixa'>Baixa</option>
						<option value='Normal'>Normal</option>
						<option value='Alta'>Alta</option>
					</select>
				</div>

				<div className='col-md-12'>
					<label className='form-label'>Descrição</label>
					<textarea
						name='descricao'
						value={atividade.descricao}
						onChange={handleValueText}
						id='descricao'
						className='form-control'
						placeholder='Descrição'
					/>
					<hr />
				</div>

				<div className='col-12 mt-0'>
					{atividade.id === 0
						?
						(
							<button className='btn btn-outline-success' type='submit'>
								<i className='fas fa-plus me-2'></i>
								+ Salvar
							</button>
						)
						:
						(
							<>
								<button className='btn btn-outline-success me-2' type='submit' >
									<i className='fas fa-plus me-2'></i>
									+ Salvar
								</button>

								<button className='btn btn-outline-danger'
									onClick={handleCancelar}>
									<i className='fas fa-plus me-2'></i>
									x Cancelar
								</button>
							</>
						)}
				</div>

			</form>
		</>
	);
}

export default AtividadeForm;