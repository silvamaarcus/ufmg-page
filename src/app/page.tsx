"use client";

// Components
import Disappear from "./components/layout/Disappear";
import { eventos } from "./database/Eventos";
import FAQ from "./components/Accordion";

import { useState } from "react";
import {
  Button,
  DatePicker,
  Autocomplete,
  AutocompleteItem,
} from "@nextui-org/react";

export default function Home() {
  const [selectedEvent, setSelectedEvent] = useState<string>("");

  // Função para lidar com a mudança do Autocomplete
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedEvent(event.target.value);
  };

  return (
    <>
      <section className="container mx-auto grid grid-cols-1 sm:grid-cols-12 mt-20">
        <Disappear />
        <div className="col-span-8 px-6 sm:px-0">
          <h1 className="font-title font-bold text-center text-brand-dark text-3xl">
            Semana da Saúde Mental
          </h1>
          <span className="flex flex-col gap-5 my-6">
            <p>
              “Acolher é reconhecer o que o outro traz como legítima e singular
              necessidade de saúde”. (MS, 2013)
            </p>
            <p>
              Com o tema “O cuidado em saúde mental como direito a cidadania” a
              10ª Semana de Saúde Mental e Inclusão Social da UFMG será
              realizada de 16 a 20 de maio.
            </p>
            <p>
              A abertura oficial será na segunda-feira, dia 16, a partir das 10
              horas, no Auditório da Reitoria, com a presença da advogada e
              subprocuradora-geral da República aposentada Deborah Duprat.
            </p>
          </span>
          <div className="flex justify-center">
            <Button className="bg-brand-color text-white font-bold rounded-sm py-2 px-20">
              Inscreva-se
            </Button>
          </div>
        </div>
        <Disappear />
      </section>

      <section className="container mx-auto grid grid-cols-1 sm:grid-cols-12 my-20">
        <Disappear />
        <div className="col-span-8 px-6 sm:px-0">
          <h1 className="font-title font-bold text-center text-brand-dark text-3xl">
            Programação
          </h1>
          <div className="my-6">
            <span className="text-base font-bold text-brand-dark pl-7 md:pl-0 lg:pl-0">
              Filtros
            </span>
            <div className="my-5 grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 sm:px-0">
              <Autocomplete
                value={selectedEvent}
                onChange={handleChange}
                placeholder="Tipos de evento"
              >
                {eventos.map((evento) => (
                  <AutocompleteItem key={evento.value} value={evento.value}>
                    {evento.label}
                  </AutocompleteItem>
                ))}
              </Autocomplete>
              <DatePicker  />
            </div>

            <div className="flex justify-end pr-6 sm:pr-0">
              <Button className="rounded-sm">Filtrar</Button>
            </div>
          </div>
        </div>
        <Disappear />
      </section>

      <section className="container mx-auto grid grid-cols-1 sm:grid-cols-12 gap-8 my-20">
        <Disappear />
        <div className="col-span-8 px-6 sm:px-0">
          <h1 className="font-title font-bold text-center text-brand-dark text-3xl">
            Perguntas frequentes
          </h1>
          <div className="mt-5">
            <FAQ />
          </div>
        </div>
        <Disappear />
      </section>
    </>
  );
}
