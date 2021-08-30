import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './pages/Form/index';
import Home from './pages/Home/index';
import Cep from './services/cep.tsx'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route component={Home} path='/' exact/>
                <Route component={Form} path='/form'/>
                <Route component={Cep} path='/cep'/>
            </Switch>
        </Router>
    )
} 