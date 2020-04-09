import React, { useState, useRef } from 'react';

import { Container } from './styles';
import ButtonCustom from '~/components/ButtonCustom';

import PaulaBifulco from '~/assets/dummyImage-paulaBifulco-2.jpg';

export default function CardCourses() {
  const [mouseDown, setMouseDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [x, setX] = useState(0);
  const [walk, setWalk] = useState(0);

  const slider = useRef();

  /*
    At first it was created for supporting mouse events,
    and then we just check event type, and if it's touch-kind event
    we get the pageX from the appropriate source: touches
  */

  function handleMouseDown(e) {
    if (e.type !== 'touchstart') {
      e.preventDefault();
    }

    const getPageX = e.type === 'touchstart' ? e.touches[0].pageX : e.pageX;

    setMouseDown(true);
    setScrollLeft(slider.current.scrollLeft);
    setStartX(getPageX - scrollLeft);
  }

  function handleMouseLeave() {
    setMouseDown(false);
  }

  function handleMouseUp(e) {
    if (e.type !== 'touchend') e.preventDefault();

    const getPageX = e.type === 'touchstart' ? e.touches[0].pageX : e.pageX;

    setMouseDown(false);
    setScrollLeft(slider.current.scrollLeft);
    setStartX(getPageX - scrollLeft);
  }

  function handleMouseMove(e) {
    const getPageX = e.type === 'touchmove' ? e.touches[0].pageX : e.pageX;

    if (!mouseDown) return;

    setX(getPageX - scrollLeft);
    setWalk((x - startX) * 2);

    if (slider.current.scrollLeft >= 0)
      slider.current.scrollLeft = scrollLeft - walk;
  }

  return (
    <Container
      ref={slider}
      onMouseDown={e => handleMouseDown(e)}
      onMouseLeave={handleMouseLeave}
      onMouseUp={e => handleMouseUp(e)}
      onMouseMove={e => handleMouseMove(e)}
      onTouchStart={e => handleMouseDown(e)}
      onTouchMove={e => handleMouseMove(e)}
      onTouchEnd={e => handleMouseUp(e)}
    >
      <div className="card-slider">
        <div className="card-slider__card">
          <h3>Setup Básico</h3>
          <ButtonCustom color="#fff" navTo="/cursos/setup-basico">
            Saiba Mais
          </ButtonCustom>
          <div className="card-slider__overlay" />
          <img
            src={PaulaBifulco}
            alt="Paula Bifulco Curso de Regulagem Básica de Guitarras e Contrabaixos"
          />
        </div>
        <div className="card-slider__card">
          <h3>Setup Básico</h3>
          <ButtonCustom color="#fff">Saiba Mais</ButtonCustom>
          <div className="card-slider__overlay" />
          <img
            src={PaulaBifulco}
            alt="Paula Bifulco Curso de Regulagem Básica de Guitarras e Contrabaixos"
          />
        </div>
        <div className="card-slider__card">
          <h3>Setup Básico</h3>
          <ButtonCustom color="#fff">Saiba Mais</ButtonCustom>
          <div className="card-slider__overlay" />
          <img
            src={PaulaBifulco}
            alt="Paula Bifulco Curso de Regulagem Básica de Guitarras e Contrabaixos"
          />
        </div>
        <div className="card-slider__card">
          <h3>Setup Básico</h3>
          <ButtonCustom color="#fff">Saiba Mais</ButtonCustom>
          <div className="card-slider__overlay" />
          <img
            src={PaulaBifulco}
            alt="Paula Bifulco Curso de Regulagem Básica de Guitarras e Contrabaixos"
          />
        </div>
        <div className="card-slider__card">
          <h3>Setup Básico</h3>
          <ButtonCustom color="#fff">Saiba Mais</ButtonCustom>
          <div className="card-slider__overlay" />
          <img
            src={PaulaBifulco}
            alt="Paula Bifulco Curso de Regulagem Básica de Guitarras e Contrabaixos"
          />
        </div>
      </div>
    </Container>
  );
}
