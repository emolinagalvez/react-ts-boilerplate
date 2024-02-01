import {
  GetPokemonUseCaseProps,
  GetPokemonUseCaseResponse,
} from "../../../types/useCase.type";

const getPokemonUseCase = ({
  PokemonRepository,
}: GetPokemonUseCaseProps): GetPokemonUseCaseResponse => ({
  async execute(name: string) {
    const { result, error } = await PokemonRepository.getPokemon(name);
    return { result, error };
  },
});

export { getPokemonUseCase };
