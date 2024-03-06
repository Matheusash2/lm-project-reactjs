import { useNavigate } from "react-router-dom";
import userIcon from "../../assets/images/userSolid.svg";
import homeIcon from "../../assets/images/houseSolid.svg";
import arrowLeftIcon from "../../assets/images/caretLeftSolid.svg";

export const Footer = () => {
  const navigate = useNavigate();
  const mobile = window.innerWidth <= 992;

  return (
    <>
      {mobile ? (
        <nav className="container-footer">
          <ul className="navigation-footer">
            <li>
              <img src={arrowLeftIcon} onClick={() => navigate(-1)} alt="Voltar"/>
            </li>
            <li>
              <img src={homeIcon} onClick={() => navigate("/home")} alt="Home"/>
            </li>
            <li>
              <img src={userIcon} onClick={() => navigate("/profile")} alt="Perfil do usuário"/>
            </li>
          </ul>
        </nav>
      ) : (
        <></>
      )}
    </>
  );
};
