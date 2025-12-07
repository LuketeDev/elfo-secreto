import React from "react";
import { snowFlake, refresh } from "../utils/Icons";

export default function End({ setCurrFlow, handleReset }) {
  return (
    <div
      id="end-screen"
      className="h-full m-auto w-[50%] flex flex-col items-center screen hidden!"
    >
      <p className="text-5xl text-center font-christmas text-shadow-2xl shadow-white mt-20 mb-30 font-bold">
        <span className="text-amber-400">{snowFlake}</span>Amigos revelados!
        <span className="text-amber-400">{snowFlake}</span>
      </p>
      <div className="flex flex-col gap-5 w-[80%] justify-center items-center bg-red-900 border  border-red-700 rounded-2xl px-6 py-4">
        <p className="text-2xl text-center text-white ">
          A magia está completa! Agora é hora de trocar os presentes e ter um
          ótimo natal!
        </p>
        <button
          className="cursor-pointer w-[80%] rounded-lg px-6 py-4 bg-green-950"
          onClick={() => {
            setCurrFlow("listing-screen");
            handleReset();
          }}
        >
          {refresh} Sortear denovo
        </button>
        <p className="text-2xl text-center text-white ">Boas festas!</p>
      </div>
    </div>
  );
}
