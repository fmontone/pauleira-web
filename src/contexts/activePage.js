import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ActivePageContext = createContext(null);

export const ActivePageProvider = ({ children }) => {
  const [activePage, setActivePage] = useState('');

  return (
    <ActivePageContext.Provider
      value={{
        activePage,
        setActivePage,
      }}
    >
      {children}
    </ActivePageContext.Provider>
  );
};

ActivePageProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
};
