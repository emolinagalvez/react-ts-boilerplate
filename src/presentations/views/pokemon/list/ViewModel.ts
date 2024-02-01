import { useState } from "react";
import { PokemonSimplifiedDto } from "../../../../types/pokemon.dto.type";
import { ApiResponse } from "../../../../types/api.type";
import {
  PokemonListViewModelProps,
  PokemonListViewModelResponse,
} from "../../../../types/viewModel.type";

export type PokemonListStateProps = Partial<
  ApiResponse<PokemonSimplifiedDto[]>
> | null;

const PokemonListViewModel = ({
  getPokemonsUseCase,
}: PokemonListViewModelProps): PokemonListViewModelResponse => {
  const [error, setError] = useState("");

  const [pokemonList, setPokemonList] = useState<PokemonListStateProps | null>({
    count: 0,
    next: "",
    previous: "",
    results: [],
  });

  const getPokemons = async (offset?: number) => {
    const { result, error } = await getPokemonsUseCase.execute(offset);
    setError((error && error.message) || "");
    setPokemonList({ ...result });
  };

  return {
    error,
    getPokemons,
    ...pokemonList,
  };
};

export default PokemonListViewModel;
