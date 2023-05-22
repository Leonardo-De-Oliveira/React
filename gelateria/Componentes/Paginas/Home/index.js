import React from "react";
import "./style.css"

import Topo from '../../Topo';
import Rodape from '../../Rodape';

function Home() {
    return (
        <main>
            
            <Topo />

            <section className="banner">
                <div className="box-banner">
                    <h1>Sorvete artesanal</h1>
                </div>
            </section>
            <section className="container">
                <div className="box-imagem">
                    <img src='assets/sabores.jpg' />
                </div>
                <div className="box-conteudo">
                    <h2>Nossos sabores</h2>
                    <h5>Novos e deliciosos!</h5><br />
                    <p>Sorvete bom é aquele feito com os melhores ingredientes!<br />
                    Aqui na gelateria todos os nossos produtos são naturais, à <br />
                    base de frutas e sem nenhum conservante! Também temos <br />
                    opções sem lactose e sem açúcar. Venha conhecer e <br />
                    Perceber que tem como o sorvete ser delicioso e saudável ao <br />
                    mesto tempo!
                    </p>
                </div>
            </section>
            <section className="container">
                <div className="box-conteudo altera1">
                    <h2>Nossos eventos</h2>
                    <h5>Delicias com sorvete!</h5><br />
                    <p>Mais do que uma sorveteria, uma extensão da sua <br />
                    casa! Estamos aqui prontinhos para te atender e <br />
                    oferecer os melhores eventos com os melhores <br />
                    sorvetes da sua vida! Venha nos conhecer e passar<br /> 
                    um tempo aqui com a gente.
                    </p>
                </div>
                <div className="box-imagem altera2">
                    <img src="assets/eventos-image.jpg" />
                </div>
            </section>
            <section className="container">
                <div className="box-imagem">
                    <img src="assets/sobre-image.jpg" />
                </div>
                <div className="box-conteudo">
                    <h2>Sobre nós</h2>
                    <h5>Alegria em cada casquinha!</h5><br />
                    <p>Venha tomar o melhor sorvete da região aqui com a <br />
                    gente! Nós estamos há anos no mercado produzindo <br />
                    o que tem de melhor para os nossos clientes e você não <br />
                    pode ficar fora dessa. Venha nos fazer uma visita e <br />
                    aproveite o melhor atendimento e o melhor sorvete <br />
                    da cidade.
                    </p>
                </div>
            </section>

            <Rodape />

        </main>
    );
}

export default Home;
