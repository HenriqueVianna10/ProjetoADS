import React from 'react';
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/sus-logo.png';

const CreatePoint = () => {
    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="EVacina" />

                <Link to="/">
                    <FiArrowLeft />
                    Voltar Para Home
                </Link>
            </header>

            <form>
                <h1>Cadastrar Novo Posto</h1>
                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>

                    <div className="field">
                        <label htmlFor="name">Nome do Posto</label>
                        <input 
                            type="text"
                            name="name"
                            id="name"
                        />
                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="email">E-mail</label>
                            <input 
                            type="email"
                            name="email"
                            id="email"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="whatsapp">WhatsApp</label>
                        <input 
                            type="text"
                            name="whatsapp"
                            id="whatsapp"
                        />
                    </div> 
                 </div>   

                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Endereço</h2>
                        <span>Selecione o endereço no mapa </span>
                    </legend>

                    
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Vacinas Disponíveis</h2>
                        <span>Selecione uma ou mais vacinas</span>
                    </legend>
                </fieldset>

            </form>
        </div>
    );
};

export default CreatePoint;