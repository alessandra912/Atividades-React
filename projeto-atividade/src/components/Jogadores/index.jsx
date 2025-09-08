// src\assets\components\NomeNumero\index.jsx

import React, { useState } from 'react';
import './styles.css';
import logo1 from '../../assets/images/logo1.png';

function Jogadores() {
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    
    const [listaJogadores, setListaJogadores] = useState([]);

    function adicionarJogador(event) {
        event.preventDefault();
        const novoJogador = { nome, numero };
        setListaJogadores([...listaJogadores, novoJogador]);
        setNome('');
        setNumero('');
    }

    return (
        <div className="jogadores">
            <img src={logo1} alt="Logo do Bahia" />
            <h1>Primeira Atividade</h1>
            <p>Nome e número dos jogadores</p>
            <form onSubmit={adicionarJogador}>
                <div>
                    <label>Nome:</label>
                    <input type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required />
                </div>
                <div>
                    <label>Número:</label>
                    <input type="number"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                    required />
                </div>
                <button type="submit">Adicionar Jogador</button>
            </form>

            <h2>Lista de Jogadores</h2>
            <ul>
                {listaJogadores.map((jogador, index) => (
                    <li key={index}>{jogador.nome} - {jogador.numero}</li>
                ))}
            </ul>
        </div>
    );
}

export default Jogadores;