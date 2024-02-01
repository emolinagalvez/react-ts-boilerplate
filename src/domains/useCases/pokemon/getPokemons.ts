import {
  GetPokemonsUseCaseProps,
  GetPokemonsUseCaseResponse,
} from "../../../types/useCase.type";

const getPokemonsUseCase = ({
  PokemonRepository,
}: GetPokemonsUseCaseProps): GetPokemonsUseCaseResponse => ({
  async execute(offset?: number) {
    const { result, error } = await PokemonRepository.getPokemons(offset);
    return { result, error };
  },
});

export { getPokemonsUseCase };
