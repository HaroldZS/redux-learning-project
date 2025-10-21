import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import { pokemonsReducer } from "./reducers/pokemons";
import { Provider } from "react-redux";
import { logger, capitalizing } from "./middlewares";

const root = ReactDOM.createRoot(document.getElementById("root"));

const composedEnhancers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(capitalizing, logger));

const store = createStore(
  pokemonsReducer,
  composedEnhancers
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
