// Logo
import logo from "/assets/svg/logo.svg";

const Menu = () => {
  return (
    <>
      <div className="bg-header flex-center flex-wrap py-1">
        <div className="grid-1 disappear"></div>

        <div className="grid-7 p-0">
          <div className="flex-start-row content-mobile gap-3">
            <img src={logo} alt="UFMG" className="logo" />
            <h6 className="color-white uppercase bold text-center">
              IX SEMANA DE SAÚDE MENTAL E INCLUSÃO SOCIAL
            </h6>
          </div>
        </div>

        <div className="grid-5 p-0">
          <div className="flex-end-row content-mobile no-break-mobile">
            <input type="text" className=" w-60" placeholder="Faça sua busca" />
            <div className="btn-search"></div>
          </div>
        </div>

        <div className="grid-1 disappear"></div>
      </div>

      <div className="bg-menu flex">
        <div className="grid-1 disappear"></div>

        <div className="grid-12 p-0">
          <ul className="menu-links flex-start-row gap-5 hidden">
            <li>
              <a href="/" className="uppercase">Option</a>
            </li>
            <li>
              <a href="/" className="uppercase">Option</a>
            </li>
            <li>
              <a href="/" className="uppercase">Option</a>
            </li>
            <li>
              <a href="/" className="uppercase">Option</a>
            </li>
            <li>
              <a href="/" className="uppercase">Option</a>
            </li>
          </ul>
        </div>

        <div className="grid-1 disappear"></div>
      </div>
    </>
  );
};
export default Menu;
