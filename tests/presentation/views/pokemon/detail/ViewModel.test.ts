import "regenerator-runtime/runtime";
import { act, renderHook } from "@testing-library/react";
import PokemonDetailViewModel from "../../../../../src/presentations/views/pokemon/details/ViewModel";

const mockgetPokemonUseCase = {
  execute: jest.fn(),
};

describe("PokemonDetailViewModel", () => {
  let vm;

  beforeAll(() => {
    vm = renderHook(() =>
      PokemonDetailViewModel({
        getPokemonUseCase: mockgetPokemonUseCase,
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
  });

  describe("getPokemon", () => {
    it("should call getPokemonUseCase and update state values on getPokemon", async () => {
      const { result } = vm;

      const pokemonName = "ditto";

      const expectedData = {
        name: "Ditto",
        order: 214,
      };

      mockgetPokemonUseCase.execute.mockResolvedValue({
        result: expectedData,
        error: null,
      });

      await act(async () => await result.current.getPokemon(pokemonName));

      expect(mockgetPokemonUseCase.execute).toHaveBeenCalledWith(pokemonName);
      expect(result.current.error).toBe("");
      expect(result.current.name).toBe(expectedData.name);
      expect(result.current.order).toBe(expectedData.order);
      expect(result.current.error).toBe("");
    });
  });
});
