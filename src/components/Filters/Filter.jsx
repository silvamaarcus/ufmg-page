// Components
import Cards from "../Cards/";

// Hooks
import { useState, useEffect } from "react";

const Filter = () => {
  const [divShow, setDivShow] = useState("display-none"); // Estado para controlar a visibilidade do contêiner de eventos filtrados
  const [events, setEvents] = useState([]); // Estado para armazenar todos os eventos do JSON
  const [filteredEvents, setFilteredEvents] = useState([]); // Estado para armazenar os eventos filtrados
  const [filterDate, setFilterDate] = useState(""); // Estado para armazenar a data do filtro
  const [filterType, setFilterType] = useState(""); // Estado para armazenar o tipo do filtro

  // useEffect para buscar eventos do bd.json quando o componente for montado
  useEffect(() => {
    fetch("/database/bd.json")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data); // Define o estado com todos os eventos do JSON
        setFilteredEvents(data); // Inicialmente, todos os eventos são considerados filtrados
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  // Função para aplicar os filtros
  const handleFilter = () => {
    let filtered = events; // Inicialmente, consideramos todos os eventos

    // Filtrar por data se uma data for fornecida
    if (filterDate) {
      filtered = filtered.filter((event) => event.data === filterDate);
    }

    // Filtrar por tipo de evento se um tipo for fornecido
    if (filterType) {
      filtered = filtered.filter((event) => event.evento === filterType);
    }

    // Se não houver eventos após o filtro, exibir um alerta
    if (filtered.length === 0) {
      alert("Não existem eventos para a data fornecida.");
    }

    setFilteredEvents(filtered); // Atualiza o estado com os eventos filtrados
    setDivShow("display"); // Exibe o contêiner de eventos filtrados
  };

  // Função para atualizar o estado do filtro de data
  const handleDateChange = (e) => {
    setFilterDate(e.target.value);
  };

  // Função para atualizar o estado do filtro de tipo
  const handleTypeChange = (e) => {
    setFilterType(e.target.value);
  };

  return (
    <>
      <h4 className="semi-bold text-center">Programação</h4>
      <div className="flex-column mt-3">
        <h6 className="bold">Filtros</h6>
        <div className="flex-center gap-3 mt-3 wrap-mobile">
          <div className="w-100 eventos">
            <select onChange={handleTypeChange}>
              <option value="" disabled selected>
                Tipo de Evento
              </option>
              <option value="conversa">Conversa</option>
            </select>
          </div>
          <div className="w-100 eventos">
            <input
              type="date"
              value={filterDate}
              onChange={handleDateChange}
            />
          </div>
        </div>
        <div className="flex-end-row mt-3">
          <button className="btn-alt" onClick={handleFilter}>
            Filtrar
          </button>
        </div>

        <div className={divShow}>
          <div className="flex gap-3 mt-3 wrap-mobile">
            {filteredEvents.map((event, index) => (
              <div key={index} className="w-100">
                <Cards
                  tipo={event.tipo}
                  titulo={event.titulo}
                  data={event.data}
                  horario={event.horario}
                  conteudo={event.conteudo}
                  imagem={event.imagem}
                />
              </div>
            ))}
          </div>
          <div className="flex-center mt-4">
            {filteredEvents.length === 2 && (
              <button className="btn">Ver mais</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
