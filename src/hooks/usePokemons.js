import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchPokemonsWithDetails } from "../slices/dataSlice";
import { useEffect } from "react";

export const usePokemons = () => {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  const fetchPokemons = async () => {
    dispatch(fetchPokemonsWithDetails());
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
