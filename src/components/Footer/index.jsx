const Footer = () => {
  return (
    <>
      <section className="bg-section-gray">
        <section className="container">
          <div className="grid-4 disappear"></div>
          <div className="grid-6">
            <h4 className="bold text-center">Contato</h4>
            <form className="mt-3 flex-column gap-3">
              <div>
                <label htmlFor="name">
                  <p>Nome</p>
                </label>
                <input
                  type="text"
                  placeholder="Digite o nome"
                  required
                  className="eventos"
                />
              </div>
              <div>
                <label htmlFor="email">
                  <p>Email</p>
                </label>
                <input
                  type="text"
                  placeholder="Digite o email"
                  required
                  className="eventos"
                />
              </div>
              <div>
                <label htmlFor="title">
                  <p>Assunto</p>
                </label>
                <input type="text" required className="eventos" />
              </div>
              <div>
                <label htmlFor="content">
                  <p>Mensagem</p>
                </label>
                <textarea
                  name="content"
                  id="content"
                  rows={5}
                  required
                  className="eventos"
                ></textarea>
              </div>
              <button className="btn">Enviar</button>
            </form>
            <div className="flex-start-row">
            </div>
            <p className="bold">Título Evento</p>
            <div>
              <p>Universidade Federal de Minas Gerais</p>
              <p>Av. Antônio Carlos, 6627, Pampulha | Belo Horizonte | </p>
              <p>MG | CEP: 31270-901</p>
            </div>

            <p></p>
          </div>
          <div className="grid-4 disappear"></div>
        </section>
      </section>
    </>
  );
};
export default Footer;
