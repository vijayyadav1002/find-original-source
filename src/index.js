import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App, Header, ManageSourceCode} from './connect';
import {About} from './components';
import registerServiceWorker from './registerServiceWorker';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

const AppRouter = () => (
    <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/about' component={About}/>
        <Route path='/manage' component={ManageSourceCode}/>
    </Switch>
);

const MainContainer = () => (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Header/>
                <AppRouter/>
            </div>
        </BrowserRouter>
    </Provider>
);


ReactDOM.render(<MainContainer />, document.getElementById('root'));
registerServiceWorker();
