import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Icon from '~/components/Icon';
import colors from '~/styles/colors';

import {
  Header,
  Logo,
  Navigation,
  NavToggler,
  Menu,
  QuickLinks,
} from './styles';

export default function NavBar() {
  const [menu, setMenu] = useState(false);

  function handleMenu() {
    setMenu(!menu);
  }

  return (
    <Header data-testid="main-nav">
      <Logo>
        <Link to="/">
          <Icon name="logo-flying-p" color={colors.greyLighter} />
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
    </Header>
  );
}
