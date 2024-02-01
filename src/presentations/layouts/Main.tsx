import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="h-full flex flex-col">
      <header className="flex justify-center bg-blue-200">
        <h1 className="p-4 font-bold text-2xl">PokeAPI App</h1>
      </header>
      <main className="p-4 flex-1 flex flex-col justify-center items-center bg-slate-200">
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
