import { PokemonSimplifiedDto } from "./pokemon.dto.type";
import {
  GetPokemonUseCaseResponse,
  GetPokemonsUseCaseResponse,
} from "./useCase.type";

export type PokemonDetailViewModelProps = {
  getPokemonUseCase: GetPokemonUseCaseResponse;
};

export type PokemonDetailViewModelResponse = {
  name?: string;
  imageUrl?: string;
  abilities?: string[];
  error: string;
  getPokemon: (name: string) => Promise<void>;
};

export type PokemonListViewModelProps = {
  getPokemonsUseCase: GetPokemonsUseCaseResponse;
};

export type PokemonListViewModelResponse = {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: PokemonSimplifiedDto[];
  error: string;
  getPokemons: (page: number) => Promise<void>;
};
