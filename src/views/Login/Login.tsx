import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '@material-ui/core/Button';

import * as S from './Login.styles';
import Layout from '@components/Layout';
import LoginForm from './components/Form';

export const LoginPage = (): JSX.Element => {
  const { query } = useRouter();

  return (
    <Layout title="Login">
      <section className="container">
        <S.Wrapper>
          <S.Title>Login</S.Title>

          <LoginForm />

          <Link href={{ pathname: '/cadastro', query }}>
            <Button
              variant="outlined"
              color="primary"
              className="button-redirect"
            >
              Não tem conta? Crie uma aqui
            </Button>
          </Link>
        </S.Wrapper>
      </section>
    </Layout>
  );
};

export default LoginPage;
