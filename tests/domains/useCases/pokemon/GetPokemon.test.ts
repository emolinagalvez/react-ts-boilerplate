import "regenerator-runtime/runtime";
import { getPokemonUseCase as GetPokemonUseCase } from "../../../../src/domains/useCases/pokemon/getPokemon";

const mockPokemonRepository = {
  getPokemon: jest.fn(),
};

describe("GetPokemonUseCase", () => {
  let getPokemonUseCase;

  beforeEach(() => {
    getPokemonUseCase = GetPokemonUseCase({
      PokemonRepository: mockPokemonRepository,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return expected result", async () => {
    const pokemonName = "pikachu";

    mockPokemonRepository.getPokemon.mockResolvedValue({
      result: { name: "pikachu" },
      error: null,
    });

    const { result, error } = await getPokemonUseCase.execute(pokemonName);

    expect(mockPokemonRepository.getPokemon).toHaveBeenCalledWith(pokemonName);
    expect(result).toEqual({ name: "pikachu" });
  });
});
