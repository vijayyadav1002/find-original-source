import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {About, Header} from './components';
import registerServiceWorker from './registerServiceWorker';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

const AppRouter = () => (
    <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/about' component={About}/>
    </Switch>
);

const MainContainer = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <AppRouter/>
        </div>
    </BrowserRouter>
);


ReactDOM.render(<MainContainer />, document.getElementById('root'));
registerServiceWorker();
