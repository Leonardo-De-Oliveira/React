import React from "react";
import Card from '../Card';
import './style.css';

export default function Conteudo(props) {
    return(
        <div className={props.TemaEscuro ? 'conteudo-modo-escuro' : 'conteudo-modo-claro'}>
            <h2>Experiências De Trabalho</h2>
            <p>Há mais de 10 anos no mercado de Branding, Design Gráfico, Criação
                de Sites e Marketing<br /> Digital, nos empenhamnos diariamente para 
                entregar resultados que tragam impacto aos<br /> nossos clientes.
            </p>
            <div className="box-card">
                <Card 
                    data="Junho 2012 - 2016"
                    titulo="Web Designer"
                    empresa="Pied Piper StartUp."
                    paragrafo="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores" />
                <Card 
                    data="Agosto 2016 - 2019"
                    titulo="Product Designer"
                    empresa="E Corp."
                    paragrafo="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra" />
                <Card 
                    data="Fevereiro 2019 - 2021"
                    titulo="Digital Consulting"
                    empresa="Arasaka Inc."
                    paragrafo="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução" />    
            </div>
        </div>
    );
}
