import React from "react";
import { gift } from "../utils/Icons";

export default function ElfCard({ open, close, elfFriend }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 h-full w-full bg-black/50 z-9999 flex items-center justify-center">
      <div className="flex flex-col bg-white h-auto max-h-[80%] w-[90%] max-w-[400px] px-6 py-4 rounded-3xl relative">
        <button className="self-end text-gray-700 mb-3 p-1" onClick={close}>
          X
        </button>
        <div className="flex flex-col justify-center items-center">
          <p className="text-black text-xl font-bold mb-2">Você tirou:</p>
          <div className="flex items-center justify-between w-full">
            <p className="font-christmas text-red-500 text-4xl font-bold truncate">
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
