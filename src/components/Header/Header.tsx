import Container from '@material-ui/core/Container';

import * as S from './Header.styles';
import { PROJECT_NAME } from '@utils/strings/index';

const Header = (): JSX.Element => (
  <S.Wrapper>
    <Container fixed>
      <S.Title>{PROJECT_NAME}</S.Title>
    </Container>
  </S.Wrapper>
);

export default Header;
