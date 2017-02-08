import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon } from './util/api_util.js';
import { requestAllPokemon, receiveAllPokemon } from './actions/pokemon_actions.js';
import { configureStore } from './store/store';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root';
//
// window.fetchAllPokemon = fetchAllPokemon;
// window.receiveAllPokemon = receiveAllPokemon;
// window.requestAllPokemon = requestAllPokemon;
//
// window.selectAllPokemon = selectAllPokemon;


document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, rootEl);
  // window.store = store;
});
