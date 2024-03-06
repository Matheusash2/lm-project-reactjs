import { useNavigate } from "react-router-dom";
import userIcon from "../../assets/images/userSolid.svg";
import homeIcon from "../../assets/images/houseSolid.svg";
import arrowLeftIcon from "../../assets/images/caretLeftSolid.svg";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <nav className="container-footer">
      <ul className="navigation-footer">
        <li>
          <img src={arrowLeftIcon} onClick={() => navigate(-1)} />
        </li>
        <li>
          <img src={homeIcon} onClick={() => navigate("/home")}/>
        </li>
        <li>
          <img src={userIcon} onClick={() => navigate("/profile")}/>
        </li>
      </ul>
    </nav>
  );
};
