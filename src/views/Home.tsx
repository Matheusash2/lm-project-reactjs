import { useNavigate } from "react-router-dom";

export const Home = () => {

    const navigate = useNavigate();

  return (
    <div className="container-home">
      <div className="header-home">
        <p>Hader do site</p>
      </div>
      <div className="container-options">
        <div onClick={() => navigate("/profile")}>
          <p>Perfil</p>
        </div>
        <div onClick={() => navigate("/user_register")}>
          <p>Cadastro de usuários</p>
        </div>
        <div onClick={() => navigate("/client_register")}>
          <p>Cadastro de clientes</p>
        </div>
        <div onClick={() => navigate("/client_search")}>
          <p>Pesquisa de clientes</p>
        </div>
      </div>
      <div className="footer-home">
        <p>Footer do site</p>
      </div>
    </div>
  );
};
