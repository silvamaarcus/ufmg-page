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
            </form>
          </div>
          <div className="grid-4 disappear"></div>
        </section>
      </section>
    </>
  );
};
export default Footer;
