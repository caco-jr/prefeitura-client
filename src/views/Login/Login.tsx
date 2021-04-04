import * as S from './Login.styles';
import Layout from '@components/Layout';
import LoginForm from './components/Form';

export const LoginPage = (): JSX.Element => (
  <Layout title="Login">
    <section className="container">
      <S.Wrapper>
        <S.Title>Login</S.Title>

        <LoginForm />
      </S.Wrapper>
    </section>
  </Layout>
);

export default LoginPage;
