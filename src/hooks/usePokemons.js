import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsWithDetails } from '../actions';

export const usePokemons = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  const handleSetPokemons = (pokemonsData) => {
    dispatch(getPokemonsWithDetails(pokemonsData));
  };

  return {
    pokemons,
    setPokemons: handleSetPokemons,
  };
};
