import { uiReducer } from "./ui";
import { pokemonsReducer } from "./pokemons";
import { combineReducers } from "redux-immutable";

const rootReducer = combineReducers({
  data: pokemonsReducer,
  ui: uiReducer,
});

export default rootReducer;
