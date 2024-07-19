import icon_instagram from "/assets/svg/icon-instagram.svg";
import icon_tiktok from "/assets/svg/icon-tiktok.svg";
import icon_facebook from "/assets/svg/icon-facebook.svg";
import icon_linkedin from "/assets/svg/icon-linkedin.svg";
import icon_whatsapp from "/assets/svg/icon-whatsapp.svg";

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
            <div className="flex-center gap-5 mt-5">
              <a href="#">
                <img src={icon_instagram} alt="Instagram" className="icon" />
              </a>
              <a href="#">
                <img src={icon_tiktok} alt="Tiktok" className="icon" />
              </a>
              <a href="#">
                <img src={icon_facebook} alt="Facebook" className="icon" />
              </a>
              <a href="#">
                <img src={icon_linkedin} alt="Linkedin" className="icon" />
              </a>
              <a href="#">
                <img src={icon_whatsapp} alt="Whatsapp" className="icon" />
              </a>
            </div>
            <div className="text-center mt-5">
              <div>
                <p className="bold">Título Evento</p>
                <p className="my-3">
                  Universidade Federal de Minas Gerais <br />
                  Av. Antônio Carlos, 6627, Pampulha | Belo Horizonte | <br />
                  MG | CEP: 31270-901
                </p>
                <span className="p-title">Desenvolvido no Cedecom UFMG</span>
              </div>
              <p></p>
            </div>
          </div>
          <div className="grid-4 disappear"></div>
        </section>
      </section>
    </>
  );
};
export default Footer;
