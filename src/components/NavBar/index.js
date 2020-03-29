import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ActivePageContext } from '~/contexts/ActivePageContext';
import { useWindowSize } from '~/hooks/useWindowSize';

import Icon from '~/components/Icon';
import QuickLinks from '~/components/QuickLinks';

import colors from '~/styles/colors';
import PauleiraLogo from '~/assets/svg/pauleira-logo.svg';
import { windowSize as breakePoint } from '~/styles/queries';
import {
  Header,
  Container,
  Logo,
  Navigation,
  NavToggler,
  Menu,
} from './styles';

export default function NavBar({ isMainPage }) {
  const [menu, setMenu] = useState(false);
  const { activePage, setActivePage } = useContext(ActivePageContext);

  const { windowWidth } = useWindowSize();

  function handleMenu() {
    setMenu(!menu);
  }

  return (
    <Header data-testid="NavBar" isMainPage={isMainPage}>
      <Container>
        <Logo size={windowWidth < breakePoint.tabletLs ? 'small' : 'large'}>
          <Link to="/">
            {windowWidth < breakePoint.tabletLs ? (
              <Icon name="logo-flying-p" color={colors.greyLighter} />
            ) : (
              <img src={PauleiraLogo} alt="Pauleira Guitars" />
            )}
          </Link>
        </Logo>

        {windowWidth < breakePoint.tabletLs && <QuickLinks />}

        <Navigation>
          <NavToggler menu={menu} onClick={handleMenu}>
            <div className={menu ? 'open' : ''} />
            <div className={menu ? 'open' : ''} />
            <div className={menu ? 'open' : ''} />
          </NavToggler>

          <Menu menu={menu} onClick={handleMenu}>
            <li>
              <Link
                to="/"
                className={activePage === 'home' ? 'isActive' : ''}
                onClick={() => setActivePage('home')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/sobre"
                onClick={() => setActivePage('sobre')}
                className={activePage === 'sobre' ? 'isActive' : ''}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="/cursos"
                onClick={() => setActivePage('cursos')}
                className={activePage === 'cursos' ? 'isActive' : ''}
              >
                Cursos
              </Link>
            </li>
            <li>
              <Link
                to="/galeria"
                onClick={() => setActivePage('galeria')}
                className={activePage === 'galeria' ? 'isActive' : ''}
              >
                Galeria
              </Link>
            </li>
            <li>
              <Link
                to="/contato"
                onClick={() => setActivePage('contato')}
                className={activePage === 'contato' ? 'isActive' : ''}
              >
                Contato
              </Link>
            </li>
            <li>
              <Link
                to="/endereco"
                onClick={() => setActivePage('endereco')}
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

NavBar.propTypes = {
  isMainPage: PropTypes.bool,
};

NavBar.defaultProps = {
  isMainPage: false,
};
