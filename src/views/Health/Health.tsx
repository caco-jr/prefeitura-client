import * as S from './Health.styles';
import Link from 'next/link';
import Layout from '@components/Layout';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export const HealthPage = (): JSX.Element => (
  <Layout title="Saúde">
    <section className="container">
      <S.Wrapper>
        <S.Title>O que você gostaria de consultar?</S.Title>

        <S.CardWrapper>
          <Link href="/consultas-medicas">
            <Card className="c-card">
              <CardContent className="c-card__content">
                Consultas médicas
              </CardContent>
            </Card>
          </Link>

          <Link href="/centros-de-saude">
            <Card className="c-card">
              <CardContent className="c-card__content">
                Instituições de saúde
              </CardContent>
            </Card>
          </Link>
        </S.CardWrapper>
      </S.Wrapper>
    </section>
  </Layout>
);

export default HealthPage;
