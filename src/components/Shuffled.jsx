import React from "react";
import { star, gift } from "../utils/Icons";

export default function Shuffled({ setCurrFlow }) {
  return (
    <div
      id="shuffled-screen"
      className="h-full m-auto w-full sm:w-4/5 md:w-3/5 lg:w-1/2 flex items-center justify-center screen hidden!"
    >
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        <div
          id="shuffled-icons"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-amber-300 mb-4 sm:mb-5"
        >
          {star}
          {gift}
          {star}
        </div>
        <p className="font-christmas text-center text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 sm:mb-6 font-bold">
          Amigo secreto sorteado!
        </p>
        <p className="text-center text-white text-sm sm:text-base md:text-lg mb-6 sm:mb-10 max-w-[80%]">
          A lista de amigos secretos foi gerada. Agora, cada amigo poderá
          descobrir seu amigo secretamente.
        </p>
        <button
          className="bg-red-700 text-white font-bold w-[80%] rounded-full px-6 py-3 sm:px-8 sm:py-4 shadow-[0px_0px_3px_#000000] text-sm sm:text-base"
          onClick={() => setCurrFlow("revelation-screen")}
        >
          Iniciar revelação
        </button>
      </div>
    </div>
  );
}
