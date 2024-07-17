// Logo
import logo from "../../../public/assets/svg/logo.svg";

const Menu = () => {
  return (
    <>
      <div className="bg-header flex-center">
        <div className="grid-1 disappear"></div>

        <div className="grid-7">
          <div className="flex-start-row border gap-3">
            <img src={logo} alt="UFMG" className="logo" />
            <h6 className="color-white uppercase bold">
              IX SEMANA DE SAÚDE MENTAL E INCLUSÃO SOCIAL
            </h6>
          </div>
        </div>

        <div className="grid-5 border">
          <div className="flex-end-row">
            <input type="text" className=" w-75" placeholder="Faça sua busca"/>
            <div className="btn-search"></div>
          </div>
        </div>

        <div className="grid-1 disappear"></div>
      </div>

      <div className="bg-menu"></div>
    </>
  );
};
export default Menu;
