import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getPokemonsWithDetails, setLoading } from "../actions";
import { getPokemon } from "../api";
import { useEffect } from "react";

export const usePokemons = () => {
  const pokemons = useSelector(
    (state) => state.getIn(["data", "pokemons"]),
    shallowEqual
  ).toJS();
  const loading = useSelector((state) => state.getIn(["ui", "loading"]));
  const dispatch = useDispatch();

  const fetchPokemons = async () => {
    dispatch(setLoading(true));
    const pokemonsRes = await getPokemon();
    dispatch(getPokemonsWithDetails(pokemonsRes));
    dispatch(setLoading(false));
  };

  useEffect(() => {
    fetchPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    pokemons,
    loading,
    fetchPokemons,
  };
};
