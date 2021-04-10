import { useState } from 'react';

import * as S from './HealthCenters.styles';
import Layout from '@components/Layout';
import { IHealthCenter } from '@interfaces/healthCenterInterface';
import HealthCentersList from './components/List';
import HealthCentersFilter from './components/Filter';

type IProps = {
  list: IHealthCenter[];
};

export const HealthCentersPage = ({ list }: IProps): JSX.Element => {
  const [filteredList, setFilteredList] = useState<IHealthCenter[]>(list);

  return (
    <Layout title="Instituições de Saúde">
      <section className="container">
        <S.Wrapper>
          <h1>Instituições de Saúde</h1>

          <HealthCentersFilter
            list={list}
            handleFilteredList={setFilteredList}
          />

          <HealthCentersList list={filteredList} />
        </S.Wrapper>
      </section>
    </Layout>
  );
};

export default HealthCentersPage;
