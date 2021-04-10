import Image from 'next/image';

import Container from '@material-ui/core/Container';

import * as S from './Highlight.styles';

const HomeHighlight = (): JSX.Element => (
  <Container fixed>
    <S.Wrapper>
      <Image
        src="/images/highlight.jpeg"
        width="1280"
        height="720"
        alt="Campanha de vacinação"
      />

      <Image
        src="/images/yoga.jpeg"
        width="1280"
        height="720"
        alt="Campanha de Yoga"
      />

      <Image
        src="/images/alimentacao.jpeg"
        width="1280"
        height="720"
        alt="Campanha de alimentação"
      />

      <Image
        src="/images/esporte.jpeg"
        width="1280"
        height="720"
        alt="Campanha de esporte"
      />
    </S.Wrapper>
  </Container>
);

export default HomeHighlight;
