import React, { useState } from 'react';
import './App.css';

import Topo from './Componentes/Topo';
import Banner from './Componentes/Banner';
import Conteudo from './Componentes/Conteudo';
import Rodape from './Componentes/Rodape';

function App() {
  
  const [TemaEscuro, setTemaEscuro] = useState(false)

  const alterarTema = () => {
    setTemaEscuro(!TemaEscuro)
  }

  return (
    <div className="App">
      <Topo alterarTema={alterarTema} TemaEscuro={TemaEscuro} />
      <Banner TemaEscuro={TemaEscuro}/>
      <Conteudo TemaEscuro={TemaEscuro}/>
      <Rodape TemaEscuro={TemaEscuro}/>
    </div>
  );
}

export default App;
