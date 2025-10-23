import PokemonCard from "./PokemonCard";
import "./PokemonList.css";

const PokemonList = ({ pokemons = Array(10).fill("") }) => {
  console.log(pokemons);

  return (
    <div className="PokemonList">
      {pokemons.map((pokemon, index) => {
        return <PokemonCard name={pokemon.name} url={pokemon.url} key={index} />;
      })}
    </div>
  );
};

export default PokemonList;
