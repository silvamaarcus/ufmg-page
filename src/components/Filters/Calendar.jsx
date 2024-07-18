// Hooks
import { useState } from "react";

// Biblioteca de Calendario
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // estilo do calendario
import { ptBR } from "date-fns/locale/pt-BR"; // idioma do calendario

// Icone de Calendario
import calendarIcon from "/assets/svg/icon-calendar.svg";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="flex-space eventos">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        locale={ptBR}
        placeholderText="Data"
        dateFormat="dd/MM/yyyy"
        className="pr-9"
      />
      <img src={calendarIcon} alt="Calendário" className="icon-s mr-1" />
    </div>
  );
};

export default Calendar;
