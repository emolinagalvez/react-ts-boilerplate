import {
  PokemonRepositoryProps,
  PokemonRepositoryResponse,
} from "../../types/repository.type";
import { pokemonDtoToPokemon } from "../../utils/pokemon.mapper";

const PokemonRepository = ({
  PokemonDataSource,
}: PokemonRepositoryProps): PokemonRepositoryResponse => ({
  async getPokemons(offset?: number) {
    const { result, error } = await PokemonDataSource.getAll(offset);

    return { result, error };
  },
  async getPokemon(name: string) {
    const { result, error } = await PokemonDataSource.getOne(name);

    return { result: pokemonDtoToPokemon(result), error };
  },
});

export { PokemonRepository };
