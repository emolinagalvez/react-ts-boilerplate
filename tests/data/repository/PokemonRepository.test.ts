import { PokemonRepository } from "../../../src/data/repositories/pokemon.repository";
import "regenerator-runtime/runtime";

const mockPokemonDataSource = {
  getAll: jest.fn(),
  getOne: jest.fn(),
};

describe("PokemonRepository", () => {
  let PokemonRepository;

  beforeEach(() => {
    PokemonRepository = PokemonRepository({
      PokemonDataSource: mockPokemonDataSource,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getPokemons", () => {
    it("should get all pokemons and return the result", async () => {
      const expectedResult = { result: "some string", error: null };
      mockPokemonDataSource.getAll.mockResolvedValue(expectedResult);

      const result = await PokemonRepository.getPokemons();

      expect(mockPokemonDataSource.getAll).toHaveBeenCalled();
      expect(result).toEqual({ result: "some string", error: null });
    });

    it("should handle errors during get all and return the error", async () => {
      const expectedError = new Error("Failed to get the list of pokemons");
      const expectedResult = { result: null, error: expectedError };
      mockPokemonDataSource.getAll.mockResolvedValue(expectedResult);

      const result = await PokemonRepository.getPokemons();

      expect(mockPokemonDataSource).toHaveBeenCalled();
      expect(result).toEqual({ result: null, error: expectedError });
    });
  });

  describe("getPokemon", () => {
    it("should get a pokemon by the name and return the result", async () => {
      const name = "inventedName";

      const expectedResult = { result: "success", error: null };
      mockPokemonDataSource.getOne.mockResolvedValue(expectedResult);

      const result = await PokemonRepository.getPokemon(name);

      expect(mockPokemonDataSource).toHaveBeenCalledWith(name);
      expect(result).toEqual({ result: "success", error: null });
    });

    it("should handle errors during get one and return the error", async () => {
      const name = "inventedName";

      const expectedError = new Error("Failed to get the pokemon");
      const expectedResult = { result: null, error: expectedError };
      mockPokemonDataSource.getOne.mockResolvedValue(expectedResult);

      const result = await PokemonRepository.getPokemon(name);

      expect(mockPokemonDataSource).toHaveBeenCalledWith(name);
      expect(result).toEqual(expectedResult);
    });
  });
});
