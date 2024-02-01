import { ApiResponse } from "./api.type";
import { PokemonSimplifiedDto } from "./pokemon.dto.type";
import { Pokemon } from "./pokemon.type";
import { PokemonRepositoryResponse, RepositoryError } from "./repository.type";

export type GetPokemonUseCaseProps = {
  PokemonRepository: Pick<PokemonRepositoryResponse, "getPokemon">;
};

export type GetPokemonUseCaseResponse = {
  execute: (name: string) => Promise<{
    result: Pokemon | null;
    error: RepositoryError | null;
  }>;
};

export type GetPokemonsUseCaseProps = {
  PokemonRepository: Pick<PokemonRepositoryResponse, "getPokemons">;
};

export type GetPokemonsUseCaseResponse = {
  execute: (offset?: number) => Promise<{
    result: ApiResponse<PokemonSimplifiedDto[]> | null;
    error: RepositoryError | null;
  }>;
};
