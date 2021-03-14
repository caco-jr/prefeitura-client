import Container from '@material-ui/core/Container';

import * as S from './Header.styles';
import { PROJECT_NAME } from '@utils/strings/index';
import Navbar from '@components/Navbar';

const Header = (): JSX.Element => (
  <S.Wrapper>
    <Container fixed>
      <S.Box>
        <S.Title>{PROJECT_NAME}</S.Title>

        <Navbar />
      </S.Box>
    </Container>
  </S.Wrapper>
);

export default Header;
