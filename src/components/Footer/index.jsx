// Icons
import icon_instagram from "/assets/svg/icon-instagram.svg";
import icon_tiktok from "/assets/svg/icon-tiktok.svg";
import icon_facebook from "/assets/svg/icon-facebook.svg";
import icon_linkedin from "/assets/svg/icon-linkedin.svg";
import icon_whatsapp from "/assets/svg/icon-whatsapp.svg";

// Hook formulário
import { useForm } from "react-hook-form";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => (e) => {
    e.preventDefault();
    return console.log(data);
  };

  return (
    <>
      <section className="bg-section-gray">
        <section className="container">
          <div className="grid-4 disappear"></div>
          <div className="grid-6">
            <h4 className="bold text-center">Contato</h4>
            <div className="mt-3 flex-column gap-3">
              <div>
                <label htmlFor="name">
                  <p>Nome</p>
                </label>
                <input
                  type="text"
                  placeholder="Digite o nome"
                  className={errors?.name && "input-error"}
                  {...register("name", { required: true })}
                />
                {errors?.name && (
                  <p className="error-message">Insira seu nome...</p>
                )}
              </div>
              <div>
                <label htmlFor="email">
                  <p>Email</p>
                </label>
                <input
                  type="text"
                  placeholder="Digite o email"
                  className={errors?.email && "input-error"}
                  {...register("email", {
                    required: true,
                    validate: (value) => value.includes("@"),
                  })}
                />
                {errors?.email?.type === "required" && (
                  <p className="error-message">Insira um e-mail...</p>
                )}
                {errors?.email && (
                  <p className="error-message">E-mail inválido!</p>
                )}
              </div>
              <div>
                <label htmlFor="title">
                  <p>Assunto</p>
                </label>
                <input
                  type="text"
                  className={errors?.title && "input-error"}
                  {...register("title", { required: true })}
                />
                {errors?.title && (
                  <p className="error-message">Título inválido!</p>
                )}
              </div>
              <div>
                <label htmlFor="content">
                  <p>Mensagem</p>
                </label>
                <textarea
                  id="content"
                  rows={5}
                  className={errors?.content && "input-error"}
                  {...register("content", { required: true })}
                ></textarea>
                {errors?.content && (
                  <p className="error-message">Descreva seu texto...</p>
                )}
              </div>
              <button onClick={() => handleSubmit(onSubmit)()} className="btn">
                Enviar
              </button>
            </div>
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
