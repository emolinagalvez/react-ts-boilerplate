import { ApiResponse } from "./api.type";
import { DataSourceResponse } from "./dataSource.type";
import { PokemonDto, PokemonSimplifiedDto } from "./pokemon.dto.type";
import { Pokemon } from "./pokemon.type";

export type RepositoryError = {
  message: string;
};

export type PokemonRepositoryResponse = {
  getPokemons(
    offset?: number
  ): Promise<DataSourceResponse<ApiResponse<PokemonSimplifiedDto[]>>>;
  getPokemon(name: string): Promise<DataSourceResponse<Pokemon>>;
};

export interface PokemonRepositoryProps {
  PokemonDataSource: {
    getOne: (name: string) => Promise<DataSourceResponse<PokemonDto>>;
    getAll: (
      offset?: number
    ) => Promise<DataSourceResponse<ApiResponse<PokemonSimplifiedDto[]>>>;
  };
}
