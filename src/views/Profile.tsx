import { useEffect, useState } from "react";
import { Layout } from "../components/general/Layout";
import { Loading } from "../components/general/Loading";
import avatarIcon from "../assets/images/avatarSolidGrey.svg";

export const Profile = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [id, setId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const userData = () => {
      try {
        setIsLoading(true);
        setName(localStorage.getItem("name") || "");
        setUserName(localStorage.getItem("userName") || "");
        setId(localStorage.getItem("id") || "");
        setIsLoading(false);
      } catch (e: any) {
        setIsLoading(false);
        console.log("Erro ao caregar dados do usuário: ", e);
      }
    };

    userData();
  }, []);

  return (
    <Layout>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container-profile">
          <div className="container-profile-data">
            <div className="profile-avatar">
              <img src={avatarIcon} alt="Avatar do usuário" />
            </div>
            <div className="profile-data">
              <div className="profile-tittle">
                <h1>Dados do Usuário</h1>
              </div>
              <div className="profile-data-user">
                <p>
                  Nome: <span>{name}</span>
                </p>
                <p>
                  Nome de usuário: <span>{userName}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="profile-details">
            <h1>detalhes</h1>
          </div>
        </div>
      )}
    </Layout>
  );
};
