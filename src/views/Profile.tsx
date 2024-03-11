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
            <div className="profile-data-user">
              <p>Name: {name}</p>
              <p>Name de usuário: {userName}</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};
