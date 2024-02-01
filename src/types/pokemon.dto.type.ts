export type PokemonSimplifiedDto = {
  name: string;
  url: string;
};

type PokemonAbilityDto = {
  ability: {
    name: string;
  };
};

export type PokemonDto = {
  name: string;
  abilities: PokemonAbilityDto[];
  sprites: {
    other: {
      home: {
        front_default: string;
      };
    };
  };
};
