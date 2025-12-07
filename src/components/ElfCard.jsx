import React from "react";
import { gift } from "../utils/Icons";

export default function ElfCard({ open, close, elfFriend }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-9999 flex items-center justify-center">
      <div className="flex flex-col bg-white h-[20%] w-[30%] px-6 py-4 rounded-3xl relative">
        <button className="self-end text-gray-700 mb-3 p-1" onClick={close}>
          X
        </button>
        <div className="flex flex-col justify-center items-center">
          <p className="text-black text-xl font-bold mb-2">Você tirou:</p>
          <div className="flex items-center justify-between w-[80%]">
            <p className="font-christmas text-red-500 text-4xl font-bold">
              {elfFriend}
            </p>
            <p className="font-christmas text-red-500 text-4xl font-bold">
              {gift}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
