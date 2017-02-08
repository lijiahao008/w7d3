import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestPoke } from '../../actions/pokemon_actions';

const mapStateToProps = state => {
  // debugger
  return ({
  poke: state.pokeDetail
})};


const mapDispatchToProps = dispatch => ({
  requestPoke: (id) => dispatch(requestPoke(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
