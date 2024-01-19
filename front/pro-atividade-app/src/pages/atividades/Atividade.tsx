import React from 'react';
import { useState, useEffect } from "react";
import { Button, Modal } from 'react-bootstrap';
import TitlePages from "../../components/TitlePages.tsx";
import AtividadeLista from "./AtividadeLista.tsx";
import AtividadeForm from "./AtividadeForm.tsx";
import { AtividadeInicial, IAtividade } from '../../model/atividade.ts';
import api from '../../api/atividadeHttp.ts'

const Atividade = () => {

    // State: Mudança de estado
    const [showOrCloseAtvModal, setShowOrCloseAtvModal] = useState(false);
    const [showConfirModal, setShowConfirModal] = useState(false);
    const [atividades, setAtividades] = useState<IAtividade[]>([]); // Hook useState()
    const [atividade, setAtividade] = useState<IAtividade>(AtividadeInicial); // Hook useState()

    const handleShowOrCloseAtvModal = () => setShowOrCloseAtvModal(!showOrCloseAtvModal);

    const handleConfirmModal = (id: number) => {
        if (id !== 0 && id !== undefined) {
            const atividade = atividades.filter((at) => at.id === id);
            setAtividade(atividade[0]);
        }   
        else {
            setAtividade(AtividadeInicial);
        }
        setShowConfirModal(!showOrCloseAtvModal);
    }

    // GET - Método de integração com back-end async/await
    const getAllActivities = async () => {
        const response = await api.get('atividade');
        return response.data;
    }

    useEffect(() => {
        // Tbm passa a ser assíncrono e agr, interage com o bakc-end
        const getAll = async () => {
            const totalActivities = await getAllActivities();
            if (totalActivities != null)
                setAtividades(totalActivities);
        };
        getAll();
    }, []); // Retirado a ação sobre o efeito, senão, o get() se torna infinito

    // POST - - Método de integração com back-end async/await
    const addAtividade = async (ativ: IAtividade) => {
        const response = await api.post('atividade', ativ);
        setAtividades([...atividades, response.data]);
        handleShowOrCloseAtvModal();
    }

    // DELETE - - Método de integração com back-end async/await
    const deletarAtividade = async (id: number) => {
        handleConfirmModal(0);
        if (await api.delete(`atividade/${id}`)) {
            const ativFiltradas = atividades.filter((at) => at.id !== id);
            setAtividades([...ativFiltradas]);
        }
    }

    // PUT - Método de integração com back-end async/await
    const atualizarAtividade = async (ativ: IAtividade) => {
        const response = await api.put(`atividade/${ativ.id}`, ativ);
        const { id } = response.data; // Desestruturação
        setAtividades(atividades.map((item) => (item.id === id ? response.data : item)));
        setAtividade(AtividadeInicial);
        handleShowOrCloseAtvModal();
    }

    // Função do Front-end - Selecionar para edição
    const pegarAtividade = (id: number) => {
        const atividade = atividades.filter((at) => at.id === id);
        setAtividade(atividade[0]);
        handleShowOrCloseAtvModal();
    }

    // Função do Front-end - Cancelar edição
    const cancelarAtividade = () => {
        setAtividade(AtividadeInicial);
        handleShowOrCloseAtvModal();
    }

    // Igual a cancelarAtividade, porém, separada caso haja diferenciação na implementação futura
    const novaAtividade = () => {
        setAtividade(AtividadeInicial);
        handleShowOrCloseAtvModal();
    }

    return (
        <> {/* <- Fragment oculto - Permite + de 1 componente */}

            <TitlePages title={'Atividade' + (atividade.id !== 0 ? atividade.id : '')}>
                <Button variant='outline-secundary' onClick={novaAtividade}>
                    <button className='btn btn-outline-secondary'> + </button>
                </Button>
            </TitlePages>

            <AtividadeLista
                atividades={atividades}
                pegarAtividade={pegarAtividade}
                handleConfirmModal={handleConfirmModal}
            />

            <Modal
                show={showOrCloseAtvModal}
                onHide={handleShowOrCloseAtvModal}
            >
                <Modal.Header>
                    <Modal.Title>Atividade {atividade.id !== 0 ? atividade.id : ''}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AtividadeForm
                        addAtividade={addAtividade}
                        atualizarAtividade={atualizarAtividade}
                        cancelarAtividade={cancelarAtividade}
                        ativSelecionada={atividade}
                    />
                </Modal.Body>
            </Modal>

            <Modal
                size='sm'
                show={showConfirModal}
                onHide={() => handleConfirmModal}
            >
                <Modal.Header>
                    <Modal.Title>Excluindo Atividade {atividade.id !== 0 ? atividade.id : ''}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Tem certeza que deseja excluir a atividade {atividade.id} ?
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-between'>
                    <button
                        className='btn btn-outline-success me-2'
                        onClick={() => deletarAtividade(atividade.id)}
                    >Sim</button>
                    <button
                        className='btn btn-outline-danger me-2'
                        onClick={() => handleConfirmModal(0)}
                    >Não</button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default Atividade;