import { useNavigate } from 'react-router-dom';
import userCardIconWhite from '../../assets/images/userCardSolidWhite.svg';
import userPlusIconWhite from '../../assets/images/userPlusSolidWhite.svg';
import clientsIconWhite from '../../assets/images/clientsSolidWhite.svg';
import glassIconWhite from '../../assets/images/glassSolidWhite.svg';

export const MenuOptions = () => {
  const navigate = useNavigate();

  return (
    <div className="container-options">
      <div className="container-menu">
        <div onClick={() => navigate('/profile')}>
          <img src={userCardIconWhite} alt="Perfil do usuário" />
          <p>Perfil</p>
        </div>
        <div onClick={() => navigate('/user_register')}>
          <img src={userPlusIconWhite} alt="Cadastro de usuários" />
          <p>Cadastro de usuários</p>
        </div>
        <div onClick={() => navigate('/client_register')}>
          <img src={clientsIconWhite} alt="Cadastro de clientes." />
          <p>Cadastro de clientes</p>
        </div>
        <div onClick={() => navigate('/client_search')}>
          <img src={glassIconWhite} alt="Pesquisa de clientes." />
          <p>Pesquisa de clientes</p>
        </div>
      </div>
    </div>
  );
};
