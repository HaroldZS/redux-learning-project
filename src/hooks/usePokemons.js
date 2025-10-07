import { useDispatch, useSelector } from 'react-redux';
import { setPokemons } from '../actions';

export const usePokemons = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  const handleSetPokemons = (pokemonsData) => {
    dispatch(setPokemons(pokemonsData));
  };

  return {
    pokemons,
    setPokemons: handleSetPokemons,
  };
};
