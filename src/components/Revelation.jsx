import React from "react";
import ElfCard from "./ElfCard";
import { gift, arrowRight } from "../utils/Icons";

export default function Revelation({
  elves,
  shuffledPairs,
  currElfIdx,
  isElfOpen,
  setCurrElfIdx,
  setElfOpen,
  setCurrFlow,
}) {
  return (
    <div
      id="revelation-screen"
      className="h-full mx-auto w-full px-4 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 flex flex-col items-center justify-center screen hidden!"
    >
      <p className="font-christmas text-center text-red-600 text-5xl sm:text-6xl md:text-7xl mb-2 font-bold">
        Vez de:
      </p>
      <p className="font-christmas text-center text-green-500  md:text-7xl mb-6 max-w-full truncate">
        {elves[currElfIdx]}
      </p>

      <div className="w-full flex flex-col sm:flex-row gap-3 items-center justify-center mb-6">
        <button
          className="w-full sm:w-auto bg-red-700 text-white font-bold rounded-full px-6 py-3 sm:px-6 sm:py-4 shadow-[0px_0px_3px_#000]"
          onClick={() => {
            setElfOpen(true);
          }}
        >
          {gift} Ver meu amigo secreto
        </button>

        <button
          className="w-full sm:w-auto bg-gray-100/20 border border-gray-300 text-white rounded-full px-6 py-3 sm:px-6 sm:py-4"
          onClick={() => {
            currElfIdx < elves.length - 1
              ? setCurrElfIdx((currElfIdx) => currElfIdx + 1)
              : setCurrFlow("end-screen");
          }}
        >
          {currElfIdx < elves.length - 1 ? (
            <span className="flex items-center justify-center gap-2">
              <span>Próximo amigo</span>
              <span>{arrowRight}</span>
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              Finalizar
            </span>
          )}
        </button>
      </div>

      <ElfCard
        open={isElfOpen}
        close={() => {
          setElfOpen(false);
          console.log(shuffledPairs);
        }}
        elfFriend={shuffledPairs[elves[currElfIdx]]}
      />
    </div>
  );
}
