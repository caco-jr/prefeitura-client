import React from 'react';

import { HomeTitle } from './style';
import Layout from '@components/Layout';
import HomeHero from './components/Hero';
import HomeHighlight from './components/Highlight';

export const HomePage = (): JSX.Element => (
  <Layout title="Home">
    <section className="container">
      <HomeHero />
      <HomeHighlight />
      <HomeTitle>Hello World!</HomeTitle>
    </section>
  </Layout>
);

export default HomePage;
