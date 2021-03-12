import Container from '@material-ui/core/Container';

import * as S from './Navbar.styles';

const menuList = [
  { label: 'Saúde' },
  { label: 'Agropecuária' },
  { label: 'Meio Ambiente' },
];

const Navbar = (): JSX.Element => (
  <S.Wrapper>
    <Container fixed>
      <S.List>
        {menuList.map(({ label }, index) => (
          <S.ListItem key={`${label}-${index}`}>{label}</S.ListItem>
        ))}
      </S.List>
    </Container>
  </S.Wrapper>
);

export default Navbar;
