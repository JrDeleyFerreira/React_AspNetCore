import React from 'react'

export default function Atividade(props) {

	function prioridadeLabel(param) {
		switch (param) {
			case 'Baixa':
			case 'Normal':
			case 'Alta':
				return param;
			default:
				return 'Não definida.'
		}
	}

	function prioridadeStyle(param, icon) {
		switch (param) {
			case 'Baixa':
				return icon ? 'smile' : 'success';
			case "Normal":
				return icon ? 'meh' : 'warning';
			case 'Alta':
				return icon ? 'dizzy' : 'danger';
			default:
				return 'Não definida.'
		}
	}

	return (
		<div className={'card mb-2 shadow-sm border-' + prioridadeStyle(props.ativ.prioridade)}>
			<div className='card-body'>

				<div className='d-flex justify-content-between'>
					<h5 className='h5 card-title'>
						<span className='badge bg-secondary me-1'> {props.ativ.id} </span>
						- {props.ativ.titulo}
					</h5>
					<h6>
						Prioridade:
						<span className={'ms-1 text-' + prioridadeStyle(props.ativ.prioridade)}>
							{/* <i className={'me-1 fa-regular fa-face-' + prioridadeStyle(props.ativ.prioridade, true)}></i> */}
							{prioridadeLabel(props.ativ.prioridade)}
						</span>
					</h6>
				</div>

				<p className='card-text'> {props.ativ.descricao} </p>

				<div className='d-flex justify-content-end pt-2 m-0 border-top'>
					<button className='btn btn-sm btn-outline-primary me-2'
						onClick={() => props.pegarAtividade(props.ativ.id)} >
						<i className='fa-regular fa-pen-to-square me-2'></i>
						Editar
					</button>

					<button className='btn btn-sm btn-outline-danger'
						onClick={() => props.handleConfirmModal(props.ativ.id)} >
						<i className='fa-regular fa-trash-can me-2'></i>
						Deletar
					</button>
				</div>

			</div>
		</div>
	)
}
