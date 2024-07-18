import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from "../../../public/assets/svg/icon-calendar.svg";
import { ptBR } from "date-fns/locale/pt-BR";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="flex-space eventos-data">
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
