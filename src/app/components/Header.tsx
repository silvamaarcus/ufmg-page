import React from "react";

export default function Header() {
  return (
    <>
      <header className="w-full bg-img_bg_hero bg-cover bg-center">
        <div className="container mx-auto flex items-center justify-center py-10 md:py-36 lg:py-36">
          <h1 className="font-title font-bold text-3xl md:text-6xl lg:text-6xl text-white text-center">
            Semana do Fim de Semana 2024
          </h1>
        </div>
      </header>
    </>
  );
}
