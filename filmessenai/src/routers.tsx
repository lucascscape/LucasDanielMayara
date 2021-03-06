import { format } from 'path';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Cadastro from './pages/cadastro';
import Home from './pages/home';
import Login from './pages/login/index';
import Filmes from './pages/filmes/index';
import Generos from './pages/generos/index';
import ListaFilmes from './pages/Lista-filmes/index';



function Routers() {
    return(
        <BrowserRouter>
            <Route  path="/"  exact component={Home}/>
            <Route  path="/login" component={Login}/>
            <Route  path="/cadastro" component={Cadastro}/>
            <Route  path="/filmes" component={Filmes}/>
            <Route  path="/generos" component={Generos}/>
            <Route  path="/Lista-filmes" component={ListaFilmes}/>

        </BrowserRouter>
    );
}

export default Routers;