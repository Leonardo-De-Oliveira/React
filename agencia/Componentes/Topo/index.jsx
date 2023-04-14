import Logo from '../../assets/logo.png';
import Lua from '../../assets/moon.png';
import Sol from '../../assets/sun.png';
import React from 'react';
import './style.css';

export default function Topo(props) {
    return(
        <header className={props.TemaEscuro ? 'topo-modo-escuro' : 'topo-modo-claro'}>
            <img className='logo' src={Logo} alt='Logo'/>
            <button onClick={props.alterarTema} className={props.TemaEscuro ? 'botao-modo-escuro' : 'botao-modo-claro'}>
                <img className='img-botao' src={props.TemaEscuro ? Sol : Lua} alt='icone botao' />
            </button>
        </header>
    );
}

