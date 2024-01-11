import { useState, useEffect } from 'react';

const atividadeInicial = {
	id: 0,
	titulo: '',
	prioridade: 0,
	descricao: '',
};

export default function AtividadeForm(props) {
	const [atividade, setAtividade] = useState(atividadeAtual());

	// Hook useEffect()
	useEffect(() => {
		if (props.ativSelecionada.id !== 0)
			setAtividade(props.ativSelecionada);
	}, [props.ativSelecionada]);
	/* Colchetes indicam quem gera a ação de efeito desse hook
	 * Caso fique vazio [], é inicializado apenas 1x 
	 * Se deixar sem o [], atualiza a cada iteração na tela */

	const inputTextHandler = (e) => {
		const { name, value } = e.target;

		setAtividade({ ...atividade, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (props.ativSelecionada.id !== 0)
			props.atualizarAtividade(atividade);
		else
			props.addAtividade(atividade);

		setAtividade(atividadeInicial);
	};

	const handleCancelar = (e) => {
		e.preventDefault();

		props.cancelarAtividade();

		setAtividade(atividadeInicial);
	};

	function atividadeAtual() {
		if (props.ativSelecionada.id !== 0)
			return props.ativSelecionada;
		else
			return atividadeInicial;
	}

	return (
		<>
			<form className='row g-3' onSubmit={handleSubmit}>

				<div className='col-md-6'>
					<label className='form-label'>Título</label>
					<input
						name='titulo'
						value={atividade.titulo}
						onChange={inputTextHandler}
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
						onChange={inputTextHandler}
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
						onChange={inputTextHandler}
						id='descricao'
						type='text'
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