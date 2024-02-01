import { createContainer, asFunction, asValue } from "awilix";
import { PokemonRepository } from "../data/repositories/pokemon.repository";
import { getPokemonUseCase } from "../domains/useCases/pokemon/getPokemon";
import { getPokemonsUseCase } from "../domains/useCases/pokemon/getPokemons";
import PokemonDetailViewModel from "../presentations/views/pokemon/details/ViewModel";
import PokemonListViewModel from "../presentations/views/pokemon/list/ViewModel";
import * as PokemonDataSource from "../data/dataSources/pokemon.dataSource";

const container = createContainer();

container.register({
  PokemonRepository: asFunction(PokemonRepository),
  PokemonDataSource: asValue(PokemonDataSource),
  getPokemonUseCase: asFunction(getPokemonUseCase),
  getPokemonsUseCase: asFunction(getPokemonsUseCase),
  PokemonDetailViewModel: asFunction(PokemonDetailViewModel),
  PokemonListViewModel: asFunction(PokemonListViewModel),
});

export default container;
