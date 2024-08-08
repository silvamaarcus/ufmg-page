import { useState, MouseEvent } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeShow, setActiveShow] = useState<number | null>(null);

  const handleClick = (index: number) => (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setActiveIndex(index === activeIndex ? null : index);
    setActiveShow(index === activeShow ? null : index);
  };

  const defaultContent =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet dolorum, quidem magnam incidunt deleniti rem ab, architecto dolores, ullam ea explicabo voluptatum perspiciatis! Facilis sint modi neque assumenda quo veniam!";

  return (
    <>
      <section className="flex flex-col gap-5">
        <Accordion className="shadow-md cursor-pointer rounded-lg">
          <AccordionItem>
            <AccordionItemHeading
              className={
                activeIndex === 0
                  ? "bg-brand-color text-white p-4 font-bold"
                  : "p-4 font-bold"
              }
              onClick={handleClick(0)}
            >
              <AccordionItemButton>
                <p className="bold">
                  Quando acontece a XI Semana da Saúde Mental e Inclusão Social?
                </p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={activeShow === 0 ? "p-4" : "hidden"}>
              {defaultContent}
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>

        <Accordion className="shadow-md cursor-pointer rounded-lg">
          <AccordionItem>
            <AccordionItemHeading
              className={
                activeIndex === 1
                  ? "bg-brand-color text-white p-4 font-bold"
                  : "p-4 font-bold"
              }
              onClick={handleClick(1)}
            >
              <AccordionItemButton>
                <p className="bold">
                  O que é a semana da Saúde Mental e Inclusão Social?
                </p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel
              className={activeShow === 1 ? "p-4" : "hidden"}
            >
              <p>
                O evento é uma promoção da Rede de Saúde Mental da UFMG e conta
                com a colaboração e parceria de representantes de movimentos
                sociais, usuários dos serviços públicos de saúde mental,
                Comissão Permanente de Saúde Mental da UFMG e outras instâncias
                internas e externas à comunidade acadêmica.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>

        <Accordion className="shadow-md cursor-pointer rounded-lg">
          <AccordionItem>
            <AccordionItemHeading
              className={
                activeIndex === 2
                  ? "bg-brand-color text-white p-4 font-bold"
                  : "p-4 font-bold"
              }
              onClick={handleClick(2)}
            >
              <AccordionItemButton>
                <p className="bold">Qual é a programação?</p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel
              className={activeShow === 2 ? "p-4" : "hidden"}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                dolorum, quidem magnam incidunt deleniti rem ab, architecto
                dolores, ullam ea explicabo voluptatum perspiciatis! Facilis
                sint modi neque assumenda quo veniam!
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>

        <Accordion className="shadow-md cursor-pointer rounded-lg">
          <AccordionItem>
            <AccordionItemHeading
              className={
                activeIndex === 3
                  ? "bg-brand-color text-white p-4 font-bold"
                  : "p-4 font-bold"
              }
              onClick={handleClick(3)}
            >
              <AccordionItemButton>
                <p className="bold">A programação é gratuita?</p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel
              className={activeShow === 3 ? "p-4" : "hidden"}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Placeat pariatur fugit quis, officia, deserunt eos inventore
                ullam laborum id voluptatum quae mollitia magni odio facere,
                minima dicta officiis corrupti! At.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
}
