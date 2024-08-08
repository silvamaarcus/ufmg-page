import Image from "next/image";
import React from "react";

// NextUI
import { Input } from "@nextui-org/react";

// Images
import Logo from "@/app/assets/svg/logo.svg";
import IconSearch from "@/app/assets/svg/icon-search.svg";

const list = ["Option", "Option", "Option", "Option", "Option"];

export default function Menu() {
  return (
    <>
      <section className="bg-brand-color">
        <div className="container mx-auto py-6 flex items-center justify-center md:justify-between lg:justify-between flex-wrap md:flex-nowrap lg:flex-nowrap text-center">
          <div className="flex gap-6 items-center justify-center flex-wrap md:flex-nowrap lg:flex-nowrap">
            <Image src={Logo} alt="UMFG" />
            <h3 className="uppercase text-white font-bold text-lg py-4 md:py-0 lg:py-0">
              IX SEMANA DE SAÚDE MENTAL E INCLUSÃO SOCIAL
            </h3>
          </div>
          <Input
            type="search"
            placeholder="Faça uma busca"
            className="max-w-[293px]"
            radius="sm"
            endContent={
              <Image src={IconSearch} alt="search" className="cursor-pointer" />
            }
          />
        </div>
      </section>

      <section className="bg-brand-white-dark">
        <div className="container mx-auto py-6">
          <ul className="flex gap-6 items-center px-6 md:px-0 lg:px-0 overflow-x-auto">
            {list.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer uppercase border-r-1 border-brand-color"
              >
                <span className="text-base pr-12">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
