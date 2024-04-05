import { useNavigate } from 'react-router-dom';
import userCardIconWhite from '../../assets/images/userCardSolidWhite.svg';
import userPlusIconWhite from '../../assets/images/userPlusSolidWhite.svg';
import clientsIconWhite from '../../assets/images/clientsSolidWhite.svg';
import glassIconWhite from '../../assets/images/glassSolidWhite.svg';
import envelopeIconWhite from '../../assets/images/envelopeSolidWhite.svg';

type typeMenuItem = {
  name: string;
  icon: string;
  route: string;
};
const menuItems: typeMenuItem[] = [
  {
    name: 'Perfil',
    icon: userCardIconWhite,
    route: '/profile',
  },
  {
    name: 'Cadastro de usuários',
    icon: userPlusIconWhite,
    route: '/user_register',
  },
  {
    name: 'Cadastro de clientes',
    icon: clientsIconWhite,
    route: '/client_register',
  },
  {
    name: 'Pesquisa de clientes',
    icon: glassIconWhite,
    route: '/client_search',
  },
  {
    name: 'Seguro desemprego',
    icon: envelopeIconWhite,
    route: '/client_insurance',
  },
];

export const MenuOptions = () => {
  const navigate = useNavigate();

  const handleItemClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className="container-options">
      <div className="container-menu">
        {menuItems.map((item, index) => (
          <div key={index} onClick={() => handleItemClick(item.route)}>
            <img src={item.icon} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
