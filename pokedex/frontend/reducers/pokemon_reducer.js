import { RECEIVE_ALL_POKEMON, RECEIVE_POKE } from '../actions/pokemon_actions';

export const pokemonReducer = (oldState = {}, action) => {
  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;

    default:
      return oldState;
  }
};

export const pokeDetailReducer = (oldState = {}, action) => {
  switch(action.type){
    case RECEIVE_POKE:
      return action.poke;
    default:
      return oldState;
  }
};
