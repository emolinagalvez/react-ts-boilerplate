import { PokemonDto } from "../types/pokemon.dto.type";
import { Pokemon } from "../types/pokemon.type";

export const pokemonDtoToPokemon = (
  pokemon: PokemonDto | null
): Pokemon | null => {
  if (pokemon === null) {
    return pokemon;
  }

  return {
    name: pokemon.name,
    imageUrl: pokemon.sprites.other.home.front_default,
    abilities: pokemon.abilities.map((ability) => ability.ability.name),
  };
};
