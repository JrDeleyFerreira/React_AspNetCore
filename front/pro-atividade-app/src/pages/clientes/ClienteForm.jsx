import React from 'react';
import TitlePages from "./../../components/TitlePages";
import { useHistory, useParams } from 'react-router-dom';

export default function ClienteForm() {

    let history = useHistory();
    let { id } = useParams();

    return (
        <>
            <TitlePages title={'Cliente Detalhes ' + (id !== undefined ? id : '')}>
                <button
                    className='outline-secondary'
                    onClick={() => history.goBack()}
                >
                    Voltar
                </button>
            </TitlePages>
            <div></div>
        </>
    )
}
