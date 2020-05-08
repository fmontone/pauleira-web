import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ActivePageContext } from '~/contexts';
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

  function handleMenuToggle() {
    setMenu(!menu);
    window.scrollTo(0, 0);
  }

  return (
    <Header data-testid="NavBar" isMainPage={isMainPage}>
      <Container>
        <Logo size={windowWidth < breakePoint.tabletLs ? 'small' : 'large'}>
          <Link to="/" onClick={() => setActivePage('/')}>
            {windowWidth < breakePoint.tabletLs ? (
              <Icon name="logo-flying-p" color={colors.greyLighter} />
            ) : (
              <img src={PauleiraLogo} alt="Pauleira Guitars" />
            )}
          </Link>
        </Logo>

        {windowWidth < breakePoint.tabletLs && <QuickLinks />}

        <Navigation>
          <NavToggler menu={menu} onClick={handleMenuToggle}>
            <div className={menu ? 'open' : ''} />
            <div className={menu ? 'open' : ''} />
            <div className={menu ? 'open' : ''} />
          </NavToggler>

          <Menu menu={menu} onClick={handleMenuToggle}>
            <li>
              <Link
                to="/"
                className={activePage === '/' ? 'isActive' : ''}
                onClick={() => setActivePage('/')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/sobre"
                onClick={() => setActivePage('/sobre')}
                className={activePage === '/sobre' ? 'isActive' : ''}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="/cursos"
                onClick={() => setActivePage('/cursos')}
                className={activePage === '/cursos' ? 'isActive' : ''}
              >
                Cursos
              </Link>
            </li>
            <li>
              <Link
                to="/galerias"
                onClick={() => setActivePage('/galerias')}
                className={activePage === '/galerias' ? 'isActive' : ''}
              >
                Galeria
              </Link>
            </li>
            <li>
              <Link
                to="/contato"
                onClick={() => setActivePage('/contato')}
                className={activePage === '/contato' ? 'isActive' : ''}
              >
                Contato
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
