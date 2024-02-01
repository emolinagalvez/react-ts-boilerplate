import "regenerator-runtime/runtime";
import { act, renderHook } from "@testing-library/react";
import PokemonDetailViewModel from "../../../../../src/presentations/views/pokemon/details/ViewModel";

const mockGetPokemonUseCase = {
  execute: jest.fn(),
};

describe("PokemonDetailViewModel", () => {
  let vm;

  beforeAll(() => {
    vm = renderHook(() =>
      PokemonDetailViewModel({
        getPokemonUseCase: mockGetPokemonUseCase,
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should initialize with empty values and no error", () => {
    const { result } = vm;

    expect(result.current.error).toBe("");
    expect(result.current.name).toBe("");
    expect(result.current.imageUrl).toBe("");
  });

  describe("getPokemon", () => {
    it("should call getPokemonUseCase and update state values on getPokemon", async () => {
      const { result } = vm;

      const pokemonName = "venusaur";

      const expectedData = {
        result: {
          name: pokemonName,
        },
        error: null,
      };

      mockGetPokemonUseCase.execute.mockResolvedValue(expectedData);

      await act(async () => await result.current.getPokemon(pokemonName));

      expect(mockGetPokemonUseCase.execute).toHaveBeenCalledWith(pokemonName);
      expect(result.current.name).toBe(pokemonName);
      expect(result.current.error).toBe("");
    });
  });
});
