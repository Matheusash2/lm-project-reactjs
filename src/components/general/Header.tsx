import { LoginServices } from '../../services/LoginServices';
import { AuthorizedContext } from '../../App';
import { useContext } from 'react';
import logoIcon from '../../assets/images/logoIcon.svg';
import logoutIcon from '../../assets/images/logoutSolid.svg';
import { useNavigate } from 'react-router-dom';
import menuIcon from '../../assets/images/barsSolid.svg';
import menuCloseIcon from '../../assets/images/xmarkSolid.svg';
import userIcon from '../../assets/images/userSolid.svg';

const loginServices = new LoginServices();

type HeaderTypeSProps = {
  onToggleMenu: () => void;
  isOpen: boolean;
};

export const Header: React.FC<HeaderTypeSProps> = ({
  onToggleMenu,
  isOpen,
}) => {
  const { setToken } = useContext(AuthorizedContext);
  const navigate = useNavigate();

  const logout = () => {
    loginServices.logout(setToken);
    navigate('/');
  };

  const mobile = window.innerWidth <= 768;
  return (
    <div className="container-header">
      <ul className="navigation-header">
        {!mobile ? (
          <>
            <li className="toggle-menu-button" onClick={onToggleMenu}>
              <img
                src={!isOpen ? menuIcon : menuCloseIcon}
                className="menu-button"
                alt="Menu"
              />
            </li>
            <li>
              <img
                src={logoIcon}
                alt="Logo lm empréstimos"
                className="logo-header"
                onClick={() => navigate('/')}
              />
            </li>
            <li>
              <img
                src={logoutIcon}
                alt="Logout"
                className="logout-header"
                onClick={logout}
              />
            </li>
          </>
        ) : (
          <>
            <li>
              <img
                src={userIcon}
                onClick={() => navigate('/profile')}
                alt="Perfil do usuário"
              />
            </li>
            <li>
              <img
                src={logoIcon}
                alt="Logo lm empréstimos"
                className="logo-header"
                onClick={() => navigate('/')}
              />
            </li>
            <li>
              <img
                src={logoutIcon}
                alt="Logout"
                className="logout-header"
                onClick={logout}
              />
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
