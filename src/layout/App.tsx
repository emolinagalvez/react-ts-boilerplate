import React from "react";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="h-full flex flex-col">
      <header className="flex justify-center bg-blue-200">
        <h1 className="p-4 font-bold text-2xl">React project</h1>
      </header>
      <main className="p-4 grow flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
