import Calendar from "react-calendar";
import Filtro from "./components/Filters/Events";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <section className="banner">
        <div className="container">
          <h3 className="semi-bold text-center color-white">
            Semana do Fim de Semana 2024
          </h3>
        </div>
      </section>

      <Menu />

      <section className="container pt-4">
        <div className="grid-2 disappear"></div>
        <div className="grid-10 flex-center-column">
          <h4 className="semi-bold text-center">Semana de Saúde Mental</h4>
          <p className="mt-3">
            “Acolher é reconhecer o que o outro traz como legítima e singular
            necessidade de saúde”. (MS, 2013)
            <br />
            <br />
            Com o tema “O cuidado em saúde mental como direito a cidadania” a
            10ª Semana de Saúde Mental e Inclusão Social da UFMG será realizada
            de 16 a 20 de maio.
            <br />
            <br />A abertura oficial será na segunda-feira, dia 16, a partir das
            10 horas, no Auditório da Reitoria, com a presença da advogada e
            subprocuradora-geral da República aposentada Deborah Duprat.“Acolher
            é reconhecer o que o outro traz como legítima e singular necessidade
            de saúde”. (MS, 2013)
          </p>
          <button className="btn mt-3">Inscreva-se</button>
        </div>
        <div className="grid-2 disappear"></div>
      </section>

      <section className="container pt-4">
        <div className="grid-2 disappear"></div>
        <div className="grid-10 flex-column">
          <h4 className="semi-bold text-center">Programação</h4>
          <div className="flex-column mt-3">
            <h6 className="bold">Filtros</h6>
            <div className="flex-start-row gap-3 mt-3">
              <div className="w-50">
                <Filtro />
              </div>
              <div className="w-50">
                <Calendar />
              </div>
            </div>
          </div>
        </div>
        <div className="grid-2 disappear"></div>
      </section>
    </>
  );
}

export default App;
