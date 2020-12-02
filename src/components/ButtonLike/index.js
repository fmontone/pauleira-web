import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Confetti from 'react-dom-confetti';

import { useLikes } from '~/hooks/likesContext';

import colors from '~/styles/colors';

import Icon from '~/components/Icon';
import { Container, Button } from './styles';

const confettiConfig = {
  angle: '249',
  spread: '360',
  startVelocity: 40,
  elementCount: '143',
  dragFriction: 0.12,
  duration: '1000',
  stagger: '0',
  width: '8px',
  height: '8px',
  perspective: '1000px',
  colors: [
    colors.primary,
    colors.secondary,
    colors.terceary,
    colors.blackDeep,
    colors.statusInfo,
  ],
};

export default function ButtonLike({ likes }) {
  const [animate, setAnimate] = useState(false);
  const [counter, setCounter] = useState(0);
  const [sessionCounter, setSessionCounter] = useState(0);
  const [totalLikes, setTotalLikes] = useState(null);
  const [maxLikes, setMaxlikes] = useState(false);

  const { haveLikes, registerLike, maxLikesperUser } = useLikes();

  const delayRef = useRef(null);

  useEffect(() => {
    if (!totalLikes) {
      setTotalLikes(likes);
    }
  }, [likes, totalLikes]);

  useEffect(() => {
    if (haveLikes === maxLikesperUser) {
      setMaxlikes(true);
    }
  }, [haveLikes, maxLikesperUser]);

  useEffect(() => {
    const delayRegister = () => {
      // Start new Timer
      delayRef.current = setTimeout(() => {
        setCounter(0);
        registerLike(counter);
        delayRef.current = null;
      }, 5000);
    };

    if (counter > 0) {
      // IF timer, reset
      if (delayRef.current) {
        clearTimeout(delayRef.current);
        delayRef.current = null;
      }

      delayRegister();
    }
  }, [counter, registerLike]);

  const handleIncrement = (bypass = false) => {
    setAnimate(true);
    setCounter(state => (bypass ? 0 : state + 1));
    setSessionCounter(state => state + 1);
    setTotalLikes(state => state + 1);

    if (bypass) {
      registerLike(1);
    }
  };

  const handleClick = () => {
    if (!haveLikes && sessionCounter <= maxLikesperUser) {
      // There is no likes
      handleIncrement();
    }

    if (haveLikes && haveLikes === maxLikesperUser - 1) {
      // It's your last like pal!
      handleIncrement(true);
      setMaxlikes(true);
      return;
    }

    if (haveLikes && haveLikes <= maxLikesperUser && !maxLikes) {
      // You can go as far as thre max allowed!
      handleIncrement();
    }
  };

  return (
    <Container>
      <Button type="button" onClick={handleClick}>
        {!maxLikes ? (
          <Icon name="social-like-heavymetal" size="32" color="#ffff" />
        ) : (
          <span>MAX 50</span>
        )}
        <Confetti active={animate} config={confettiConfig} />
      </Button>
      <div
        className={`button-like__count ${
          animate ? 'button-like__count--animated ' : ''
        }`}
        onAnimationEnd={() => setAnimate(false)}
      >
        +{sessionCounter}
      </div>
      <div className="button-like__total">{totalLikes}</div>
    </Container>
  );
}

ButtonLike.propTypes = {
  likes: PropTypes.number.isRequired,
};
