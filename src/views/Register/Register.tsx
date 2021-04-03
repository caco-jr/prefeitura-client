import * as S from './Register.styles';
import Layout from '@components/Layout';

export const RegisterPage = (): JSX.Element => (
  <Layout title="Register">
    <section className="container">
      <S.Wrapper>
        <h1>Cadastro</h1>
      </S.Wrapper>
    </section>
  </Layout>
);

export default RegisterPage;
