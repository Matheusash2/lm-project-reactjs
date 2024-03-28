import { useEffect, useState } from 'react';
import { Layout } from '../components/general/Layout';
import { Loading } from '../components/general/Loading';
import avatarIcon from '../assets/images/avatarSolidGrey.svg';
import { UserServices } from '../services/UserServices';

const userServices = new UserServices();

export const Profile = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [cpf, setCpf] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const userData = async () => {
      try {
        setIsLoading(true);
        const userId = localStorage.getItem('id') || '';
        const user = await userServices.getUser(userId);
        const userData = user.data;

        setName(userData.name || '');
        setUserName(userData.userName || '');
        setLastName(userData.lastName || '');

        const employee = await userServices.getEmployee(userId);
        const employeeData = employee.data;

        setEmail(employeeData.email || '');
        setDateOfBirth(employeeData.dateOfBirth || '');
        setCpf(employeeData.cpf || '');

        setIsLoading(false);
      } catch (e: any) {
        setIsLoading(false);
        console.log('Erro ao caregar dados do usuário: ', e);
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
                  Nome de usuário: <span>{userName}</span>
                </p>
                <p>
                  Nome: <span>{name}</span>
                </p>
                <p>
                  Sobrenome: <span>{lastName}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="profile-details">
            <p>
              Email do usuário: <span>{email}</span>
            </p>
            <p>
              Data de nascimento: <span>{dateOfBirth}</span>
            </p>
            <p>
              CPF: <span>{cpf}</span>
            </p>
          </div>
        </div>
      )}
    </Layout>
  );
};
