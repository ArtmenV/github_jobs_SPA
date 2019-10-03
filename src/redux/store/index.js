import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index.js";

//Store файл. Тут подключил redux-thunk и REDUX-DEVTOOLS чтобы наблюдать что творится в сторе.

const composeEnhancers =
  typeof window !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose; // eslint-disable-line

const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(rootReducer, enhancer);

window.store = store;

export default store;
