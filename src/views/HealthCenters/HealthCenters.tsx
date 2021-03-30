import * as S from './HealthCenters.styles';
import Layout from '@components/Layout';

export const HealthCentersPage = (): JSX.Element => (
  <Layout title="Health centers">
    <section className="container">
      <S.Wrapper>
        <h1>Centros de Saúde</h1>
      </S.Wrapper>
    </section>
  </Layout>
);

export default HealthCentersPage;
