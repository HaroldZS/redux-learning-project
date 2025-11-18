import PokemonCard from "./PokemonCard";
import "./PokemonList.css";

const PokemonList = ({ pokemons }) => {
  console.log("HEREEE");
  console.log(pokemons);
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon, index) => {
        return (
          <PokemonCard
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            key={index}
            types={pokemon.types}
            id={pokemon.id}
            favorite={pokemon.favorite}
          />
        );
      })}
    </div>
  );
};

export default PokemonList;
