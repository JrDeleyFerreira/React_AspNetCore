import { Fragment } from 'react';
import './App.css';

function App() {
  const atividades = [
    {
      id: 1,
      descricao: 'Primeira Atividade',
    },
    {
      id: 2,
      descricao: 'Segunda Atividade',
    },
  ];

  function addAtividade(e) {
    e.preventDefault();
    const atividade = {
      id: document.getElementById('id').nodeValue,
      descricao: document.getElementById('descricao').nodeValue,
    };
    atividades.push(atividade);
  }

  return (
    <Fragment>
      <form>
        <input id='id' type='text' placeholder='id' />
        <input id='descricao' type='text' placeholder='descricao' />
        <button onClick={addAtividade}>+ Atividade</button>
      </form>
      <div className='mt-3'>
        <ul className='list-group'>
          {atividades.map(ativ => (
            <li key={ativ.id} className='item-list-group'>
              {ativ.id} - {ativ.descricao}
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}

export default App;
