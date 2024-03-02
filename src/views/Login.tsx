import { useContext, useEffect, useState } from "react";
import { PublicInput } from "../components/general/PublicInput";
import logo from "../assets/images/logo_LM.svg";
import userIcon from "../assets/images/userSolid.svg";
import userIconGrey from "../assets/images/userSolidGrey.svg";
import keyIcon from "../assets/images/keySolid.svg";
import keyIconGrey from "../assets/images/keySolidGrey.svg";
import { LoadingBtn } from "../components/general/LoadingBtn";
import { AuthorizedContext } from "../App";
import { LoginServices } from "../services/LoginServices";

const loginService = new LoginServices();

export const Login = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {}, []);

  const { setToken } = useContext(AuthorizedContext);

  const doLogin = async () => {
    try {
      setError("");
      if (
        !userName ||
        userName.trim().length < 4 ||
        !password ||
        password.trim().length < 4
      ) {
        setError("Favor preencher corretamente os campos.");
      }
      setLoading(true);
      await loginService.login({ userName, password }, setToken);
      setLoading(false);
    } catch (e: any) {
      console.log("Erro ao efetuar o login:", e);
      setLoading(false);
      if (e?.response?.data?.message) {
        return setError(e?.response?.data?.message);
      }
      return setError("Erro ao tentar efetuar novamente o login.");
    }
  };

  return (
    <div className="container-login">
      <img src={logo} alt="Logo da LM" className="logo" />
      <form>
        {error && <p className="error">{error}</p>}
        <PublicInput
          icon={userName ? userIcon : userIconGrey}
          name="Nome do usuário"
          type="text"
          alt="Nome do usuário"
          value={userName}
          setValue={setUserName}
        />
        <PublicInput
          icon={password ? keyIcon : keyIconGrey}
          name="Senha do usuário"
          type="password"
          alt="Senha do usuário"
          value={password}
          setValue={setPassword}
        />
        <button
          type="button"
          onClick={doLogin}
          disabled={loading}
          className={"loginBtn " + (userName && password ? "" : "disabledBtn")}
        >
          {loading ? <LoadingBtn /> : "Login"}
        </button>
      </form>
    </div>
  );
};
