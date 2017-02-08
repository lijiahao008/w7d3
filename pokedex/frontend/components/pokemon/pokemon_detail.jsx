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
      <div>
        <h1>{this.props.poke.name}</h1>
        <img src={this.props.poke.image_url} />
        <h2>{this.props.poke.attack}</h2>
        <h2>{this.props.poke.defense}</h2>
        <h2>{this.props.poke.poke_type}</h2>
  
      </div>
    );
  }
}
