import React from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import './styles.css';

import logo from '../../assets/sus-logo.png';


const Home = () => {
    return (
       <div id="page-home">
           <div className="content">
            <header>
                <img src={logo} alt="Evacina" />
            </header>
            <main>
                <h1>E-Vacina</h1><br></br>
                <h2>O App de Vacina do Governo Federal.</h2>

                <Link to="/create-point">
                    <span>
                        <FiLogIn />
                    </span>
                    <strong> Cadastrar Novo Posto de Saúde</strong>
                </Link>
            </main>          
           </div>
       </div>
    )
}

export default Home;