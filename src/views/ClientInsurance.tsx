import { Layout } from '../components/general/Layout';

export const ClientInsurance = () => {
  return (
    <Layout>
      <div className="container-client-insurance">
        <div className="title-insurance">
          <h2>Seguro desemprego</h2>
        </div>
        <iframe
          src="https://contatos.trabalho.gov.br/"
          title="Site do formulário para liberação do seguro desemprego."
        ></iframe>
      </div>
    </Layout>
  );
};
