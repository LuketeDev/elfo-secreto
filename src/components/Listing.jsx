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
    <div id="listing-screen" className="screen my-20 hidden!">
      <div className="flex justify-center">
        <div
          id="add-elf-form"
          className="w-full max-w-[60%] flex flex-col gap-4"
        >
          <div className="flex gap-2">
            <input
              type="text"
              id="elf-name-input"
              name="elfNameInput"
              placeholder="Nome do amigo"
              className="flex-1 px-4 py-2 rounded-full outline-1 -outline-offset-1 border-amber-50 text-amber-50"
              required
            />
            <button
              className="bg-red-700 hover:bg-red-800 transition-colors text-white font-semibold px-4 py-2 rounded-full flex items-center gap-2 h-full "
              onClick={() => {
                handleAddElf();
              }}
            >
              {plus} Adicionar amigo
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="w-full max-w-[60%]">
          {/* text wrapper */}
          <div className="justify-start">
            <h3 className="text-white text-left font-bold text-lg">
              Amigos adicionados ({elves.length})
            </h3>
          </div>

          {/* Elf list */}
          <div className="bg-red-900/50 text-lg text-white font-bold border border-gray-300 rounded-3xl px-6 py-4 transition-transform max-h-73 overflow-scroll">
            <ul>
              {elves.length > 0 ? (
                elves.map((elf, idx) => (
                  <div key={idx}>
                    <li className="flex justify-between items-center w-full py-5">
                      <div className="flex justify-between">
                        <span className="text-green-600 font-bold text-center w-10">
                          {idx + 1}.
                        </span>
                        <p className="ml-2">{elf}</p>
                      </div>
                      <button className="" onClick={() => handleRemoveElf(elf)}>
                        {iconX}
                      </button>
                    </li>
                    {idx < elves.length - 1 && <hr className="text-gray-500" />}
                  </div>
                ))
              ) : (
                <p className="text-center">
                  Adicione amigos para começar o sorteio!
                </p>
              )}
            </ul>
          </div>
        </div>
        {/* Buttons */}
      </div>
      <div className="flex justify-center mt-10">
        <div className="flex flex-col w-full max-w-[30%]">
          <button
            className="border-2 text-green-600 hover:text-white hover:bg-green-800 py-5 my-5 rounded-full transition-colors "
            onClick={() => raffle(elves)}
          >
            {shuffleIcon}
            Realizar sorteio
          </button>
          <button
            className="border-2 text-red-600 hover:text-white hover:bg-red-800 py-5 my-5 rounded-full transition-colors "
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
