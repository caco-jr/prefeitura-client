import React from 'react';

import * as S from './style';
import Layout from '@components/Layout';
import HomeHighlight from './components/Highlight';

export const HomePage = (): JSX.Element => (
  <Layout title="Home">
    <S.Wrapper>
      <HomeHighlight />
    </S.Wrapper>
  </Layout>
);

export default HomePage;
