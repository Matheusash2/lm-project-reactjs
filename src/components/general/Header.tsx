import { LoginServices } from '../../services/LoginServices';
import { AuthorizedContext } from '../../App';
import { useContext } from 'react';
import logoIcon from '../../assets/images/logoIcon.svg';
import logoutIcon from '../../assets/images/logoutSolid.svg';
import { useNavigate } from 'react-router-dom';
import menuIcon from '../../assets/images/barsSolid.svg';
import menuCloseIcon from '../../assets/images/xmarkSolid.svg';

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
      <div className="navigation-header">
        {!mobile && (
          <div className="toggle-menu-button" onClick={onToggleMenu}>
            <img
              src={!isOpen ? menuIcon : menuCloseIcon}
              className="menu-button"
              alt="Menu"
            />
          </div>
        )}
        <img
          src={logoIcon}
          alt="Logo lm empréstimos"
          className="logo-header"
          onClick={() => navigate('/')}
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
