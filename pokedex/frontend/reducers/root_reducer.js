import { combineReducers } from 'redux';
import {pokemonReducer, pokeDetailReducer} from './pokemon_reducer';


const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  pokeDetail: pokeDetailReducer
});
export default rootReducer;
