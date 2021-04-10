import Image from 'next/image';

import Container from '@material-ui/core/Container';

import * as S from './Highlight.styles';

const HomeHighlight = (): JSX.Element => (
  <S.Wrapper>
    <Container fixed>
      <Image
        src="/images/vacina.png"
        width="1166"
        height="217"
        alt="Campanha de vacinação"
      />
    </Container>
  </S.Wrapper>
);

export default HomeHighlight;
