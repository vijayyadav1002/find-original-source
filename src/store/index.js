import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();

const middleware = (process.env.NODE_ENV !== 'production') ? applyMiddleware(
    thunkMiddleware, loggerMiddleware) : applyMiddleware(thunkMiddleware);

const store = createStore(
    rootReducer,
    middleware
);

export default store;