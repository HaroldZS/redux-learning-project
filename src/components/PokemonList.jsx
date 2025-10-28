import PokemonCard from "./PokemonCard";
import "./PokemonList.css";

const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon, index) => {
        return <PokemonCard name={pokemon.name} image={pokemon.sprites.front_default} key={index} />;
      })}
    </div>
  );
};

export default PokemonList;
