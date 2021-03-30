import * as S from './HealthCenters.styles';
import Layout from '@components/Layout';
import { IHealthCenter } from '@interfaces/healthCenterInterface';
import HealthCentersList from './components/List';

type IProps = {
  list: IHealthCenter[];
};

export const HealthCentersPage = ({ list }: IProps): JSX.Element => (
  <Layout title="Health centers">
    <section className="container">
      <S.Wrapper>
        <h1>Instituições de Saúde</h1>

        <HealthCentersList list={list} />
      </S.Wrapper>
    </section>
  </Layout>
);

export default HealthCentersPage;
