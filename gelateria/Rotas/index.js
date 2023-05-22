import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../Componentes/Paginas/Home'; 
import Sabores from '../Componentes/Paginas/Sabores'; 
import Sobre from '../Componentes/Paginas/Sobre'; 

function Rotas () {
    return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sabores' element={<Sabores />} />
            <Route path='/sobre' element={<Sobre />} />
        </Routes>
    </BrowserRouter>
    )
}

export default Rotas;