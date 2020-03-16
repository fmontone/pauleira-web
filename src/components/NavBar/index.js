import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { ActivePageContext } from '~/contexts/ActivePageContext';
import { useWindowSize } from '~/hooks/useWindoSize';

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
  const { activePage, setActivePage } = useContext(ActivePageContext);

  const size = useWindowSize();

  function handleMenu() {
    setMenu(!menu);
  }

  function handleNavPosition(page) {
    setActivePage(page);
  }

  return (
    <Header data-testid="NavBar">
      <Container>
        <Logo size={size.width < breakePoint.tabletLs ? 'small' : 'large'}>
          <Link to="/">
            {size.width < breakePoint.tabletLs ? (
              <Icon name="logo-flying-p" color={colors.greyLighter} />
            ) : (
              <img src={PauleiraLogo} alt="Pauleira Guitars" />
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
            <li>{activePage}</li>
            <li>
              <Link
                to="/"
                onClick={() => handleNavPosition('home')}
                className={activePage === 'home' ? 'isActive' : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/sobre"
                onClick={() => handleNavPosition('sobre')}
                className={activePage === 'sobre' ? 'isActive' : ''}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="/cursos"
                onClick={() => handleNavPosition('cursos')}
                className={activePage === 'cursos' ? 'isActive' : ''}
              >
                Cursos
              </Link>
            </li>
            <li>
              <Link
                to="/galeria"
                onClick={() => handleNavPosition('galeria')}
                className={activePage === 'galeria' ? 'isActive' : ''}
              >
                Galeria
              </Link>
            </li>
            <li>
              <Link
                to="/contato"
                onClick={() => handleNavPosition('contato')}
                className={activePage === 'contato' ? 'isActive' : ''}
              >
                Contato
              </Link>
            </li>
            <li>
              <Link
                to="/endereco"
                onClick={() => handleNavPosition('endereco')}
                className={activePage === 'endereco' ? 'isActive' : ''}
              >
                Endereço
              </Link>
            </li>
          </Menu>
        </Navigation>
      </Container>
    </Header>
  );
}
