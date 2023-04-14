import React from "react";
import './style.css';

export default function Card(props) {
    return(
        <div id="card" className={props.TemaEscuro ? 'card-modo-escuro' : 'card-modo-claro'}>
            <p>{props.data}</p>
            <h4>{props.titulo}</h4>
            <p>{props.empresa}</p>    
            <p>{props.paragrafo}</p>    
        </div>
    );
}