import React from 'react';
import { Link } from 'react-router';

const PokemonIndexItem = ({ poke }) => {
  return(
    <li>
      <Link to={`api/pokemon/${poke.id}`}>
      {poke.name}
      <img src={poke.image_url}/>
      </Link>
    </li>
  );
}

export default PokemonIndexItem;
