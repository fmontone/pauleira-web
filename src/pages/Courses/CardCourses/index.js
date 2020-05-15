import React, { useRef } from 'react';

import useCardSlider from '~/hooks/useCardSlider';

import { Container } from './styles';
import ButtonCustom from '~/components/ButtonCustom';

import PaulaBifulco from '~/assets/dummyImage-paulaBifulco-2.jpg';

export default function CardCourses() {
  const slider = useRef();
  const cardSlider = useCardSlider(slider);

  return (
    <Container
      ref={slider}
      onMouseDown={e => cardSlider.mouseDown(e)}
      onMouseLeave={cardSlider.mouseLeave}
      onMouseUp={e => cardSlider.mouseUp(e)}
      onMouseMove={e => cardSlider.mouseMove(e)}
      onTouchStart={e => cardSlider.mouseDown(e)}
      onTouchMove={e => cardSlider.mouseMove(e)}
      onTouchEnd={e => cardSlider.mouseUp(e)}
    >
      <div className="card-slider">
        <div className="card-slider__card">
          <h3>Setup Básico</h3>
          <ButtonCustom
            color="#fff"
            navTo="/cursos/setup-regulagem-guitarra-basico"
          >
            Saiba Mais
          </ButtonCustom>
          <div className="card-slider__overlay" />
          <img
            src={PaulaBifulco}
            alt="Paula Bifulco Curso de Regulagem Básica de Guitarras e Contrabaixos"
          />
        </div>
        <div className="card-slider__card">
          <h3>Setup Avançado</h3>
          <ButtonCustom
            color="#fff"
            navTo="/cursos/setup-regulagem-guitarra-avancado"
          >
            Saiba Mais
          </ButtonCustom>
          <div className="card-slider__overlay" />
          <img
            src={PaulaBifulco}
            alt="Paula Bifulco Curso de Regulagem Básica de Guitarras e Contrabaixos"
          />
        </div>
        <div className="card-slider__card">
          <h3>Construção I</h3>
          <ButtonCustom
            color="#fff"
            navTo="/cursos/construcao-de-guitarra-braco-parafusado"
          >
            Saiba Mais
          </ButtonCustom>
          <div className="card-slider__overlay" />
          <img
            src={PaulaBifulco}
            alt="Paula Bifulco Curso de Regulagem Básica de Guitarras e Contrabaixos"
          />
        </div>
        <div className="card-slider__card">
          <h3>Construcao II</h3>
          <ButtonCustom
            color="#fff"
            navTo="/cursos/construcao-de-guitarra-braco-colado"
          >
            Saiba Mais
          </ButtonCustom>
          <div className="card-slider__overlay" />
          <img
            src={PaulaBifulco}
            alt="Paula Bifulco Curso de Regulagem Básica de Guitarras e Contrabaixos"
          />
        </div>
        <div className="card-slider__card">
          <h3>Curso Livre</h3>
          <ButtonCustom color="#fff" navTo="/cursos/curso-livre-de-luthieria">
            Saiba Mais
          </ButtonCustom>
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
