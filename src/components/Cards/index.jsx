// Hooks
import { useState } from "react";

const Cards = ({ tipo, titulo, data, horario, conteudo, imagem }) => {
  const [message, setMessage] = useState("Ver mais");
  const [btnActive, setBtnActive] = useState("btn-info");
  const [divShow, setDivShow] = useState("display-none");

  const handleClick = (e) => {
    e.preventDefault();
    if (message === "Ver mais") {
      setMessage("Ver menos");
      setBtnActive("btn-info-active");
      setDivShow("display");
    } else {
      setMessage("Ver mais");
      setBtnActive("btn-info");
      setDivShow("display-none");
    }
  };

  // Convertendo data em uma string e alterando fuso horário.
  const eventDate = new Date(data);
  const dia = eventDate.getUTCDate();
  const mes = eventDate.toLocaleString("default", { month: "short" });

  return (
    <>
      <section className="flex-center gap-3 p-3 eventos">
        <div className="flex-center-column">
          <h4 className="bold">{dia}</h4>
          <h6 className="uppercase bb-black pb-min bold">{mes}</h6>
          <p className="mt-min">{horario}</p>
        </div>

        <div>
          <p>{tipo}</p>
          <p className="p1 bold my-3">{titulo}</p>
          <div className={divShow}>
            <p>{conteudo}</p>
            <img
              src={imagem}
              alt={titulo}
              style={{ maxWidth: "327px", height: "auto" }}
              className="py-3"
            />
          </div>
          <button className={btnActive} onClick={handleClick}>
            {message}
          </button>
        </div>
      </section>
    </>
  );
};

export default Cards;
