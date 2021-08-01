import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware } from 'redux';
import {counterReducer} from "./reducer";
import counterEpic from "./epic";

const epicMiddleware = createEpicMiddleware();

const store = createStore(
    counterReducer,
    applyMiddleware(epicMiddleware),
);

epicMiddleware.run(counterEpic);

export default store;

