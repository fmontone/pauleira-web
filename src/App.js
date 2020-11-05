import React, { useState, useEffect, useMemo } from 'react';
import { Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Routes from './routes';
import history from '~/services/history';

import { ActivePageContext } from '~/contexts';
import GlobalStyles from '~/styles/global';

import NavBar from '~/components/NavBar';
import PageWrapper from '~/components/PageWrapper';
import Footer from '~/components/Footer';

function App() {
  const [activePage, setActivePage] = useState(null);

  const providerActivePage = useMemo(() => ({ activePage, setActivePage }), [
    activePage,
    setActivePage,
  ]);

  function updateActivePage() {
    const location = window.location.pathname;
    setActivePage(location || '/');
  }

  // TRIGGERS when page history changes

  useEffect(() => {
    updateActivePage();
    window.onpopstate = () => updateActivePage();
  });

  return (
    <Router history={history}>
      <GlobalStyles />
      <ActivePageContext.Provider value={providerActivePage}>
        <PageWrapper
          isMainPage={activePage === '/'}
          style={{ overflowX: 'hidden' }}
        >
          <Helmet>
            <title>Pauleira Guitars - Cursos de Luthieria</title>
            <link rel="canonical" href="https://www.pauleira.com.br" />
          </Helmet>

          <NavBar isMainPage={activePage === '/'} />
          <Routes />
          {activePage !== '/' && <Footer />}
        </PageWrapper>
      </ActivePageContext.Provider>
    </Router>
  );
}

export default App;
