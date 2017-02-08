export const selectAllPokemon = (state) => {
  return Object.keys(state.pokemon).map(id => state.pokemon[id]);
};
