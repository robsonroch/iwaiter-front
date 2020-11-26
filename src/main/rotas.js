﻿import React from 'react';

import Login from '../views/login';
import CadastroUsuario from '../views/cadastroUsuario';
import Dragg from '../views/draggable';
import Home from '../views/home';

import { Route, Switch, HashRouter} from 'react-router-dom';

function Rotas(){
    return (
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/cadastro-usuarios" component={CadastroUsuario}/>
                <Route path='/dragg' component={Dragg}/>
            </Switch>
        </HashRouter>
    )
}

export default Rotas;