import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useWindowSize } from '~/lib/useWindoSize';

import Icon from '~/components/Icon';
import colors from '~/styles/colors';
import { windowSize as breakePoint } from '~/styles/queries';

import PauleiraLogo from '~/assets/svg/pauleira-logo.svg';
import {
  Header,
  Container,
  Logo,
  Navigation,
  NavToggler,
  Menu,
  QuickLinks,
} from './styles';

export default function NavBar() {
  const [menu, setMenu] = useState(false);
  const size = useWindowSize();

  function handleMenu() {
    setMenu(!menu);
  }

  return (
    <Header data-testid="main-nav">
      <Container>
        <Logo size={size.width < breakePoint.tabletLs ? 'small' : 'large'}>
          <Link to="/">
            {size.width < breakePoint.tabletLs ? (
              <Icon name="logo-flying-p" color={colors.greyLighter} />
            ) : (
              <img
                src={PauleiraLogo}
                style={{ fill: 'red' }}
                alt="Pauleira Guitars"
              />
            )}
          </Link>
        </Logo>

        <QuickLinks>
          <li>
            <Link to="/contact">
              <Icon name="social-contact" color={colors.greyHeavy} />
            </Link>
          </li>
          <li>
            <a href="http://www.youtube.com/pauleira">
              <Icon name="social-youtube" color={colors.greyHeavy} />
            </a>
          </li>
          <li>
            <a href="http://www.youtube.com/pauleira">
              <Icon name="social-instagram" color={colors.greyHeavy} />
            </a>
          </li>
          <li>
            <a href="http://www.youtube.com/pauleira">
              <Icon name="social-facebook" color={colors.greyHeavy} />
            </a>
          </li>
        </QuickLinks>

        <Navigation>
          <NavToggler menu={menu} onClick={handleMenu}>
            <div className={menu ? 'open' : ''} />
            <div className={menu ? 'open' : ''} />
            <div className={menu ? 'open' : ''} />
          </NavToggler>

          <Menu menu={menu}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/cursos">Cursos</Link>
            </li>
            <li>
              <Link to="/galeria">Galeria</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </Menu>
        </Navigation>
      </Container>
    </Header>
  );
}
