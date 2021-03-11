import Container from '@material-ui/core/Container';

import * as S from './Header.styles';

const Header = (): JSX.Element => (
  <S.Wrapper>
    <Container fixed>
      <h1>Header</h1>
    </Container>
  </S.Wrapper>
);

export default Header;
