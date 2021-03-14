import Link from 'next/link';
import Container from '@material-ui/core/Container';

import * as S from './Header.styles';
import { PROJECT_NAME } from '@utils/strings/index';
import Navbar from '@components/Navbar';

const Header = (): JSX.Element => (
  <S.Wrapper>
    <Container fixed>
      <S.Box>
        <Link href="/">
          <S.Title>{PROJECT_NAME}</S.Title>
        </Link>

        <Navbar />
      </S.Box>
    </Container>
  </S.Wrapper>
);

export default Header;
