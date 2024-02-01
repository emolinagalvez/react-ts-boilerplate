import "regenerator-runtime/runtime";
import { getPokemonsUseCase as GetPokemonsUseCase } from "../../../../src/domains/useCases/pokemon/getPokemons";

const mockPokemonRepository = {
  getPokemons: jest.fn(),
};

describe("GetPokemonsUseCase", () => {
  let getPokemonsUseCase;

  beforeEach(() => {
    getPokemonsUseCase = GetPokemonsUseCase({
      PokemonRepository: mockPokemonRepository,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return expected result", async () => {
    const offset = 20;

    mockPokemonRepository.getPokemons.mockResolvedValue({
      result: { count: 0, next: "", previous: "", results: [] },
      error: null,
    });

    // Act
    const { result, error } = await getPokemonsUseCase.execute(offset);

    // Assert
    expect(mockPokemonRepository.getPokemons).toHaveBeenCalledWith(offset);
    expect(result).toEqual({ count: 0, next: "", previous: "", results: [] });
  });
});
