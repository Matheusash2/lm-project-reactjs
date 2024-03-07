import { LoginServices } from "../../services/LoginServices";
import { AuthorizedContext } from "../../App";
import { useContext } from "react";
import logoIcon from "../../assets/images/logo_LM.svg";
import logoutIcon from "../../assets/images/logoutSolid.svg";
import { useNavigate } from "react-router-dom";

const loginServices = new LoginServices();

export const Header = () => {
  const { setToken } = useContext(AuthorizedContext);
  const navigate = useNavigate();

  const logout = () => {
    loginServices.logout(setToken);
    navigate("/");
  };

  return (
    <div className="container-header">
      <div className="navigation-header">
        <img
          src={logoIcon}
          alt="Logo lm empréstimos"
          className="logo-header"
          onClick={() => navigate("/")}
        />
        <img
          src={logoutIcon}
          alt="Logout"
          className="logout-header"
          onClick={logout}
        />
      </div>
    </div>
  );
};
