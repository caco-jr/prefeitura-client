import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '@material-ui/core/Button';

import * as S from './Register.styles';
import Layout from '@components/Layout';
import RegisterForm from './components/Form';

export const RegisterPage = (): JSX.Element => {
  const { query } = useRouter();

  return (
    <Layout title="Cadastro">
      <section className="container">
        <S.Wrapper>
          <S.Title>Cadastro</S.Title>

          <RegisterForm />

          <Link href={{ pathname: '/login', query }}>
            <Button
              variant="outlined"
              color="primary"
              className="button-redirect"
            >
              Já tem uma conta? Entre aqui
            </Button>
          </Link>
        </S.Wrapper>
      </section>
    </Layout>
  );
};

export default RegisterPage;
