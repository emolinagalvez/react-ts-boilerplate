import { ApiResponse } from "../../types/api.type";
import { DataSourceError } from "../../types/dataSource.type";
import { DataSourceResponse } from "../../types/dataSource.type";
import { PokemonDto, PokemonSimplifiedDto } from "../../types/pokemon.dto.type";

const apiUrl = "https://pokeapi.co/api/v2";

const getAll = async (
  offset?: number
): Promise<DataSourceResponse<ApiResponse<PokemonSimplifiedDto[]>>> => {
  try {
    const data = await fetch(
      `${apiUrl}/pokemon${offset ? `?offset=${offset}` : ""}`
    ).then((response) => response.json());

    return { error: null, result: data };
  } catch (err) {
    return { error: err as DataSourceError, result: null };
  }
};

const getOne = async (
  name: string
): Promise<DataSourceResponse<PokemonDto>> => {
  try {
    const data = await fetch(`${apiUrl}/pokemon/${name}`).then((response) =>
      response.json()
    );

    return { error: null, result: data };
  } catch (err) {
    return { error: err as DataSourceError, result: null };
  }
};

export { getAll, getOne };
