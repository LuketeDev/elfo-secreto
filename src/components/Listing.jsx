import React from "react";
import { plus, shuffleIcon, refresh, iconX } from "../utils/Icons";
function Listing({
  elves,
  handleAddElf,
  handleRemoveElf,
  handleReset,
  raffle,
}) {
  return (
    <div id="listing-screen" className="screen my-8">
      <div className="flex justify-center px-4">
        <div
          id="add-elf-form"
          className="w-full sm:max-w-[90%] md:max-w-[75%] lg:max-w-[60%] flex flex-col gap-4"
        >
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              id="elf-name-input"
              name="elfNameInput"
              placeholder="Nome do amigo"
              className="w-full sm:flex-1 px-4 py-3 rounded-full outline-1 -outline-offset-1 border-amber-50 text-amber-50"
              required
            />
            <button
              className="w-full sm:w-auto bg-red-700 hover:bg-red-800 transition-colors text-white font-semibold px-4 py-3 rounded-full flex items-center gap-2 justify-center"
              onClick={() => {
                handleAddElf();
              }}
            >
              {plus} Adicionar amigo
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8 px-4">
        <div className="w-full sm:max-w-[90%] md:max-w-[75%] lg:max-w-[60%]">
          {/* text wrapper */}
          <div className="justify-start">
            <h3 className="text-white text-left font-bold text-lg">
              Amigos adicionados ({elves.length})
            </h3>
          </div>

          {/* Elf list */}
          <div className="bg-red-900/50 text-lg text-white font-bold border border-gray-300 rounded-3xl px-4 py-4 transition-transform max-h-64 md:max-h-80 overflow-auto">
            <ul>
              {elves.length > 0 ? (
                elves.map((elf, idx) => (
                  <div key={idx}>
                    <li className="flex flex-row justify-between items-start sm:items-center w-full py-3">
                      <div className="flex items-center gap-3">
                        <span className="text-green-600 font-bold text-center w-10">
                          {idx + 1}.
                        </span>
                        <p className="w-[80%]">{elf}</p>
                      </div>
                      <button
                        className="mt-0 text-red-400 hover:text-red-200"
                        onClick={() => handleRemoveElf(elf)}
                        aria-label={`Remover ${elf}`}
                      >
                        {iconX}
                      </button>
                    </li>
                    {idx < elves.length - 1 && (
                      <hr className="border-t border-gray-500 my-2" />
                    )}
                  </div>
                ))
              ) : (
                <p className="text-center py-6">
                  Adicione amigos para começar o sorteio!
                </p>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8 px-4">
        <div className="w-full sm:max-w-[60%] items-center flex lg:flex-col sm:flex-row gap-4">
          <button
            className="w-full sm:w-1/2 border-2 text-green-600 hover:text-white hover:bg-green-800 py-3 rounded-full transition-colors flex items-center justify-center gap-2"
            onClick={() => raffle(elves)}
          >
            {shuffleIcon}
            Realizar sorteio
          </button>
          <button
            className="w-full sm:w-1/2 border-2 text-red-600 hover:text-white hover:bg-red-800 py-3 rounded-full transition-colors flex items-center justify-center gap-2"
            onClick={() => handleReset()}
          >
            {refresh}
            Reiniciar sorteio
          </button>
        </div>
      </div>
    </div>
  );
}

export default Listing;
