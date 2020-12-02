import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import api from '~/services/api';

const LikesContext = createContext();

function LikesProvider({ children }) {
  const [localLikes, setLocalLikes] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [haveLikes, setHaveLikes] = useState(false);
  const { id } = useParams();

  const maxLikesperUser = 20;

  // #1 Check if Exists and fetch or set empty item

  useEffect(() => {
    function fetchLikes() {
      const data = localStorage.getItem('@pauleiraWeb:likes');

      if (!data) {
        localStorage.setItem('@pauleiraWeb:likes', JSON.stringify(localLikes));
      } else {
        setLocalLikes(JSON.parse(data));
      }

      setFetched(true);
    }
    if (!fetched) {
      fetchLikes();
    }
  }, [fetched, localLikes]);

  // #2 If Exists in LS, check if already have likes

  useEffect(() => {
    if (localLikes.length) {
      const checkLocal = localLikes.find(e => e.id === id);

      if (checkLocal) {
        setHaveLikes(checkLocal.total);
      }
    }
  }, [id, localLikes]);

  const registerLike = useCallback(
    async amount => {
      const exists = !!localLikes.find(el => el.id === id);

      if (!exists) {
        setLocalLikes(state => [...state, { id, total: amount }]);
        localStorage.setItem(
          '@pauleiraWeb:likes',
          JSON.stringify([...localLikes, { id, total: amount }])
        );
      } else {
        const updatedLikes = localLikes.map(el => {
          return el.id === id ? { ...el, total: el.total + amount } : el;
        });

        setLocalLikes(updatedLikes);
        localStorage.setItem(
          '@pauleiraWeb:likes',
          JSON.stringify(updatedLikes)
        );
      }

      await api.put(`/galleries/${id}/likes/${amount}`);
    },
    [id, localLikes]
  );

  return (
    <LikesContext.Provider
      value={{ localLikes, haveLikes, registerLike, maxLikesperUser }}
    >
      {children}
    </LikesContext.Provider>
  );
}

function useLikes() {
  const context = useContext(LikesContext);

  if (!context) {
    throw new Error('useLikes must be used within Likes Provider');
  }

  return context;
}

LikesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
};

export { LikesProvider, useLikes };
