import React from 'react';

export default class PokemonDetail extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.requestPoke(this.props.params.id);
  }

  componentWillReceiveProps(newProps){
    this.props.requestPoke(newProps.params.id);
  }

  render(){

    return (
      <div className="detail">
        <h2>Name: {this.props.poke.name}</h2>
        <img src={this.props.poke.image_url} />
        <h2>Attack: {this.props.poke.attack}</h2>
        <h2>Defense: {this.props.poke.defense}</h2>
        <h2>Type: {this.props.poke.poke_type}</h2>

      </div>
    );
  }
}
