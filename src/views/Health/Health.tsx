import Container from '@material-ui/core/Container';

import * as S from './Health.styles';
import Layout from '@components/Layout';

export const HealthPage = (): JSX.Element => (
  <Layout title="Health">
    <S.Wrapper>
      <Container fixed>
        <h1>Health</h1>
      </Container>
    </S.Wrapper>
  </Layout>
);

export default HealthPage;
