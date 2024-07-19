import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeShow, setActiveShow] = useState(null);

  const handleClick = (index) => (e) => {
    e.preventDefault();
    setActiveIndex(index === activeIndex ? null : index);
    setActiveShow(index === activeShow ? null : index);
  };

  return (
    <>
      <Accordion className="mt-3 eventos accordion">
        <AccordionItem>
          <AccordionItemHeading
            className={activeIndex === 0 ? "question-active p-2" : "question"}
            onClick={handleClick(0)}
          >
            <AccordionItemButton>
              <p className="bold">
                Quando acontece a XI Seamana da Saúde Mental e Inclusão Social?
              </p>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className={activeShow === 0 ? "mt-2 p-2" : "display-none"}>
            <button className="btn-info ml-1">Label</button>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>

      <Accordion className="mt-3 eventos accordion">
        <AccordionItem>
          <AccordionItemHeading
            className={activeIndex === 1 ? "question-active p-2" : "question"}
            onClick={handleClick(1)}
          >
            <AccordionItemButton>
              <p className="bold">
              O que é a semana da Saúde Mental e Inclusão Social?
              </p>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="mt-2 p-2">
            <p>O evento é uma promoção da Rede de Saúde Mental da UFMG e conta com a colaboração e parceria de representantes de movimentos sociais, usuários dos serviços públicos de saúde mental, Comissão Permanente de Saúde Mental da UFMG e outras instâncias internas e externas à comunidade acadêmica.</p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};
export default Faq;
