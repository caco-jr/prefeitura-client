import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';

import { FiMenu } from 'react-icons/fi';

import * as S from './Navbar.styles';

const menuList = [
  { label: 'Saúde', to: '/saude' },
  { label: 'Agropecuária', to: '/' },
  { label: 'Meio Ambiente', to: '/' },
];

const Navbar = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { push } = useRouter();
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <S.Wrapper>
      <Container fixed>
        <Hidden smDown>
          <S.List>
            {menuList.map(({ label, to }, index) => (
              <Link href={`${to}`} key={`${label}-${index}`}>
                <S.ListItem href={`${to}`}>{label}</S.ListItem>
              </Link>
            ))}
          </S.List>
        </Hidden>

        <Hidden smUp>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <FiMenu className="menu-icon" />
          </IconButton>

          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                width: '20ch',
              },
            }}
          >
            {menuList.map(({ label, to }, index) => (
              <MenuItem
                key={index}
                onClick={() => {
                  handleClose();
                  push(to);
                }}
              >
                {label}
              </MenuItem>
            ))}
          </Menu>
        </Hidden>
      </Container>
    </S.Wrapper>
  );
};

export default Navbar;
