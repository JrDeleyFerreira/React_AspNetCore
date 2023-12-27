import { Fragment, useState, React } from "react";
import './App.css';

let initialState = [
  {
    id: 1,
    prioridade: '1',
    titulo: 'Título 1',
    descricao: 'Primeira Atividade',
  },
  {
    id: 2,
    prioridade: '3',
    titulo: 'Título 2',
    descricao: 'Segunda Atividade',
  },
];

function App() {
  // State: Mudança de estado
  const [atividades, setAtividades] = useState(initialState);

  function addAtividade(e) {
    e.preventDefault();

    const atividade = {
      id: document.getElementById('id').value,
      prioridade: document.getElementById('prioridade').value,
      titulo: document.getElementById('titulo').value,
      descricao: document.getElementById('descricao').value
    };

    // Assim, ou mais moderno abaixo
    // atividades.push(atividade);
    // setAtividades([...atividades]);
    setAtividades([...atividades, { ...atividade }]);
  }

  function prioridadeLabel(param) {
    switch (param) {
      case '1':
        return 'Baixa';
      case "2":
        return 'Normal';
      case '3':
        return 'Alta';
      default:
        return 'Não definida.'
    }
  }

  function prioridadeStyle(param, icon) {
    switch (param) {
      case '1':
        return icon ? 'smile' : 'success';
      case "2":
        return icon ? 'meh' : 'warning';
      case '3':
        return icon ? 'dizzy' : 'danger';
      default:
        return 'Não definida.'
    }
  }

  return (
    <> {/* <- Fragment oculto - Permite + de 1 componente */}
      
      <form className='row g-3'>
        <div className='col-md-6'>
          <label className='form-label'>ID: </label>
          <input id='id' type='text' placeholder='Id' className='form-control'
            readOnly 
            value={Math.max.apply(Math, atividades.map((item) => item.id)) + 1}
          />
        </div>

        <div className='col-md-6'>
          <label className='form-label'>Prioridade</label>
          <select className='form-select' id='prioridade'>
            <option defaultValue='0'>Selecionar...</option>
            <option value='1'>Baixa</option>
            <option value='2'>Normal</option>
            <option value='3'>Alta</option>
          </select>
        </div>

        <div className='col-md-6'>
          <label className='form-label'>Título: </label>
          <input id='titulo' type='text' placeholder='Título' className='form-control' />
        </div>
        
        <div className='col-md-6'>
          <label className='form-label'>Descrição: </label>
          <input id='descricao' type='text' placeholder='Descrição' className='form-control' />
        </div>
        
        <hr />
        
        <div className='col-12'>
          <button className='btn btn-outline-secondary'
            onClick={addAtividade}>+ Atividade
          </button>
        </div>
      </form>

{/* ------------------------------------------------------------------------------------------------- */}      
      
      <div className='mt-3'>
        {atividades.map(ativ => (
          <div key={ativ.id} className={'card mb-2 shadow-sm border-' + prioridadeStyle(ativ.prioridade)}>
            <div className='card-body'>
              
              <div className='d-flex justify-content-between'>
                <h5 className='h5 card-title'>
                  <span className='badge bg-secondary me-1'> {ativ.id} </span>
                  - {ativ.titulo}
                </h5>
                <h6>
                  Prioridade:
                  <span className={'ms-1 text-' + prioridadeStyle(ativ.prioridade)}>
                    {/* <i className={'me-1 fa-regular fa-face-' + prioridadeStyle(ativ.prioridade, true)}></i> */}
                    {prioridadeLabel(ativ.prioridade)}
                  </span>
                </h6>
              </div>
              
              <p className='card-text'> {ativ.descricao} </p>

              <div className='d-flex justify-content-end pt-2 m-0 border-top'>
                <button className='btn btn-sm btn-outline-primary me-2'>
                  <i className='fa-regular fa-pen-to-square me-2'></i>
                  Editar
                </button>
                <button className='btn btn-sm btn-outline-danger'>
                  <i className='fa-regular fa-trash-can me-2'></i>
                  Deletar
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

    </>
  );
}

export default App;
