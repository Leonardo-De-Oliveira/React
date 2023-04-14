import React from "react";
import './style.css';


export default function Banner(props) {


    return(
        <div className="container-banner">
            <div id='banner' className={props.TemaEscuro ? 'banner-escuro' : 'banner-claro'}>
                
            </div>
            <div className="box-banner">
                <div className="box-texto">
                    <p>branding / ui / ux / tecnologia</p>
                    <h2>Agência de Branding</h2>
                    <span>e design digital</span>
                </div>
            </div>
        </div>
    );
}
