import React from "react";
import { star, gift } from "../utils/Icons";

export default function Shuffled({ setCurrFlow }) {
  return (
    <div
      id="shuffled-screen"
      className="h-full m-auto w-[50%] flex items-center justify-center screen hidden!"
    >
      <div className="flex flex-col items-center justify-center">
        <div id="shuffled-icons" className="text-5xl text-amber-300 mb-5">
          {star}
          {gift}
          {star}
        </div>
        <p className="font-christmas text-center text-white text-7xl mb-5 font-bold">
          Amigo secreto sorteado!
        </p>
        <p className="text-center text-white text-md mb-10">
          A lista de amigos secretos foi gerada. Agora, cada amigo poderá
          descobrir seu amigo secretamente.
        </p>
        <button
          className="bg-red-700 text-white font-bold rounded-full px-8 py-4 shadow-[0px_0px_3px_#000000]"
          onClick={() => setCurrFlow("revelation-screen")}
        >
          Iniciar revelação
        </button>
      </div>
    </div>
  );
}
