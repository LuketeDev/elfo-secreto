import React from "react";

export default function Header() {
  return (
    <header
      id="listing-screen-header"
      className="text-center screen my-20 hidden!"
    >
      <h1 className="text-white mb-2 text-3xl! md:text-5xl! font-bold">
        🎉 Amigo secreto 🎉
      </h1>
      <p className="text-green-500 font-bold">
        Adicione os amigos para começar o sorteio <br />
        Mínimo de 3 participantes
      </p>
    </header>
  );
}
