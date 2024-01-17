import React, { useState } from 'react';
import TitlePages from "./../../components/TitlePages";
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const clientes = [
    {
        id: 1,
        nome: 'Microsoft',
        responsavel: 'Otto',
        contato: '10665544',
        situacao: 'Ativo',
    },
    {
        id: 2,
        nome: 'Amazon',
        responsavel: 'Willian',
        contato: '55448899',
        situacao: 'Desativado',
    },
    {
        id: 3,
        nome: 'Google',
        responsavel: 'Jack',
        contato: '66554433',
        situacao: 'Em Análise',
    },
    {
        id: 4,
        nome: 'Facebook',
        responsavel: 'Kevin',
        contato: '75881515',
        situacao: 'Ativo',
    },
    {
        id: 5,
        nome: 'Twitter',
        responsavel: 'Jack',
        contato: '00256548',
        situacao: 'Ativo',
    },
];

export default function ClienteList() {

    const { termoBusca, setTermoBusca } = useState('');
    const history = useHistory();

    const handleInputChange = (e) => {
        setTermoBusca(e.target.value);
    }

    const clientesFiltrados = clientes.filter((cliente) => {
        // Filtra apenas pelo nome (pode add outro com ||)
        // return cliente.nome.toLocaleLowerCase().indexOf(termoBusca) !== -1;

        // Filtra em todos os campos
        return Object.values(cliente)
            .join(' ')
            .toLowerCase()
            .includes(termoBusca.toLowerCase());
    });

    const novoCliente = () => {
        history.push('/cliente/detalhe');
    }

    return (
        <>
            <TitlePages title='Cliente Lista'>
                <Button variant='outline-secondary' onClick={novoCliente}>
                    <i className='fas fa-plus me-2'></i>
                    Novo Cliente
                </Button>
            </TitlePages>

            <InputGroup className='mt-3 mb-3'>
                <InputGroup.Text>Buscar:</InputGroup.Text>
                <FormControl
                    placeholder='Buscar por Nome'
                    onChange={handleInputChange}
                >
                </FormControl>
            </InputGroup>

            <table className='table table-striped table-hover'>
                <thead className='table-dark mt-3'>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Nome</th>
                        <th scope='col'>Responsável</th>
                        <th scope='col'>Contato</th>
                        <th scope='col'>Situação</th>
                        <th scope='col'>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {clientesFiltrados.map((cliente) => (
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nome}</td>
                            <td>{cliente.responsavel}</td>
                            <td>{cliente.contato}</td>
                            <td>{cliente.situacao}</td>
                            <td>
                                <div>
                                    <button
                                        className='btn btn-sm btn-outline-primary me-2 abs'
                                        onClick={() => history.push(`/cliente/detaçhe/${cliente.id}`)}
                                    >
                                        <i className='fas fa-user-edit me-2'></i>
                                        Editar
                                    </button>
                                    <button className='btn btn-sm btn-outline-danger me-2'>
                                        <i className='fas fa-user-times me-2'></i>
                                        Desativar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
