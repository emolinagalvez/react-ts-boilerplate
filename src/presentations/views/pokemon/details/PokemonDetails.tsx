import React, { useEffect } from "react";
import DI from "../../../../DI/ioc";
import { Link, useParams } from "react-router-dom";
import { PokemonDetailViewModelResponse } from "src/types/viewModel.type";
import { capitalizeFirstLetter } from "src/utils/string.helper";

const PokemonDetails = () => {
  const { nameParam } = useParams();

  const {
    name,
    imageUrl,
    abilities,
    getPokemon,
  }: PokemonDetailViewModelResponse = DI.resolve("PokemonDetailViewModel");
  useEffect(() => {
    getPokemon(nameParam!);
  }, []);

  return (
    <div className="w-96 flex flex-col gap-y-2">
      <div className="flex gap-y-4 p-2 bg-white rounded">
        <div className="flex flex-col justify-between">
          <h2 className="text-2xl mb-2">{capitalizeFirstLetter(name || "")}</h2>
          <div>
            <span className="text-lg font-semibold">Abilities</span>
            <ul>
              {abilities &&
                abilities.map((ability) => (
                  <li key={ability}>{capitalizeFirstLetter(ability)}</li>
                ))}
            </ul>
          </div>
        </div>
        <img src={imageUrl} alt={name} className="w-64" />
      </div>
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-300 shadow rounded p-2 text-white"
      >
        Back
      </Link>
    </div>
  );
};

export default PokemonDetails;
