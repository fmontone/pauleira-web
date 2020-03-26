import React, { useState, useEffect, useMemo } from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from '~/services/history';

import { ActivePageContext } from '~/contexts/ActivePageContext';
import GlobalStyles from '~/styles/global';

import NavBar from '~/components/NavBar';
import PageWrapper from '~/components/PageWrapper';

function App() {
  const [activePage, setActivePage] = useState(null);

  const providerActivePage = useMemo(() => ({ activePage, setActivePage }), [
    activePage,
    setActivePage,
  ]);

  function updateActivePage() {
    const location = window.location.pathname.split('/')[1];
    setActivePage(location || 'home');
  }

  // TRIGGERS when page history changes
  window.onpopstate = () => updateActivePage();

  useEffect(() => {
    updateActivePage();
  }, []);

  return (
    <Router history={history}>
      <GlobalStyles />
      <ActivePageContext.Provider value={providerActivePage}>
        <PageWrapper isMainPage={activePage === 'home'}>
          <NavBar isMainPage={activePage === 'home'} />
          <Routes />
        </PageWrapper>
      </ActivePageContext.Provider>
    </Router>
  );
}

export default App;
