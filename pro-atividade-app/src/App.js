import { useState, useEffect } from "react";
import './App.css';
import AtividadeForm from './components/AtividadeForm';
import AtividadeLista from './components/AtividadeLista';

function App() {
  // State: Mudança de estado
  const [index, setIndex] = useState(0);
  const [atividades, setAtividades] = useState([]); // Hook useState()
  const [atividade, setAtividade] = useState({ id: 0 }); // Hook useState()

  useEffect(() => {
    atividades.length <= 0
      ? setIndex(1)
      : setIndex(Math.max.apply(Math, atividades.map((item) => item.id)) + 1);
  }, [atividades]);

  function addAtividade(ativ) {
    setAtividades([...atividades, { ...ativ, id: index }]);
  }

  function deletarAtividade(id) {
    const ativFiltradas = atividades.filter((at) => at.id !== id);
    setAtividades([...ativFiltradas]);
  }

  function pegarAtividade(id) {
    const atividade = atividades.filter((at) => at.id === id);
    setAtividade(atividade[0]);
  }

  function atualizarAtividade(ativ) {
    setAtividades(atividades.map((item) => (item.id === ativ.id ? ativ : item)));
    setAtividade({ id: 0 });
  }

  function cancelarAtividade() {
    setAtividade({ id: 0 });
  }

  return (
    <> {/* <- Fragment oculto - Permite + de 1 componente */}

      <AtividadeForm
        addAtividade={addAtividade}
        atualizarAtividade={atualizarAtividade}
        cancelarAtividade={cancelarAtividade}
        ativSelecionada={atividade}
        atividades={atividades}
      />

      <AtividadeLista
        atividades={atividades}
        deletarAtividade={deletarAtividade}
        pegarAtividade={pegarAtividade}
      />

    </>
  );
}

export default App;
