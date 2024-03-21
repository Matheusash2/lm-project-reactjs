import { Layout } from '../components/general/Layout';
import homeFinance from '../assets/images/homeFinance.svg';

export const Home = () => {
  return (
    <Layout isHome={true}>
      <div className="container-home">
        <img src={homeFinance} alt="Imagem da home" />
      </div>
    </Layout>
  );
};
