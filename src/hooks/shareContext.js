import React, { useEffect, createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ShareContext = createContext();

function ShareProvider({ children }) {
  const [network, setNetWork] = useState();
  const [pageTitle, setPageTitle] = useState();
  const [pageDescription, setPageDescription] = useState();
  const [shareButtonProps, setShareButtonProps] = useState();
  const [media, setMedia] = useState();

  useEffect(() => {
    setShareButtonProps({
      url: window.location.href,
      text: pageTitle,
      longtext: pageDescription,
      media,
    });
  }, [media, network, pageDescription, pageTitle]);

  return (
    <ShareContext.Provider
      value={{
        setNetWork,
        setPageTitle,
        setPageDescription,
        setMedia,
        shareButtonProps,
      }}
    >
      {children}
    </ShareContext.Provider>
  );
}

function useShare() {
  const context = useContext(ShareContext);

  if (!context) {
    throw new Error('useShare must be used inside ShareProvider');
  }

  return context;
}

ShareProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
};

export { ShareProvider, useShare };
