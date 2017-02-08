export const selectAllPokemon = (state) => {
  return Object.keys(state.pokemon).map(id => state.pokemon[id]);
};

export const requestSinglePokemon = (state) => {
  return Object.keys(state.pokemon).map(id => state.pokemon[id]);
};
