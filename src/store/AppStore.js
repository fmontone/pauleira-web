import React from 'react';
import PropTypes from 'prop-types';

import { ShowcaseProvider } from './showcaseContext';

function AppStore({ children }) {
  return <ShowcaseProvider>{children}</ShowcaseProvider>;
}

AppStore.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
};

export default AppStore;
