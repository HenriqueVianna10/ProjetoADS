import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker} from 'react-leaflet';
import api from '../../services/api';

import './styles.css';

import logo from '../../assets/sus-logo.png';

interface  Item {
    id: number;
    title: string;
    image_url: string;
}

const CreatePoint = () => {

    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        api.get('items').then(response =>{
            setItems(response.data);
        });
    },[]);

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

                        <Map center={[-30.1015063,-51.2587587]} zoom={15}>
                        <TileLayer 
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <Marker position={[-30.1015063,-51.2587587]}/>

                        </Map>


                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Estado(UF)</label>
                            <select name="uf" id="uf">
                                <option value="0">Selecione uma uf</option>
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="city">Cidade</label>
                            <select name="city" id="city">
                                <option value="0">Selecione uma Cidade</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Vacinas Disponíveis</h2>
                        <span>Selecione uma ou mais vacinas</span>
                    </legend>

                    <ul className="items-grid">
                        {items.map(item =>(
                        <li>
                            <img src={item.image_url} alt={item.title}/>
                            <span>{item.title}</span>
                        </li>
                        ))}
                    </ul>                  
                </fieldset>

                <button type="submit">
                    Cadastrar Ponto de Saúde
                </button>
            </form>
        </div>
    );
};

export default CreatePoint;