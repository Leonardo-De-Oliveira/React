import React from "react";
import './style.css';

import Logo from '../../assets/logo.png';
import Facebook from '../../assets/facebook.png';
import Twitter from '../../assets/twitter.png';
import Linkedin from '../../assets/linkedin.png';
import Dribble from '../../assets/dribble.png';
import Behance from '../../assets/behance.png';
import GooglePlus from '../../assets/google-plus.png';


export default function Rodape(props) {
    return(
        <footer id="rodape" className={props.TemaEscuro ? 'rodape-escuro' : 'rodape-claro'}>
            <img src={Logo} alt='Logo' />
            <p>Ajudamos a criar uma personalidade digital construindo sua<br /> 
                marca no ambiente online utilizando estratégias, ferramentas <br />
                e tecnologias personalizadas.
            </p>
            <div className="box-footer">

                <img src={Facebook} alt='logo Facebook' />
                <img src={Twitter} alt='logo Twitter' />
                <img src={Linkedin} alt='logo Linkedin' />
                <img src={Dribble} alt='logo Dribble' />
                <img src={Behance} alt='logo Behance' />
                <img src={GooglePlus} alt='logo GooglePlus' />
                
            </div>
            <p>Copyright 2022 © <span>Leonardo de Oliveira</span></p>
        </footer>
    );
}