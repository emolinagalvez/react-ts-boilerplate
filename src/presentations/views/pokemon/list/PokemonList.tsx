import React, { useState } from "react";
import { useEffect } from "react";
import DI from "../../../../DI/ioc";
import { PokemonListViewModelResponse } from "src/types/viewModel.type";
import { capitalizeFirstLetter } from "src/utils/string.helper";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";

const PokemonList = () => {
  const { next, previous, results, getPokemons }: PokemonListViewModelResponse =
    DI.resolve("PokemonListViewModel");

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    getPokemons(offset);
  }, [offset]);

  const getNumberFromUrl = (url: string) => url.split("/").slice(-2);

  const handleNextPage = () => {
    setOffset((oldOffset) => oldOffset + 20);
  };

  const handlePreviousPage = () => {
    setOffset((oldOffset) => oldOffset - 20);
  };

  return (
    <>
      <h2 className="text-2xl mb-2">List of pokemon</h2>
      {results && (
        <div className="grid grid-cols-4 gap-4 w-full">
          {results.map(({ name, url }) => (
            <div
              key={name}
              className="flex justify-between bg-white shadow rounded p-2"
            >
              <span className="leading-tight">
                {getNumberFromUrl(url)} - {capitalizeFirstLetter(name)}
              </span>
              <Link
                to={name}
                className="bg-blue-500 hover:shadow hover:bg-blue-300 px-1 rounded text-white float-right"
              >
                + info
              </Link>
            </div>
          ))}
        </div>
      )}
      <div className="mt-4 w-full text-white">
        <Button
          onClick={handlePreviousPage}
          disabled={!previous}
          className="float-left"
        >
          Previous
        </Button>
        <Button
          onClick={handleNextPage}
          disabled={!next}
          className="float-right"
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default PokemonList;
