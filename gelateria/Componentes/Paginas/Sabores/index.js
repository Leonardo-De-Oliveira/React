import React from "react";
import './style.css';

import Rodape from "../../Rodape";
import Topo from "../../Topo";

function Sabores () {
    return(
        <div>
            <Topo />    

            <section className="banner-sabores">
                <h1>Nossos sabores</h1>
            </section>
            <section className="container-sabores">
                <div>
                    <h2>Sabores de sorvete</h2>
                </div>
                <div className="box-cards">
                        <div className="card-sabores">
                            <img src="assets/sabor-oreo.png" alt='Sorvete de Oreo' />
                            <div className="texto-card">
                                <h3>Sorvete de Oreo</h3>
                                <p>Delicioso sorvete sabor Oreo <br />
                                Uma explosão de sabor.
                                </p>
                            </div>    
                        </div>
                        <div className="card-sabores">
                            <img src="assets/sabor-pistache.png" alt="Sorvete de Pistache" />
                            <div className="texto-card">
                                <h3>Sorvete Pistache</h3>
                                <p>Cremoso sorvete sabor <br />
                                pistache com pedacinhos de <br />
                                semente.
                                </p>
                            </div>
                        </div>
                        <div className="card-sabores">
                            <img src="assets/sabor-cookies-avela.png" alt="Sorvete de Cookies e avela" />
                            <div className="texto-card">
                                <h3>Sorvete Cookies & Avelã</h3>
                                <p>O nosso melhor sorvete. Você <br />
                                vai adorar o sabor.
                                </p>
                            </div>    
                        </div>
                        <div className="card-sabores">
                            <img src="assets/sabor-kiwi.png" alt="Sorvete de Kiwi" />
                            <div className="texto-card">
                                <h3>Sorvete de Kiwi</h3>
                                <p>Delicioso e refrescante sorvete <br />
                                sabor kiwi. Rico em vitamina C.
                                </p>
                            </div>    
                        </div>
                        <div className="card-sabores">
                            <img src="assets/sabor-morango.png" alt="Sorvete de Morango" />
                            <div className="texto-card">
                                <h3>Sorvete de Morango</h3>
                                <p>Sorvete de morango gourmet <br />
                                Tradicional e saboroso.
                                </p>
                            </div>    
                        </div>
                        <div className="card-sabores">
                            <img src="assets/sorvete-limao.png" alt="Sorvete de Limão Siciliano" />
                            <div className="texto-card">
                                <h3>Sorvete de Limão Siciliano</h3>
                                <p>O incrivel sorvete de Limão gourmet de 
                                limão siciliano vai te encantar.
                                </p>
                            </div>    
                        </div>
                </div>        
            </section>
    
            <Rodape />
        </div>
    );
}

export default Sabores;