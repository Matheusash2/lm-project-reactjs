import { useNavigate } from "react-router-dom";
import { useState } from "react";
import userCardIcon from "../assets/images/userCardSolid.svg";
import userCardIconWhite from "../assets/images/userCardSolidWhite.svg";
import userPlusIcon from "../assets/images/userPlusSolid.svg";
import userPlusIconWhite from "../assets/images/userPlusSolidWhite.svg";
import clientsIcon from "../assets/images/clientsSolid.svg";
import clientsIconWhite from "../assets/images/clientsSolidWhite.svg";
import glassIcon from "../assets/images/glassSolid.svg";
import glassIconWhite from "../assets/images/glassSolidWhite.svg";
import { Footer } from "../components/general/Footer";
import { Header } from "../components/general/Header";
import { Layout } from "../components/general/Layout";

export const Home = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState({
    profile: false,
    userRegister: false,
    clientRegister: false,
    clientSearch: false,
  });

  const handleMouseEnter = (key: any) => {
    setIsHovered((prevState) => ({
      ...prevState,
      [key]: true,
    }));
  };

  const handleMouseLeave = (key: any) => {
    setIsHovered((prevState) => ({
      ...prevState,
      [key]: false,
    }));
  };

  return (
    <Layout>
      <div className="container-home">
        <div className="container-options">
          <div
            onClick={() => navigate("/profile")}
            onMouseEnter={() => handleMouseEnter("profile")}
            onMouseLeave={() => handleMouseLeave("profile")}
          >
            <img
              src={isHovered.profile ? userCardIconWhite : userCardIcon}
              alt="Perfil do usuário"
            />
            <p>Perfil</p>
          </div>
          <div
            onClick={() => navigate("/user_register")}
            onMouseEnter={() => handleMouseEnter("userRegister")}
            onMouseLeave={() => handleMouseLeave("userRegister")}
          >
            <img
              src={isHovered.userRegister ? userPlusIconWhite : userPlusIcon}
              alt="Cadastro de usuários"
            />
            <p>Cadastro de usuários</p>
          </div>
          <div
            onClick={() => navigate("/client_register")}
            onMouseEnter={() => handleMouseEnter("clientRegister")}
            onMouseLeave={() => handleMouseLeave("clientRegister")}
          >
            <img
              src={isHovered.clientRegister ? clientsIconWhite : clientsIcon}
              alt="Cadastro de clientes."
            />
            <p>Cadastro de clientes</p>
          </div>
          <div
            onClick={() => navigate("/client_search")}
            onMouseEnter={() => handleMouseEnter("clientSearch")}
            onMouseLeave={() => handleMouseLeave("clientSearch")}
          >
            <img
              src={isHovered.clientSearch ? glassIconWhite : glassIcon}
              alt="Pesquisa de clientes."
            />
            <p>Pesquisa de clientes</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
