import React from 'react';
import TitlePages from "./../../components/TitlePages";
import { useNavigate, useParams } from 'react-router-dom';

export default function ClienteForm() {

    let navigate = useNavigate();
    let { id } = useParams();

    return (
        <>
            <TitlePages title={'Cliente Detalhes ' + (id !== undefined ? id : '')}>
                <button
                    className='outline-secondary'
                    onClick={() => navigate('/cliente/list')}
                >
                    Voltar
                </button>
            </TitlePages>
            <div></div>
        </>
    )
}
