const Events = () => {
  return (
    <>
      <select id="eventos" name="eventos">
        <option value="" disabled selected>
          Tipo de Evento
        </option>
        <option value="apple">Conversas</option>
        <option value="banana">Palestras</option>
        <option value="cherry">Ceminários</option>
        <option value="date">Conferência</option>
      </select>
    </>
  );
};
export default Events;
