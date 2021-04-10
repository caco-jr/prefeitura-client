import Container from '@material-ui/core/Container';

import * as S from './Footer.styles';

const Footer = (): JSX.Element => (
  <S.Wrapper>
    <Container fixed>
      <S.Text>
        O conteúdo é meramente ilustrativo, trata-se de um projeto de TCC para a
        faculdade PUC Minas
      </S.Text>
    </Container>
  </S.Wrapper>
);

export default Footer;
