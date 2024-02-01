import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./presentations/layouts/Main";
import PokemonList from "./presentations/views/pokemon/list/PokemonList";
import PokemonDetails from "./presentations/views/pokemon/details/PokemonDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<PokemonList />} />
        <Route path=":nameParam" element={<PokemonDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
