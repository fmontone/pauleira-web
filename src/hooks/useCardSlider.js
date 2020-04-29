import { useState } from 'react';

export default function useCardSlider(slider) {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [x, setX] = useState(0);
  const [walk, setWalk] = useState(0);

  function mouseMove(e) {
    const getPageX = e.type === 'touchmove' ? e.touches[0].pageX : e.pageX;

    if (!isDown) return;

    setX(getPageX - scrollLeft);
    setWalk((x - startX) * 2);

    if (slider.current.scrollLeft >= 0)
      slider.current.scrollLeft = scrollLeft - walk;
  }

  function mouseDown(e) {
    if (e.type !== 'touchstart') {
      e.preventDefault();
    }

    const getPageX = e.type === 'touchstart' ? e.touches[0].pageX : e.pageX;

    setIsDown(true);
    setScrollLeft(slider.current.scrollLeft);
    setStartX(getPageX - scrollLeft);
  }

  function mouseLeave() {
    setIsDown(false);
  }

  function mouseUp(e) {
    if (e.type !== 'touchend') e.preventDefault();

    const getPageX = e.type === 'touchstart' ? e.touches[0].pageX : e.pageX;

    setIsDown(false);
    setScrollLeft(slider.current.scrollLeft);
    setStartX(getPageX - scrollLeft);
  }

  return {
    mouseMove,
    mouseDown,
    mouseLeave,
    mouseUp,
  };
}
