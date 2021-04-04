import Container from '@material-ui/core/Container';
import Link from 'next/link';

import * as S from './Navbar.styles';

const menuList = [
  { label: 'Saúde', to: '/saude' },
  { label: 'Agropecuária', to: '/' },
  { label: 'Meio Ambiente', to: '/' },
];

const Navbar = (): JSX.Element => (
  <S.Wrapper>
    <Container fixed>
      <S.List>
        {menuList.map(({ label, to }, index) => (
          <Link href={`${to}`} key={`${label}-${index}`}>
            <S.ListItem href={`${to}`}>{label}</S.ListItem>
          </Link>
        ))}
      </S.List>
    </Container>
  </S.Wrapper>
);

export default Navbar;
