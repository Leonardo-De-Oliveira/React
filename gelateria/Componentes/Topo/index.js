import React from "react";
import { Link } from 'react-router-dom';

import "./style.css"
 
function Topo () {
    return(
        <header>
            <div className="topo">
                <img src="assets/logo.png" alt="logomarca" />
                <nav>
                    <Link className="link" to='/'>Home</Link>
                    <Link className="link" to='/sabores'>Sabores</Link>
                    <Link className="link" to='/sobre'>Sobre</Link>
                </nav>
            </div>
        </header>
    );
}

export default Topo;