import React from "react";
import { snowFlake, refresh } from "../utils/Icons";

export default function End({ setCurrFlow, handleReset }) {
  return (
    <div
      id="end-screen"
      className="h-full mx-auto w-full max-w-3xl flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-8 screen hidden!"
    >
      <p className="text-3xl sm:text-4xl md:text-5xl text-center font-christmas text-shadow-2xl shadow-white mt-6 sm:mt-10 mb-6 sm:mb-8 font-bold">
        <span className="text-amber-400 inline-block mr-2">{snowFlake}</span>
        Amigos revelados!
        <span className="text-amber-400 inline-block ml-2">{snowFlake}</span>
      </p>

      <div className="flex flex-col gap-4 sm:gap-5 w-full sm:w-[80%] justify-center items-center bg-red-900 border border-red-700 rounded-2xl px-4 sm:px-6 py-6">
        <p className="text-lg sm:text-xl text-center text-white">
          A magia está completa! Agora é hora de trocar os presentes e ter um
          ótimo natal!
        </p>

        <button
          type="button"
          className="cursor-pointer w-full sm:w-[80%] rounded-lg px-6 py-3 sm:py-4 bg-green-950 text-white"
          onClick={() => {
            setCurrFlow("listing-screen");
            handleReset();
          }}
        >
          {refresh} Sortear denovo
        </button>

        <p className="text-lg sm:text-xl text-center text-white">
          Boas festas!
        </p>
      </div>
    </div>
  );
}
