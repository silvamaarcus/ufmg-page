import { useState } from "react";

const Cards = () => {
  const [message, setMessage] = useState("Ver mais");

  const [btnActive, setBtnActive] = useState("btn-info");

  const handleClick = (e) => {
    e.preventDefault();
    if (message === "Ver mais") {
      setMessage("Ver menos");
      setBtnActive("btn-info-active");
    } else {
      setMessage("Ver mais");
      setBtnActive("btn-info");
    }
  };

  return (
    <>
      <section className="flex-center gap-3 p-3 eventos">
        <div className="flex-center-column">
          <h4 className="bold">18</h4>
          <h6 className="uppercase bb-black pb-min bold">mai</h6>
          <p className="mt-min">19h30</p>
        </div>

        <div>
          <p>Roda de Conversa</p>
          <p className="p1 bold my-3">
            Conversa com Peter Pál Pelbart sobre criação e saúde mental
          </p>
          <button className={btnActive} onClick={handleClick}>
            {message}
          </button>
        </div>
      </section>
    </>
  );
};
export default Cards;
