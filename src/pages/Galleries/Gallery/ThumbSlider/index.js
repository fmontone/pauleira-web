import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import useCardSlider from '~/hooks/useCardSlider';

import { PictureSelector } from './styles';

export default function ThumbSlider({ children }) {
  const slider = useRef();
  const cardSlider = useCardSlider(slider);

  return (
    <PictureSelector
      ref={slider}
      onMouseDown={e => cardSlider.mouseDown(e)}
      onMouseLeave={() => cardSlider.mouseLeave}
      onMouseUp={e => cardSlider.mouseUp(e)}
      onMouseMove={e => cardSlider.mouseMove(e)}
      onTouchStart={e => cardSlider.mouseDown(e)}
      onTouchMove={e => cardSlider.mouseMove(e)}
      onTouchEnd={e => cardSlider.mouseUp(e)}
    >
      <div className="picture-selector__wrapper">
        <ul>{children}</ul>
      </div>
    </PictureSelector>
  );
}

ThumbSlider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.func,
  ]).isRequired,
};
