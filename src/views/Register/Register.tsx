import * as S from './Register.styles';
import Layout from '@components/Layout';
import RegisterForm from './components/Form';

export const RegisterPage = (): JSX.Element => (
  <Layout title="Register">
    <section className="container">
      <S.Wrapper>
        <h1>Cadastro</h1>

        <RegisterForm />
      </S.Wrapper>
    </section>
  </Layout>
);

export default RegisterPage;
