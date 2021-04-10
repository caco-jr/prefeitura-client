import React from 'react';

import * as S from './style';
import Layout from '@components/Layout';
import HomeHighlight from './components/Highlight';
import { PROJECT_NAME } from '@utils/strings';

export const HomePage = (): JSX.Element => (
  <Layout title={PROJECT_NAME}>
    <S.Wrapper>
      <HomeHighlight />
    </S.Wrapper>
  </Layout>
);

export default HomePage;
