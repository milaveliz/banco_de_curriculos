import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './pages/Form/index';
import Home from './pages/Home/index';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route component={Home} path='/' exact/>
                <Route component={Form} path='/form'/>
            </Switch>
        </Router>
    )
} 