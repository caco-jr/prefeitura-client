import Container from '@material-ui/core/Container';

import * as S from './Footer.styles';

const Footer = (): JSX.Element => (
  <S.Wrapper>
    <Container fixed>
      <S.Text>Conteúdo educacional - Prova de conceito TCC PUC Minas</S.Text>
    </Container>
  </S.Wrapper>
);

export default Footer;
