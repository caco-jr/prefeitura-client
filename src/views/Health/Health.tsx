import * as S from './Health.styles';
import Layout from '@components/Layout';

export const HealthPage = (): JSX.Element => (
  <Layout title="Health">
    <section className="container">
      <S.Wrapper>
        <h1>Health</h1>
      </S.Wrapper>
    </section>
  </Layout>
);

export default HealthPage;
