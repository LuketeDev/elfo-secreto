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
  setCurrFlow
}) {
  return (
    <div
      id="revelation-screen"
      className="h-full m-auto w-[30%] flex flex-col items-center justify-center screen hidden!"
    >
      <p className="font-christmas text-center text-red-700 text-5xl mb-2 font-bold">
        Vez de:
      </p>
      <p className="font-christmas text-center text-green-500 text-5xl mb-10">
        {elves[currElfIdx]}
      </p>

      <button
        className="bg-red-700 text-white font-bold rounded-full px-8 py-4 shadow-[0px_0px_3px_#000] mb-10"
        onClick={() => {
          setElfOpen(true);
        }}
      >
        {gift} Ver meu amigo secreto
      </button>
      <button
        className="bg-gray-100/20 border border-gray-300 text-white rounded-full px-6 py-2"
        onClick={() => {
          currElfIdx < elves.length - 1
            ? setCurrElfIdx((currElfIdx) => currElfIdx + 1)
            : setCurrFlow("end-screen");
        }}
      >
        {currElfIdx < elves.length - 1 ? (
          <>Próximo amigo {arrowRight}</>
        ) : (
          "Finalizar"
        )}
      </button>
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
