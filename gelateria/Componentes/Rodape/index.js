import React from "react";
import "./style.css"

function Rodape () {
    return (
        <footer>
            <div className="box-rodape">
                <img src="assets/logo.png" />
                <div className="box">
                    <h3>Endereço</h3>
                    <p>Av Bernardino de Campos, 98</p>
                    <p>São Paulo SP 12345-678</p>
                </div>
                <div className="box">
                    <h3>Contato</h3>
                    <p>info@email.com</p>
                    <p>Tel: (19)3333-3333</p>
                </div>
                <div className="box">
                    <h3>Horários</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00-22:00</p>
                </div>
            </div>
            <div className="autoral">
                <p>Gelateria. Orgulhosamente desenvolvido por Leonardo de Oliveira</p>
            </div>
        </footer>
    );
} 
export default Rodape;