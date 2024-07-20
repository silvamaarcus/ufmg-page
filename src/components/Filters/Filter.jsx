import Events from "./Events";
import Calendar from "./Calendar";
import Cards from "../Cards/";

const Filter = () => {
  const handleFilter = () => {
    console.log("Deu certo!");
  };

  return (
    <>
      <h4 className="semi-bold text-center">Programação</h4>
      <div className="flex-column mt-3">
        <h6 className="bold">Filtros</h6>
        <div className="flex-center gap-3 mt-3 wrap-mobile">
          <div className="w-100">
            <Events />
          </div>
          <div className="w-100">
            <Calendar />
          </div>
        </div>
        <div className="flex-end-row mt-3">
          <button className="btn-alt" onClick={handleFilter}>
            Filtrar
          </button>
        </div>

        <div className="flex-center gap-3 mt-3 wrap-mobile">
          <div>
            <Cards />
          </div>
          <div>
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
};
export default Filter;
