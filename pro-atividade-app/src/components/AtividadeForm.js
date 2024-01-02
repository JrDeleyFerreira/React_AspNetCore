import React, { useEffect, useState } from 'react'

const atividadeInicial = {
  id: 0,
  titulo: '',
  prioridade: 0,
  descricao: ''
}

export default function AtividadeForm(props) {

  const { atividade, setAtividade } = useState(atividadeAtual()); // Hook useState()

  // Hook useEffect()
  useEffect(() => {
    if (props.atividadeSelecionada.id !== 0)
      setAtividade(props.atividadeSelecionada);
  }, [props.atividadeSelecionada, setAtividade]);
  /* Colchetes indicam quem gera a ação de efeito desse hook
   * Caso fique vazio [], é inicializado apenas 1x 
   * Se deixar sem o [], atualiza a cada iteração na tela */

  const inputTextHandler = (e) => {
    const { name, value } = e.target;
    setAtividade({ ...atividade, [name]: value })
  };

  function atividadeAtual() {
    if (props.atividadeSelecionada.id !== 0)
      return props.atividadeSelecionada;
    else
      return atividadeInicial;
  }

  const handleCancelar = (e) => {
    e.preventDefault();

    props.cancelarAtividade();

    setAtividade(atividadeInicial);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (props.atividadeSelecionada.id !== 0)
      props.atualizarAtividade(atividade);
    else
      props.addAtividade(atividade);

    setAtividade(atividadeInicial);
  }

  return (
    <>
      <h1>Atividade {atividade.id !== 0 ? atividade.id : ''} </h1>

      <form className='row g-3' onSubmit={handleSubmit}>

        <div className='col-md-6'>
          <label className='form-label'>Título: </label>
          <input
            id='titulo'
            type='text'
            placeholder='Título'
            className='form-control'
            name='titulo'
            value={atividade.titulo}
            onChange={inputTextHandler}
          />
        </div>

        <div className='col-md-6'>
          <label className='form-label'>Prioridade</label>
          <select
            className='form-select'
            id='prioridade'
            name='prioridade'
            value={atividade.prioridade}
            onChange={inputTextHandler}
          >
            <option defaultValue='0'>Selecionar...</option>
            <option value='1'>Baixa</option>
            <option value='2'>Normal</option>
            <option value='3'>Alta</option>
          </select>
        </div>

        <div className='col-md-12'>
          <label className='form-label'>Descrição: </label>
          <textarea
            id='descricao'
            type='text'
            placeholder='Descrição'
            className='form-control'
            name='descricao'
            value={atividade.descricao}
            onChange={inputTextHandler}
          />
        </div>

        <hr />

        <div className='col-12'>
          {
            atividade.id === 0
              ?
              (
                <button className='btn btn-outline-secondary' type='submit' >
                  <i className='fas fa-plus me-2'></i>
                  + Atividade
                </button>
              )
              :
              (
                <>
                  <button className='btn btn-outline-success me-2' type='submit'>
                    <i className='fas fa-plus me-2'></i>
                    + Salvar
                  </button>

                  <button className='btn btn-outline-danger'
                    onClick={handleCancelar}>
                    <i className='fas fa-less me-2'></i>
                    - Cancelar
                  </button>
                </>
              )
          }
        </div>

      </form>
    </>
  );
}
