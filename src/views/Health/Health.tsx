import Link from 'next/link';
import Image from 'next/image';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import * as S from './Health.styles';
import Layout from '@components/Layout';

export const HealthPage = (): JSX.Element => (
  <Layout title="Saúde">
    <section className="container">
      <S.Wrapper>
        <S.Title>O que você gostaria de consultar?</S.Title>

        <S.CardWrapper>
          <Link href="/consultas-medicas">
            <Card className="c-card">
              <CardContent className="c-card__content">
                <Image
                  src="/images/advices-people-icon.png"
                  width="100"
                  height="100"
                  alt="Campanha de vacinação"
                  className="c-card__img"
                />
                Consultas médicas
              </CardContent>
            </Card>
          </Link>

          <Link href="/centros-de-saude">
            <Card className="c-card">
              <CardContent className="c-card__content">
                <Image
                  src="/images/hospitals-icon.png"
                  width="100"
                  height="100"
                  alt="Campanha de vacinação"
                  className="c-card__img"
                />
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
