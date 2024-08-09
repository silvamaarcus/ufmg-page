"uese client";

import { Input, Textarea, Button } from "@nextui-org/react";
import Image from "next/image";
// import React, { useState } from "react";

// Icon
import IconInstagram from "@/app/assets/svg/icon-instagram.svg";
import IconTiktok from "@/app/assets/svg/icon-tiktok.svg";
import IconFacebook from "@/app/assets/svg/icon-facebook.svg";
import IconLinkedin from "@/app/assets/svg/icon-linkedin.svg";
import IconWpp from "@/app/assets/svg/icon-whatsapp.svg";

export default function Footer() {
  // const [name, setName] = useState<string | null>(null);

  return (
    <>
      <section className="bg-brand-white-dark">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-12 py-10 px-6 sm:px-0">
          <div className="col-span-3 hidden sm:block"></div>
          <div className="col-span-6">
            <h1 className="font-title font-bold text-center text-brand-dark text-3xl">
              Contato
            </h1>
            <div className="flex flex-col gap-6">
              <Input
                type="name"
                label="Nome"
                placeholder="Digite o nome"
                labelPlacement="outside"
                errorMessage="Desculpe... Nome inválido!"
                className="rounded-sm"
              />
              <Input
                type="email"
                label="Email"
                placeholder="Digite seu email"
                labelPlacement="outside"
                errorMessage="Desculpe... Email inválido!"
                className="rounded-sm"
              />
              <Input
                type="title"
                label="Assunto"
                placeholder=" "
                labelPlacement="outside"
                errorMessage="Fale-me um pouquinho..."
                className="rounded-sm"
              />
              <Textarea
                label="Mensagem"
                labelPlacement="outside"
                placeholder=" "
                className="rounded-sm"
              />
            </div>
            <div className="mt-6">
              <Button className="w-full bg-brand-color text-white font-bold rounded-sm">
                Enviar
              </Button>
            </div>
            <div className="flex items-center justify-center gap-10 mt-6">
              <Image src={IconInstagram} alt="Instagram" />
              <Image src={IconTiktok} alt="Tiktok" />
              <Image src={IconFacebook} alt="Facebook" />
              <Image src={IconLinkedin} alt="Linkedin" />
              <Image src={IconWpp} alt="Whatsapp" />
            </div>
          </div>
          <div className="col-span-3 hidden sm:block"></div>
        </div>
      </section>
    </>
  );
}
