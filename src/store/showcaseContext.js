import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import api from '~/services/api';

const ShowcaseContext = createContext();

function ShowcaseProvider({ children }) {
  const [loadingGalleries, setLoadingGalleries] = useState(true);
  const [fetched, setFetched] = useState(false);
  const [canFetch, setCanFetch] = useState(false);
  const [galleries, setGalleries] = useState([]);
  const [galleriesCache, setGalleriesCache] = useState([]);

  useEffect(() => {
    async function fetchGalleries() {
      console.log('FETCH GALLERIES');
      const { data } = await api.get('/galleries');

      setGalleries(data);
      setGalleriesCache(data);
      setFetched(true);
      setLoadingGalleries(false);
    }

    if (canFetch && !fetched) fetchGalleries();
  }, [canFetch, fetched]);

  return (
    <ShowcaseContext.Provider
      value={{ galleries, loadingGalleries, setCanFetch }}
    >
      {children}
    </ShowcaseContext.Provider>
  );
}

function useShowcase() {
  const context = useContext(ShowcaseContext);

  if (!context) {
    throw new Error('useShowcase must be used inside showcaseProvider');
  }

  return context;
}

ShowcaseProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
};

export { ShowcaseProvider, useShowcase };
