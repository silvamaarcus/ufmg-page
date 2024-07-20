const Events = () => {
  return (
    <>
      <select id="eventos" className="eventos">
        <option value="" disabled selected>
          Tipo de Evento
        </option>
        <option value="talk">Conversas</option>
        <option value="cerimony">Ceminários</option>
      </select>
    </>
  );
};
export default Events;
