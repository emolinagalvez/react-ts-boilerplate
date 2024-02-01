import { useState } from "react";
import {
  PokemonDetailViewModelProps,
  PokemonDetailViewModelResponse,
} from "../../../../types/viewModel.type";

export interface PokemonStateProps {
  name?: string;
  imageUrl?: string;
  abilities?: string[];
}

const PokemonDetailViewModel = ({
  getPokemonUseCase,
}: PokemonDetailViewModelProps): PokemonDetailViewModelResponse => {
  const [error, setError] = useState("");

  const [pokemon, setPokemon] = useState<PokemonStateProps | null>({
    name: "",
    imageUrl: "",
    abilities: [],
  });

  const getPokemon = async (name: string) => {
    const { result, error } = await getPokemonUseCase.execute(name);
    setError((error && error.message) || "");
    setPokemon({ ...result });
  };

  return {
    error,
    getPokemon,
    ...pokemon,
  };
};

export default PokemonDetailViewModel;
