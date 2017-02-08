import { connect } from 'react-redux';
import ItemDetail from './item_detail';
import { requestPoke } from '../../actions/pokemon_actions';

const mapStateToProps = (state, ownProps) => ({
  poke: state.pokeDetail
});


const mapDispatchToProps = dispatch => ({
  requestPoke: (id) => dispatch(requestPoke(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
